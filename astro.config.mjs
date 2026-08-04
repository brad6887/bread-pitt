import { defineConfig } from "astro/config";

export default defineConfig({
  outDir: "./site",
  publicDir: "./public",
  build: {
    format: "directory",
  },
});
