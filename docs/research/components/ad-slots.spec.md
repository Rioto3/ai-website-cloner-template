# AdSlot placeholders Specification

## Overview
- **Target file:** `src/components/AdSlot.tsx`
- **Interaction model:** static

Real ads are out of scope. The original reserves fixed slots via inline min-sizes:
- Left sidebar: `#gb_pc_banner_gamesupleft`  min-width 300px, min-height 250px
- Right sidebar: `#gb_pc_banner_gamesrightside` min-width 300px, min-height 250px
- Footer: `#gb_pc_banner_gamesbottom` min-width 728px, min-height 90px (inside fixed footer `.l-n-game__footer`, h-100, centered)

Clone: neutral light-gray placeholder (`bg #f5f5f5`, centered "AD" label #bbb 12px) with identical min dimensions so layout spacing matches the loaded state. Footer slot centered horizontally.
