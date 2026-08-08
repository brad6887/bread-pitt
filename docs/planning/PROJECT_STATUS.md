# Bread Pitt Project Status

Last Updated: 2026-08-08

## Project Snapshot

Track Bread Pitt's starter history, recipes, bakes, observations, and lessons learned.

## Durable Capabilities

- The Bread Pitt repository has separate foundations for canonical content,
  media, and preserved source material.
- The recovered recipe master is retained at
  `sources/Bread_Pitt_Recovered_Recipe_Master_v2.docx` as the initial source
  document while individual canonical recipe records are developed.
- Canonical starter profiles and feeding-cycle records exist. Each feeding-cycle
  record keeps feed details, observations, outcomes, assessments, and media
  references together as one source of truth.
- Bread Pitt is publicly available at `https://breadpitt.net` through GitHub
  Pages.
- Changes to the standalone static site on `main` are deployed through GitHub
  Actions.
- The custom domain and alternate `www` hostname resolve through GitHub Pages,
  and HTTPS is enforced.
- The website is an Astro static site with a shared layout, global Umami
  analytics, a complete recipe index, and individual pages for all 13 recovered
  recipes.
- The starter story is published with optimized public images and is linked
  from the site navigation.
- Project-owned Abbey configuration validates the Astro output and requires the
  `/`, `/recipes/`, and `/starter/` routes while media manifests fail closed
  until a deterministic publication workflow is configured.

## Current Session

### Completed

Adopted Abbey's project-aware site validation contract for the current Astro
artifact without changing Bread Pitt's GitHub Pages deployment model. Toolkit
defaults remain disabled, the main generated routes are required, and no
placeholder media provenance or Abbey deployment target was introduced.

## Suggested Next Step

Add structured starter timeline records to the site, then define and validate
the first complete bake record using the July 29 sourdough bake.
