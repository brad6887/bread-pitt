---
title: "Publish Bake006 Sourdough Control Loaf"
description: "Published and verified the finalized Bake006 narrative, 9/10 score, and ten selected captioned photos."
date: 2026-09-26
status: complete
reviewed: false
session: publish-bake006-sourdough-control-loaf
tags:
  - Bread Pitt
  - Bake006
---

# Publish Bake006 Sourdough Control Loaf

## Objective

Publish the finalized Bake006 narrative and 9/10 score from the Bake006 conversation using photos from ubuntu-dev01.

## Definition of Done

- Preserve the supplied narrative and Bread Pitt voice, adding only photo directives and the existing Control Loaf recipe link.
- Match bake006 across directory, bake.yml, photos.yml, and story front matter.
- Preserve originals and select only the strongest relevant photos using caption metadata.
- Complete Abbey rename, intake, media publication, build, validation, browser review, commit, push, and deployment verification.

## Summary

Added Bake006 canonical content for the September 20-21 control loaf, linked to the existing sourdough-control-loaf recipe. The full narrative retains its 9/10 ending. The baked loaf leads the page; four paired galleries cover mixing, dough strength, bulk rise, and cold proof; the crumb photo appears at the crumb discussion.

## Accomplishments

- Identified 17 Bake006 JPG/XMP pairs by their XMP description fields in /home/bcooke/incoming/photos. The misspelled incomming path was absent.
- Preserved all 34 original files byte-for-byte in media/bakes/2026/bake006 and left incoming files unchanged.
- Renamed working copies through Abbey with the active Bread Pitt configuration and capture dates.
- Selected 10 images after visual review, omitting redundant fold stages and alternate angles.
- Generated deterministic intake and ten metadata-clean 1500-by-2000 JPG derivatives.
- Registered the Bake006 media workflow, intake check, publication manifest, and required route.
- Used the shared bake renderer and existing recipe. No site code or recipe changes were needed.

## Validation

- All seven bake-intake tests passed.
- Bake006 intake check passed; unchanged regeneration preserved bytes and modification time.
- The pre-existing Bake001 intake freshness check exposed an order-only mismatch with photos.yml. Verified equality of all 24 records independent of order, then regenerated the intake through Abbey's generator. Captions, dates, filenames, selection, original media, and the published page remain unchanged.
- All three configured bake intake checks now pass.
- Media publication dry run and generation passed for all ten images.
- Astro check reported zero errors, warnings, and hints; the build generated 24 pages.
- Abbey site validation passed four configured manifests, 46 derivatives, and seven required routes.
- Checked page title, narrative landmarks, 9/10 header and ending, ten unique images with alt text, recipe link, bake index, recipe backlink, and Bake005 navigation.
- Rechecked derivative hashes, dimensions, privacy assertions, and all original files against incoming.
- Compared the full narrative to the finalized chat draft; only photo directives and recipe-link formatting differ.
- Browser review confirmed all ten photos loaded, comparison galleries and captions rendered correctly, the 9/10 ending was present, and there was no horizontal overflow at the preview viewport.
- The configured SSH-release dry run passed build, validation, and remote preflight without changing production.
- git diff --check passed.

## Notes

Source captions and capture timestamps remain in the rename/intake provenance. Narrative times retain the finalized draft's wording, including the stated 4:31 pm start of bulk.

## Next Steps

Publication is complete. No follow-up is required for Bake006.


## Publication Verification

- Publication commit: 1bbb726c1dfd4cd48d6523129345e805d179d2ff, pushed to main.
- Active SSH release: /srv/www/breadpitt.net/releases/20260926T124403Z.
- GitHub Pages run: https://github.com/brad6887/bread-pitt/actions/runs/36242845609, completed successfully.
- Live page: https://breadpitt.net/bakes/bake006/, HTTP 200.
- Live page SHA-256 exactly matches the validated build: 8b92397a8cd31072f7cbc15f888ff9c470c10ddb26fb46ab02e4a7242d638577.
- All ten live images returned HTTP 200 and matched their publication-manifest hashes.
- Live bake index, Control Loaf recipe backlink, and Bake005 navigation point to Bake006.
- Browser review confirmed the published narrative and 9/10 score.
- Bake001's HTML is byte-identical between the previous and current SSH releases, confirming the generated intake reorder had no page effect.
