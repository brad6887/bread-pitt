---
title: "Build the Astro Recipe Section"
description: "Converted Bread Pitt to Astro and added a complete source-grounded recipe collection."
date: 2026-08-04
status: pending
reviewed: true
session: astro-recipe-section
tags:
  - Abbey Root
---

# Build the Astro Recipe Section

Date: 2026-08-04

## Objective

Replace the single-page placeholder with an Astro site and publish-ready recipe
section sourced from the recovered recipe master, without publishing during the
session.

## Definition of Done

- The existing landing page becomes an Astro page with recipe navigation.
- A recipe index presents every recipe in the recovered master.
- Each recipe has an individual static page with its source ingredients,
  method, notes, and success cues.
- Umami analytics is included globally.
- The GitHub Pages workflow installs dependencies, validates, builds, and only
  deploys after a push to `main`.
- Local type checks, production build, static navigation checks, and responsive
  layout checks pass.

## Completed

- Added an Astro build with a shared layout, site navigation, responsive global
  design, recipe index, and dynamic recipe-page template.
- Transcribed all 13 recipe bodies from the recovered recipe master. The body
  includes Sourdough Focaccia even though the document's introductory index
  omits it.
- Added the required Umami script to the shared layout so it appears on every
  generated page.
- Updated the GitHub Pages workflow to run the Astro validation and production
  build before artifact upload.
- Kept deployment gated to pushes to `main`; this session did not publish.

## Validation

- `astro check`
- `astro build`
- Confirmed 15 static pages: home, recipe index, and 13 recipe pages.
- Confirmed the required Umami website ID appears on every generated HTML page.
- Confirmed responsive breakpoints are included for the index and recipe
  layouts, with no generated-page horizontal-overflow patterns in the markup.
