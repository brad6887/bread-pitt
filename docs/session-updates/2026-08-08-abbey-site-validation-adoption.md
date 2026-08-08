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
Pitt's independent static site or GitHub Pages deployment to Abbey Root.

## Definition of Done

- Bread Pitt explicitly declares its static site source and build method.
- The root route is required and validated from the generated site artifact.
- Media configuration is project-owned and contains no borrowed toolkit roles
  or workflows.
- Site build and standalone validation pass from the Bread Pitt repository.
- The work is captured in Bread Pitt's project history.

## Summary

Added the smallest safe Abbey adoption for Bread Pitt's current publishing
state. The project now owns its site and media configuration, validates the
existing `/` route, and intentionally declares no publication manifests until
real media derivatives are generated.

## Accomplishments

- Added explicit `site.source: site` and a direct `static` build method.
- Added `site.validation.public_root: site`.
- Added `/` as the first required generated route.
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
- `abbey site build`: passed for the direct static artifact.
- `abbey site validate`: passed with zero manifests and the required `/` route.
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
- Continue the existing GitHub Pages and domain rollout independently.

## Notes

No images were generated, no site content changed, and no deployment or DNS
configuration was modified.
