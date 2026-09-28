# Magic Slide — Internalization (内製化) Status & Roadmap

The primary goal of this project is to **internalize the game itself** (ゲームの内製化),
not the surrounding portal shell.

| Level | Status |
|---|---|
| 1. Self-hosting (zero external deps) | ✅ done |
| 2. Native clean-room engine | ✅ done |
| 3. Original IP on our engine (ミツモリ村) | ✅ playable prototype at `/play` — see `docs/ip/` |

## Level 1 — Self-hosting (DONE ✅)

The complete game now runs from our own server with **zero external dependencies**:

- All 162 runtime files (PixiJS + Howler + createjs libs, `bundle.js`, sprite atlases,
  sound files, JSON manifests, language packs) are mirrored into
  `public/game/magicslide/`.
- The gamebox SDK (`gamebox.iframe.js`) is served locally from `public/game/`.
- The parent-side protocol (start / end / save / getdata / ad) is reimplemented natively
  in `src/components/GameCenter.tsx` — **no docomo backend, no ad network**.
- Verified: playing the game triggers **0 requests to kantangame.com** or any third party.
- Verified end-to-end: start overlay → how-to → title → gameplay (slides register) →
  game-over → result panel.

At this level the game is fully playable and owned in-repo, but the game *logic* is still
the vendor's minified `bundle.js` (obfuscated PixiJS/Pixim code).

## Level 2 — Native reimplementation (ENGINE FOUNDATION DONE ✅)

We now own the game *logic* in our own clean-room TypeScript, independent of the vendor's
minified bundle:

- **Full design spec**: [`docs/game/GAME_DESIGN.md`](../game/GAME_DESIGN.md) — grid model,
  spawn algorithm, slide/snap rules, combo scoring formula, jar/diamond system, 23-tier
  difficulty curve, game-over, state machine, audio map. Derived from analysis + the public
  `config.json`.
- **Native engine**: [`src/game/`](../../src/game/) — rendering-agnostic, zero-dependency,
  config-driven, seedable/deterministic. Implements grid, config spawn, slide, settle,
  combo scoring, jar/diamonds, level progression and game-over.
- **Runnable proof**: `npm run game:test` plays a headless auto-run and asserts the
  scoring/level/clear rules.

What remains for a full playable native game (renderer + FX, not core logic): wire a
PixiJS/Canvas renderer to the engine's `onChange` events, add booster methods
(fire/slice/thunder), and sample special block types on spawn. See
[`src/game/README.md`](../../src/game/README.md) for the fork guide.

The material below is the design data the engine already consumes:

### Game design data — `public/game/magicslide/assets/config.json`
- `level[]` — 23 difficulty tiers, each: `score` threshold, `type` block-color weights
  `[special, ?, low, normal, high]`, `holl` hole distribution, `minlow`, `addscore`.
- `skin[]` — block skins with `score`, `rare`, `probability` (gacha rates).
- `skinPrice` 2000, `podDiamondCount` 3, `diamondScore` 300,
  `sliceSelectBlockCount {min:3,max:4}`.

### Core mechanic (observed)
8-column grid; each row is a group of gem blocks. Drag a row horizontally to slide it;
completing a full horizontal line clears it and scores. Every committed slide spawns a
new row from the bottom, pushing the stack up. Blocks reaching the top = game over.
Breaking blocks fills the jar gauge → spawns diamonds. Boosters: fire (🔥), slice, thunder.

### Assets for a native build (already downloaded)
- Sprite sheets: `assets/commons/sheet/*.json|png` (ui, number, skin1-5, effects).
- Animate atlases: `assets/commons/animate/*/` (game_grid, game_object, game_jar,
  game_combo, top_girl, game_result, etc.).
- Audio: `assets/commons/sound/*.mp3` (24 SFX + bgm).
- Backgrounds/logos: `assets/commons/image/`, `assets/languages/{ja,en}/`.

### Suggested reimplementation approach
1. Build a new PixiJS (or the engine of choice) app in `src/game/` (TypeScript, our code).
2. Drive it from `config.json` (copy into `src/game/config.ts` or fetch at runtime).
3. Reuse the downloaded sprite atlases + audio as-is (they are plain PNG/JSON/MP3).
4. Keep the same parent postMessage contract (`GameCenter.tsx`) so the shell is unchanged
   — the new engine can drop into the existing iframe or render directly in-page.
5. Port screen flow: loading → how-to → title → play → result, matching
   `docs/design-references/` screenshots.

This is a substantial engine-development effort and is intentionally left as the next
scope. The captured data + assets make it a clean-room rebuild against a known spec
rather than reverse-engineering from a live site.
