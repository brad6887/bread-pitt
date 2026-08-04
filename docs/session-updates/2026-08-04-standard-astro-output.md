---
title: "Use Standard Astro Build Output"
description: "Moved generated Bread Pitt output from the tracked site directory to ignored Astro dist output."
date: 2026-08-04
status: pending
reviewed: true
session: standard-astro-output
tags:
  - Abbey Root
---

# Use Standard Astro Build Output

## Objective

Use Astro's standard generated-output model instead of committing generated HTML under `site/`.

## Completed

- Restored Astro's default `dist/` build output.
- Added `dist/` to `.gitignore`.
- Removed the generated `site/` directory from version control.
- Updated GitHub Pages to deploy `dist/`.
- Updated Abbey to build the Astro project and validate `dist/`.
- Declared pnpm 11.9.0 in `package.json`.
- Updated the website documentation.

## Validation

- `corepack pnpm run build`
- `abbey site build`
- `git diff --check`
- Confirmed 15 generated pages.
- Astro reported zero errors, warnings, or hints.

## Publishing

- Merged through pull request #1.
- The GitHub Pages production workflow completed successfully.
- Verified `https://breadpitt.net/recipes/` returns HTTP 200.
