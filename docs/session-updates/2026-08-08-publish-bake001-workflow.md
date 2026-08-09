---
title: "Publish Bake001 workflow"
description: "Built and validated the complete workflow for publishing a Bread Pitt bake, including media processing, structured content, and site integration."
date: 2026-08-08
status: complete
reviewed: false
session: publish-bake001-workflow
tags:
  - Bread Pitt
  - Publishing
  - Media
  - Astro
  - Abbey Root
---

# Publish Bake001 workflow

## Objective

Publish the first Bread Pitt bake while developing a repeatable workflow for future bake articles. The goal was to minimize manual work by separating media processing, content, and publication into predictable steps.

## Definition of Done

- Complete Bake001 narrative published in the repository.
- Structured bake metadata created.
- Photo selection documented separately from source media.
- Media publication pipeline validated.
- Bake integrated with recipes and starter guide.
- Site builds successfully.
- Workflow documented for future bakes.

## Summary

This session transformed Bake001 from a collection of photos and a written narrative into a fully integrated Bread Pitt article.

A repeatable publishing workflow was established using Abbey's media tools. Images are imported once, renamed from XMP captions into canonical filenames, curated through a `photos.yml` file, published into optimized web images, and tracked with intake and publication manifests. This keeps the original media untouched while producing deterministic published assets.

The bake itself was modeled with structured metadata separate from the narrative, allowing relationships between recipes, bakes, and the starter guide to be expressed without duplicating information.

Navigation throughout the site now connects the three primary content types: recipes, bake journals, and the starter story.

The recipe index was also improved by displaying finished loaf photography, making the collection feel much more inviting than a text-only list.

## Accomplishments

- Published the complete Bake001 narrative.
- Created structured bake metadata (`bake.yml`).
- Created curated photo selection (`photos.yml`).
- Generated media intake manifest.
- Generated publication manifest.
- Validated metadata removal from published images.
- Published 24 optimized bake images.
- Established canonical image naming from XMP captions.
- Linked Bake001 to the 50/50 White & Whole Wheat recipe.
- Linked Bake001 back to the Bread Pitt starter story.
- Added Featured Bake support to recipe pages.
- Added finished-product photography to the recipe index.
- Verified all cross-links.
- Completed full site build without errors.
- Performed visual QA of the completed site.

## Impact

Bread Pitt now has its first complete end-to-end publishing workflow.

Future bake articles follow the same general process:

1. Import and caption photos.
2. Canonically rename media.
3. Curate selected images.
4. Publish optimized web images.
5. Write the narrative.
6. Create structured bake metadata.
7. Build and validate the site.
8. Publish.

The workflow is considerably more repeatable than the initial manual approach while keeping original media intact.

## Validation

Successfully verified:

- Canonical media rename workflow.
- Photo selection integrity.
- Media intake generation.
- Media publication generation.
- Metadata stripping.
- Published image validation.
- Bake metadata validation.
- Cross-links between recipes, bakes, and starter guide.
- Astro build completed with no warnings or errors.
- Visual inspection of the generated pages.

## Lessons Learned

Separating media management from content authoring greatly simplified the publishing process.

Maintaining curated photo selections independently from imported media provides flexibility without risking the source files.

Publishing manifests make it easy to validate exactly what was released and provide confidence that metadata has been removed.

The existing workflow still contains opportunities for additional automation, but it is already practical enough for regular use.

## Next Steps

- Publish Bread Pitt publicly.
- Publish Bake002 using the same workflow.
- Automate generation of `photos.yml` where practical.
- Automate creation of media intake manifests.
- Generate bake pages from structured content.
- Improve Abbey dev server restart behavior.
- Continue expanding recipe photography as additional bakes are completed.

## Notes

Bake001 represents the first complete Bread Pitt publishing workflow rather than simply the first article. The process developed during this session is intended to become the standard approach for future bake journals and establishes the foundation for scalable content publishing.
