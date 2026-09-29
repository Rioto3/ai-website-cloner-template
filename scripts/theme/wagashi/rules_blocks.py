"""Blocks: the five skins, the stone, guide/edge/fade overlays and the special (item) blocks."""
import math

from PIL import Image, ImageDraw

from . import lib
from .lib import PAL, WASHI, rgb, mix
from .registry import rule

CELL = 80


# --- one wagashi block -------------------------------------------------------------------------------------------
def motif(cv, kind, cx, cy, ink):
    if kind == 1:
        lib.sakura(cv, cx, cy, 15, mix(ink, "#FFFFFF", 0.05), WASHI)
    elif kind == 2:
        cv.circle(cx, cy, 13, None, ink, 3)
        for dx, dy in ((-4, -3), (4, -1), (0, 5)):
            cv.circle(cx + dx, cy + dy, 1.8, ink)
    elif kind == 3:
        lib.leaf(cv, cx, cy, 15, ink, WASHI)
    elif kind == 4:
        for r in (14, 9, 4):
            cv.arc((cx - r, cy - r + 8, cx + r, cy + r + 8), 180, 360, ink, 3)


def block_image(w, h, pal, n, kind, shine=True, pattern=None, grad=None, motif_on=True, margin=2, radius=24, extra=None):
    cv = lib.Canvas(w, h)
    x0, y0, x1, y1 = margin, margin, w - margin, h - margin - 6
    cv.rrect(x0, y0 + 5, x1, y1 + 5, radius, pal["dark"])
    if grad:
        mask = Image.new("L", cv.im.size, 0)
        ImageDraw.Draw(mask).rounded_rectangle([x0 * cv.ss, y0 * cv.ss, x1 * cv.ss - 1, y1 * cv.ss - 1], radius=radius * cv.ss, fill=255)
        cv.paste_masked(lib.hgrad(cv.im.size, grad[0], grad[1]), mask)
    else:
        cv.rrect(x0, y0, x1, y1, radius, pal["body"])
    if pattern == "asanoha":
        lay = cv.layer()
        d = ImageDraw.Draw(lay)
        s = cv.ss
        step = 20
        for gy in range(0, h, step):
            for gx in range(0, w, step):
                c = (gx + step / 2, gy + step / 2)
                pts = [(c[0], c[1] - 7), (c[0] + 7, c[1]), (c[0], c[1] + 7), (c[0] - 7, c[1])]
                d.line([(x * s, y * s) for x, y in pts + [pts[0]]], fill=rgb("#FFFFFF", 70), width=int(1.5 * s))
        m = Image.new("L", cv.im.size, 0)
        ImageDraw.Draw(m).rounded_rectangle([x0 * cv.ss, y0 * cv.ss, x1 * cv.ss - 1, y1 * cv.ss - 1], radius=radius * cv.ss, fill=255)
        cv.paste_masked(lay, m)
    if shine:
        cv.rrect(x0 + 9, y0 + 6, x1 - 9, y0 + 20, 7, mix(pal["hi"], "#FFFFFF", 0.0)[:3] + (190,))
    if motif_on and kind:
        for i in range(n):
            motif(cv, kind, CELL * i + 40, 40, pal["ink"])
    if extra:
        extra(cv)
    return cv.out()


PLAIN = PAL


@rule(r"skin/skin1\.png:block_(\d)_(\d)\.png$")
def skin1_block(ctx):
    c, n = int(ctx.m.group(1)), int(ctx.m.group(2))
    return block_image(ctx.w, ctx.h, PAL[c], n, c)


SKIN2_PAL = PAL


@rule(r"skin/skin2\.png:block_(\d)_(\d)\.png$")
def skin2_block(ctx):
    c, n = int(ctx.m.group(1)), int(ctx.m.group(2))
    return block_image(ctx.w, ctx.h, PAL[c], n, None, pattern="asanoha", motif_on=False)


