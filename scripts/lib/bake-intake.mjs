import { readFile, rename, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { parse } from "yaml";

export class IntakeError extends Error {}

function requireObject(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new IntakeError(`${label} must be an object.`);
  }
  return value;
}

function requireString(value, label) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new IntakeError(`${label} must be a non-empty string.`);
  }
  return value;
}

function resolveProjectPath(projectRoot, configuredPath, label) {
  const resolved = path.resolve(projectRoot, requireString(configuredPath, label));
  const relative = path.relative(projectRoot, resolved);

  if (relative === "" || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    throw new IntakeError(`${label} must resolve inside the project: ${configuredPath}`);
  }

  return resolved;
}

async function readYaml(file, label) {
  let source;
  try {
    source = await readFile(file, "utf8");
  } catch (error) {
    throw new IntakeError(`Cannot read ${label}: ${file} (${error.message})`);
  }

  try {
    return requireObject(parse(source), label);
  } catch (error) {
    if (error instanceof IntakeError) throw error;
    throw new IntakeError(`Cannot parse ${label}: ${file} (${error.message})`);
  }
}

async function readJson(file, label) {
  let source;
  try {
    source = await readFile(file, "utf8");
  } catch (error) {
    throw new IntakeError(`Cannot read ${label}: ${file} (${error.message})`);
  }

  try {
    return requireObject(JSON.parse(source), label);
  } catch (error) {
    if (error instanceof IntakeError) throw error;
    throw new IntakeError(`Cannot parse ${label}: ${file} (${error.message})`);
  }
}

async function requireFile(file, label) {
  try {
    const facts = await stat(file);
    if (!facts.isFile()) throw new Error("not a regular file");
  } catch (error) {
    throw new IntakeError(`${label} does not exist: ${file} (${error.message})`);
  }
}

export async function buildIntake({ projectRoot, bakeDirectory }) {
  const root = path.resolve(projectRoot);
  const bakeDir = resolveProjectPath(root, bakeDirectory, "Bake directory");
  const photosPath = path.join(bakeDir, "photos.yml");
  const photos = await readYaml(photosPath, "photos.yml");

  if (photos.schema_version !== 1) {
    throw new IntakeError(`Unsupported photos.yml schema_version: ${photos.schema_version}`);
  }
  requireString(photos.bake, "photos.yml bake");
  const sourceDirectory = resolveProjectPath(root, photos.source_directory, "source_directory");
  const renameManifestPath = resolveProjectPath(root, photos.rename_manifest, "rename_manifest");
  const renameManifest = await readJson(renameManifestPath, "Abbey rename manifest");

  if (renameManifest.schema_version !== 1) {
    throw new IntakeError(
      `Unsupported Abbey rename manifest schema_version: ${renameManifest.schema_version}`,
    );
  }
  if (!Array.isArray(renameManifest.items)) {
    throw new IntakeError("Abbey rename manifest items must be an array.");
  }
  if (!Array.isArray(photos.photos) || photos.photos.length === 0) {
    throw new IntakeError("photos.yml photos must be a non-empty array.");
  }

  const renameItems = new Map();
  for (const [index, rawItem] of renameManifest.items.entries()) {
    const item = requireObject(rawItem, `Abbey rename manifest item ${index + 1}`);
    const publishedImage = requireString(
      item.published_image,
      `Abbey rename manifest item ${index + 1} published_image`,
    );
    if (renameItems.has(publishedImage)) {
      throw new IntakeError(`Duplicate prepared image in Abbey rename manifest: ${publishedImage}`);
    }
    renameItems.set(publishedImage, item);
  }

  const photoIds = new Set();
  const preparedImages = new Set();
  const items = [];

  for (const [index, rawPhoto] of photos.photos.entries()) {
    const photo = requireObject(rawPhoto, `photos.yml photo ${index + 1}`);
    const id = requireString(photo.id, `photos.yml photo ${index + 1} id`);
    const preparedImage = requireString(
      photo.prepared_image,
      `photos.yml photo ${index + 1} prepared_image`,
    );
    const caption = requireString(photo.caption, `photos.yml photo ${index + 1} caption`);

    if (photoIds.has(id)) throw new IntakeError(`Duplicate photo id: ${id}`);
    if (preparedImages.has(preparedImage)) {
      throw new IntakeError(`Duplicate selected prepared image: ${preparedImage}`);
    }
    photoIds.add(id);
    preparedImages.add(preparedImage);

    if (path.basename(preparedImage) !== preparedImage) {
      throw new IntakeError(`prepared_image must be a filename, not a path: ${preparedImage}`);
    }

    const renameItem = renameItems.get(preparedImage);
    if (!renameItem) {
      throw new IntakeError(`No Abbey rename mapping for selected image: ${preparedImage}`);
    }

    await requireFile(path.join(sourceDirectory, preparedImage), "Selected prepared image");

    items.push({
      caption,
      capture_date: requireString(renameItem.capture_date, `capture_date for ${preparedImage}`),
      original_image: requireString(renameItem.original_image, `original_image for ${preparedImage}`),
      published_image: preparedImage,
    });
  }

  return {
    outputPath: path.join(bakeDir, "media-intake.json"),
    manifest: { schema_version: 1, items },
    photosPath,
    renameManifestPath,
  };
}

export function serializeIntake(manifest) {
  return `${JSON.stringify(manifest, null, 2)}\n`;
}

export async function checkIntake(options) {
  const built = await buildIntake(options);
  const expected = serializeIntake(built.manifest);
  let current;

  try {
    current = await readFile(built.outputPath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return { ...built, current: null, expected, fresh: false };
    }
    throw new IntakeError(`Cannot read intake manifest: ${built.outputPath} (${error.message})`);
  }

  return { ...built, current, expected, fresh: current === expected };
}

export async function generateIntake(options) {
  const checked = await checkIntake(options);
  if (checked.fresh) return { ...checked, changed: false };

  const temporaryPath = `${checked.outputPath}.tmp-${process.pid}`;
  try {
    await writeFile(temporaryPath, checked.expected, { encoding: "utf8", flag: "wx" });
    await rename(temporaryPath, checked.outputPath);
  } catch (error) {
    try {
      await unlink(temporaryPath);
    } catch {}
    throw new IntakeError(`Cannot write intake manifest: ${checked.outputPath} (${error.message})`);
  }

  return { ...checked, changed: true };
}
