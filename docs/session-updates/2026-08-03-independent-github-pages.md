---
title: "Bread Pitt Independent GitHub Pages"
description: "Established a standalone Bread Pitt site and an independent GitHub Pages deployment workflow."
date: 2026-08-03
status: in-progress
reviewed: true
session: independent-github-pages
tags:
  - Bread Pitt
  - Website
  - GitHub Pages
  - Deployment
---

# Bread Pitt Independent GitHub Pages

## Objective

Establish Bread Pitt as an independently built and deployed GitHub Pages site,
ready to serve at `breadpitt.net`.

## Definition of Done

- The repository contains a standalone static site with no Abbey Root runtime dependency.
- Pull requests validate the site entry point without deploying it.
- Changes to the site on `main` publish through GitHub's supported Pages Actions flow.
- The deployment artifact contains a top-level `index.html`.
- Local validation passes and the complete change set is captured in a session update.
- Remaining GitHub Pages and DNS configuration is documented for the repository owner.

## Summary

Added the smallest independent publishing foundation for Bread Pitt: a
dependency-free static landing page and a GitHub Actions workflow that packages
and deploys the site through GitHub Pages.

The implementation deliberately does not choose a long-term content generator.
Canonical starter, recipe, and bake records remain unchanged while the
independent repository and deployment boundary is proven.

## Accomplishments

- Added a standalone site under `site/` with a top-level `index.html`.
- Added responsive presentation without third-party runtime dependencies.
- Added `.nojekyll` to publish the static artifact unchanged.
- Added pull-request validation for site and workflow changes.
- Added GitHub Pages artifact upload and deployment for changes on `main`.
- Documented the local preview command and ownership of custom-domain settings.
- Confirmed that the site does not depend on files or commands from Abbey Root.

## Validation

- `abbey doctor` reported a healthy repository before changes.
- The site entry point and stylesheet references were checked locally.
- The complete `site/` directory was staged as the Pages artifact in a local archive test.
- `git diff --check` reported no whitespace errors.
- Git status and the complete diff were reviewed.

## External Actions Required

After the changes are reviewed, committed, and merged to `main`:

1. In the Bread Pitt repository, open **Settings → Pages** and select
   **GitHub Actions** as the publishing source.
2. Set the custom domain to `breadpitt.net` in the same Pages settings.
3. At the DNS provider, point the apex domain to GitHub Pages using the records
   GitHub documents for apex domains. Point `www` to `brad6887.github.io` if a
   `www` alias is desired.
4. Wait for DNS and certificate provisioning, then enable **Enforce HTTPS**.
5. Verify both the Pages deployment and `https://breadpitt.net` before marking
   this session complete.

A repository `CNAME` file is intentionally absent because GitHub ignores it for
custom Actions-based Pages publishing.

## Next Steps

- Complete the GitHub Pages and DNS actions above.
- Mark this session complete after the public HTTPS site is verified.
- Return to the planned first complete bake record.
- Choose a content generator only when publishing canonical records requires it.
