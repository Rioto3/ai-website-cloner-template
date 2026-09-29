"""Plain images: backgrounds, overlays, panels, masks, the title logo and the how-to screen."""
import math
import random

import numpy as np
from PIL import Image, ImageDraw

from . import lib
from .lib import GOLD, PAL, WASHI, draw_text, rgb
from .registry import rule
from .rules_blocks import CELL, block_image, gem
from .rules_ui import ribbon

IMG = r"commons/image/"


@rule(IMG + r"back_0_9\.png:")
def back_sky(ctx):
    h, w = ctx.h, ctx.w
    t = np.linspace(0, 1, h).reshape(h, 1, 1)
    stops = [(0.0, (38, 47, 92)), (0.55, (86, 88, 150)), (0.82, (128, 121, 180)), (1.0, (143, 150, 204))]
    arr = np.zeros((h, 1, 3))
    for (a, ca), (b, cb) in zip(stops, stops[1:]):
        m = (t >= a) & (t <= b)
        f = np.clip((t - a) / (b - a), 0, 1)
        arr = np.where(m, np.array(ca) + (np.array(cb) - np.array(ca)) * f, arr)
    arr = np.repeat(arr, w, axis=1)
    out = np.dstack([arr, np.full((h, w), 255)]).astype(np.uint8)
    return Image.fromarray(out, "RGBA")


@rule(IMG + r"back_0_10\.png:")
def back_sparkle(ctx):
    cv = ctx.canvas()
    rnd = random.Random(7)
    for _ in range(90):
        x, y = rnd.uniform(0, ctx.w), rnd.uniform(0, ctx.h)
        r = rnd.choice((1.2, 1.6, 2.2, 3.0))
        cv.circle(x, y, r, (255, 236, 246, rnd.randint(60, 150)))
    for _ in range(10):
        lib.star4(cv, rnd.uniform(0, ctx.w), rnd.uniform(0, ctx.h), rnd.uniform(4, 7), (255, 240, 250, 150))
    return cv.out()


@rule(IMG + r"back_effect_danger_0\.png:")
def back_danger(ctx):
    h, w = ctx.h, ctx.w
    yy, xx = np.mgrid[0:h, 0:w]
    d = np.minimum.reduce([xx, w - 1 - xx, yy, h - 1 - yy]).astype(float)
    a = np.clip(1 - d / 70.0, 0, 1) ** 1.6 * 245
    arr = np.zeros((h, w, 4), np.uint8)
    arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3] = 235, 64, 52, a
    return Image.fromarray(arr, "RGBA")


@rule(IMG + r"effect_light_4\.png:")
def light_ring(ctx):
    w = ctx.w
    yy, xx = np.mgrid[0:w, 0:w]
    r = np.sqrt((xx - w / 2) ** 2 + (yy - w / 2) ** 2)
    a = np.exp(-(((r - 375) / 150.0) ** 2)) * 240
    a[r < 60] *= (r[r < 60] / 60.0)
    arr = np.zeros((w, w, 4), np.uint8)
    arr[..., 0], arr[..., 1], arr[..., 2], arr[..., 3] = 255, 226, 236, a
    return Image.fromarray(arr, "RGBA")


@rule(IMG + r"grid_line_\d\.png:")
def grid_line(ctx):
    im = ctx.blank()
    ImageDraw.Draw(im).rectangle([1, 1, ctx.w - 2, ctx.h - 2], fill=(255, 255, 255, 64))
    return im


@rule(IMG + r"maskcircle\.png:")
def mask_circle(ctx):
    """Soft vignette: transparent centre, opaque rim (alpha ~ radius^2.7)."""
    w = ctx.w
    yy, xx = np.mgrid[0:w, 0:w]
    d = np.sqrt(((xx - w / 2) / (w / 2)) ** 2 + ((yy - w / 2) / (w / 2)) ** 2)
    a = np.clip(d, 0, 1) ** 2.7 * 255
    arr = np.zeros((w, w, 4), np.uint8)
    arr[..., 3] = a
    return Image.fromarray(arr, "RGBA")


