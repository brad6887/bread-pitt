---
title: "Bread Pitt Staging Analytics Guard"
description: "Restricted Bread Pitt Umami analytics to the public domains so internal staging visits are not counted."
date: 2026-08-04
status: pending
reviewed: false
session: bread-pitt-staging-analytics-guard
tags:
  - Bread Pitt
  - Analytics
  - Staging
---

# Bread Pitt Staging Analytics Guard

## Objective

Prevent visits to the internal Bread Pitt staging site from being recorded as
production Bread Pitt traffic in Umami.

## Definition of Done

- The Umami script accepts analytics only for `breadpitt.net` and
  `www.breadpitt.net`.
- The Astro site builds without errors or warnings.
- The generated home page contains the expected `data-domains` restriction.
- Internal staging remains available at
  `http://breadpitt.sites01.home.arpa/`.
- The production GitHub Pages deployment remains unchanged.

## Summary

Added a `data-domains` restriction to Bread Pitt's shared Umami analytics
script.

The restriction permits analytics collection from:

    breadpitt.net
    www.breadpitt.net

The internal staging hostname is excluded, preventing staging reviews from
polluting production analytics.

## Accomplishments

- Updated `src/layouts/BaseLayout.astro`.
- Preserved the existing Bread Pitt Umami website identifier.
- Limited analytics collection to the two public Bread Pitt hostnames.
- Built the complete Astro site successfully.
- Confirmed all 15 generated pages completed without errors, warnings, or
  hints.
- Confirmed the generated home page contains the expected domain restriction.
- Deployed and validated the restricted build on the internal staging site.

## Impact

Bread Pitt can now be reviewed on its internal staging hostname without adding
staging page views to the public site's analytics.

The restriction applies to every page because it is defined in the shared site
layout.

## Validation

- `git diff --check` passed.
- `abbey site build` completed successfully.
- Astro reported:
  - 0 errors
  - 0 warnings
  - 0 hints
- The build produced 15 pages.
- `dist/index.html` contains:

      data-domains="breadpitt.net,www.breadpitt.net"

- The staged home page returned:

      <title>Bread Pitt</title>

- The staged recipe index returned:

      <title>Recipes · Bread Pitt</title>

## Lessons Learned

Internal staging can use the same static artifact as production when analytics
explicitly restricts accepted hostnames.

A shared layout-level restriction is simpler and more reliable than maintaining
a separate staging build solely to disable analytics.

## Next Steps

- Use the internal staging site to review future Bread Pitt changes.
- Implement the planned fail-closed Abbey static-site deployment workflow.
- Commit and publish this analytics safeguard through the normal Bread Pitt
  GitHub Pages workflow.

## Notes

Internal staging:

    http://breadpitt.sites01.home.arpa/

Production:

    https://breadpitt.net/
