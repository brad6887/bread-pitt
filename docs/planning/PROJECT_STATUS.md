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
- Bake media intake manifests are generated deterministically from canonical
  `photos.yml` selection and Abbey rename provenance; project validation
  detects stale intake before building the site.

## Current Session

### Completed

Defined the canonical Bake Model and replaced manual Bake001 intake maintenance
with deterministic, freshness-checkable generation from `photos.yml` and the
Abbey rename manifest. The existing media publication contract and all 24
validated Bake001 derivatives remain unchanged.

## Suggested Next Step

Render Bake001 from canonical bake content through shared Astro code, then use
the same renderer as the page foundation for Bake002.
