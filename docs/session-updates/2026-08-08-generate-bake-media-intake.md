---
title: "Generate bake media intake"
description: "Added deterministic, freshness-checkable intake generation from canonical photo selection and Abbey rename provenance."
date: 2026-08-08
status: complete
reviewed: false
session: generate-bake-media-intake
tags:
  - Bread Pitt
  - Publishing
  - Media
  - Bake002
---

# Generate bake media intake

## Objective

Replace hand-maintained bake intake manifests with a deterministic generated
artifact derived from canonical editorial selection and Abbey rename
provenance.

## Definition of Done

- Generate the existing Abbey intake-manifest contract from `photos.yml` and
  the configured rename manifest.
- Preserve `photos.yml` item order and captions.
- Validate identifiers, mappings, source files, schema versions, and safe
  project paths before writing.
- Write stale output atomically and leave current output untouched.
- Provide a read-only freshness check suitable for project validation.
- Prove Bake001 compatibility and cover representative failures.

## Summary

Added a project-local bake intake generator with explicit `generate` and
`check` operations. The generator joins editorial selection in `photos.yml`
with original filename and capture-date facts from the Abbey rename manifest,
then emits the unchanged schema-version-1 contract consumed by
`abbey media publish`.

## Accomplishments

- Added `pnpm bake:intake generate <bake-directory>`.
- Added `pnpm bake:intake check <bake-directory>`.
- Added deterministic JSON serialization and unchanged-output detection.
- Added atomic replacement through a same-directory temporary file.
- Restricted configured inputs and bake directories to the active project.
- Validated selected prepared files before manifest generation.
- Rejected duplicate photo IDs, duplicate selected filenames, duplicate rename
  mappings, missing mappings, missing sources, empty required facts, and
  unsupported schemas.
- Added the Bake001 freshness check to project validation.
- Added an explicit YAML dependency instead of relying on Astro's transitive
  dependency graph.
- Marked automatic intake generation complete in the project backlog.
- Advanced `NEXT.md` to the canonical renderer phase.

## Validation

- Intake generator regression suite: 7 passed, 0 failed.
- Bake001 intake freshness check passed without changing the tracked manifest.
- Existing Bake001 intake remains compatible with the Abbey media publication
  contract.
- Full Astro and site publication validation are recorded in the final session
  review.

## Design Decisions

- The intake manifest remains tracked and reviewable but is not editable.
- `photos.yml` owns selection, order, and captions.
- The Abbey rename manifest owns original filename and capture date.
- Generation remains Bread Pitt-local because the input adapter is specific to
  the Bake Model; the Abbey intake and publication contracts remain reusable.
- Freshness is a read-only operation with a failing exit status and a corrective
  generation command.

## Impact

Bake002 will not require manual construction or synchronization of
`media-intake.json`. Caption or selection changes now become visible as stale
generated state during normal project validation.

## Lessons Learned

- Bake001's manually assembled intake was already deterministically ordered and
  formatted, allowing the new generator to reproduce it without migration
  churn.
- Adding freshness validation is as important as generation; otherwise a
  tracked generated artifact can silently drift from its sources.

## Next Steps

- Render Bake001 from `bake.yml`, `story.md`, `photos.yml`, recipe data, and the
  publication manifest through shared Astro code.
- Remove duplicated title, hero, recipe backlink, public paths, and narrative
  markup after the shared renderer is validated.

## Notes

No canonical media, public derivatives, publication manifest, production
route, or deployed site changed. No commit, push, or site publication was
performed for Phase 2 at the time of capture.
