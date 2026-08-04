---
title: "Launch Bread Pitt on GitHub Pages"
description: "Completed the public launch of Bread Pitt at breadpitt.net using GitHub Pages, Hostinger DNS, and enforced HTTPS."
date: 2026-08-03
status: pending
reviewed: true
session: launch-bread-pitt-on-github-pages
tags:
  - Abbey Root
---

# Launch Bread Pitt on GitHub Pages

## Objective

Publish Bread Pitt as an independent website at `breadpitt.net` using GitHub Pages, an Actions-based deployment workflow, Hostinger DNS, and enforced HTTPS.

## Definition of Done

- Bread Pitt site changes are merged and pushed to `main`.
- GitHub Pages uses GitHub Actions as its publishing source.
- The Pages deployment workflow completes successfully.
- `breadpitt.net` is configured as the repository custom domain.
- Apex DNS records point to the GitHub Pages servers.
- `www.breadpitt.net` points to the GitHub Pages account hostname.
- GitHub domain checks pass.
- A TLS certificate is issued for the domain.
- HTTPS enforcement is enabled.
- The public site is reachable at `https://breadpitt.net`.

## Summary

Completed the first public deployment of Bread Pitt as a standalone website. The site is hosted through GitHub Pages, uses `breadpitt.net` as its custom domain, and is served through HTTPS.

This establishes Bread Pitt as a project separate from `bradcooke.com` while continuing to use the existing GitHub-based static-site publishing model.

## Accomplishments

- Merged and pushed the completed Bread Pitt website changes.
- Enabled GitHub Pages with GitHub Actions as the publishing source.
- Re-ran the initial failed deployment after Pages was enabled.
- Confirmed the deployment workflow completed successfully.
- Added `breadpitt.net` as the repository custom domain.
- Configured the following apex DNS records in Hostinger:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- Configured `www` as a CNAME pointing to `brad6887.github.io`.
- Confirmed GitHub domain and DNS checks passed.
- Confirmed the site became publicly available.
- Confirmed GitHub issued the domain certificate.
- Enabled Enforce HTTPS.
- Kept custom-domain configuration in GitHub repository settings rather than adding a manually maintained `CNAME` file.

## Impact

Bread Pitt now has its own independent public identity and deployment path. Future Bread Pitt content can be developed and published without being intermixed with `bradcooke.com` or the Abbey Root website.

The deployment also provides a repeatable model for other standalone projects, such as Faster Platypus, when they are ready for their own repositories and domains.

## Validation

- Latest GitHub Pages workflow run completed successfully.
- GitHub Pages reports that all domain checks pass.
- `breadpitt.net` resolves to GitHub Pages.
- `www.breadpitt.net` is configured as the alternate hostname.
- The public Bread Pitt page loads successfully.
- GitHub issued a valid HTTPS certificate.
- Enforce HTTPS is enabled in the repository Pages settings.

## Lessons Learned

- GitHub Pages must be enabled with GitHub Actions as the publishing source before the initial deployment workflow can succeed.
- A temporary `NotServedByPagesError` is expected after adding a custom domain but before configuring its DNS records.
- GitHub Pages intentionally uses four A records with the same apex name and different IP addresses.
- Hostinger may display a generic warning about multiple records with the same name even though the four GitHub Pages records are correct.
- Certificate provisioning can finish shortly after DNS validation.
- The HTTPS checkbox becomes available automatically once GitHub issues the certificate.
- The working sequence is repository deployment, Pages activation, custom-domain configuration, DNS configuration, validation, and HTTPS enforcement.

## Next Steps

- Complete the Abbey review and validation workflow.
- Commit the session update.
- Continue defining the Bread Pitt site structure and initial content.
- Use this deployment as the reference workflow for future standalone static sites.

## Notes

DNS for `breadpitt.net` is managed through Hostinger.

GitHub Pages configuration is managed under:

`Bread Pitt repository -> Settings -> Pages`

Production site:

`https://breadpitt.net`
