"""Pre-rendered effect sequences (frame numbers are global across the sheets of one effect)."""
import math

from PIL import Image

from . import lib
from .lib import rgb
from .registry import rule
from .rules_anim import seeded

P = r"sheet/prirends/(\w+)/s\d\.png:(\d+)$"


def progress(ctx):
    i = int(ctx.m.group(2))
    f = ctx.fam
    return i, (i - f["first"]) / max(1, f["last"] - f["first"])


def frame_canvas(ctx):
    ss = 4 if max(ctx.w, ctx.h) <= 200 else 2
    return lib.Canvas(ctx.w, ctx.h, ss)


@rule(P)
def prerender(ctx):
    kind = ctx.m.group(1)
    i, t = progress(ctx)
    cv = frame_canvas(ctx)
    w, h = ctx.w, ctx.h
    cx, cy = w / 2, h / 2
    rnd = seeded(kind)

    if kind == "eff_pop":  # twinkling sparkles (line clear)
        for k in range(6):
            ang = rnd.uniform(0, 2 * math.pi)
            rad = rnd.uniform(0.15, 0.42) * w
            phase = rnd.uniform(0, 0.5)
            life = max(0.0, min(1.0, (t * 1.5 - phase)))
            s = math.sin(math.pi * life) * w * rnd.uniform(0.06, 0.11)
            if s > 1:
                x, y = cx + math.cos(ang) * rad, cy + math.sin(ang) * rad
                cv.glow(lambda d, ss, x=x, y=y, s=s: d.ellipse([(x - s) * ss, (y - s) * ss, (x + s) * ss, (y + s) * ss], fill=rgb("#FFB6D0", 190)), max(1.5, s * 0.4))
                lib.star4(cv, x, y, s, "#FFFFFF", 0.22)
    elif kind == "eff_rock_a":  # burst of rays (stone breaks)
        n = 26
        r0 = w * (0.08 + 0.3 * t)
        length = w * (0.16 * (1 - t) + 0.05)
        a = int(255 * (1 - t) ** 0.7)
        for k in range(n):
            ang = math.radians(k * 360 / n + (k % 2) * 4)
            cv.line([(cx + math.cos(ang) * r0, cy + math.sin(ang) * r0), (cx + math.cos(ang) * (r0 + length * (1.0 if k % 2 else 0.6)), cy + math.sin(ang) * (r0 + length * (1.0 if k % 2 else 0.6)))], (232, 222, 250, a), max(2, w * 0.008))
    elif kind in ("eff_rock_b", "eff_rock_c"):  # chips flying out / falling
        n = 12 if kind == "eff_rock_b" else 16
        for k in range(n):
            ang = rnd.uniform(0, 2 * math.pi) if kind == "eff_rock_b" else rnd.uniform(math.radians(60), math.radians(120))
            spd = rnd.uniform(0.25, 0.5) * (w if kind == "eff_rock_b" else h * 0.6)
            x0 = cx if kind == "eff_rock_b" else rnd.uniform(0.15, 0.85) * w
            y0 = cy if kind == "eff_rock_b" else rnd.uniform(0.0, 0.2) * h
            x = x0 + math.cos(ang) * spd * t
            y = y0 + math.sin(ang) * spd * t + (h * 0.5 * t * t if kind == "eff_rock_b" else 0)
            sz = rnd.uniform(0.02, 0.05) * max(w, h) * (1 - 0.5 * t)
            al = int(255 * (1 - t ** 2))
            pts = [(x + math.cos(a2) * sz * r, y + math.sin(a2) * sz * r) for a2, r in ((0, 1.0), (2.1, 0.8), (4.0, 1.1))]
            cv.polygon(pts, (156, 156, 162, al))
    elif kind.startswith("eff_thnd_bl_"):  # electricity across a block
        env = math.sin(math.pi * min(1.0, t * 1.05))
        fr = seeded("%s%d" % (kind, i))
        for b in range(3):
            pts = []
            n = 9
            yc = h * (0.3 + 0.2 * b)
            for k in range(n + 1):
                pts.append((w * (0.08 + 0.84 * k / n), yc + fr.uniform(-h * 0.22, h * 0.22) * (0 < k < n)))
            cv.glow(lambda d, ss, pts=pts: d.line([(x * ss, y * ss) for x, y in pts], fill=rgb("#8DA9F0"), width=int(6 * ss)), 3, 0.8 * env)
            cv.line(pts, (255, 251, 208, int(255 * env)), 2.5)
    elif kind == "eff_tnd_icon":  # thunder icon pulse
        k = 0.85 + 0.15 * math.sin(t * 6 * math.pi)
        r = min(w, h) * 0.32 * k
        cv.glow(lambda d, ss: d.ellipse([(cx - r * 1.3) * ss, (cy - r * 1.3) * ss, (cx + r * 1.3) * ss, (cy + r * 1.3) * ss], fill=rgb("#8DA9F0", 200)), r * 0.25)
        pts = [(cx + r * 0.2, cy - r), (cx - r * 0.55, cy + r * 0.15), (cx - r * 0.05, cy + r * 0.15), (cx - r * 0.2, cy + r), (cx + r * 0.55, cy - r * 0.2), (cx + r * 0.05, cy - r * 0.2)]
        cv.polygon(pts, "#FFFBD0", "#E8C64A", 2)
    elif kind == "eff_pod_anm":  # bubbles rising in the kettle
        for k in range(5):
            x = w * rnd.uniform(0.15, 0.85)
            ph = (t * 2 + rnd.uniform(0, 1)) % 1.0
            y = h * (1.0 - ph)
            r = h * 0.09 * (0.6 + 0.6 * rnd.random())
            cv.circle(x, y, r, (185, 221, 160, int(255 * math.sin(math.pi * ph))))
    else:
        return ctx.blank()
    return cv.out()
