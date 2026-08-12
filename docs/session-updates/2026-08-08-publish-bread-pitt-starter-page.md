---
title: "publish bread pitt starter page"
description: "Created the first full Bread Pitt story page documenting the rebuild of Bread Pitt 2.0 from a lost starter through the first successful loaf."
date: 2026-08-08
status: complete
reviewed: true
session: publish-bread-pitt-starter-page
tags:
  - Abbey Root
  - Bread Pitt
  - Astro
  - content
  - images
---

# publish bread pitt starter page

## Objective

Create and publish the first non-recipe content section for Bread Pitt: a complete story page documenting the creation and recovery of Bread Pitt 2.0.

The page should preserve the timeline, observations, photos, and lessons learned from rebuilding the sourdough starter after Bread Pitt 1.0 was lost during the move from Florida to Texas.

## Definition of Done

- Create a dedicated Starter page at `/starter/`.
- Convert the starter timeline into a readable story format.
- Import and optimize starter photography for web use.
- Preserve original image sources separately from published derivatives.
- Add appropriate image layouts for timeline photos and milestone images.
- Add Starter to the site navigation.
- Validate the Astro build.
- Prepare the changes for publication.

## Summary

Completed the Bread Pitt starter story page.

The site now includes a dedicated "Bread Pitt: The Reboot" story that documents the full journey of Bread Pitt 2.0:

- Bread Pitt 1.0 being lost during the Florida to Texas move.
- Starting Bread Pitt 2.0 from flour and water.
- The slow early development period.
- The unusual smell phase.
- Recovery after a missed feeding.
- Introduction of whole wheat flour.
- Repeated successful rises.
- The first loaf made with the new starter.

The page moves Bread Pitt beyond a recipe collection and establishes it as an ongoing baking journal.

## Accomplishments

### Starter Story Page

Created:

- `/starter/`

The page includes:

- Editorial-style header and introduction.
- Timeline-based storytelling.
- Starter development observations.
- Lessons learned.
- First loaf milestone.

The writing emphasizes the actual experience of building a starter rather than presenting sourdough as a guaranteed one-week process.

### Image Import and Optimization

Imported the starter photo collection from the working photo directory.

Original photos and XMP caption metadata were preserved in:

- `media/starter/2026/`

Generated optimized public derivatives in:

- `public/images/starter-story/`

Created published images:

- bread-pitt-1.jpg
- starter-setup.jpg
- starter-early-01.jpg
- starter-early-02.jpg
- starter-early-03.jpg
- starter-smelly-01.jpg
- starter-smelly-02.jpg
- starter-second-act-before-feed.jpg
- starter-second-act-after-feed.jpg
- starter-whole-wheat.jpg
- starter-montage-01.jpg
- starter-montage-02.jpg
- starter-montage-03.jpg
- starter-hero.jpg
- first-loaf.jpg

Images were resized and metadata stripped using the Abbey image derivative tooling.

### Page Layout Improvements

Added dedicated story page styling:

- Large story title treatment.
- Centered content width.
- Editorial spacing.
- Feature images.
- Timeline image groups.
- Compact montage layout.
- Larger first-loaf milestone image.

The image layout now reflects the role each photo plays in the story:

- Opening image establishes Bread Pitt 1.0.
- Timeline images document progress.
- Montage images show development.
- First loaf receives larger emphasis as the payoff moment.

### Navigation

Updated the main navigation.

Changed:

- Starter from "coming soon"

to:

- Active link to `/starter/`

Current navigation:

- Recipes
- Bakes (coming soon)
- Starter

### Build Validation

Validated the site with:

corepack pnpm build

Result:

- Astro checks passed.
- No errors reported.
- Starter page generated successfully.
- Existing recipe pages continued to build successfully.

## Impact

Bread Pitt now has a second major content type beyond recipes.

The site structure is becoming:

- Recipes: reusable baking instructions.
- Starter: the ongoing Bread Pitt story.
- Future Bakes: individual loaf and experiment records.
- Future Equipment: tools and setup documentation.

This creates a foundation for documenting the baking process rather than only publishing final recipes.

## Validation

Completed:

- Verified starter page generated at `/starter/`.
- Confirmed optimized images load from `public/images/starter-story/`.
- Confirmed image layout changes render correctly.
- Confirmed navigation link works.
- Confirmed production build succeeds.

## Lessons Learned

### Abbey Image Portability

The Bread Pitt workflow exposed that the Abbey image tooling was designed for portability but has only been tested primarily with plant content.

Future improvements:

- Resolve image configuration from the active project first.
- Avoid assuming Abbey Root repository paths.
- Make project-specific image roles explicit.

### Image Workflow Reuse

The plant `rename-exports` workflow has broader applications.

The same pattern applies to other projects:

- Read metadata captions.
- Generate stable filenames.
- Preserve originals.
- Create publish-ready derivatives.

The workflow should eventually move toward a generic Abbey media tool.

### Project-Aware Abbey Commands

Bread Pitt continues to expose places where Abbey commands need stronger project awareness.

Potential improvements:

- Detect active project from the current directory.
- Load project configuration locally.
- Fail closed when project publishing rules are missing.
- Avoid accidental use of another project's settings.

## Next Steps

- Commit and publish Bread Pitt starter changes.
- Add structured starter timeline records to the site.
- Build the Bakes section.
- Add equipment documentation.
- Continue improving Abbey portable image and publishing workflows.

## Notes

This session represents the first complete Bread Pitt story workflow:

photo metadata → optimized images → Astro content → published page

The workflow is a useful test case for improving Abbey Root as a reusable project framework.
