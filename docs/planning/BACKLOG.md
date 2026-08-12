# Bread Pitt Backlog

<!-- BEGIN GENERATED BACKLOG STATUS -->
> **Backlog Status:** 18 complete · 2 pending · 20 total
<!-- END GENERATED BACKLOG STATUS -->

## Independent Website

- [x] Enable GitHub Pages with GitHub Actions as the publishing source.
- [x] Set `breadpitt.net` as the repository's custom domain.
- [x] Configure the apex and optional `www` DNS records for GitHub Pages.
- [x] Enable HTTPS after GitHub provisions the domain certificate.
- [x] Verify the Pages deployment and public site at `https://breadpitt.net`.
- [x] Publish the shared Umami analytics safeguard that accepts only the public
      `breadpitt.net` hostnames and excludes internal staging traffic.
- [x] Configure and validate the fail-closed Abbey `ssh-release` deployment
      workflow for Bread Pitt's internal `sites01` target.

## Site Content

- [x] Publish the initial Bread Pitt starter story and connect it to the site.
- [x] Publish Bake001 and establish the Bakes section.
- [x] Cross-link Bake001, the 50/50 White & Whole Wheat recipe, and the Bread
      Pitt starter guide.
- [x] Derive recipe-index images automatically from each recipe's featured or
      related bake, while retaining an optional explicit override for recipes
      that need a different crop or image.
- [x] Generate bake pages from canonical bake content instead of maintaining
      the narrative separately in `story.md` and hand-written Astro markup.
- [ ] Document Bread Pitt's baking equipment and setup.

## Bake Publishing Workflow

- [x] Generate `media-intake.json` automatically from the editorial selections
      in `photos.yml` and the Abbey rename manifest.
- [x] Add reusable scaffolding for a new bake record, including `bake.yml`,
      `photos.yml`, `story.md`, `media-intake.json`, and publication paths.

## Abbey Portability

- [x] Adopt project-owned Astro site and required-route validation.
- [x] Configure and validate the first project-owned manifest-backed media
      publication workflow using Bake001 photographs.
- [x] Configure a named Bread Pitt starter media preparation and publication
      workflow, process one bounded starter image batch through it, add its
      deterministic publication manifest to site validation, and verify the
      generated derivatives.

## Starter Records

- [ ] Associate the imported July 27 and July 28 photographs with their
      canonical starter-cycle records, organize them under dated media
      directories, and update `media_status`.
- [x] Record the earlier July starter cycles after the format proves convenient
      during normal use.
