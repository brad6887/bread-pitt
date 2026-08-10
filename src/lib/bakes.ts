import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { parse } from "yaml";
import { recipes } from "../data/recipes";
import { formatBakeDateRange } from "./format";

const projectRoot = process.cwd();
const bakesRoot = path.join(projectRoot, "content", "bakes");

interface PublicationItem {
  prepared_image: string;
  derivative?: { path?: string };
}

interface PublicationManifest {
  items?: PublicationItem[];
}

export interface BakePhoto {
  id: string;
  prepared_image: string;
  caption: string;
  group?: string;
  position?: string;
  src: string;
}

export interface BakeGallery {
  id: string;
  layout: "comparison" | "grid";
  photos: BakePhoto[];
}

export interface LoadedBake {
  id: string;
  title: string;
  tagline: string;
  started: string;
  completed: string;
  dateRange: string;
  route: string;
  rating?: string;
  temperature?: string;
  summary?: string;
  recipe: { slug: string; title: string; path: string };
  starter: { name: string; path: string };
  hero: BakePhoto;
  story: string;
  photos: BakePhoto[];
  photoMap: Map<string, BakePhoto>;
  galleryMap: Map<string, BakeGallery>;
  previous?: BakeLink;
  next?: BakeLink;
}

export interface BakeLink {
  id: string;
  title: string;
  route: string;
}

function fail(id: string, message: string): never {
  throw new Error(`Bake ${id} ${message}`);
}

function requiredObject(value: unknown, id: string, field: string): Record<string, any> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    fail(id, `missing ${field}`);
  }
  return value as Record<string, any>;
}

function requiredString(value: unknown, id: string, field: string): string {
  if (typeof value !== "string" || !value.trim()) {
    fail(id, `missing ${field}`);
  }
  return value.trim();
}

function normalizedRoute(value: unknown, id: string): string {
  const route = requiredString(value, id, "publication.route");
  if (!route.startsWith("/bakes/") || route === "/bakes/") {
    fail(id, `has invalid publication.route "${route}"`);
  }
  return `/${route.replace(/^\/+|\/+$/g, "")}/`;
}

async function readYaml(file: string): Promise<any> {
  return parse(await readFile(file, "utf8"));
}

async function readJson(file: string): Promise<PublicationManifest> {
  return JSON.parse(await readFile(file, "utf8"));
}