SKIN3_PAL = {
    1: dict(body="#C9CED8", dark="#8E95A6", hi="#F1F3F7", ink="#8E95A6"),
    2: dict(body="#E6BD4E", dark="#B58A22", hi="#FBE9A8", ink="#B58A22"),
    3: dict(body="#ECE8F6", dark="#B7B0CF", hi="#FFFFFF", ink="#B7B0CF"),
    4: dict(body="#56688F", dark="#34426A", hi="#8DA0C9", ink="#34426A"),
}


@rule(r"skin/skin3\.png:block_(\d)_(\d)\.png$")
def skin3_block(ctx):
    c, n = int(ctx.m.group(1)), int(ctx.m.group(2))
    return block_image(ctx.w, ctx.h, SKIN3_PAL[c], n, None, motif_on=False)


@rule(r"skin/skin4\.png:block_(\d)_(\d)_(\d)\.png$")
def skin4_block(ctx):
    c, n, v = int(ctx.m.group(1)), int(ctx.m.group(2)), int(ctx.m.group(3))
    a, b = PAL[(c - 1 + v) % 4 + 1], PAL[(c + v) % 4 + 1]
    return block_image(ctx.w, ctx.h, a, n, None, grad=(a["body"], b["body"]), motif_on=False)


@rule(r"skin/skin5\.png:block_(\d)_(\d)\.png$")
def skin5_frame(ctx):
    c = int(ctx.m.group(1))
    cv = ctx.canvas()
    pal = PAL[c]
    cv.rrect(3, 3, ctx.w - 3, ctx.h - 9, 24, None, pal["dark"], 4)
    cv.rrect(7, 7, ctx.w - 7, ctx.h - 13, 20, None, pal["hi"], 2)
    return cv.out()


@rule(r"skin/skin5\.png:block_(\d)_pat\.png$")
def skin5_pattern(ctx):
    c = int(ctx.m.group(1))
    pal = PAL[c]
    cv = ctx.canvas()
    cx, cy = ctx.w / 2, ctx.h / 2
    cv.circle(cx, cy, ctx.w / 2 - 1, pal["body"])
    for i, r in enumerate(range(int(ctx.w / 2), 8, -22)):
        cv.circle(cx, cy, r - 1, None, pal["dark"] if i % 2 else pal["hi"], 5)
    return cv.out()


@rule(r"skin/skin[1-5]\.png:block_(\d)_ball\.png$")
def skin_ball(ctx):
    c = int(ctx.m.group(1))
    pal = PAL[c]
    cv = ctx.canvas()
    w = ctx.w
    lay = cv.layer()
    ImageDraw.Draw(lay).ellipse([w * 0.1 * cv.ss, w * 0.1 * cv.ss, w * 0.9 * cv.ss, w * 0.9 * cv.ss], fill=rgb(pal["body"], 200))
    cv.over(lay, 5)
    cv.circle(w / 2, w / 2, w * 0.28, pal["body"])
    cv.circle(w / 2, w / 2, w * 0.16, WASHI)
    return cv.out()


# --- special blocks (cskin) ------------------------------------------------------------------------------------------
def gem(cv, cx, cy, r, base="#9BC4F0", light="#DDF0FF", dark="#4F86C6"):
    top = [(cx - r * 0.55, cy - r * 0.55), (cx + r * 0.55, cy - r * 0.55), (cx + r, cy - r * 0.1), (cx, cy + r), (cx - r, cy - r * 0.1)]
    cv.polygon(top, base, dark, max(1, r * 0.06))
    cv.polygon([(cx - r * 0.55, cy - r * 0.55), (cx + r * 0.55, cy - r * 0.55), (cx + r * 0.25, cy - r * 0.1), (cx - r * 0.25, cy - r * 0.1)], light)
    cv.polygon([(cx - r, cy - r * 0.1), (cx - r * 0.25, cy - r * 0.1), (cx, cy + r)], mix(base, "#FFFFFF", 0.0)[:3] + (255,), None)
    cv.line([(cx - r * 0.25, cy - r * 0.1), (cx, cy + r), (cx + r * 0.25, cy - r * 0.1)], dark, max(1, r * 0.05), False)
    cv.line([(cx - r, cy - r * 0.1), (cx + r, cy - r * 0.1)], dark, max(1, r * 0.05), False)


