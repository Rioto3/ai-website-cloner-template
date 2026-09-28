# Magic Slide — Game Design Specification

A clean-room design spec derived from analysing the game's runtime behaviour and its
public `config.json`. It describes the **rules and systems** of the game (which are
functional, not the vendor's specific code or art) so a game team can rebuild it natively.

- Runtime: PixiJS 5 + Howler (audio) + Adobe Animate exports (createjs) for cutscene/UI art.
- Canvas: portrait 9:16, logical playfield uses **80 px cells**.
- Design data lives in `public/game/magicslide/assets/config.json` (mirrored, plain JSON).

---

## 1. Playfield & coordinate model

- **Grid: 8 columns × 11 rows.** Cell = 80×80 px. Playfield content area = 640×880 px,
  centred; sky/castle art scrolls behind it.
- `grid[row][line]` holds either the **empty marker** or a **block reference**. Row 0 is the
  top, row 10 the bottom. `line` is the column index (0–7).
- A **block** occupies `weight` consecutive columns in one row:
  `{ type, weight(1–4), color, skinId, row, line, isEmpty }`. Its cells all point at the
  same block object; clearing sets each back to the empty marker.

## 2. Block types

| type | role | notes |
|---|---|---|
| 0 | normal gem | draggable; participates in line clears; carries a color+skin |
| 1 | special (heavy) | larger settle offset; appears with difficulty |
| 2 | stone / rock | **non-interactive** (can't be dragged); cleared only by clearing its row / boosters; `se_stonebreak` |
| 3 | diamond / treasure | slice-booster target; yields treasure on clear |
| 4 | special | extra effect variant |

Per-row spawn draws each block's type from the current level's **`type` weight array**
`[w0, w1, w2, w3, w4]` (see §6). Index 3 (normal) dominates early; index 0 (stone) grows
with difficulty, making the board harder to keep clear.

## 3. Core loop — slide → settle → spawn

1. **Drag (span-constrained)**: press a normal block (types 1/3/4 also draggable; type 2 is
   locked). On press, compute the block's **free span** by scanning its row: walk left from
   `line−1` until the first occupied cell → `min = thatCol + 1` (else 0); walk right from
   `line+weight` until the first occupied cell → `maxExclusive = thatCol` (else 8). During
   the drag, x is **hard-clamped** to `[min·80, maxExclusive·80 − weight·80]` — blocks can
   never pass through neighbours or leave the board (an `se_drop` tick plays when hitting an
   end). A ghost/highlight follows the pointer. Two-finger touches are ignored.
2. **Release / snap**: target column = `clamp(floor((x + cellWidth/2) / cellWidth), 0, 7)`,
   further clamped into the free span. The block snaps to that column.
3. **Commit (only if the column actually changed)**:
   - Clear the block's old cells, write it into the new cells.
   - **Jar gauge** += `1 / podGauge[jarCompleteCount]` (see §5).
   - **Settle** the board (§4): gravity → cascade clears → danger check → spawn a new bottom
     row → (gravity → clears → danger) again, repeating spawns until the bottom `minlow`
     rows are non-empty.
4. Combo counter resets to 0 at the start of each drag; it accumulates across the whole
   cascade triggered by that single commit (including clears caused by the spawned row).

## 4. Gravity, settle, line-clear & scoring

**Gravity** (the board recalc `K()` in the original): scan rows **bottom-up** (row 9 → 0);
each block falls to the lowest row where **every cell beneath its span is empty**. Partial
support holds a block up — a width-4 block resting on a single cell does not fall. Gravity
runs after every commit, after every line clear (enabling **cascade chains**: blocks fall
into a cleared row and may complete new lines), and after every spawned row (blocks drop
into the new row's holes).

After each commit the board **settles** and resolves clears:

- **Danger check**: if any block occupies **row 1** (`h − 10`, second from top) after
  gravity + clears → **game over**. Checked before the spawn and again after each spawn.
  `danupdate` reports how many top rows are fully empty (used for the danger UI tint).
- **Line clear**: a row with **all 8 columns filled** (no holes) pops. Gravity then reruns
  and any newly-completed rows pop too — this loop is the cascade, feeding the combo.
- **Score for a clear burst** (let `start` = combo lines cleared so far this chain,
  `count` = lines popping now):

  ```
  score += Σ  (for r = start .. start+count−1)  addScore × (r + 1)
  ```

  where `addScore` is the **current level's** `addscore`. So the 1st line in a chain scores
  `addScore×1`, the 2nd `addScore×2`, etc. — deeper combos escalate steeply.
- **Combo event**: if the running line count `−1 ≥ 1`, emit `comboadd(max(1, lines−1))`
  (drives the combo popup + `se_combo`).
- Clearing the **bottom N rows** directly (booster/treasure path) awards a flat **+10** and
  collects any type-3 treasure blocks in those rows.

## 5. Magic Jar & Diamonds

- `podGauge = [15, 20, 30, 40, 50]`. Each committed slide fills the jar by
  `1 / podGauge[jarCompleteCount]` (clamped to 1). So the first jar needs 15 slides, the
  next 20, then 30/40/50; beyond the 5th it stays at 50.
- When the gauge reaches 1: play the jar animation, spawn **`podDiamondCount = 3`** diamonds,
  increment `jarCompleteCount`, reset gauge to 0.
- Collected diamonds are worth **`diamondScore = 300`** each toward score/coins.

## 6. Levels & difficulty curve (`config.level`, 23 tiers)

Level is derived from **cumulative score**: walk the tiers summing each `score`; the band
your `currentScore` falls into is the current level (past the last tier it repeats tier 23).
Each tier defines:

| field | meaning |
|---|---|
| `score` | width of this level's score band (thresholds are cumulative) |
| `type` | `[w0..w4]` spawn weights for block types (see §2) |
| `holl` | weights for **number of holes per spawned row**: `[p1, p2, p3]` → 1, 2 or 3 holes; result clamped to 1–3 |
| `minlow` | minimum non-empty rows guaranteed at the bottom after each spawn |
| `addscore` | base per-line score at this level |

Endpoints:
- Tier 1: `score 400, type [0,0,3,94,3], holl [70,20,10], minlow 2, addscore 100`
  (mostly normal blocks, usually 1 hole, gentle).
- Tier 23: `score 9200, type [40,0,3,54,3], holl [30,30,40], minlow 5, addscore 2300`
  (40% stone, usually 3 holes, dense base, high per-line reward).

**Difficulty ramps** by: more stone blocks (harder to clear rows), more holes (harder to
complete lines), higher `minlow` (less breathing room), and higher `addscore` (bigger payoff).

## 7. Row-spawn algorithm (per new bottom row)

1. Pick hole count `k` = `weightedIndex(holl) + 1`, clamped to `1..3`.
2. Build an 8-slot boolean mask, mark `k` slots as holes, shuffle.
3. For each **contiguous run** of non-hole slots, chop it left-to-right into blocks of random
   `weight = 1 + floor(4·rand)` (so 1–4), consuming the run (last block takes the remainder).
4. Each block gets a random **field-placeable** skin/color (from the unlocked/available set)
   and a type sampled from the level `type` weights (normal by default).

## 8. Boosters & items

- **Fire (🔥)** — `currentFireitemCredit = 1` to start; clears/breaks a region (whiteflash +
  `se_break`). Refills via reward mechanics.
- **Slice** — selects `sliceSelectBlockCount = {min:3, max:4}` blocks (targets diamonds/
  treasures, type 3) and slices them (`se_slice`, `game_slice_anime`).
- **Thunder** — chain-lightning effect across blocks (`se_thnder`, `eff_thnd_*` sheets).
- **Skins / shop** — 20 skins (`skinPrice = 2000` coins each; `shopPrices` in config).
  Rarity split: 12 common (rare 0), 4 rare-1, 4 rare-2, with per-skin gacha `probability`.

## 9. Continue

- `currentContinueCredit = 1`, `continuePoplineCount = 3`. On game over the shell may offer a
  continue (ad-gated in the original). Continue clears the bottom rows / grants breathing room
  and resumes; the shell adds the run's score to the next submission (see the parent protocol).

## 10. State machine (screen flow)

```
BOOT → NowLoading(0–100%) → HowTo(first run, OK) → Title(START)
  → Play  ⇄  Pause
  → GameOver → (Continue?) → Result → Title
```

- `Play` sub-states: idle, dragging, settling, clearing, jar-anim, booster-anim, gameover-anim.
- The host page is told `start` on entering Play and `end{score}` on game over
  (see `src/components/GameCenter.tsx` and `docs/research/BEHAVIORS.md`).

## 11. Audio (24 SFX + BGM, in `assets/commons/sound`)

`bgm`, `se_select/buttonpull/button`, `se_drop/jardrop`, `se_break/stonebreak`,
`se_slice/slicewind`, `se_thnder`, `se_charge`, `se_combo`, `se_coincollect`, `se_gacha`,
`se_rare`, `se_bestscore`, `se_target`, `se_sky/wind/bubble/page/push/podpush`.

## 12. Constants quick-reference

```
GRID_COLS = 8, GRID_ROWS = 11, CELL = 80
DANGER_ROW = 1            (game over if occupied after gravity+clears)
GRAVITY: bottom-up scan; fall while ALL cells under the span are empty
BLOCK_WEIGHT = 1..4
HOLES_PER_ROW = 1..3      (weighted by level.holl)
podGauge = [15,20,30,40,50]   podDiamondCount = 3   diamondScore = 300
skinPrice = 2000   sliceSelectBlockCount = {min:3,max:4}
score(line r in chain) = level.addscore × (r+1)
level = cumulative-score band over 23 tiers
```
