# Bread Pitt Project Status

Last Updated: 2026-08-12

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
- Shared Umami analytics accepts only `breadpitt.net` and `www.breadpitt.net`,
  excluding internal staging traffic from production analytics.
- The starter story is published with optimized public images and is linked
  from the site navigation.
- Bake001 is published with structured bake metadata, 24 validated optimized
  images, and cross-links to its recipe and the Bread Pitt starter story.
- Project-owned Abbey configuration validates the Astro output and requires the
  configured site routes. Registered Bake001 and starter-cycle publication
  manifests fail closed on missing or changed sources, derivatives,
  fingerprints, dimensions, transformations, or privacy results.
- Bake media intake manifests are generated deterministically from canonical
  `photos.yml` selection and Abbey rename provenance; project validation
  detects stale intake before building the site.
- The canonical bake renderer generates bake pages, the bake index, recipe
  relationships, and recipe-index photography from shared records; it enforces
  bake-specific metadata, relationship, route, gallery, and published-media
  validation, supports configurable captioned galleries and previous/next
  navigation, and includes a reusable Bake002 content scaffold.

## Current Session

### Completed

Completed the canonical bake-system migration. Bake001 now renders through
shared Astro code from canonical records, with generated index and recipe
relationships, hardened publication validation, configurable galleries,
navigation, and a reusable Bake002 scaffold.

## Suggested Next Step

Copy the reusable scaffold when real Bake002 metadata and media are ready,
then run intake and publication, write the story with stable directives, build,
resolve content validation failures, and publish.
