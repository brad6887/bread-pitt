---
title: "Bread Pitt Staging Analytics Guard"
description: "Bread Pitt staging visits are now excluded from production Umami analytics."
date: 2026-08-04
draft: false
tags:
  - Bread Pitt
  - Analytics
  - Staging
---

# Bread Pitt Staging Analytics Guard

## Summary

Bread Pitt now limits its Umami analytics script to the public domains:

    breadpitt.net
    www.breadpitt.net

This keeps visits to the internal staging site at
`breadpitt.sites01.home.arpa` out of production analytics.

## Accomplishments

- Added the production-domain restriction to the shared Astro layout.
- Rebuilt all 15 Bread Pitt pages successfully.
- Confirmed the generated site contains the expected analytics setting.
- Validated the restricted build on the internal staging site.

## Lessons Learned

A hostname restriction in the shared analytics script allows staging and
production to use the same static build without counting internal reviews as
public traffic.

## Next Steps

- Use the internal staging site for future Bread Pitt reviews.
- Commit and publish the safeguard through the normal GitHub Pages workflow.
