---
title: "Publish Bake005 Sourdough Waffles"
description: "Published and verified the Bake005 waffle story and ten photos through Bread Pitt's canonical bake and media workflow."
date: 2026-09-26
status: complete
reviewed: false
session: publish-bake005-sourdough-waffles
tags:
  - Bread Pitt
  - Bake005
---

# Publish Bake005 Sourdough Waffles

## Objective

Publish the finalized Bake005 narrative and captioned photos from ubuntu-dev01 through the established Bread Pitt workflow.

## Definition of Done

- Preserve the supplied facts: September 8 mix at 9:24 am, fermentation until 7:48 pm, overnight refrigeration, and September 9 cooking.
- Include the slightly-less-than-1/4-cup portion, yield of 14 mini waffles, crisp exterior, light and airy interior, unchanged recipe, and 10/10 rating.
- Preserve original JPG/XMP pairs and use Abbey-generated rename, intake, and publication manifests.
- Validate the production build, image privacy, page content, relationships, and deployment plan.
- Review the scoped change before committing, pushing, and activating the SSH release.

## Summary

Added canonical Bake005 content with the existing sourdough discard pancakes and waffles recipe relationship. The plated waffle leads the page; captioned galleries cover the initial mix, finishing the batter, and waffle-iron capacity. Individual photos show the rested base, first waffle, and finished stack.

## Accomplishments

- Imported ten original JPG/XMP pairs from /home/bcooke/incoming/photos, preserving source bytes and leaving incoming files intact.
- Renamed working copies through Abbey's Bread Pitt configuration.
- Generated a deterministic ten-photo intake and ten privacy-safe 1500-by-2000 JPG derivatives.
- Added the bake005 media workflow and permanent intake, publication-manifest, and required-route checks.
- Kept the finalized narrative and existing recipe, adding dates, a recipe link, and photo placements.
- Used the shared bake renderer; no bake-specific site code was needed.

## Validation

- All seven bake-intake tests passed.
- Bake005 intake generation and freshness checks passed.
- Media publication dry run and generation passed for all ten images.
- Astro check reported zero errors, warnings, and hints.
- Astro build produced 23 pages, including /bakes/bake005/.
- Abbey site validation passed three configured manifests, 36 derivatives, and six required routes, including Bake005.
- Browser review confirmed all ten images loaded, captions and galleries rendered correctly, and no horizontal overflow at the preview viewport.
- Production SSH-release dry run built and validated the site, passed remote preflight, and left production unchanged.

## Lessons Learned

The source directory is /home/bcooke/incoming/photos. Select by Bake005 sidecar descriptions and skip macOS resource-fork files to avoid unrelated imports.

IMG_0385's original caption says "after refrigerator," but its capture time is September 8 at 7:48 pm. Its original metadata and generated filename remain intact; the public caption neutrally describes the rested base, consistent with the user's confirmed chronology.

## Next Steps

Publication is complete. No follow-up is required for Bake005.

## Notes

The configured SSH route is ubuntu-dev01 to abbey-deploy@sites01:/srv/www/breadpitt.net. The repository also retains an active GitHub Pages deployment workflow, and public DNS currently resolves to GitHub Pages. Both deployments completed successfully; neither hosting configuration was changed.

## Publication Verification

- Publication commit: a229d02ab89fb06ca4d165d0a6113a7b004283c8, pushed to main.
- Active SSH release: /srv/www/breadpitt.net/releases/20260926T122407Z.
- GitHub Pages run: https://github.com/brad6887/bread-pitt/actions/runs/36241787554, completed successfully.
- Live page: https://breadpitt.net/bakes/bake005/, HTTP 200 with the finalized facts and rating.
- All ten live image responses returned HTTP 200 and matched the SHA-256 hashes of the validated public derivatives.
- Live bake index, recipe backlink, and Bake004 navigation all point to Bake005.
- Browser review confirmed the live page rendered successfully after deployment completed.
- Abbey end certified a clean checkout synchronized with origin/main.
