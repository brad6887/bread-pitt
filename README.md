# Bread Pitt

Track Bread Pitt's starter history, recipes, bakes, observations, and lessons learned.

This repository follows the Abbey Session Workflow. Start with:

```text
abbey doctor
abbey session
```

## Website

The Astro source lives in `src/` and builds to the static `site/` directory.
Install dependencies and preview it locally with:

```text
pnpm install
pnpm dev
```

Create a production build with `pnpm build`. GitHub Actions validates pull
requests that change the site and deploys the generated `site/` directory to
GitHub Pages after those changes reach `main`. The custom domain is managed in
the repository's GitHub Pages settings, not in a `CNAME` file.

Recipe content is maintained in `src/data/recipes.ts`, reconciled from
`sources/Bread_Pitt_Recovered_Recipe_Master_v2.docx`.
