---
title: "Abbey Site Validation Adoption"
description: "Adopted project-aware Abbey site and media configuration with a read-only required-route validation gate."
date: 2026-08-08
status: complete
reviewed: false
session: abbey-site-validation-adoption
tags:
  - Bread Pitt
  - Abbey
  - Website
  - Validation
---

# Abbey Site Validation Adoption

## Objective

Adopt the project-aware Abbey site-validation contract without coupling Bread
Pitt's Astro site or GitHub Pages deployment to Abbey Root.

## Definition of Done

- Bread Pitt explicitly declares its Astro source and npm build artifact.
- The main routes are required and validated from the generated site artifact.
- Media configuration is project-owned and contains no borrowed toolkit roles
  or workflows.
- Site build and standalone validation pass from the Bread Pitt repository.
- The work is captured in Bread Pitt's project history.

## Summary

Added the smallest safe Abbey adoption for Bread Pitt's current publishing
state. The project now owns its site and media configuration, validates the
Astro output and primary routes, and intentionally declares no publication
manifests until current public derivatives have deterministic provenance.

## Accomplishments

- Retained the current `site.source: .`, npm build method, and `dist` output.
- Added `site.validation.public_root: public`.
- Added `/`, `/recipes/`, and `/starter/` as required generated routes.
- Added project-owned `.abbey/media.yml` with empty rename and publication
  workflow maps.
- Confirmed toolkit defaults remain disabled.
- Confirmed publishing remains owned by the existing GitHub Pages Actions
  workflow; no Abbey deployment target was added.

## Impact

Bread Pitt can now use the reusable Abbey validation boundary without risking
fallback to Abbey Root paths, media roles, or `bradcooke.com`. Future media
workflows can add deterministic manifests incrementally when real source images
are available.

## Validation

- `abbey project show`: passed; Bread Pitt resolved as the active project and
  toolkit defaults were disabled.
- `abbey site build`: passed for the Astro artifact.
- `abbey site validate`: passed with zero manifests and three required routes.
- `git diff --check`: passed.

## Lessons Learned

- Empty manifest configuration is the honest contract before media publication
  exists; creating placeholder provenance would weaken validation.
- Abbey's site validator can complement an independent deployment workflow
  without owning or changing that workflow.

## Next Steps

- Add a named media preparation and publication workflow only when the first
  real Bread Pitt image batch is ready.
- Add the resulting deterministic manifest to `site.validation.media_manifests`.
- Keep GitHub Pages deployment independent from Abbey's validation command.

## Notes

No images were generated, no site content changed, and no deployment or DNS
configuration was modified.
