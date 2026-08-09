import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { checkIntake, generateIntake, IntakeError } from "../scripts/lib/bake-intake.mjs";

async function fixture({ photos = null, renameItems = null, createImages = true } = {}) {
  const root = await mkdtemp(path.join(os.tmpdir(), "bread-pitt-intake-"));
  const bakeDirectory = "content/bakes/2026/bake002";
  const bakePath = path.join(root, bakeDirectory);
  const sourcePath = path.join(root, "working/media/bakes/2026/bake002");
  await mkdir(bakePath, { recursive: true });
  await mkdir(sourcePath, { recursive: true });

  const selected = photos ?? [
    { id: "mix", prepared_image: "bake002-mix-2026-08-08.jpg", caption: "Mixing." },
    { id: "final", prepared_image: "bake002-final-2026-08-09.jpg", caption: "Finished loaf." },
  ];
  const mappings = renameItems ?? [
    {
      original_image: "IMG_1000.JPG",
      published_image: "bake002-mix-2026-08-08.jpg",
      capture_date: "2026-08-08",
    },
    {
      original_image: "IMG_1001.JPG",
      published_image: "bake002-final-2026-08-09.jpg",
      capture_date: "2026-08-09",
    },
  ];

  const photoYaml = [
    "schema_version: 1",
    "bake: bake002",
    "source_directory: working/media/bakes/2026/bake002",
    "rename_manifest: working/media/bakes/2026/bake002/.abbey-rename-manifest.json",
    "photos:",
    ...selected.flatMap((photo) => [
      `  - id: ${photo.id}`,
      `    prepared_image: ${photo.prepared_image}`,
      `    caption: ${JSON.stringify(photo.caption)}`,
    ]),
    "",
  ].join("\n");

  await writeFile(path.join(bakePath, "photos.yml"), photoYaml);
  await writeFile(
    path.join(sourcePath, ".abbey-rename-manifest.json"),
    `${JSON.stringify({ schema_version: 1, items: mappings }, null, 2)}\n`,
  );
  if (createImages) {
    for (const photo of selected) await writeFile(path.join(sourcePath, photo.prepared_image), "image");
  }

  return { root, bakeDirectory, bakePath, sourcePath };
}

test("generates the Abbey intake contract in photos.yml order", async () => {
  const data = await fixture();
  const result = await generateIntake({ projectRoot: data.root, bakeDirectory: data.bakeDirectory });
  assert.equal(result.changed, true);
  assert.deepEqual(JSON.parse(await readFile(result.outputPath, "utf8")), {
    schema_version: 1,
    items: [
      {
        caption: "Mixing.",
        capture_date: "2026-08-08",
        original_image: "IMG_1000.JPG",
        published_image: "bake002-mix-2026-08-08.jpg",
      },
      {
        caption: "Finished loaf.",
        capture_date: "2026-08-09",
        original_image: "IMG_1001.JPG",
        published_image: "bake002-final-2026-08-09.jpg",
      },
    ],
  });
});

test("leaves a current manifest untouched", async () => {
  const data = await fixture();
  const first = await generateIntake({ projectRoot: data.root, bakeDirectory: data.bakeDirectory });
  const before = await readFile(first.outputPath, "utf8");
  const second = await generateIntake({ projectRoot: data.root, bakeDirectory: data.bakeDirectory });
  assert.equal(second.changed, false);
  assert.equal(await readFile(first.outputPath, "utf8"), before);
});

test("reports a stale manifest when canonical captions change", async () => {
  const data = await fixture();
  await generateIntake({ projectRoot: data.root, bakeDirectory: data.bakeDirectory });
  const photosPath = path.join(data.bakePath, "photos.yml");
  const current = await readFile(photosPath, "utf8");
  await writeFile(photosPath, current.replace("Mixing.", "Mixing changed."));
  const result = await checkIntake({ projectRoot: data.root, bakeDirectory: data.bakeDirectory });
  assert.equal(result.fresh, false);
});

test("rejects duplicate photo identifiers", async () => {
  const data = await fixture({
    photos: [
      { id: "same", prepared_image: "bake002-mix-2026-08-08.jpg", caption: "Mixing." },
      { id: "same", prepared_image: "bake002-final-2026-08-09.jpg", caption: "Finished loaf." },
    ],
  });
  await assert.rejects(
    generateIntake({ projectRoot: data.root, bakeDirectory: data.bakeDirectory }),
    (error) => error instanceof IntakeError && error.message === "Duplicate photo id: same",
  );
});

test("rejects a selected image without a rename mapping", async () => {
  const data = await fixture({ renameItems: [] });
  await assert.rejects(
    generateIntake({ projectRoot: data.root, bakeDirectory: data.bakeDirectory }),
    (error) => error instanceof IntakeError && error.message.includes("No Abbey rename mapping"),
  );
});

test("rejects a missing prepared source image", async () => {
  const data = await fixture({ createImages: false });
  await assert.rejects(
    generateIntake({ projectRoot: data.root, bakeDirectory: data.bakeDirectory }),
    (error) => error instanceof IntakeError && error.message.includes("Selected prepared image does not exist"),
  );
});

test("rejects paths outside the project", async () => {
  const data = await fixture();
  const photosPath = path.join(data.bakePath, "photos.yml");
  const current = await readFile(photosPath, "utf8");
  await writeFile(
    photosPath,
    current.replace(
      "source_directory: working/media/bakes/2026/bake002",
      "source_directory: ../../../../outside",
    ),
  );
  await assert.rejects(
    generateIntake({ projectRoot: data.root, bakeDirectory: data.bakeDirectory }),
    (error) => error instanceof IntakeError && error.message.includes("must resolve inside the project"),
  );
});