async function fileExists(file: string): Promise<boolean> {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

function storyReferences(story: string, directive: "photo" | "gallery") {
  return [...story.matchAll(new RegExp(`\\{\\{\\s*${directive}:\\s*([^}]+?)\\s*\\}\\}`, "g"))]
    .map((match) => match[1].trim());
}

export async function findBakeIds(): Promise<string[]> {
  const years = (await readdir(bakesRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && /^\d{4}$/.test(entry.name));
  const ids: string[] = [];

  for (const year of years) {
    const entries = await readdir(path.join(bakesRoot, year.name), { withFileTypes: true });
    ids.push(...entries.filter((entry) => entry.isDirectory() && !entry.name.startsWith("_")).map((entry) => entry.name));
  }

  return ids.sort();
}

export async function loadBake(id: string): Promise<LoadedBake> {
  const bakeId = requiredString(id, id || "unknown", "id");
  const ids = await findBakeIds();
  const year = (await Promise.all(ids.map(async (candidate) => {
    for (const entry of await readdir(bakesRoot, { withFileTypes: true })) {
      if (entry.isDirectory() && /^\d{4}$/.test(entry.name) && candidate === bakeId && await fileExists(path.join(bakesRoot, entry.name, candidate, "bake.yml"))) return entry.name;
    }
  }))).find(Boolean);
  if (!year) fail(bakeId, "does not exist");

  const directory = path.join(bakesRoot, year, bakeId);
  const [raw, photosYaml, publication, story] = await Promise.all([
    readYaml(path.join(directory, "bake.yml")),
    readYaml(path.join(directory, "photos.yml")),
    readJson(path.join(directory, "media-publication.json")),
    readFile(path.join(directory, "story.md"), "utf8"),
  ]);

  const bake = requiredObject(raw?.bake, bakeId, "bake");
  const relationships = requiredObject(raw?.relationships, bakeId, "relationships");
  const recipeRelationship = requiredObject(relationships.recipe, bakeId, "relationships.recipe");
  const starterRelationship = requiredObject(relationships.starter, bakeId, "relationships.starter");
  const media = requiredObject(raw?.media, bakeId, "media");
  const publicationConfig = requiredObject(raw?.publication, bakeId, "publication");

  const canonicalId = requiredString(bake.id, bakeId, "bake.id");
  if (canonicalId !== bakeId) fail(bakeId, `has bake.id "${canonicalId}"`);
  const title = requiredString(bake.title, bakeId, "bake.title");
  const tagline = requiredString(bake.tagline, bakeId, "bake.tagline");
  const started = requiredString(bake.started, bakeId, "bake.started");
  const completed = requiredString(bake.completed, bakeId, "bake.completed");
  const route = normalizedRoute(publicationConfig.route, bakeId);
  const recipeSlug = requiredString(recipeRelationship.slug, bakeId, "relationships.recipe.slug");
  const starterName = requiredString(starterRelationship.name, bakeId, "relationships.starter.name");
  const starterPath = requiredString(starterRelationship.path, bakeId, "relationships.starter.path");
  const heroId = requiredString(media.hero, bakeId, "media.hero");

  const recipe = recipes.find((item) => item.slug === recipeSlug);
  if (!recipe) fail(bakeId, `references unknown recipe "${recipeSlug}"`);

  if (!Array.isArray(photosYaml?.photos)) fail(bakeId, "missing photos");
  if (!Array.isArray(publication.items)) fail(bakeId, "missing publication items");

  const publicationByImage = new Map<string, string>();
  for (const item of publication.items) {
    const prepared = requiredString(item.prepared_image, bakeId, "publication item prepared_image");
    const derivative = requiredString(item.derivative?.path, bakeId, `publication derivative for ${prepared}`);
    if (publicationByImage.has(prepared)) fail(bakeId, `has duplicate publication item "${prepared}"`);
    const publicPath = derivative.replace(/^public\//, "");
    if (!(await fileExists(path.join(projectRoot, "public", publicPath.replace(/^images\//, "images/"))))) {
      fail(bakeId, `publication derivative does not exist: ${derivative}`);
    }
    publicationByImage.set(prepared, `/${publicPath}`);
  }

  const photoIds = new Set<string>();
  const preparedImages = new Set<string>();
  const photos: BakePhoto[] = photosYaml.photos.map((value: unknown, index: number) => {
    const photo = requiredObject(value, bakeId, `photos[${index}]`);
    const photoId = requiredString(photo.id, bakeId, `photos[${index}].id`);
    const preparedImage = requiredString(photo.prepared_image, bakeId, `photo ${photoId} prepared_image`);
    const caption = requiredString(photo.caption, bakeId, `photo ${photoId} caption`);
    if (photoIds.has(photoId)) fail(bakeId, `has duplicate photo id "${photoId}"`);
    if (preparedImages.has(preparedImage)) fail(bakeId, `has duplicate prepared image "${preparedImage}"`);
    photoIds.add(photoId);
    preparedImages.add(preparedImage);
    const src = publicationByImage.get(preparedImage);
    if (!src) fail(bakeId, `photo ${photoId} has no published derivative for "${preparedImage}"`);
    return { id: photoId, prepared_image: preparedImage, caption, group: photo.group, position: photo.position, src };
  });

  const photoMap = new Map(photos.map((photo) => [photo.id, photo]));
  const hero = photoMap.get(heroId);
  if (!hero) fail(bakeId, `media.hero references unknown photo "${heroId}"`);

  const frontMatter = story.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!frontMatter) fail(bakeId, "story is missing front matter");
  const storyMetadata = parse(frontMatter[1]);
  if (storyMetadata?.bake !== bakeId) fail(bakeId, `story front matter must declare bake: ${bakeId}`);

  for (const photoId of storyReferences(story, "photo")) {
    if (!photoMap.has(photoId)) fail(bakeId, `story references unknown photo "${photoId}"`);
  }
  if (/\{\{\s*photo-pair:/.test(story)) fail(bakeId, "story uses retired photo-pair directive; use gallery");

  const galleryConfig = photosYaml.galleries ?? {};
  const galleryMap = new Map<string, BakeGallery>();
  for (const galleryId of storyReferences(story, "gallery")) {
    const galleryPhotos = photos.filter((photo) => photo.group === galleryId);
    if (!galleryPhotos.length) fail(bakeId, `story references unknown gallery "${galleryId}"`);
    const layout = galleryConfig[galleryId]?.layout ?? "grid";
    if (layout !== "comparison" && layout !== "grid") fail(bakeId, `gallery ${galleryId} has invalid layout "${layout}"`);
    if (layout === "comparison" && galleryPhotos.length !== 2) fail(bakeId, `gallery ${galleryId} comparison layout requires 2 photos`);
    galleryPhotos.sort((a, b) => ({ before: 0, after: 1 }[a.position ?? ""] ?? 99) - ({ before: 0, after: 1 }[b.position ?? ""] ?? 99));
    galleryMap.set(galleryId, { id: galleryId, layout, photos: galleryPhotos });
  }

  return {
    id: bakeId, title, tagline, started, completed, route,
    dateRange: formatBakeDateRange(started, completed),
    rating: bake.rating ? `${bake.rating}/${bake.rating_scale} thumbs up` : undefined,
    temperature: raw.result?.internal_temperature_f ? `${raw.result.internal_temperature_f}°F` : undefined,
    summary: raw.result?.summary?.trim(),
    recipe: { slug: recipe.slug, title: recipe.title, path: `/recipes/${recipe.slug}/` },
    starter: { name: starterName, path: starterPath },
    hero, story, photos, photoMap, galleryMap,
  };
}

export async function loadBakes(): Promise<LoadedBake[]> {
  const bakes = await Promise.all((await findBakeIds()).map(loadBake));
  const ids = new Set<string>();
  const routes = new Set<string>();
  for (const bake of bakes) {
    if (ids.has(bake.id)) fail(bake.id, "has a duplicate id");
    if (routes.has(bake.route)) fail(bake.id, `has duplicate route "${bake.route}"`);
    ids.add(bake.id);
    routes.add(bake.route);
  }
  bakes.sort((a, b) => a.started.localeCompare(b.started) || a.id.localeCompare(b.id));
  return bakes.map((bake, index) => ({
    ...bake,
    previous: index > 0 ? { id: bakes[index - 1].id, title: bakes[index - 1].title, route: bakes[index - 1].route } : undefined,
    next: index < bakes.length - 1 ? { id: bakes[index + 1].id, title: bakes[index + 1].title, route: bakes[index + 1].route } : undefined,
  }));
}

export async function getBakesForRecipe(recipeSlug: string): Promise<LoadedBake[]> {
  return (await loadBakes()).filter((bake) => bake.recipe.slug === recipeSlug);
}
