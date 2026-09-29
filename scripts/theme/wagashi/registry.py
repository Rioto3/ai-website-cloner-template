"""Rule registry: maps "<asset path>:<part name>" patterns to drawing functions."""
import re

from PIL import Image

from . import lib

RULES = []


class Ctx:
    def __init__(self, path, info, frame, families, img=None):
        self.path = path
        self.kind = info["kind"]
        self.name = frame["name"]
        self.rect = frame["rect"]
        self.w, self.h = frame["rect"][2], frame["rect"][3]
        self.bbox = frame["bbox"]  # visible box of the original, relative to the rect (None = empty)
        self.key = "%s:%s" % (path, frame["name"])
        self.fam = families.get(path)
        self.m = None
        self._img = img

    # the box the new art should occupy (original visible box, or the whole rect)
    def box(self):
        if self.bbox is None:
            return (0, 0, self.w, self.h)
        x, y, w, h = self.bbox
        return (x, y, x + w, y + h)

    def canvas(self):
        return lib.Canvas(self.w, self.h)

    def orig_colors(self):
        """Mean RGB of the visible pixels of the original part, top half and bottom half (for classification only)."""
        import numpy as np
        x, y, w, h = self.rect
        a = np.array(self._img.crop((x, y, x + w, y + h))).astype(float)
        vis = a[..., 3] > 30
        top = np.zeros_like(vis)
        top[: h // 2] = True

        def mean(mask):
            m = mask & vis
            return a[m][:, :3].mean(0) if m.any() else np.zeros(3)

        return mean(top), mean(~top)

    def blank(self):
        return Image.new("RGBA", (self.w, self.h), (0, 0, 0, 0))


def rule(pattern):
    rx = re.compile(pattern)

    def deco(fn):
        RULES.append((rx, fn))
        return fn

    return deco


def find(ctx):
    for rx, fn in RULES:
        m = rx.search(ctx.key)
        if m:
            ctx.m = m
            return fn
    return None


def families(layout):
    """For sequences split over several sheets (prerender/*): total frame count and index range."""
    out = {}
    fam = {}
    for path, info in layout.items():
        if info["kind"] != "prerender":
            continue
        d = path.rsplit("/", 1)[0]
        nums = [int(f["name"]) for f in info["frames"]]
        e = fam.setdefault(d, [10 ** 9, -1])
        e[0], e[1] = min(e[0], min(nums)), max(e[1], max(nums))
    for path, info in layout.items():
        if info["kind"] == "prerender":
            d = path.rsplit("/", 1)[0]
            out[path] = {"first": fam[d][0], "last": fam[d][1], "dir": d.rsplit("/", 1)[1]}
    return out
