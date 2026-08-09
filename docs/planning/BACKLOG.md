cat > docs/planning/BACKLOG.md <<'EOF'
# Bread Pitt Backlog

<!-- BEGIN GENERATED BACKLOG STATUS -->
> **Backlog Status:** 11 complete · 5 pending · 16 total
<!-- END GENERATED BACKLOG STATUS -->

## Independent Website

- [x] Enable GitHub Pages with GitHub Actions as the publishing source.
- [x] Set `breadpitt.net` as the repository's custom domain.
- [x] Configure the apex and optional `www` DNS records for GitHub Pages.
- [x] Enable HTTPS after GitHub provisions the domain certificate.
- [x] Verify the Pages deployment and public site at `https://breadpitt.net`.

## Site Content

- [x] Publish the initial Bread Pitt starter story and connect it to the site.
- [x] Publish Bake001 and establish the Bakes section.
- [x] Cross-link Bake001, the 50/50 White & Whole Wheat recipe, and the Bread
      Pitt starter guide.
- [ ] Derive recipe-index images automatically from each recipe's featured or
      related bake, while retaining an optional explicit override for recipes
      that need a different crop or image.
- [ ] Generate bake pages from canonical bake content instead of maintaining
      the narrative separately in `story.md` and hand-written Astro markup.

## Bake Publishing Workflow

- [x] Generate `media-intake.json` automatically from the editorial selections
      in `photos.yml` and the Abbey rename manifest.
- [ ] Add reusable scaffolding for a new bake record, including `bake.yml`,
      `photos.yml`, `story.md`, media directories, and publication paths.

## Abbey Portability

- [x] Adopt project-owned Astro site and required-route validation.
- [x] Configure and validate the first project-owned manifest-backed media
      publication workflow using Bake001 photographs.

## Starter Records

- [ ] Import the July 27–28 starter photographs when the original files are
      available.
- [ ] Record the earlier July starter cycles after the format proves convenient
      during normal use.
EOF
