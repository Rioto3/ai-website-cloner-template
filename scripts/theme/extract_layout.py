#!/usr/bin/env python3
"""Reads the vendor asset layout (frame names, rects, visible bounding boxes) into layout.json.

Only geometry is recorded (no pixels), so the theme generator can redraw every part in the same
place and size after the original PNGs have been replaced. Run once against the original assets.

Usage: python3 scripts/theme/extract_layout.py [assets_dir]
"""
import codecs, glob, json, os, re, sys
from PIL import Image

ASSETS = sys.argv[1] if len(sys.argv) > 1 else "public/game/magicslide/assets"
OUT = os.path.join(os.path.dirname(__file__), "layout.json")


def jload(p):
    return json.load(codecs.open(p, encoding="utf-8-sig"))


def bbox_of(img, rect):
    x, y, w, h = rect
    a = img.crop((x, y, x + w, y + h)).getchannel("A").point(lambda v: 255 if v > 10 else 0)
    b = a.getbbox()
    return [b[0], b[1], b[2] - b[0], b[3] - b[1]] if b else None


def rel(p):
    return os.path.relpath(p, ASSETS)


files = {}


def add(png, frames, kind):
    img = Image.open(png).convert("RGBA")
    files[rel(png)] = {
        "size": list(img.size),
        "kind": kind,
        "frames": [{"name": n, "rect": r, "bbox": bbox_of(img, r)} for n, r in frames],
    }


# sprite sheets with a json next to them (sheets, skins, utility, language text, prirends)
sheet_jsons = (
    glob.glob(f"{ASSETS}/commons/sheet/*.json")
    + glob.glob(f"{ASSETS}/commons/sheet/skin/*.json")
    + glob.glob(f"{ASSETS}/commons/utility/*.json")
    + glob.glob(f"{ASSETS}/languages/*/text.json")
)
for j in sorted(sheet_jsons):
    d = jload(j)
    fr = [(n, [v["frame"]["x"], v["frame"]["y"], v["frame"]["w"], v["frame"]["h"]]) for n, v in d["frames"].items()]
    add(os.path.join(os.path.dirname(j), d["meta"]["image"]), fr, "sheet")

for j in sorted(glob.glob(f"{ASSETS}/commons/sheet/prirends/*/*.json")):
    d = jload(j)
    fr = [(n, [v["frame"]["x"], v["frame"]["y"], v["frame"]["w"], v["frame"]["h"]]) for n, v in d["frames"].items()]
    add(os.path.join(os.path.dirname(j), d["meta"]["image"]), fr, "prerender")

# Adobe Animate exports: js names each sprite and points at a rect in an atlas png
for js in sorted(glob.glob(f"{ASSETS}/commons/animate/*/*.js")):
    s = open(js, encoding="utf-8-sig").read()
    m = re.search(r"ssMetadata\s*=\s*(\[.*?\]);", s, re.S)
    atl = {nm: json.loads(fr) for nm, fr in re.findall(r'\{name:"([^"]+)",\s*frames:\s*(\[\[.*?\]\])\}', m.group(1), re.S)}
    per = {}
    for name, a, k in re.findall(r'\(lib\.(\w+)\s*=\s*function\(\)\s*\{\s*this\.initialize\(ss\["(\w+)"\]\);\s*this\.gotoAndStop\((\d+)\);', s):
        per.setdefault(a, []).append((name, atl[a][int(k)]))
    for a, fr in per.items():
        add(os.path.join(os.path.dirname(js), "images", a + ".png"), fr, "animate")

# plain images (the whole image is one part)
for p in sorted(glob.glob(f"{ASSETS}/commons/image/*.png") + glob.glob(f"{ASSETS}/languages/*/*_0.png")):
    im = Image.open(p)
    add(p, [(os.path.basename(p), [0, 0, im.size[0], im.size[1]])], "image")

json.dump(files, open(OUT, "w"), ensure_ascii=False, separators=(",", ":"))
n = sum(len(v["frames"]) for v in files.values())
print("files:", len(files), "frames:", n, "->", OUT, os.path.getsize(OUT) // 1024, "KB")
