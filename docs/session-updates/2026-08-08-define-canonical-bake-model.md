---
title: "Define canonical bake model"
description: "Established authoritative content, media, relationship, and generated-artifact boundaries before Bake002."
date: 2026-08-08
status: complete
reviewed: true
session: define-canonical-bake-model
tags:
  - Bread Pitt
  - Publishing
  - Bake Model
  - Bake002
---

# Define canonical bake model

## Objective

Inventory the completed Bake001 workflow and define one authoritative source
for every bake fact before implementing intake generation or shared page
rendering for Bake002.

## Definition of Done

- Inventory canonical, generated, and duplicated Bake001 artifacts.
- Assign ownership for metadata, narrative, photo selection, hero selection,
  recipe relationships, manifests, derivatives, and routes.
- Preserve the established media-pipeline boundaries.
- Define the migration targets exposed by Bake001.
- Update current planning to make Bake002 readiness the active objective.
- Validate that documentation changes do not affect the current site build.

## Summary

Defined the first canonical Bread Pitt Bake Model from the real Bake001
publication workflow. The model keeps `bake.yml`, `story.md`, and `photos.yml`
as readable canonical inputs; derives media intake from editorial selection and
rename provenance; preserves Abbey publication manifests as generated
contracts; and requires future bake pages and backlinks to be derived from
stable identifiers.

## Accomplishments

- Added the canonical bake workspace and source-ownership contract.
- Assigned hero selection exclusively to `bake.yml`.
- Assigned recipe linkage to the recipe slug in `bake.yml`.
- Defined `story.md` as the only authored narrative source.
- Defined `photos.yml` as the owner of editorial photo selection, captions,
  groups, and positions.
- Defined the Abbey rename manifest as the owner of original-to-prepared
  provenance and capture dates.
- Classified both media manifests, public derivatives, and Astro output as
  generated artifacts.
- Recorded Bake001's duplicated hero, title, reciprocal recipe data, narrative
  markup, public paths, intake data, and index entry as migration targets.
- Defined canonical and publication-readiness validation layers.
- Updated `NEXT.md` to make pre-Bake002 publishing readiness the active plan.

## Design Decisions

- No core `abbey bake` command will be introduced before repeated use proves a
  reusable cross-domain contract.
- Bake commands and visual semantics remain Bread Pitt-specific.
- A generated manifest may remain tracked and reviewable without becoming an
  authoring surface.
- Bake pages must resolve public derivatives through publication provenance
  rather than constructing paths independently.
- Recipe backlinks and index presentation should be derived from the canonical
  bake-to-recipe relationship, with explicit image overrides reserved for real
  editorial exceptions.

## Validation

- Astro check completed with zero errors, warnings, or hints.
- Astro static build completed successfully with 18 routes.
- `abbey backlog check` passed.
- `git diff --check` passed.

## Impact

Phase 2 can now implement deterministic `media-intake.json` generation against
an explicit ownership contract. Phase 3 can migrate Bake001 to shared rendering
without deciding content authority inside implementation code.

## Lessons Learned

- Bake001's intake manifest is derived from two upstream contracts rather than
  `photos.yml` alone: editorial selection comes from `photos.yml`, while
  original filenames and capture dates come from the Abbey rename manifest.
- The publication manifest already contains the correct public derivative
  paths and verification facts, so future renderers should consume it instead
  of recreating those paths.
- Hero and recipe relationships need one-way ownership before automatic pages
  and indexes can remain consistent.

## Next Steps

- Implement deterministic intake-manifest generation from `photos.yml` and the
  Abbey rename manifest.
- Add freshness validation and focused failure coverage.
- Confirm the generated Bake001 intake remains accepted unchanged by
  `abbey media publish`.

## Notes

No canonical bake data, media, generated manifests, site implementation,
public assets, or deployment configuration changed. No commit, push, or site
publication was performed.
