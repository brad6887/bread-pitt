# Bread Pitt Domain Model

## Purpose

This document defines the initial domain model for Bread Pitt.

The model describes the project concepts, their relationships, and the
boundaries between canonical records, source material, media, analysis, and
published content.

It guides future record formats without requiring schemas, validators,
automation, or website implementation yet.

## Principles

- Each fact has one canonical source of truth.
- Records represent meaningful real-world things or events.
- Observations stay with the event that produced them.
- Intended recipe instructions remain separate from what happened during a
  specific bake.
- Approximate, reconstructed, inferred, and unknown information must not be
  presented as exact.
- Canonical records remain readable and maintainable as Markdown.
- Automation may consume canonical records but must not become a competing
  source of truth.
- New standalone record types should be created only when repeated use proves
  that they have an independent lifecycle or identity.

## Information Layers

Bread Pitt separates information into five layers.

### Source Material

Source material preserves information received or recovered from elsewhere.

Examples include:

- recovered recipe documents
- imported notes
- exported sensor data
- original spreadsheets
- historical files used during reconciliation

Source material belongs under `sources/`.

Source material is evidence, not automatically canonical Bread Pitt content.

### Canonical Content

Canonical content contains the human-maintained Bread Pitt record.

Examples include:

- the Brad Pitt starter profile
- starter-cycle records
- recipes and recipe versions
- bake records
- research and experiment records

Canonical content belongs under `content/`.

When canonical content conflicts with remembered or published material, the
conflict must be reviewed rather than silently resolved.

### Media

Media contains photographs, video, audio, and other binary assets.

Media belongs under `media/`.

Canonical records reference relevant media. Media files do not replace the
record that explains what they show.

### Derived Analysis

Derived analysis is calculated or interpreted from canonical records, source
data, or sensor data.

Examples include:

- average fermentation temperature
- rise-duration comparisons
- bake-to-bake comparisons
- starter activity trends
- generated summaries

Derived analysis must identify its inputs. It may be regenerated and must not
silently replace the underlying observations.

### Publishing Output

Publishing output adapts canonical content for a website, article, timeline, or
other audience.

Publishing output belongs under `content/publishing/` or a future generated
site location.

Published wording may be shorter or more entertaining, but factual changes
must first be made in the canonical record.

## Primary Domain Concepts

## Starter

A starter is a maintained sourdough culture with a stable identity and history.

The starter profile owns information that remains reasonably stable across
feeding cycles, including:

- name and slug
- origin
- project generation
- hydration
- usual feeding routine
- current status
- location and timezone
- project-wide dietary constraints when relevant

The current canonical starter profile is:

`content/starter/profile.md`

Brad Pitt is currently the only starter, but the model does not assume that
there can never be another one.

## Starter Cycle

A starter cycle is the event that begins with a feeding and ends when the
resulting activity has been assessed or superseded by the next feeding.

A starter-cycle record owns:

- the feeding
- ingredient amounts
- feeding time and precision
- observations made after the feeding
- rise and peak behavior
- aroma and texture observations
- outcome and assessment
- media references
- record status

A feeding and its later observations are not separate domain records.

Starter-cycle records belong under:

`content/starter/records/YYYY/`

A starter has many starter cycles. Each starter cycle belongs to one starter.

## Recipe

A recipe is the stable identity of a preparation Bread Pitt intends to make
repeatedly.

Examples include:

- 50/50 White and Whole Wheat Sourdough
- sourdough dinner rolls
- discard pizza
- sourdough cinnamon rolls

A recipe owns:

- name and slug
- purpose or style
- expected yield
- dietary constraints
- general notes that apply across versions
- the history of its recipe versions

Recipes belong under:

`content/recipes/`

The physical file structure for recipes and versions will be defined when the
first canonical recipe is created.

## Recipe Version

A recipe version is a reproducible set of intended ingredients, quantities,
method steps, targets, and recommendations.

A recipe version owns the intended process:

