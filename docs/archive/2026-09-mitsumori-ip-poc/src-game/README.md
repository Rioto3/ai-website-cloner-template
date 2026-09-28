# Magic Slide — native game engine (`src/game/`)

A clean-room, **rendering-agnostic** reimplementation of the Magic Slide game logic, written
from the design spec in [`docs/game/GAME_DESIGN.md`](../../docs/game/GAME_DESIGN.md). This is
the "internalized" (内製化) game: the rules live in our own TypeScript, driven by the plain
`config.json`, with **no dependency on the vendor's minified bundle**.

## Layout

```
src/game/
  types.ts            Block/Cell/LevelTier/GameConfig/GameSnapshot types
  config.ts           loadConfig() / normalizeConfig() — reads assets/config.json
  engine/
    rng.ts            seedable PRNG + weighted pick / shuffle (deterministic runs)
    scoring.ts        level lookup (cumulative bands) + combo score formula
    grid.ts           grid model, constants, row-spawn algorithm
    game.ts           MagicSlideGame — the headless controller (the game loop)
    smoke.ts          runnable proof: auto-plays a run + asserts the rules
```

## What's implemented (see GAME_DESIGN.md for the why)

- 8×11 grid, 80 px cells, empty/blocked model.
- Config-driven **row spawn**: 1–3 holes weighted by `level.holl`, runs chopped into
  weight-1..4 blocks, random skin/color.
- **Slide** with pointer→column snapping and collision/lock rules
  (`MagicSlideGame.slide`, `MagicSlideGame.snapColumn`).
- **Settle → line-clear → combo scoring** (`addscore × (chainIndex+1)`, escalating).
- **Magic jar** gauge (`podGauge`), diamond payout (`podDiamondCount`, `diamondScore`).
- **Level progression** by cumulative score across the 23 tiers.
- **Game over** when a block reaches the danger row after settling.
- Deterministic (seedable) for tests and replays.

## Run it (headless, no browser)

```bash
npm run game:test      # plays a seeded run and asserts the scoring/level/clear rules
```

## How to fork / extend into a full game

1. **Rendering** — the engine emits `GameEvents` (`onChange`, `onScore`, `onCombo`,
   `onLineClear`, `onJarComplete`, `onGameOver`). Build a renderer (PixiJS, Canvas, or DOM)
   that subscribes to `onChange(snapshot)` and draws `snapshot.grid`. The mirrored sprite
   atlases and audio in `public/game/magicslide/assets/` are reusable as art/sound.
2. **Input** — translate pointer drags to `game.slide(row, line, MagicSlideGame.snapColumn(x))`.
3. **Boosters** — fire/slice/thunder are documented in GAME_DESIGN.md §8; add them as engine
   methods that clear regions / target type-3 blocks, reusing the same settle path.
4. **Block types 1/2/4** — the spawner currently emits normal blocks; extend `buildRow` /
   `pickSkin` to sample `level.type` weights and set special behaviours (stone = non-movable).
5. **Persistence / shell** — the existing `src/components/GameCenter.tsx` postMessage host can
   drive a native renderer instead of the vendor iframe: swap the iframe for your canvas and
   call the same start/end/save/getdata handlers.

The engine has zero external dependencies, so it can be lifted into a standalone game repo
as-is — this directory + `docs/game/GAME_DESIGN.md` + the `assets/` folder is a complete,
forkable game project.
