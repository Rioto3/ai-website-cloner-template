<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# magic-slide

## What This Is
A faithful clone of a mobile browser puzzle game ("Magic Slide" — witch-themed block-sliding
puzzle) that had previously been reverse-engineered into this Next.js codebase, and is now being
internalized (self-hosted, zero external/vendor dependency) as a standalone app.

The project started life from a generic "clone any website" template. That generic template
layer has been removed — this repo is now scoped specifically to this one game.

An earlier attempt to rebuild the game with a from-scratch engine and reskin it as an original IP
("ミツモリ村") was tried and rolled back; see [`docs/archive/2026-09-mitsumori-ip-poc/`](docs/archive/2026-09-mitsumori-ip-poc/README.md)
for what was learned. The project is currently back to the faithful witch-clone baseline.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Cloudflare Workers (via `@opennextjs/cloudflare` / `wrangler`)

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build
- `npm run deploy` — Build and deploy to Cloudflare Workers

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Project Structure
```
src/
  app/              # Next.js routes
  components/       # React components (game shell, header, modals, result panel, ...)
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  game/             # Self-hosted game runtime (assets, gamebox SDK) — zero external deps
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output from the original target site (design tokens, layout, behaviors)
  design-references/ # Screenshots and visual references
  archive/          # Rolled-back experiments, kept with a summary of what was learned
scripts/            # Asset download scripts
```