@rule(r"cskin\.png:block_diamond_1\.png$")
def diamond_block(ctx):
    cv = ctx.canvas()
    cv.rrect(2, 2, ctx.w - 2, ctx.h - 8, 22, "#E9F4FF")
    cv.rrect(2, 2, ctx.w - 2, ctx.h - 8, 22, None, "#B9D6F2", 3)
    gem(cv, ctx.w / 2, ctx.h / 2 - 3, 24)
    return cv.out()


@rule(r"cskin\.png:block_diamond_icon\.png$")
def diamond_icon(ctx):
    cv = ctx.canvas()
    cv.glow(lambda d, s: d.ellipse([12 * s, 12 * s, (ctx.w - 12) * s, (ctx.h - 12) * s], fill=rgb("#BFE0FF", 200)), 8)
    gem(cv, ctx.w / 2, ctx.h / 2, 38)
    return cv.out()


def dashed_rrect(cv, box, r, color, width, dash=10, gap=7):
    x0, y0, x1, y1 = box
    pts = []
    # perimeter samples (corners as arcs)
    def arc(cx, cy, a0):
        for i in range(0, 91, 10):
            a = math.radians(a0 + i)
            pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    arc(x1 - r, y0 + r, -90)
    arc(x1 - r, y1 - r, 0)
    arc(x0 + r, y1 - r, 90)
    arc(x0 + r, y0 + r, 180)
    pts.append(pts[0])
    # densify
    dense = []
    for (ax, ay), (bx, by) in zip(pts, pts[1:]):
        L = math.hypot(bx - ax, by - ay)
        n = max(1, int(L / 2))
        for i in range(n):
            dense.append((ax + (bx - ax) * i / n, ay + (by - ay) * i / n))
    acc, on, seg = 0.0, True, []
    for i in range(1, len(dense)):
        acc += math.hypot(dense[i][0] - dense[i - 1][0], dense[i][1] - dense[i - 1][1])
        if on:
            seg.append(dense[i])
        if on and acc >= dash:
            if len(seg) > 1:
                cv.line(seg, color, width)
            seg, acc, on = [], 0.0, False
        elif not on and acc >= gap:
            seg, acc, on = [dense[i]], 0.0, True


