<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# magic-slide

## What This Is
A casual block-sliding puzzle game, currently a faithful clone of a mobile browser game ("Magic
Slide", witch-themed) running self-hosted with the vendor's game runtime in `public/game/`. It is
being turned into an original, rights-clean game.

**Current goal: reach L0 (recover the fixed cost) by the end of June R9 (2027).** L0-a means the
AdMob estimated earnings reach roughly $7/month (accrual basis), judged in June. The plan, schedule
and feasibility assessment live in [`docs/produce/L0_PLAN.md`](docs/produce/L0_PLAN.md); the
success levels (L0 to L2) and revenue model are in
[`docs/produce/SUCCESS_DEFINITION.md`](docs/produce/SUCCESS_DEFINITION.md). Read these before
planning work. The project's weight is initial deploy and stabilization; from July R9 it is mostly
maintenance and support.

## Decisions
- **Next.js first.** The first deliverable is a Next.js web version deployed to the company site
  (Cloudflare Workers). Do not generalize for iOS yet.
- **iOS later, as a separate React Native (Expo) project**, started fresh and merged back by
  refactoring afterwards. Do not build the iOS app in this repo for now.
- **React Native as a tie-breaker only.** When two options are otherwise equal, pick the one that
  also works in React Native:
  1. Keep game rules, state, scoring, RNG and animation sequencing in plain TypeScript with no DOM
     or Next.js imports (extend the archived engine).
  2. Use save, audio and ads through interfaces; never call `localStorage` or WebAudio from game
     logic.
  3. Use portable asset formats (PNG/SVG images, audio files).
  4. Keep the rendering layer thin.
- **Pace: steady, not rushed.** The estimates in `L0_PLAN.md` are one indicator based on conventional
  effort; the June R9 date is a target to attempt, not a reason to hurry. The 8 h/week figure is
  provisional and may change with progress. Do not add urgency, extra scope, or side work to meet it.
- **Scope stays minimal**: core loop, best-score save, a hook for a rewarded-ad continue, theme
  assets, sound. No boosters, shop, gacha, coins, or jar/diamonds until after L0.
- **Rights**: everything in `public/game/` (vendor art, sound, `bundle.js`) and the leftover
  third-party files in `public/images/` must be replaced or removed before any public release.
  Do not add third-party assets or code. The replacement theme is decided later (light theme, one
  page theme sheet; see `SUCCESS_DEFINITION.md`).
- **Budget**: 15,000 yen for R9 (Apple Developer Program fee plus margin). Avoid adding paid
  services.

## History
- The generic "clone any website" template layer was removed; this repo is scoped to this game.
- An attempt to build a from-scratch engine and an original IP ("ミツモリ村") was rolled back.
  What was learned is in [`docs/archive/2026-09-mitsumori-ip-poc/`](docs/archive/2026-09-mitsumori-ip-poc/README.md);
  the full code is at the git tag `archive/mitsumori-ip-poc` (engine in `src/game/engine`).

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Styling:** Tailwind CSS v4
- **Deployment:** Cloudflare Workers (via `@opennextjs/cloudflare` / `wrangler`)

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build
- `npm run deploy` — Build and deploy to Cloudflare Workers (default `*.workers.dev` URL)
- `npm run deploy:domain` — Same, and also attach `magic-slide.tubeclip.work`

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first (the game must fit narrow phone viewports without horizontal scroll)

## Project Structure
```
src/
  app/              # Next.js routes (shell.css holds the ported original shell styles)
  components/       # GameShell (page), GameCenter (game iframe + host-side message protocol)
    ui/             # shadcn/ui primitives
  lib/utils.ts      # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  game/             # Vendor game runtime (assets, bundle.js, gamebox SDK); to be replaced
  seo/              # Favicons, OG images
docs/
  produce/          # Produce-side docs: as-is/to-be, success definition, market data, game overview, L0 plan
  research/         # Inspection output from the original target site (behaviors, layout)
  design-references/ # Screenshots and visual references
  archive/          # Rolled-back experiments, kept with a summary of what was learned
scripts/            # Asset download scripts
```

## Host boundary
The game talks to its host with `start / end / save / getdata / ad / rewardad` messages
(see `docs/research/BEHAVIORS.md`); `GameCenter.tsx` is the host. Keep ads, saving and analytics on
the host side of this boundary so a publisher or another platform (iOS) can replace them.
