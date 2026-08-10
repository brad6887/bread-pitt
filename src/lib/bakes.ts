import { readFile } from "node:fs/promises";
import path from "node:path";
import { parse } from "yaml";
import { recipes } from "../data/recipes";
import { formatBakeDateRange } from "./format";

const projectRoot = process.cwd();

interface PublicationItem {
  prepared_image: string;
  derivative: {
    path: string;
  };
}

interface PublicationManifest {
  items: PublicationItem[];
}

interface BakePhoto {
  id: string;
  prepared_image: string;
  caption: string;
  group?: string;
  position?: string;
  src?: string;
}

interface LoadedBake {
  id: string;
  title: string;
  tagline: string;
  dateRange: string;
  rating?: string;
  temperature?: string;

  recipe?: {
    title: string;
    path: string;
  };

  starter?: {
    name: string;
    path: string;
  };

  hero?: BakePhoto;

  story: string;

  photos: BakePhoto[];

  photoMap: Map<string, BakePhoto>;
}

function contentPath(...parts: string[]) {
  return path.join(projectRoot, "content", ...parts);
}

async function readYaml(file: string): Promise<any> {
  return parse(await readFile(file, "utf8"));
}

async function readJson(file: string): Promise<PublicationManifest> {
  return JSON.parse(await readFile(file, "utf8"));
}

function findRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export async function loadBake(id: string): Promise<LoadedBake> {
  const directory = contentPath("bakes", "2026", id);

  const bake = await readYaml(path.join(directory, "bake.yml"));
  const photosYaml = await readYaml(path.join(directory, "photos.yml"));
  const publication = await readJson(
    path.join(directory, "media-publication.json"),
  );
  const story = await readFile(path.join(directory, "story.md"), "utf8");

  const publicationByImage = new Map(
    publication.items.map((item) => [
      item.prepared_image,
      `/${item.derivative.path.replace(/^public\//, "")}`,
    ]),
  );

  const photoIds = new Set<string>();

  for (const photo of photosYaml.photos as BakePhoto[]) {
    if (photoIds.has(photo.id)) {
      throw new Error(
        `Duplicate photo id "${photo.id}" in ${directory}/photos.yml`,
      );
    }

    photoIds.add(photo.id);
  }

  const photos: BakePhoto[] = photosYaml.photos.map((photo: BakePhoto) => ({
    ...photo,
    src: publicationByImage.get(photo.prepared_image),
  }));

  const photoMap = new Map(
    photos.map((photo) => [photo.id, photo]),
  );

  const recipe = findRecipe(
    bake.relationships.recipe.slug,
  );

  return {
    id,

    title: bake.bake.title,

    tagline: bake.bake.tagline,

    dateRange: formatBakeDateRange(
      bake.bake.started,
      bake.bake.completed,
    ),

    rating: bake.bake.rating
      ? `${bake.bake.rating}/${bake.bake.rating_scale} thumbs up`
      : undefined,

    temperature: bake.result.internal_temperature_f
      ? `${bake.result.internal_temperature_f}°F`
      : undefined,

    recipe: recipe
      ? {
          title: recipe.title,
          path: `/recipes/${recipe.slug}/`,
        }
      : undefined,

    starter: bake.relationships.starter,

    hero: photoMap.get(
      bake.media.hero,
    ),

    story,

    photos,

    photoMap,
  };
}
