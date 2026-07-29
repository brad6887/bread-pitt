---
title: "Bread Pitt Starter Record Foundation"
description: "Defined and validated the canonical starter-cycle record format using Brad Pitt's July 27 and July 28 feeding history."
date: 2026-07-29
status: complete
reviewed: true
session: starter-record-foundation
tags:
  - Bread Pitt
  - Starter Records
  - Sourdough
  - Content Model
---

# Bread Pitt Starter Record Foundation

## Objective

Define and validate a canonical starter-cycle record format using Brad Pitt's
existing feeding and observation history.

## Definition of Done

- A canonical starter profile exists.
- Each feeding cycle uses one record containing the feed and its later observations.
- Exact, approximate, inferred, and unknown information are distinguished.
- The format supports stable references to starter photographs.
- The July 27 and July 28 feeding cycles validate the format with real history.
- The structure can support future website timelines and starter analysis.
- The old split feeding-log and observation directories are removed.
- The complete change set passes validation and is captured in a session update.

## Summary

Established the first canonical content model for Brad Pitt's feeding and
observation history.

Each feeding cycle is now represented by one Markdown record containing the
feed, subsequent observations, outcome, assessment, and media status. This
replaces the original plan to maintain feeding logs and observations in
separate directories.

The format was validated using the July 27 and July 28 feeding cycles.

## Accomplishments

- Added the canonical Brad Pitt starter profile.
- Documented the starter-record directory structure and record rules.
- Defined one feeding cycle as the canonical record boundary.
- Added a completed July 27 starter-cycle record.
- Added a completed July 28 starter-cycle record.
- Distinguished exact, approximate, established-routine, and unknown values.
- Defined stable media paths by feeding-cycle date.
- Removed the unused split feeding-log and observation directories.
- Updated the general content documentation.
- Updated project planning documents for the completed session.

## Impact

Bread Pitt now has a maintainable starter-history model that keeps each feeding
together with the observations and outcome it produced.

The records are readable directly as Markdown while also containing enough
structured front matter to support future website timelines, summaries, and
starter analysis.

This establishes a reusable pattern for recording future feeding cycles without
creating separate or competing sources of truth.

## Validation

The following checks completed successfully:

- Starter record validation passed for
  content/starter/records/2026/2026-07-27.md.
- Starter record validation passed for
  content/starter/records/2026/2026-07-28.md.
- git diff --check reported no errors.
- Both records contain all required structured fields and narrative sections.

The starter records were reviewed for:

- schema version
- record type
- starter reference
- cycle date
- status
- feeding information
- outcome
- observations
- assessment
- media status

## Lessons Learned

- A feeding and its later observations are one logical event and should remain
  in one canonical record.
- Reconstructed routine information can be useful when it is explicitly marked
  as established-routine.
- Starter photographs should be organized by feeding cycle rather than by the
  time each individual photograph was taken.
- Structured data for future publishing can coexist with readable narrative
  Markdown.

## Next Steps

- Define and validate the first complete bake record.
- Use the July 29 50/50 White and Whole Wheat sourdough loaf as the example.
- Import the July 27 and July 28 starter photographs when the original files
  are available.
- Add earlier July starter cycles after the format has proven convenient during
  normal use.

## Notes

Abbey Doctor reported that Git identity was not configured even though
user.name and user.email were correctly inherited from
/home/bcooke/.gitconfig.

This appears to be an Abbey Doctor scope or parsing defect and did not block the
Bread Pitt session.