- ingredient quantities
- expected hydration or ratios
- method steps
- fermentation guidance
- equipment assumptions
- bake temperature
- expected internal temperature
- expected yield

A recipe version must be identifiable well enough for a bake to state which
instructions it attempted to follow.

Changing an intended ingredient amount or method may create a new version.
Correcting spelling or improving explanation does not necessarily create one.

The initial implementation may keep recipe identity and version history in one
Markdown file until repeated use demonstrates that separate version files are
needed.

## Bake

A bake is one actual attempt to produce something from a recipe version.

A bake record owns what happened during that attempt:

- date and status
- recipe-version reference
- starter-cycle reference when sourdough starter was used
- actual ingredient quantities
- intentional and accidental deviations
- process timeline
- equipment used
- environment summaries
- observations
- result
- assessment
- lessons learned
- media references

Bake records belong under:

`content/bakes/YYYY/`

A bake references the recipe version it attempted to follow. The recipe does
not duplicate the bake history.

A bake may reference a starter cycle that supplied the starter. The starter
cycle does not need a manually maintained reverse list of bakes.

## Observation

An observation is something directly noticed or measured during a starter
cycle, bake, or experiment.

Examples include:

- visible rise
- aroma
- dough texture
- dough strength
- surface appearance
- oven spring
- crumb structure
- internal temperature
- taste

An observation does not initially require a standalone file. It belongs inside
the starter cycle, bake, or experiment that provides its context.

An observation should record its time and precision when that information
matters.

## Environment Summary

An environment summary describes relevant conditions during part of a starter
cycle or bake.

Examples include:

- average room temperature during bulk fermentation
- temperature range during proofing
- average humidity
- oven temperature observations

Raw sensor samples are source data. The meaningful summary belongs in the
canonical event record that used it.

Environment summaries must identify:

- the period summarized
- the measurement source
- the statistic or interpretation used
- missing or incomplete coverage when relevant

Bread Pitt does not need to publish raw sensor streams to make useful
environment information available.

## Equipment Use

Equipment use identifies tools that materially affected a bake or experiment.

Examples include:

- Dough Cloony
- cast-iron Dutch oven
- proofing basket
- thermometer
- scale

Equipment used during an attempt belongs in the bake record.

A separate equipment profile should be created only when an item develops
independent information worth maintaining, such as calibration, capacity,
settings, modifications, or a meaningful usage history.

## Result

A result records the observable outcome of a bake or experiment.

For a bake, this may include:

- completion status
- finished weight
- internal temperature
- crust
- crumb
- flavor
- texture
- oven spring
- photographs
- whether it would be made again

Results belong to the event that produced them.

## Assessment

An assessment interprets observations and results.

Examples include:

- starter readiness
- likely fermentation problems
- successful techniques
- suspected causes of a poor result
- changes worth trying next time

Assessments must distinguish direct evidence from interpretation.

An assessment does not rewrite the underlying observation.

## Experiment

An experiment is a deliberate comparison or test intended to answer a
question.

Examples include:

- comparing fermentation temperatures
- changing hydration
- comparing proofing methods
- testing a flour blend
- evaluating starter age at mixing

An experiment may reference multiple starter cycles, recipe versions, and
bakes.

The experiment record owns:

- the question
- the planned comparison
- referenced records
- observations used
- findings
- limitations
- follow-up questions

Experiment records belong under `content/research/` unless later use
demonstrates that a dedicated experiment area is warranted.

Experiments reference canonical records rather than copying their complete
contents.

## Media Asset

A media asset is a photograph, video, or other file documenting a starter
cycle, recipe, bake, result, or experiment.

Media assets are stored separately from canonical Markdown.

The canonical owning record should identify:

- the media path
- what the asset documents
- when it was captured when known
- caption or context when useful
- import or publishing status when relevant

Starter media is organized by starter-cycle date.

Bake media should be organized by bake identity once the first bake record
format is defined.

## Relationships

The initial relationships are:

