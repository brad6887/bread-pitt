# Bread Pitt Project Status

Last Updated: 2026-08-08

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
- Project-owned Abbey configuration now identifies the direct static site,
  requires the `/` route, and provides empty media workflow maps that fail
  closed until real Bread Pitt media publication is configured.

## Current Session

### Objective

Adopt Abbey's project-aware site validation contract while preserving Bread
Pitt's independent static site and GitHub Pages deployment workflow.

### Definition of Done

- Bread Pitt owns explicit static-site and media configuration.
- Toolkit defaults remain disabled.
- The root route is required by project configuration.
- `abbey site build` and `abbey site validate` pass from Bread Pitt.
- No deployment target or placeholder media provenance is introduced.

### Status

Complete; Bread Pitt now validates its current site artifact through project-owned
configuration without changing its independent deployment model.

## Suggested Next Step

Enable GitHub Pages with GitHub Actions as the source, set `breadpitt.net` as
the custom domain, and update the domain's DNS records after this change reaches
`main`.
