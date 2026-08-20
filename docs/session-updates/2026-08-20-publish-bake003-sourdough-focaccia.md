---
title: "Publish Bake003 Sourdough Focaccia"
description: "Published the Bake003 focaccia story through Bread Pitt's canonical bake and media workflow."
date: 2026-08-20
status: complete
reviewed: false
session: publish-bake003-sourdough-focaccia
tags:
  - Bread Pitt
  - Bake003
---

# Publish Bake003 Sourdough Focaccia

## Objective

Publish the Bake003 sourdough focaccia narrative and photos through Bread Pitt's established canonical bake workflow without changing unrelated projects.

## Definition of Done

- The complete Bake003 narrative is represented in canonical bake content.
- The matching photo set is imported from `ubuntu-dev01` with original JPG/XMP pairs preserved.
- Editorial photo selection, captions, galleries, and hero placement are defined through stable photo IDs.
- Deterministic intake and publication manifests are generated and current.
- Privacy-safe public derivatives are produced for every selected photo.
- The Astro production build, Abbey site validation, and rendered page review pass.
- The GitHub Pages publication path is ready for the normal `main` branch deployment workflow.

## Summary

Added Bake003 as a complete canonical bake record for the August 12 sourdough focaccia. The supplied narrative now renders through the shared bake page with the existing focaccia recipe relationship, Bread Pitt starter relationship, 9/10 rating, 212°F finished temperature, and 23 selected photos covering the full process from starter feeding through the finished crumb.

## Accomplishments

- Located the Bake003 source set in `/home/bcooke/incoming/photos` on `ubuntu-dev01`.
- Imported 23 original JPG/XMP pairs into `media/bakes/2026/bake003`.
- Added `bake.yml`, `photos.yml`, and `story.md` under the canonical Bake003 content directory.
- Registered the `bake003` media publication workflow with explicit JPG, 2000-pixel, and quality-85 settings.
- Generated the deterministic media intake manifest.
- Published 23 privacy-checked public derivatives and the publication manifest.
- Confirmed the new bake page, bake index entry, recipe relationship, rating, galleries, captions, and previous-bake navigation in the rendered production artifact.

## Impact

Bread Pitt now has a third complete bake record using the same reusable content loader, renderer, recipe relationship, and manifest-backed media system established by Bake001 and Bake002. No hand-written Astro route or bake-specific rendering code was required.

## Validation

- `bake-intake.mjs check content/bakes/2026/bake003` reported the intake manifest current.
- `abbey media publish bake003 --dry-run` validated all 23 derivatives before publication.
- `abbey media publish bake003` published all 23 derivatives and wrote the publication manifest.
- `astro check` completed with 0 errors, 0 warnings, and 0 hints.
- `astro build` generated 21 pages, including `/bakes/bake003/`.
- `abbey site validate` passed the configured site artifact checks.
- `git diff --check` passed.
- Browser review confirmed all 24 rendered image instances loaded at 1500×2000, the complete narrative and metadata rendered, and no console warnings or errors were present.

## Lessons Learned

The current media publisher requires explicit output format, maximum edge, and quality settings for a new workflow. Carrying forward Bake001's explicit settings made the Bake003 publication reproducible and kept the dry run fail-closed.

The remote photo directory contains unrelated material and macOS resource-fork files, so selecting the Bake003 set by capture date and XMP description before copying avoided broad intake and preserved project boundaries.

## Next Steps

- Commit the validated Bake003 package and push `main` to trigger the existing GitHub Pages deployment.
- Verify `https://breadpitt.net/bakes/bake003/` after the Pages workflow completes.

## Notes

The original XMP descriptions include a few spelling errors that carry into generated derivative filenames. Public-facing captions are corrected in `photos.yml`; original source metadata remains preserved.
