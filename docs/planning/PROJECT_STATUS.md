# Bread Pitt Project Status

Last Updated: 2026-08-03

## Project Snapshot

Track Bread Pitt's starter history, recipes, bakes, observations, and lessons learned.

## Durable Capabilities

- The Bread Pitt repository has separate foundations for canonical content,
  media, and preserved source material.
- The recovered recipe master is retained at
  `sources/Bread_Pitt_Recovered_Recipe_Master_v2.docx` as the initial source
  document while individual canonical recipe records are developed.

- Canonical starter profiles and feeding-cycle records now exist. Each
  feeding-cycle record keeps feed details, observations, outcomes, assessments,
  and media references together as one source of truth.
- A standalone static site and GitHub Pages Actions workflow now provide an
  independent publishing foundation with no Abbey Root runtime dependency.

## Current Session

### Objective

Establish Bread Pitt as an independently built and deployed GitHub Pages site,
ready to serve at `breadpitt.net`.

### Definition of Done

- The repository contains a standalone static site with no Abbey Root runtime dependency.
- Pull requests validate the site entry point without deploying it.
- Changes to the site on `main` publish through GitHub's supported Pages Actions flow.
- The deployment artifact contains a top-level `index.html`.
- Local validation passes and the complete change set is captured in a session update.
- Remaining GitHub Pages and DNS configuration is documented for the repository owner.

### Status

In progress; repository changes are complete and external configuration remains.

## Suggested Next Step

Enable GitHub Pages with GitHub Actions as the source, set `breadpitt.net` as
the custom domain, and update the domain's DNS records after this change reaches
`main`.
