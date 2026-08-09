# Bread Pitt Next

Last Reviewed: 2026-08-08

## Current Theme

Bake002 Publishing Readiness

## Primary Objective

Remove the duplicated authoring and preventable manual work discovered while
publishing Bake001 before creating Bake002.

## Success Criteria

The pre-Bake002 workflow is ready when:

- Every bake fact and relationship has one documented authoritative source.
- `photos.yml` and the Abbey rename manifest generate `media-intake.json`
  deterministically.
- `bake.yml` and `story.md` render bake pages through shared Astro code.
- One Bread Pitt command validates the complete bake model.
- A safe scaffold creates the canonical starting workspace for Bake002.
- `abbey site restart` reliably restarts the active project's development
  server.
- Bake001 remains buildable and visually correct after migration.
- The proven workflow is captured in a Bread Pitt runbook.

## Current Priorities

### Completed Foundation

- Inventory Bake001's canonical, generated, and duplicated artifacts.
- Assign authoritative ownership for metadata, narrative, photos, hero
  selection, recipe relationships, manifests, derivatives, and routes.
- Record the model and its validation boundaries.
- Generate `media-intake.json` deterministically from `photos.yml` and the
  Abbey rename manifest.
- Validate intake freshness during the standard project workflow.

### Current Phase — Canonical Bake Renderer

- Build one shared loader for bake metadata, narrative, photo metadata,
  recipes, and publication provenance.
- Render Bake001 through shared Astro code without copying narrative content.
- Derive the bake index and recipe backlink from canonical bake records.
- Preserve Bake001's current route and visual presentation.

## Future Direction

After Bake002 is published, compare two complete publishing cycles before
promoting bake-specific behavior into generic Abbey content commands or
one-command publication orchestration.

## Guiding Principle

Keep one readable canonical source for every authored fact, generate derived
artifacts deterministically, and generalize only from repeated real use.
