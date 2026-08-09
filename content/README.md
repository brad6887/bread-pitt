# Bread Pitt Content

This directory contains the canonical, human-maintained content for Bread Pitt.

## Areas

- `recipes/` — canonical recipe records
- `starter/` — the starter profile and one canonical record per feeding cycle
- `bakes/` — dated records of individual bakes
- `research/` — ingredient, fermentation, equipment, and process notes
- `publishing/` — content prepared specifically for website or other publication

The canonical bake workspace and its generated-publication boundaries are
defined in [`../docs/reference/BAKE_MODEL.md`](../docs/reference/BAKE_MODEL.md).

Generate or check a bake's derived media intake manifest from the repository
root:

```text
pnpm bake:intake generate content/bakes/2026/bake001
pnpm bake:intake check content/bakes/2026/bake001
```

Generation reads `photos.yml` and its configured Abbey rename manifest. It
validates every selected prepared image before atomically replacing stale
output; an unchanged manifest is left untouched.

Source documents used to recover or reconcile content belong in `../sources/`.
Photographs and other media belong in `../media/`.