@rule(r"cskin\.png:block_guide_(\d)\.png$")
def guide(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    dashed_rrect(cv, (x0 + 4, y0 + 4, x1 - 4, y1 - 4), 22, "#FFFFFF", 4)
    return cv.out()


EDGE_COL = {2: "#7C8FC4", 3: "#8ED1A0"}


@rule(r"cskin\.png:block_edge_(\d)_(\d)\.png$")
def edge(ctx):
    col = EDGE_COL[int(ctx.m.group(1))]
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    m = 10
    box = (x0 + m, y0 + m, x1 - m, y1 - m)
    cv.glow(lambda d, s: d.rounded_rectangle([box[0] * s, box[1] * s, box[2] * s, box[3] * s], radius=22 * s, outline=rgb(col), width=8 * s), 6, 0.9)
    cv.rrect(box[0], box[1], box[2], box[3], 22, None, col, 4)
    return cv.out()


FADE_COL = {1: "#FFFFFF", 2: "#8E7CC3", 3: "#7FD3A6"}


@rule(r"cskin\.png:block_fade_(\d)_(\d)\.png$")
def fade(ctx):
    col = FADE_COL[int(ctx.m.group(1))]
    cv = ctx.canvas()
    cv.rrect(2, 2, ctx.w - 2, ctx.h - 2, 22, rgb(col, 210))
    return cv.out()


@rule(r"cskin\.png:block_rock_(\d)\.png$")
def rock(ctx):
    n = int(ctx.m.group(1))
    cv = ctx.canvas()
    W, H = ctx.w, ctx.h
    cv.rrect(2, 7, W - 2, H - 1, 28, "#6B6B70")
    cv.rrect(2, 2, W - 2, H - 6, 28, "#9C9CA2")
    cv.rrect(12, 8, W - 12, 20, 6, "#C9C9CE")
    for i in range(n):
        cx = CELL * i + 40
        cv.line([(cx - 8, 26), (cx - 2, 40), (cx - 8, 50), (cx + 4, 62)], "#5A5A60", 3)
    return cv.out()


@rule(r"cskin\.png:block_slice_(\d)\.png$")
def slice_block(ctx):
    n = int(ctx.m.group(1))
    pal = dict(body="#5FB58A", dark="#2F7A57", hi="#B6EBD1", ink="#EFFFF6")

    def extra(cv):
        for i in range(n):
            crescent(cv, CELL * i + 40, 40, 15, "#EFFFF6")

    return block_image(ctx.w, ctx.h, pal, n, None, motif_on=False, extra=extra)


def crescent(cv, cx, cy, r, fill):
    from PIL import ImageChops
    s = cv.ss
    lay = cv.layer()
    ImageDraw.Draw(lay).ellipse([(cx - r) * s, (cy - r) * s, (cx + r) * s, (cy + r) * s], fill=rgb(fill))
    cut = Image.new("L", lay.size, 0)
    ImageDraw.Draw(cut).ellipse([(cx - r * 0.45) * s, (cy - r * 1.15) * s, (cx + r * 1.55) * s, (cy + r * 0.85) * s], fill=255)
    lay.putalpha(ImageChops.subtract(lay.getchannel("A"), cut))
    cv.over(lay)


def bolt(cv, cx, cy, r, fill, edge=None):
    pts = [(cx + r * 0.2, cy - r), (cx - r * 0.55, cy + r * 0.15), (cx - r * 0.05, cy + r * 0.15), (cx - r * 0.2, cy + r), (cx + r * 0.55, cy - r * 0.2), (cx + r * 0.05, cy - r * 0.2)]
    cv.polygon(pts, fill, edge, max(1, r * 0.08) if edge else 0)


@rule(r"cskin\.png:block_thunder_(\d)\.png$")
def thunder_block(ctx):
    n = int(ctx.m.group(1))
    pal = dict(body="#3E5FB0", dark="#1F3577", hi="#8DA9F0", ink="#FFF7B0")

    def extra(cv):
        for i in range(n):
            bolt(cv, CELL * i + 40, 40, 17, "#FFF7B0", "#E8C64A")

    return block_image(ctx.w, ctx.h, pal, n, None, motif_on=False, extra=extra)


@rule(r"cskin\.png:block_slice_icon\.png$")
def slice_icon(ctx):
    cv = ctx.canvas()
    cv.glow(lambda d, s: d.ellipse([10 * s, 10 * s, (ctx.w - 10) * s, (ctx.h - 10) * s], fill=rgb("#9BE3C1", 150)), 5)
    crescent(cv, ctx.w / 2, ctx.h / 2, 22, "#EFFFF6")
    return cv.out()


@rule(r"cskin\.png:block_thunder_icon\.png$")
def thunder_icon(ctx):
    cv = ctx.canvas()
    cv.glow(lambda d, s: d.ellipse([8 * s, 8 * s, (ctx.w - 8) * s, (ctx.h - 8) * s], fill=rgb("#8DA9F0", 160)), 6)
    bolt(cv, ctx.w / 2, ctx.h / 2, 28, "#FFF7B0", "#E8C64A")
    return cv.out()
