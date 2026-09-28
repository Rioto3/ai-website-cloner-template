# magic-slide

A faithful clone of a mobile browser puzzle game ("Magic Slide" — a witch-themed block-sliding
puzzle originally served from a docomo game portal), fully internalized to run with **zero
external/vendor dependencies**, deployed as a single Cloudflare Worker.

## Where this came from

This repo started as a generic "clone any website" template. Using that template's workflow, the
target game's page was reverse-engineered and cloned: the shell UI (header, side panels, modals,
result screen) was rebuilt in Next.js, and the game itself (all 162 runtime files — PixiJS,
Howler, sprite atlases, sounds, JSON manifests) was mirrored locally and wired up so it runs with
**0 requests to any third party**.

The generic templating layer (the `/clone-website` skill, its inspection guide, and the
multi-agent-platform scaffolding) has been removed — this repo is now scoped specifically to this
one game.

An attempt to go further — rebuild the game engine from scratch and reskin it as an original IP
("ミツモリ村") — was tried and rolled back. See
[`docs/archive/2026-09-mitsumori-ip-poc/`](docs/archive/2026-09-mitsumori-ip-poc/README.md) for
what was attempted and what was learned. The project is currently back at the faithful witch-clone
baseline, with cleanup work (mobile viewport, removing vendor/ad UI, deploying as a standalone
Cloudflare Worker) layered on top.

## Current position

Having established a working technique for cloning + internalizing this kind of puzzle game, this
project is now exploring whether that capability is useful on its own — as a clean, ad-free,
self-hosted reference build of the game, deployable anywhere as a single Worker.

## Getting started

```bash
npm install
npm run dev
```

## Deployment

Deploys as a single Cloudflare Worker via `@opennextjs/cloudflare` / `wrangler`:

```bash
npm run deploy   # build + deploy
npm run push     # build + upload a new version (no traffic shift)
npm run staging  # promote the latest uploaded version
```

## Tech Stack

- **Next.js 16** — App Router, React 19, TypeScript strict
- **shadcn/ui** — Radix primitives + Tailwind CSS v4
- **Tailwind CSS v4** — oklch design tokens
- **Cloudflare Workers** — via `@opennextjs/cloudflare`

## Project Structure

```
src/
  app/              # Next.js routes
  components/       # Game shell (header, side panels, modals, result panel)
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons
  lib/utils.ts      # cn() utility
  types/            # TypeScript interfaces
public/
  game/             # Self-hosted game runtime — zero external deps
  seo/              # Favicons, OG images
docs/
  research/         # Extraction output from the original target site
  design-references/ # Screenshots
  archive/          # Rolled-back experiments, kept with a summary of what was learned
scripts/
  download-assets.mjs # Asset download helper used during the original clone
AGENTS.md           # Agent instructions (single source of truth)
CLAUDE.md           # Claude Code config (imports AGENTS.md)
```

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # ESLint check
npm run typecheck # TypeScript check
npm run check     # Run lint + typecheck + build
npm run deploy    # Build and deploy to Cloudflare Workers
```

### If using docker

```bash
docker compose up app --build # build and run the app
docker compose up dev --build # run the app in dev mode on port 3001
```

## Not Intended For

- **Phishing or impersonation** — this project must not be used for deceptive purposes,
  impersonation, or any activity that breaks the law.
- **Passing off someone's design as your own** — logos, brand assets, and original copy belong to
  their owners.
- **Violating terms of service** — the original site's terms should be checked before any public
  redistribution of this clone.
