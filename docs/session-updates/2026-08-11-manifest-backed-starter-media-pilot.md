---
title: "Manifest-Backed Starter Media Pilot"
description: "Configured and validated Bread Pitt's first manifest-backed media publication workflow with two starter-cycle photographs."
date: 2026-08-11
status: complete
reviewed: true
session: manifest-backed-starter-media-pilot
tags:
  - Bread Pitt
  - Media
---

# Manifest-Backed Starter Media Pilot

## Objective

Configure one named Bread Pitt media workflow, publish a bounded starter-image
batch through the shared Abbey pipeline, and make its deterministic provenance
manifest part of site validation.

## Definition of Done

- Bread Pitt owns explicit preparation and publication configuration.
- One two-image starter batch has a deterministic intake manifest.
- Abbey produces privacy-safe public derivatives without changing the sources.
- A deterministic publication manifest records fingerprints and validation.
- Site validation requires and verifies that manifest.
- An unchanged rerun is idempotent.
- The Astro site builds and the bounded backlog item is complete.

## Summary

Added the `starter_cycle_pilot` publication workflow for the July 27 and July
28 starter photographs. Two prepared sources now produce sanitized,
2000-pixel-edge JPEG derivatives and a deterministic manifest that Abbey site
validation treats as a publication gate.

## Accomplishments

- Added project-owned rename and named publication configuration.
- Created a two-item intake manifest with stable filenames, captions, capture
  dates, and original-image identities.
- Preserved the canonical originals and verified their hashes against the
  prepared copies.
- Generated two privacy-safe public derivatives transactionally.
- Recorded source and derivative fingerprints, dimensions, transformation
  policy, privacy results, and tool versions in the publication manifest.
- Registered the manifest in `.abbey/project.yml`.
- Completed and refreshed the rewritten backlog item.

## Impact

Bread Pitt now has a real reusable media contract rather than empty placeholder
configuration. Future image batches can follow a proven intake, derivative,
manifest, and site-validation path without inheriting Abbey Root defaults.

## Validation

- `abbey media publish starter_cycle_pilot --dry-run` passed.
- Real publication generated two 1500×2000 JPEG derivatives.
- ExifTool inspection found no private EXIF, GPS, device, or date metadata.
- An unchanged publication rerun reported both derivatives current and changed
  no files.
- `abbey site validate` passed with one manifest, two derivatives, and three
  required routes.
- `pnpm run build` completed 16 pages with zero Astro diagnostics.
- `abbey backlog check` passed.
- `git diff --check` passed.
- `abbey validate` passed repository checks but reported pre-existing
  `NEXT.md` schema drift unrelated to this media session.

## Lessons Learned

Registering an absent publication manifest would make an otherwise healthy site
fail closed, so the manifest was added to site validation only after successful
transactional publication.

The macOS media dependencies are separate from project configuration. Once
ExifTool and ImageMagick were available, the same shared Abbey workflow ran
without Bread Pitt-specific implementation code.

## Next Steps

- Associate the imported July 27 and July 28 photographs with their canonical
  starter-cycle records in a separate focused session.

## Notes

The event-driven journal policy did not create a journal entry. The existing
manually published starter-story images were not replaced, and no deployment,
commit, or push was performed.
