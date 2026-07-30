---
title: "Bread Pitt Domain Model"
description: "Defined the initial Bread Pitt domain model and validated its concepts and record boundaries against the existing starter records and July 29 bake workflow."
date: 2026-07-30
status: complete
reviewed: true
session: bread-pitt-domain-model
tags:
  - Bread Pitt
  - Domain Model
  - Content Model
---

# Bread Pitt Domain Model

## Objective

Define and document the initial Bread Pitt domain model, incorporating the
established starter-record model and validating the broader relationships
against the July 29 sourdough bake.

## Definition of Done

- One authoritative document defines the initial Bread Pitt domain model.
- The model identifies the canonical records for starters, starter cycles,
  recipes, recipe versions, and bakes.
- Supporting concepts such as equipment, environment summaries, observations,
  results, assessments, experiments, and media are defined.
- Record ownership and boundaries prevent duplicate sources of truth.
- Existing starter records fit the model without restructuring.
- The July 29 bake can be represented by the model without requiring its
  complete bake record during this session.
- Source material, canonical content, media, derived analysis, and publishing
  output are clearly distinguished.
- Schemas, validators, commands, sensor collection, website implementation, and
  the complete July 29 bake record remain out of scope.
- Planning documents and this session update capture the completed decisions.

## Summary

Defined the first project-wide Bread Pitt domain model.

The model builds on the established starter-cycle records and expands the
project vocabulary to cover recipes, recipe versions, bakes, observations,
environment summaries, equipment use, results, assessments, experiments, and
media.

It also separates preserved evidence, canonical records, derived analysis, and
published output so future workflows do not create competing sources of truth.

## Accomplishments

- Added `docs/domain-model.md` as the authoritative initial domain-model
  document.
- Defined starters and starter cycles as separate stable and event-based
  concepts.
- Defined recipes as stable identities and recipe versions as reproducible
  intended instructions.
- Defined bakes as individual attempts that record what actually happened.
- Established that observations, results, assessments, equipment use, and
  environment summaries belong to the event that provides their context.
- Defined experiments as records that reference canonical events rather than
  duplicating them.
- Distinguished source material, canonical content, media, derived analysis,
  and publishing output.
- Documented record-ownership boundaries that prevent recipe instructions from
  becoming mixed with unrelated bake history.
- Validated the model conceptually against the July 29 50/50 White and Whole
  Wheat sourdough bake.
- Updated project planning to make the first complete recipe and bake workflow
  the next focused session.

## Impact

Bread Pitt now has a shared vocabulary and clear ownership rules for future
content.

The project can add recipe and bake records without deciding the structure
again in every session. Existing starter records remain valid, and future
sensor summaries, experiments, analysis, and publishing output have defined
relationships to canonical records.

The model remains intentionally lightweight. It provides enough structure to
guide real workflows without introducing a database, formal schemas, or
premature automation.

## Validation

The domain model validation confirmed that:

- all required primary concepts are present
- information layers are defined
- recipe-version and bake ownership are distinct
- observation and assessment ownership are distinct
- raw sensor data and canonical environment summaries are distinct
- the existing starter record precision vocabulary is preserved
- the established feeding-cycle boundary is compatible with the broader model
- the July 29 bake can be represented without restructuring the starter model

Additional validation:

- `git diff --check` reported no whitespace errors.
- Existing starter profile and cycle records were not modified.
- Planning documents identify the first recipe and bake workflow as the next
  focused implementation session.

## Lessons Learned

- The starter-record session had already established the most important event
  boundary: observations belong with the feeding cycle that produced them.
- Recipes and bakes need a similarly explicit boundary between intended and
  actual behavior.
- Sensor data is useful project evidence, but raw samples do not need to become
  canonical narrative content.
- Equipment, ingredients, observations, and media do not need standalone
  records until they demonstrate an independent lifecycle.
- A small domain model can guide future implementation without requiring a
  database or formal schema.
- Real bake history is a better validation tool than designing abstract record
  structures in isolation.

## Next Steps

- Define and validate the first complete bake record.
- Use the July 29 50/50 White and Whole Wheat sourdough bake as the reference
  example.
- Create the minimum canonical recipe and recipe-version structure required by
  the bake.
- Record or verify the starter cycle that supplied the July 29 bake.
- Import and reference the bake photographs when their original files are
  available.

## Notes

The initial domain model intentionally defers:

- formal schemas
- validators
- Abbey commands
- sensor collection
- automated analysis
- website generation
- standalone ingredient and equipment catalogs

These should be introduced only after real Bread Pitt workflows demonstrate a
stable need.
