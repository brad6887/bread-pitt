# Bread Pitt

Track Bread Pitt's starter history, recipes, bakes, observations, and lessons learned.

This repository follows the Abbey Session Workflow. Start with:

```text
abbey doctor
abbey session
```

## Website

The dependency-free static site lives in `site/`. Preview it locally with:

```text
python3 -m http.server --directory site 8000
```

GitHub Actions validates pull requests that change the site and deploys `site/`
to GitHub Pages after those changes reach `main`. The custom domain is managed
in the repository's GitHub Pages settings, not in a `CNAME` file.
