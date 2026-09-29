#!/usr/bin/env python3
"""Regenerates the game's art and sound as a rights-clean placeholder theme ("wagashi").

Every part of every sprite sheet / animation atlas / image is redrawn in the same rectangle (and, where the
original had transparent margins, the same visible bounding box), so the vendor engine and animation
timelines keep working unchanged. Parts no rule covers stay as they were ("mix") and are listed in the report.

Requires: Python 3, Pillow, numpy, ffmpeg (sound), git (to read the pristine assets), npm (to fetch the font once).

    python3 scripts/theme/generate.py                 # all
    python3 scripts/theme/generate.py --only skin     # only files whose path matches the regex
"""
import argparse
import io
import json
import os
import re
import subprocess
import sys
from collections import defaultdict

from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from wagashi import registry  # noqa: E402
from wagashi import rules  # noqa: F401,E402  (registers all rules)

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
ASSETS = "public/game/magicslide/assets"
ORIG_REF = "vendor-original-assets"


def original(path):
    """Pristine bytes of an asset from the git tag that preserves the vendor files."""
    return subprocess.run(["git", "show", "%s:%s/%s" % (ORIG_REF, ASSETS, path)], cwd=ROOT, check=True, capture_output=True).stdout


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", default="", help="regex on the asset path")
    ap.add_argument("--out", default=os.path.join(ROOT, ASSETS))
    ap.add_argument("--report", default=os.path.join(HERE, "status.json"))
    ap.add_argument("--audio", action="store_true", help="also synthesise the sound effects and the BGM")
    ap.add_argument("--audio-only", action="store_true")
    args = ap.parse_args()

    if args.audio or args.audio_only:
        from wagashi import audio
        print("sounds:", audio.generate(ROOT))
        from wagashi import shell
        print("icons:", shell.generate(ROOT))
        if args.audio_only:
            return
    layout = json.load(open(os.path.join(HERE, "layout.json")))
    families = registry.families(layout)
    kept, done = defaultdict(list), defaultdict(int)
    for path, info in layout.items():
        if args.only and not re.search(args.only, path):
            continue
        img = Image.open(io.BytesIO(original(path))).convert("RGBA")
        changed = False
        for fr in info["frames"]:
            ctx = registry.Ctx(path, info, fr, families, img)
            fn = registry.find(ctx)
            if fn is None:
                kept[path].append(fr["name"])
                continue
            new = fn(ctx)
            x, y, w, h = fr["rect"]
            assert new.size == (w, h), (path, fr["name"], new.size, (w, h))
            img.paste(Image.new("RGBA", (w, h), (0, 0, 0, 0)), (x, y))
            img.alpha_composite(new, (x, y))
            done[path] += 1
            changed = True
        if changed:
            out = os.path.join(args.out, path)
            os.makedirs(os.path.dirname(out), exist_ok=True)
            img.save(out, optimize=True)
    total = sum(len(v["frames"]) for k, v in layout.items() if not args.only or re.search(args.only, k))
    n_done = sum(done.values())
    n_kept = sum(len(v) for v in kept.values())
    json.dump({"replaced": n_done, "kept": n_kept, "kept_by_file": kept}, open(args.report, "w"), ensure_ascii=False, indent=1)
    print("frames: %d  replaced: %d  kept: %d  (report: %s)" % (total, n_done, n_kept, args.report))


if __name__ == "__main__":
    main()