@rule(IMG + r"maskrect\.png:")
def mask_rect(ctx):
    """Opaque black; the bottom 80 rows fade out (255 -> 7), as the engine expects."""
    a = np.full((ctx.h, ctx.w), 255, np.uint8)
    ramp = np.linspace(255, 7, 80).astype(np.uint8)
    a[ctx.h - 80:, :] = ramp[:, None]
    arr = np.zeros((ctx.h, ctx.w, 4), np.uint8)
    arr[..., 3] = a
    return Image.fromarray(arr, "RGBA")


@rule(IMG + r"popup_\d\.png:")
def popup(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    m = 4
    cv.rrect(x0 + m, y0 + m, x1 - m, y1 - m, 36, (30, 38, 80, 200))
    cv.rrect(x0 + m, y0 + m, x1 - m, y1 - m, 36, None, GOLD, 6)
    cv.rrect(x0 + m + 12, y0 + m + 12, x1 - m - 12, y1 - m - 12, 26, None, (255, 236, 190, 110), 2)
    for cx, cy in ((x0 + m + 26, y0 + m + 26), (x1 - m - 26, y0 + m + 26), (x0 + m + 26, y1 - m - 26), (x1 - m - 26, y1 - m - 26)):
        lib.sakura(cv, cx, cy, 10, "#F4A6BE")
    return cv.out()


# --- title logo ------------------------------------------------------------------------------------------------------------------
@rule(r"languages/(ja|en)/title_logo_0\.png:")
def title_logo(ctx):
    lang = ctx.m.group(1)
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    w, h = x1 - x0, y1 - y0
    l1, l2, sub = ("和菓子", "スライド", "（仮題）") if lang == "ja" else ("Wagashi", "Slide", "(working title)")
    lib.text_grad(cv, l1, (x0 + w * 0.04, y0 + h * 0.02, x1 - w * 0.04, y0 + h * 0.5), "#FFF3F7", "#F2A0BC", "#7A3B55", 7, "black", glow="#FFD1E0")
    lib.text_grad(cv, l2, (x0 + w * 0.04, y0 + h * 0.5, x1 - w * 0.04, y0 + h * 0.9), "#FFF6C8", "#F0B93E", "#7A5518", 7, "black", glow="#FFE9A0")
    draw_text(cv, sub, (x0 + w * 0.3, y0 + h * 0.91, x1 - w * 0.3, y1), "#FFFFFF", "#33406F", 2, "bold")
    lib.sakura(cv, x1 - w * 0.06, y0 + h * 0.06, 16, "#F4A6BE")
    lib.sakura(cv, x0 + w * 0.05, y0 + h * 0.52, 11, "#F4A6BE")
    return cv.out()


# --- how-to screen -----------------------------------------------------------------------------------------------------------------
def board(cv, ox, oy, cell, rows, w_cells=8):
    """rows: list of rows (bottom row last); each entry is (colour, width, column) or None for a gap."""
    H = len(rows) * cell
    cv.rrect(ox - 6, oy - 6, ox + w_cells * cell + 6, oy + H + 6, 10, (24, 30, 62, 235))
    for r, row in enumerate(rows):
        for item in row:
            c, n, col = item
            im = block_image(CELL * n, CELL, PAL[c], n, c).resize((int(cell * n), int(cell)), Image.LANCZOS)
            cv.im.alpha_composite(im.resize((int(cell * n * cv.ss), int(cell * cv.ss)), Image.LANCZOS), (int((ox + col * cell) * cv.ss), int((oy + r * cell) * cv.ss)))


def arrow(cv, x0, y0, x1, y1, col="#FFFFFF", w=4):
    cv.line([(x0, y0), (x1, y1)], col, w)
    a = math.atan2(y1 - y0, x1 - x0)
    for s in (-0.5, 0.5):
        cv.line([(x1, y1), (x1 - 14 * math.cos(a + s), y1 - 14 * math.sin(a + s))], col, w)


HOWTO = {
    "ja": ("遊び方", ["ブロックをスライドさせて\n横のラインを作ろう", "ブロックをスライドする度に\n下からブロックが\n追加されます", "ブロックが上まで来て\nしまうとゲーム終了", "ブロックを壊して\nポットのゲージを貯めると\nダイヤが出現"], "ハイスコアを狙いましょう！"),
    "en": ("HOW TO PLAY", ["Slide the blocks to\ncomplete a horizontal line", "New blocks rise from below\nevery time you slide", "The game ends when the\nblocks reach the top", "Break blocks to fill the\npot gauge and get diamonds"], "Aim for a high score!"),
}


def illustration(cv, i, ox, oy):
    """A 280x190 mini scene."""
    cv.rrect(ox, oy, ox + 280, oy + 190, 14, (24, 30, 62, 235))
    cv.rrect(ox, oy, ox + 280, oy + 190, 14, None, GOLD, 3)
    cell = 30
    bx, by = ox + 20, oy + 22
    if i == 0:
        board(cv, bx, by + 30, cell, [[(1, 2, 0), (2, 2, 2), (3, 2, 5), (4, 1, 7)], [(3, 3, 0), (4, 2, 3), (1, 3, 5)]])
        arrow(cv, bx + 20, by + 12, bx + 100, by + 12, "#FFFFFF", 5)
    elif i == 1:
        board(cv, bx, by, cell, [[(2, 2, 0), (3, 3, 3)], [(1, 3, 0), (4, 2, 3), (2, 2, 6)], [(3, 2, 0), (1, 2, 2), (4, 3, 5)], [(4, 4, 0), (2, 2, 4), (1, 2, 6)]])
        arrow(cv, bx + 120, by + 150, bx + 120, by + 120, "#F4A6BE", 6)
    elif i == 2:
        board(cv, bx, by, cell, [[(1, 3, 0), (2, 3, 4)], [(3, 2, 0), (4, 3, 2), (1, 3, 5)], [(2, 4, 0), (3, 2, 4), (1, 2, 6)], [(4, 3, 0), (2, 3, 3), (3, 2, 6)], [(1, 2, 0), (3, 3, 2), (4, 3, 5)]])
        cv.rrect(ox + 55, oy + 60, ox + 225, oy + 110, 10, (40, 20, 30, 200))
        draw_text(cv, "GAME OVER", (ox + 62, oy + 66, ox + 218, oy + 104), "#FFFFFF", "#7A2A22", 2, "black")
    else:
        cx, cy = ox + 90, oy + 100
        cv.ellipse(cx - 55, cy - 40, cx + 55, cy + 50, "#3D4A82")
        cv.rrect(cx - 40, cy - 52, cx + 40, cy - 34, 8, "#5C6BA8")
        cv.rrect(cx - 30, cy + 8, cx + 30, cy + 26, 9, "#232B55")
        cv.rrect(cx - 30, cy + 8, cx + 4, cy + 26, 9, "#8FC48A")
        gem(cv, ox + 205, oy + 95, 30)
        arrow(cv, cx + 62, cy - 4, ox + 168, oy + 92, "#F4A6BE", 5)


@rule(r"languages/(ja|en)/howto_0\.png:")
def howto(ctx):
    lang = ctx.m.group(1)
    title, lines, foot = HOWTO[lang]
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.rrect(x0 + 6, y0 + 6, x1 - 6, y1 - 6, 40, (30, 38, 80, 235))
    cv.rrect(x0 + 6, y0 + 6, x1 - 6, y1 - 6, 40, None, GOLD, 7)
    cv.rrect(x0 + 20, y0 + 20, x1 - 20, y1 - 20, 30, None, (255, 236, 190, 110), 2)
    rib = ctx.blank()
    rc = lib.Canvas(ctx.w, ctx.h)
    sub = type("C", (), {})()
    sub.canvas = lambda: rc
    sub.box = lambda: (150, 26, 570, 150)
    cv.im.alpha_composite(ribbon(sub, title).resize(cv.im.size, Image.LANCZOS))
    for i, text in enumerate(lines):
        oy = 190 + i * 240
        left = i % 2 == 0
        ox = 50 if left else 390
        illustration(cv, i, ox, oy)
        tx0, tx1 = (350, 690) if left else (30, 380)
        ls = text.split("\n")
        lh = 46
        top = oy + 95 - lh * len(ls) / 2
        size = min(lib.fit_size(l, tx1 - tx0, lh - 4, "bold") for l in ls)
        for k, l in enumerate(ls):
            draw_text(cv, l, (tx0, top + lh * k, tx1, top + lh * (k + 1)), "#FFFFFF", "#1F274A", 2, "bold", size=min(size, 34))
    draw_text(cv, foot, (100, 1120, 620, 1190), "#FFE28A", "#5A3B12", 3, "black")
    return cv.out()
