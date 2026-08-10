# Bread Pitt Bake Media Workflow

## Purpose

Document the complete lifecycle of bake photos from camera import to published website.

This workflow is designed to make each bake repeatable:

- preserve original photos
- keep captions connected to filenames
- generate website-safe derivatives
- validate content before publishing

## Overview

Each bake follows this lifecycle:

    Camera/import source
            |
            v
    media/bakes/YYYY/bakeXXX
    (original JPG/XMP files - committed)
            |
            v
    working/media/bakes/YYYY/bakeXXX
    (processing workspace - ignored)
            |
            v
    public/images/bakes/YYYY/bakeXXX
    (published website derivatives)

## Directory Roles

### media/

Contains the original project-owned media.

Example:

    media/bakes/2026/bake002/
        IMG_9935.JPG
        IMG_9935.xmp

Rules:

- Original JPG files are preserved.
- XMP sidecars contain captions and metadata used by Abbey.
- Do not manually rename files.

### working/

Temporary processing workspace.

Example:

    working/media/bakes/2026/bake002/

Rules:

- Created from the original media directory.
- Abbey rename processing happens here.
- Generated manifests are created here.
- This directory is ignored by git.

### public/images/

Published website assets.

Example:

    public/images/bakes/2026/bake002/

Contains:

- resized derivatives
- metadata-clean images
- files referenced by the website

## Before Running Build

Every bake story must declare the matching bake ID.

Example:

Directory:

    content/bakes/2026/bake002/

Requires:

    ---
    bake: bake002
    ---

The bake ID must match:

- directory name
- bake.yml
- story.md front matter

## Complete Workflow

## Step 1 - Create Bake Structure

Create:

    content/bakes/YYYY/bakeXXX/
        bake.yml
        photos.yml
        story.md
        media-intake.json

Add the media publication workflow entry to:

    .abbey/media.yml

Initialize all template values.

Replace:

- bakeXXX with the actual bake ID
- YYYY with the actual year
- example photo IDs
- example gallery IDs

Verify:

    story.md

contains:

    ---
    bake: bakeXXX
    ---

where bakeXXX matches the directory name.

## Step 2 - Add Original Photos

Copy original JPG/XMP pairs into:

    media/bakes/YYYY/bakeXXX

Example:

    media/bakes/2026/bake002/

Do not rename files manually.

The filename conversion happens through Abbey using XMP captions.

## Step 3 - Create Processing Workspace

Copy original media into:

    working/media/bakes/YYYY/bakeXXX

Example:

    cp media/bakes/2026/bake002/* working/media/bakes/2026/bake002/

The working directory is where Abbey performs transformations.

## Step 4 - Rename Exports

Run from the Bread Pitt repository root:

    abbey media rename-exports working/media/bakes/YYYY/bakeXXX

Abbey uses:

- XMP captions
- capture dates
- filename rules

Creates:

    working/media/bakes/YYYY/bakeXXX/.abbey-rename-manifest.json

Verify the manifest contains:

    project: Bread Pitt
    configuration: /path/to/bread-pitt/.abbey/media.yml

If the manifest references Abbey Root instead of Bread Pitt, stop and rerun from the Bread Pitt repository.

## Step 5 - Generate Intake Manifest

Run:

    pnpm bake:intake generate content/bakes/YYYY/bakeXXX

Creates:

    content/bakes/YYYY/bakeXXX/media-intake.json

Review:

- captions
- selected images
- generated filenames

The intake manifest connects renamed working files to publication.

## Step 6 - Validate Publication

Run:

    abbey media publish bakeXXX --dry-run

Confirm:

- correct source directory
- correct destination directory
- expected image list
- no unexpected files

## Step 7 - Publish Website Images

Run:

    abbey media publish bakeXXX

Creates:

    public/images/bakes/YYYY/bakeXXX

and:

    content/bakes/YYYY/bakeXXX/media-publication.json

The publication manifest records:

- source files
- generated derivatives
- hashes
- dimensions
- metadata removal validation

## Step 8 - Complete Story Content

Update:

    content/bakes/YYYY/bakeXXX/story.md

Story references must match:

    photos.yml

Photo example:

    {{ photo: hero }}

Gallery example:

    {{ gallery: ingredients }}

The website build validates these references.

## Step 9 - Validate Website

Run:

    pnpm build

The build validates:

- Astro content
- bake routes
- story front matter
- photo references
- gallery references
- generated pages

## Common Failures

### Story has wrong bake ID

Error:

    Bake bake002 story front matter must declare bake: bake002

Fix:

Update:

    content/bakes/YYYY/bakeXXX/story.md

Example:

    ---
    bake: bake002
    ---

### Missing gallery reference

Error:

    Bake bake002 story references unknown gallery

Fix:

Either:

- add the gallery definition to photos.yml

or:

- remove the unused gallery reference from story.md

### Template references remain

Example:

    {{ gallery: example-comparison }}

Remove unused template references or create the matching gallery.

### Missing publication manifest

Error:

    media-publication.json not found

Fix:

Complete:

    abbey media publish bakeXXX

## Bake Completion Checklist

- [ ] bake.yml complete
- [ ] photos.yml complete
- [ ] story.md front matter matches bake ID
- [ ] original JPG/XMP files stored in media/
- [ ] working directory created
- [ ] Abbey rename completed
- [ ] .abbey-rename-manifest.json validated
- [ ] media-intake.json generated
- [ ] publication dry run successful
- [ ] derivatives published
- [ ] media-publication.json created
- [ ] story references validated
- [ ] pnpm build passes

## Future Improvements

Potential Abbey validation improvements:

Add:

    abbey bake validate

Checks:

- bake directory matches bake.yml ID
- story.md matches bake ID
- photos.yml references exist
- template placeholders are removed
- required manifests exist
- media workflow is complete