- one starter has many starter cycles
- each starter cycle belongs to one starter
- one recipe has one or more recipe versions
- each recipe version belongs to one recipe
- one recipe version may be used by many bakes
- each bake follows one primary recipe version
- a sourdough bake may reference the starter cycle that supplied its starter
- a bake owns its actual process, deviations, observations, results, assessment,
  environment summaries, equipment use, and media references
- an experiment may reference multiple canonical records
- publishing output derives from canonical content
- derived analysis references its canonical or source inputs

## Record Ownership Boundaries

### Recipe Version Versus Bake

The recipe version records what should happen.

The bake records what did happen.

An ingredient amount changed for one attempt belongs in the bake as a
deviation. It changes the recipe version only when Bread Pitt intentionally
adopts the change for future attempts.

### Starter Profile Versus Starter Cycle

The starter profile records stable identity and routine.

The starter cycle records one feeding and the behavior produced by it.

A different feeding time or ratio belongs in that cycle. It changes the profile
only when it becomes the new established routine.

### Raw Sensor Data Versus Environment Summary

Raw readings remain preserved source data.

The event record owns the useful summary and identifies the readings or source
used to calculate it.

### Observation Versus Assessment

An observation records what was seen, smelled, felt, timed, or measured.

An assessment records what Bread Pitt thinks that observation means.

### Canonical Content Versus Publishing

Canonical content preserves the complete project record.

Publishing output presents selected information for an audience and must not
become an independent factual authority.

## Information Quality

Bread Pitt must not manufacture precision.

Existing starter records use these precision values:

- `exact`
- `approximate`
- `established-routine`
- `unknown`

Other record types may use the same values where appropriate.

Information inferred from photographs, later recollection, or related records
must be explicitly identified as inferred. An inference must not overwrite the
underlying known or unknown value.

## July 29 Bake Validation

The July 29, 2026 50/50 White and Whole Wheat sourdough bake can be represented
by this model without creating the full record during this session.

The model would represent it as:

- starter: Brad Pitt
- starter cycle: the cycle that supplied the starter, once that cycle is
  recorded and verified
- recipe: 50/50 White and Whole Wheat Sourdough
- recipe version: the one-loaf ingredient set and intended method used that day
- bake: the actual July 29 attempt
- equipment use: including Dough Cloony and the baking vessel used
- process observations: autolyse, mixing, folds, fermentation, shaping,
  proofing, and baking observations
- environment summary: relevant temperature or humidity summaries when source
  data becomes available
- result: the finished loaf and measurable or visible outcome
- assessment: what worked, what did not, and what should change
- media: photographs documenting the process and finished loaf

The recipe version would retain the intended method. The bake would retain any
timing changes, deviations, uncertainty, or unexpected results.

This validation exposes one known dependency: the starter cycle supplying the
July 29 bake may need to be recorded before the bake can reference it
canonically. That dependency does not require restructuring the existing
starter model.

## Current Repository Mapping

The current logical model maps to the repository as follows:

- starter identity: `content/starter/profile.md`
- starter cycles: `content/starter/records/YYYY/`
- recipes and recipe versions: `content/recipes/`
- bakes: `content/bakes/YYYY/`
- experiments and research: `content/research/`
- publishing adaptations: `content/publishing/`
- media assets: `media/`
- preserved source material: `sources/`

This document defines the concepts and boundaries. Each focused implementation
session may define the detailed format for one record type.

## Deferred Implementation

The following work is intentionally out of scope for the initial domain model:

- creating the complete July 29 bake record
- creating the first canonical recipe record
- defining formal schemas
- writing validators
- adding Abbey commands
- importing photographs
- collecting sensor data
- calculating automated environment summaries
- generating website pages
- designing a database
- creating standalone ingredient or equipment catalogs
- automating experiments or recommendations

These should be implemented only through focused sessions that validate each
workflow against real Bread Pitt material.

## Next Validation

The next focused session should define and validate the first complete bake
record using the July 29 50/50 White and Whole Wheat sourdough bake.

That session should use this model as guidance and change it only when the real
workflow demonstrates that a concept or boundary is incorrect.
