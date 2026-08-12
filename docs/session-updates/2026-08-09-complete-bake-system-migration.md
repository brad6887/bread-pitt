---
title: "Complete bake system migration"
description: "Migrated Bake001 to canonical rendering, hardened bake validation, generalized galleries, derived recipe relationships, and prepared the Bake002 scaffold."
date: 2026-08-09
status: complete
reviewed: true
session: complete-bake-system-migration
tags:
  - Bread Pitt
  - Publishing
  - Bake Model
  - Astro
  - Bake002
---

# Complete bake system migration

## Objective

Finish the Bake001 migration to the canonical bake model and make adding future
bakes primarily a content and media workflow rather than a site-code change.

## Definition of Done

- Render Bake001 through a shared dynamic route.
- Remove the hand-written Bake001 page and generated-content duplication.
- Generate the bake index and recipe backlinks from canonical bake records.
- Fail builds with specific errors for incomplete metadata or invalid media.
- Replace pair-specific story directives with configurable galleries.
- Add gallery captions, bake metadata, and previous/next navigation.
- Provide a reusable content scaffold for Bake002.
- Complete a clean production build and preserve the intake test suite.

## Summary

Bake001 is now fully rendered from `bake.yml`, `photos.yml`, `story.md`, and the
Abbey publication manifest. Its public URL remains unchanged, but the old
hand-written Astro page has been removed. The same records now drive the bake
index, recipe-page relationships, recipe-index photography, SEO metadata, and
future bake navigation.

The shared loader now acts as the publication-readiness validator. It reports
the affected bake and field when canonical metadata is absent, verifies recipe
and starter relationships, requires valid hero and story references, and
confirms every selected image has a real published derivative.

## Accomplishments

- Added the shared `bakes/[id]` static route using canonical public routes.
- Removed the hand-written Bake001 page.
- Generated the bake index from all canonical bake records.
- Added required-field, relationship, route, photo, gallery, and publication
  validation with bake-specific error messages.
- Validated publication-manifest entries against actual public derivatives.
- Replaced `photo-pair` with generic `gallery` directives.
- Added `comparison` and `grid` layouts controlled by `photos.yml`.
- Added an individual caption beneath every gallery image.
- Added bake publication date, recipe, and starter metadata to the page head.
- Added automatic previous and next bake navigation.
- Replaced the reciprocal recipe `featuredBake` record with relationships
  derived from each bake's recipe slug.
- Derived recipe-index photography from related bake heroes while preserving
  the existing explicit image-override mechanism.
- Removed duplicated Bake001 title, tagline, and hero ownership.
- Added `content/bakes/_template` with canonical metadata, photos, story,
  intake-manifest, and workflow guidance.
- Updated the canonical bake-model reference and project backlog.

## Design Decisions

- A bake's route remains canonical in `bake.yml`, allowing descriptive URLs
  without coupling directory IDs to public slugs.
- Public image paths are accepted only from Abbey's publication manifest and
  are checked against files under `public/`.
- Gallery presentation belongs in `photos.yml`; story prose references only a
  stable gallery ID.
- Recipe pages query bake records instead of maintaining reciprocal links.
- Directories beginning with an underscore are ignored by bake discovery, so
  the reusable template cannot accidentally become a published bake.

## Validation

- Astro check completed with zero errors, warnings, or hints.
- Astro production build completed successfully with 18 pages.
- Bake001 rendered at its existing descriptive URL through the dynamic route.
- Generated HTML contains gallery captions and article metadata.
- All seven bake-intake tests passed.
- `git diff --check` passed.

## Impact

Publishing Bake002 no longer requires a new Astro page, bake-index entry,
recipe backlink, or recipe-index image entry. After copying and completing the
template, the existing intake, publication, and build steps produce and verify
the new site content automatically.

## Next Steps

- Copy the bake template into `content/bakes/2026/bake002` when its real
  metadata and media are ready.
- Run the Abbey intake and publication workflow.
- Write the Bake002 story using stable photo and gallery directives.
- Build the site; resolve any content-specific validation messages before
  publishing.

## Notes

No Bake002 facts or media were invented during this migration. The scaffold
contains placeholders only and is intentionally excluded from bake discovery.
