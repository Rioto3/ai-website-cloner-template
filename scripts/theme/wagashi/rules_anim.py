"""Animation atlases (Adobe Animate exports): the character puppet, background islands/clouds, effects, HUD frames.

Every part is redrawn inside the original's visible box, so the timelines in the exported .js keep working.
"""
import math
import random
import re

import numpy as np
from PIL import Image, ImageChops, ImageDraw

from . import lib
from .lib import BROWN, GOLD, INDIGO, INDIGO_L, INDIGO_M, PAL, WASHI, bbox_canvas, draw_text, place, place_image, rgb
from .registry import rule
from .rules_blocks import CELL, bolt, block_image, crescent, gem
from .rules_ui import circle_button, coin_image, flame, hexplate, ribbon

A = r"commons/animate/[^/]+/images/\w+\.png:"

SKIN, SKIN_D = "#FFEBD2", "#DDB48A"
HAIR, HAIR_L = "#5B3A2E", "#7A5242"
JACKET, JACKET_D = "#F4A6BE", "#D48AA2"
CLOAK, CLOAK_D = "#9CC17E", "#6FA057"
LEG = "#4A3328"


def seeded(name):
    return random.Random(sum(ord(c) * (i + 1) for i, c in enumerate(name)))


# --- generic glows and sparkles -----------------------------------------------------------------------------------------
def glow_part(ctx, color, power=1.7, peak=255):
    x0, y0, x1, y1 = ctx.box()
    w, h = int(x1 - x0), int(y1 - y0)
    if w < 2 or h < 2:
        return ctx.blank()
    return place_image(ctx, lib.radial_alpha((w, h), color, 0.0, 1.0, power, peak), int(x0), int(y0))


@rule(A + r"effect_light_\d+(_\d)?$")
def effect_light(ctx):
    return glow_part(ctx, "#FFF1C9", 1.9, 235)


@rule(A + r"effect_kira_\d+_0$")
def effect_kira(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 10)
    cx, cy, r = (a + c) / 2, (b + d) / 2, min(c - a, d - b) / 2
    cv.glow(lambda dr, s: dr.ellipse([(cx - r * 0.6) * s, (cy - r * 0.6) * s, (cx + r * 0.6) * s, (cy + r * 0.6) * s], fill=rgb("#FFE3F0", 150)), max(2, r * 0.18))
    lib.star4(cv, cx, cy, r, "#FFFFFF", 0.22)
    return place(ctx, cv, 10)


@rule(A + r"effect_circle_\d$")
def effect_circle(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 12)
    cx, cy, r = (a + c) / 2, (b + d) / 2, min(c - a, d - b) / 2 - 8
    lib.ring_glow(cv, cx, cy, r, max(3, r * 0.05), "#FFE9F1", max(3, r * 0.05))
    return place(ctx, cv, 12)


@rule(A + r"effect_line_\d$")
def effect_line(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 8)
    cx, cy, r = (a + c) / 2, (b + d) / 2, min(c - a, d - b) / 2
    for k in range(28):
        ang = math.radians(k * 360 / 28)
        cv.line([(cx + math.cos(ang) * r * 0.55, cy + math.sin(ang) * r * 0.55), (cx + math.cos(ang) * r * (0.92 if k % 2 else 0.78), cy + math.sin(ang) * r * (0.92 if k % 2 else 0.78))], (255, 240, 250, 210), max(2, r * 0.02))
    return place(ctx, cv, 8)


@rule(A + r"effect_shade_\d$")
def effect_shade(ctx):
    x0, y0, x1, y1 = ctx.box()
    return place_image(ctx, lib.radial_alpha((int(x1 - x0), int(y1 - y0)), "#2A3562", 0.0, 1.0, 1.2, 150), int(x0), int(y0))


@rule(A + r"effect_smoke_\d_(\d)$")
def effect_smoke(ctx):
    i = int(ctx.m.group(1))
    x0, y0, x1, y1 = ctx.box()
    return place_image(ctx, lib.radial_alpha((int(x1 - x0), int(y1 - y0)), "#F3EEF8", 0.0, 1.0, 1.0 + i * 0.15, 200 - i * 22), int(x0), int(y0))


# --- fire / thunder / slice / wind ---------------------------------------------------------------------------------------
@rule(A + r"effect_fire_0_(back_0_)?(\d)$")
def effect_fire(ctx):
    back, i = bool(ctx.m.group(1)), int(ctx.m.group(2))
    cv, (a, b, c, d) = bbox_canvas(ctx, 10)
    w, h = c - a, d - b
    lean = math.sin(i * 0.9 + (0.6 if back else 0)) * w * 0.12
    k = 1.0 - (i % 3) * 0.04
    outer = "#F25C2A" if back else "#F7A23A"
    pts = [(a + w / 2 + lean, b), (a + w * 0.9, b + h * 0.5), (a + w * 0.8, b + h * 0.85), (a + w / 2, d), (a + w * 0.2, b + h * 0.85), (a + w * 0.1, b + h * 0.5)]
    cv.glow(lambda dr, s: dr.polygon([(x * s, y * s) for x, y in pts], fill=rgb(outer)), max(2, w * 0.06), 0.8)
    cv.polygon(pts, rgb(outer, 200 if back else 255))
    if not back:
        cv.polygon([(a + w / 2 + lean * 0.5, b + h * 0.3), (a + w * 0.72, b + h * 0.62), (a + w / 2, d - h * 0.08), (a + w * 0.28, b + h * 0.62)], "#FFE08A")
    return place(ctx, cv, 10)


@rule(A + r"effect_thunder_(\d)_(\d+)$")
def effect_thunder(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 8)
    rnd = seeded(ctx.name)
    w, h = c - a, d - b
    vertical = h >= w
    pts = []
    n = 6
    for k in range(n + 1):
        t = k / n
        if vertical:
            pts.append((a + w * (0.5 + rnd.uniform(-0.35, 0.35) * (0 < k < n)), b + h * t))
        else:
            pts.append((a + w * t, b + h * (0.5 + rnd.uniform(-0.35, 0.35) * (0 < k < n))))
    cv.glow(lambda dr, s: dr.line([(x * s, y * s) for x, y in pts], fill=rgb("#8DA9F0"), width=int(max(w, h) * 0.05 * s + 4 * s)), 4, 1.0)
    cv.line(pts, "#FFFBD0", max(2, max(w, h) * 0.02))
    return place(ctx, cv, 8)


@rule(A + r"effect_slice_\d$")
def effect_slice(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 10)
    w, h = c - a, d - b
    pts = [(c - w * 0.1, b), (a + w * 0.15, (b + d) / 2), (a + w * 0.4, d)]
    cv.glow(lambda dr, s: dr.line([(x * s, y * s) for x, y in pts], fill=rgb("#9BE3C1"), width=int(w * 0.12 * s)), 6, 1.0)
    cv.line(pts, "#F2FFF8", max(3, w * 0.05))
    return place(ctx, cv, 10)


@rule(A + r"effect_leaf_\d$")
def effect_leaf(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 4)
    lib.leaf(cv, (a + c) / 2, (b + d) / 2, (d - b) / 2, "#8FC48A", "#EAF7E2")
    return place(ctx, cv, 4)


@rule(A + r"effect_wind_\d$")
def effect_wind(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 6)
    w, h = c - a, d - b
    pts = [(a, b + h * 0.7), (a + w * 0.35, b + h * 0.35), (a + w * 0.7, b + h * 0.6), (c, b + h * 0.2)]
    cv.line(pts, (255, 255, 255, 190), max(3, h * 0.12))
    cv.line([(a + w * 0.1, b + h * 0.9), (a + w * 0.5, b + h * 0.75), (a + w * 0.8, b + h * 0.85)], (255, 255, 255, 120), max(2, h * 0.08))
    return place(ctx, cv, 6)


# --- coins / items / special blocks -----------------------------------------------------------------------------------------
@rule(A + r"coin_0_(\d)$")
def coin_frame(ctx):
    i = int(ctx.m.group(1))
    cv, (a, b, c, d) = bbox_canvas(ctx, 4)
    r = min(c - a, d - b) / 2
    lib.coin(cv, (a + c) / 2, (b + d) / 2, r, math.cos(i / 10 * 2 * math.pi) * 0.92 + 0.08 * (1 if math.cos(i / 10 * 2 * math.pi) >= 0 else -1))
    return place(ctx, cv, 4)


@rule(A + r"icon_coin_0_effect_0$")
def coin_effect(ctx):
    return glow_part(ctx, "#FFF3C4", 0.9, 230)


@rule(A + r"block_0_diamond_icon_0$")
def anim_diamond(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 10)
    cx, cy, r = (a + c) / 2, (b + d) / 2, min(c - a, d - b) / 2 - 6
    cv.glow(lambda dr, s: dr.ellipse([(cx - r) * s, (cy - r) * s, (cx + r) * s, (cy + r) * s], fill=rgb("#BFE0FF", 200)), 8)
    gem(cv, cx, cy, r)
    return place(ctx, cv, 10)


@rule(A + r"block_0_effect_(\d)_0$")
def anim_block_effect(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 10)
    cv.glow(lambda dr, s: dr.rounded_rectangle([(a + 6) * s, (b + 6) * s, (c - 6) * s, (d - 6) * s], radius=22 * s, fill=rgb("#FFF1C9")), 8, 0.95)
    return place(ctx, cv, 10)


@rule(A + r"block_0_4_0$")
def anim_block4(ctx):
    x0, y0, x1, y1 = ctx.box()
    im = block_image(int(x1 - x0), int(y1 - y0), PAL[4], 1, 4)
    return place_image(ctx, im, int(x0), int(y0))


@rule(A + r"icon_rarity_0$")
def anim_rarity(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 3)
    lib.star5(cv, (a + c) / 2, (b + d) / 2 + 1, min(c - a, d - b) / 2 + 2, "#F5C542", "#B98A26")
    return place(ctx, cv, 3)


@rule(A + r"no_3_(\d)$")
def anim_no3(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 6)
    size = lib.fit_size("0", 999, (d - b) - 6, "black")
    lib.text_grad(cv, ctx.m.group(1), (a - 4, b, c + 4, d), "#FFB6D0", "#F06C9B", "#FFFFFF", 3, "black", size=size)
    return place(ctx, cv, 6)


@rule(A + r"text_new_0$")
def anim_new(ctx):
    x0, y0, x1, y1 = ctx.box()
    sub = type("C", (), {})()
    sub.w, sub.h = ctx.w, ctx.h
    sub.canvas = ctx.canvas
    sub.box = ctx.box
    return ribbon(sub, "NEW")


@rule(A + r"text_fantastic_0(_effect_0)?$")
def text_fantastic(ctx):
    fx = ctx.m.group(1)
    cv, (a, b, c, d) = bbox_canvas(ctx, 10)
    if fx:
        draw_text(cv, "すばらしい！", (a, b, c, d), "#FFFFFF", "#FFFFFF", 2, "black", glow="#FFE7A0", glow_blur=5)
    else:
        lib.text_grad(cv, "すばらしい！", (a, b, c, d), "#FFF6C8", "#F0B93E", "#7A5518", 5, "black", glow="#FFE9A0")
    return place(ctx, cv, 10)


@rule(A + r"text_start_1_(\d)$")
def text_start_letter(ctx):
    ch = "START"[int(ctx.m.group(1))]
    cv, (a, b, c, d) = bbox_canvas(ctx, 8)
    size = lib.fit_size("S", 999, (d - b) - 8, "black")
    lib.text_grad(cv, ch, (a, b, c, d), "#FFFFFF", "#F4A6BE", "#33406F", 4, "black", size=size)
    return place(ctx, cv, 8)


@rule(A + r"text_gameover_0_(\d)$")
def text_gameover_letter(ctx):
    ch = "GAMEOVER"[int(ctx.m.group(1))]
    cv, (a, b, c, d) = bbox_canvas(ctx, 6)
    size = lib.fit_size("G", 999, (d - b) - 6, "black")
    lib.text_grad(cv, ch, (a, b, c, d), "#FFFFFF", "#F4B6C8", "#33406F", 4, "black", size=size)
    return place(ctx, cv, 6)


# --- HUD frames ---------------------------------------------------------------------------------------------------------------
@rule(A + r"ui_frame_0_best_0$")
def anim_frame_best(ctx):
    return hexplate(ctx, "ベスト", "#7C8FC4", "#46578F")


@rule(A + r"ui_frame_0_girl_0$")
def anim_frame_portrait(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 4)
    cx, cy, r = (a + c) / 2, (b + d) / 2, min(c - a, d - b) / 2 - 3
    cv.circle(cx, cy, r, (255, 246, 227, 60))
    cv.circle(cx, cy, r, None, "#E8B84A", 5)
    cv.circle(cx, cy, r - 6, None, (255, 255, 255, 120), 2)
    cv.ellipse(cx - r * 0.6, cy - r * 0.85, cx + r * 0.3, cy - r * 0.45, (255, 255, 255, 90))
    return place(ctx, cv, 4)


@rule(A + r"ui_frame_0_score_0$")
def anim_frame_score(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 6)
    h = d - b
    cx, cy, r = a + h / 2, (b + d) / 2, h / 2 - 2
    # label plate to the right of the orb
    pts = [(a + h * 0.72, cy - h * 0.3), (c - 22, cy - h * 0.3), (c, cy - h * 0.1), (c - 22, cy + h * 0.1), (a + h * 0.72, cy + h * 0.1)]
    cv.polygon(pts, INDIGO_M, GOLD, 3)
    draw_text(cv, "スコア", (a + h * 0.95, cy - h * 0.29, c - 40, cy - h * 0.12), "#FFFFFF", "#1F274A", 1.2, "black")
    # orb
    m = Image.new("L", cv.im.size, 0)
    ImageDraw.Draw(m).ellipse([(cx - r) * cv.ss, (cy - r) * cv.ss, (cx + r) * cv.ss, (cy + r) * cv.ss], fill=255)
    cv.paste_masked(lib.vgrad(cv.im.size, "#8E7CC3", "#3B4A7A"), m)
    cv.circle(cx, cy, r, None, "#E8B84A", 5)
    cv.ellipse(cx - r * 0.55, cy - r * 0.85, cx + r * 0.35, cy - r * 0.35, (255, 255, 255, 90))
    return place(ctx, cv, 6)


@rule(A + r"ui_gage_0_0$")
def anim_gage(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 2)
    cv.rrect(a, b, c, d, (d - b) / 2, "#2A3562")
    cv.rrect(a + 1, b + 1, c - 1, d - 1, (d - b) / 2, None, "#7C8FC4", 2)
    return place(ctx, cv, 2)


@rule(A + r"ui_grid_0_0$")
def grid_panel_lines(ctx):
    im = Image.new("RGBA", (ctx.w, ctx.h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle([0, 0, ctx.w - 1, ctx.h - 1], radius=20, fill=(28, 36, 76, 214))
    for i in range(0, 9):
        x = 8 + i * 80
        d.line([(x, 8), (x, ctx.h - 9)], fill=(255, 255, 255, 58), width=2)
    for j in range(0, 11):
        y = 8 + j * 80
        d.line([(8, y), (ctx.w - 9, y)], fill=(255, 255, 255, 58), width=2)
    d.rounded_rectangle([1, 1, ctx.w - 2, ctx.h - 2], radius=20, outline=(255, 255, 255, 90), width=3)
    return im


@rule(A + r"ui_grid_0_0_0$")
def grid_panel_plain(ctx):
    im = Image.new("RGBA", (ctx.w, ctx.h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle([0, 0, ctx.w - 1, ctx.h - 1], radius=20, fill=(28, 36, 76, 178))
    d.rounded_rectangle([1, 1, ctx.w - 2, ctx.h - 2], radius=20, outline=(255, 255, 255, 70), width=3)
    return im


@rule(A + r"ui_grid_0_0_1$")
def grid_cell(ctx):
    im = Image.new("RGBA", (ctx.w, ctx.h), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle([2, 2, ctx.w - 3, ctx.h - 3], radius=10, fill=(40, 50, 96, 190), outline=(255, 255, 255, 84), width=2)
    return im


# --- jar (kettle) ---------------------------------------------------------------------------------------------------------------
@rule(A + r"nabe_0_0$")
def kettle(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 4)
    w, h = c - a, d - b
    cx = (a + c) / 2
    cv.ellipse(a + w * 0.04, b + h * 0.2, c - w * 0.04, d, "#3A4266")
    cv.ellipse(a + w * 0.1, b + h * 0.24, c - w * 0.1, d - h * 0.02, "#4C5583")
    cv.arc((a - w * 0.02, b + h * 0.32, a + w * 0.2, b + h * 0.62), 90, 270, "#2B3253", w * 0.04)
    cv.arc((c - w * 0.2, b + h * 0.32, c + w * 0.02, b + h * 0.62), -90, 90, "#2B3253", w * 0.04)
    cv.ellipse(a + w * 0.12, b, c - w * 0.12, b + h * 0.26, "#2B3253")
    cv.ellipse(a + w * 0.17, b + h * 0.03, c - w * 0.17, b + h * 0.22, "#9CC17E")
    cv.polygon([(cx - w * 0.16, b + h * 0.52), (cx + w * 0.16, b + h * 0.52), (cx + w * 0.22, b + h * 0.62), (cx, b + h * 0.8), (cx - w * 0.22, b + h * 0.62)], None, "#E9F0FF", 3)
    cv.ellipse(a + w * 0.16, b + h * 0.3, a + w * 0.36, b + h * 0.5, (255, 255, 255, 45))
    return place(ctx, cv, 4)


@rule(A + r"nabe_0_boil_0_(\d)$")
def kettle_boil(ctx):
    cv, (a, b, c, d) = bbox_canvas(ctx, 2)
    cv.ellipse(a, b, c, d, "#B9DDA0")
    return place(ctx, cv, 2)


@rule(A + r"nabe_0_yuge_0_0$")
def kettle_steam(ctx):
    x0, y0, x1, y1 = ctx.box()
    return place_image(ctx, lib.radial_alpha((int(x1 - x0), int(y1 - y0)), "#DDF2C9", 0.0, 1.0, 1.0, 170), int(x0), int(y0))


@rule(A + r"nabe_0_effect_0$")
def kettle_effect(ctx):
    return glow_part(ctx, "#DDF2C9", 1.2, 230)


# --- background islands and clouds ---------------------------------------------------------------------------------------
def cloud(cv, a, b, c, d):
    w, h = c - a, d - b
    col = (206, 194, 228, 120)
    if h > w * 0.85:
        for k in range(7):
            t = k / 6
            r = w * (0.34 - 0.1 * abs(t - 0.5))
            cv.circle(a + w * (0.5 + 0.08 * math.sin(k * 1.7)), b + h * (0.1 + 0.8 * t), r, col)
        return
    cv.rrect(a, b + h * 0.45, c, d, h * 0.28, col)
    for cx, cy, r in ((a + w * 0.28, b + h * 0.5, h * 0.42), (a + w * 0.5, b + h * 0.38, h * 0.5), (a + w * 0.72, b + h * 0.52, h * 0.38)):
        cv.circle(cx, cy, r, col)


def island(cv, a, b, c, d, castle=False):
    w, h = c - a, d - b
    top_h = h * (0.32 if not castle else 0.16)
    y_top = b + (h * 0.5 if castle else 0.0)
    ih = d - y_top
    # underside (a rounded rice-cake shape)
    cv.polygon([(a + w * 0.04, y_top + ih * 0.32), (c - w * 0.04, y_top + ih * 0.32), (c - w * 0.22, y_top + ih * 0.7), (a + w * 0.5 + w * 0.06, d), (a + w * 0.22, y_top + ih * 0.7)], "#A97F78")
    cv.ellipse(a + w * 0.3, y_top + ih * 0.5, c - w * 0.3, d, "#A97F78")
    cv.ellipse(a, y_top + ih * 0.05, c, y_top + ih * 0.6, "#5F8F73")
    cv.ellipse(a + w * 0.04, y_top + ih * 0.05, c - w * 0.04, y_top + ih * 0.42, "#75A585")
    for k in range(3):
        cx = a + w * (0.25 + 0.22 * k)
        cv.circle(cx, y_top + ih * 0.18, ih * 0.09, "#4B7A5C")
    if castle:
        cx = a + w * 0.36
        base = y_top + ih * 0.2
        for i, (ww, hh) in enumerate(((0.2, 0.09), (0.15, 0.09), (0.1, 0.09))):
            yb = base - i * h * 0.11
            cv.rrect(cx - w * ww / 2, yb - h * hh, cx + w * ww / 2, yb, 3, "#CFC2B0")
            cv.polygon([(cx - w * ww * 0.78, yb - h * hh), (cx + w * ww * 0.78, yb - h * hh), (cx + w * ww * 0.5, yb - h * hh * 1.5), (cx - w * ww * 0.5, yb - h * hh * 1.5)], "#A5564F")
        cv.polygon([(cx, base - 3 * h * 0.11 - h * 0.2), (cx - 4, base - 3 * h * 0.11 - h * 0.13), (cx + 4, base - 3 * h * 0.11 - h * 0.13)], "#E8B84A")


@rule(A + r"back_0_\d_\d$")
def back_part(ctx):
    top, bottom = ctx.orig_colors()
    is_cloud = abs(top - bottom).max() < 12 and top[0] > 235
    cv, (a, b, c, d) = bbox_canvas(ctx, 4)
    if is_cloud:
        cloud(cv, a, b, c, d)
    else:
        island(cv, a, b, c, d, castle=ctx.name == "back_0_3_0")
    return place(ctx, cv, 4)


# --- character (the puppet) -----------------------------------------------------------------------------------------------------
PART = re.compile(r"girl_\d_\d_(arm_left|arm_right|body|eyes|hair_0|hair_1|head|houki|leg_left|leg_right|manto|mouth)_?(\d+)?")


@rule(A + r"girl_0_2_body_(\d)$")
def full_figure(ctx):
    """Whole-body pose for the game-over screen (arms raised)."""
    k = int(ctx.m.group(1))
    cv, (a, b, c, d) = bbox_canvas(ctx, 6)
    w, h = c - a, d - b
    cx = (a + c) / 2
    lift = 0.05 * k
    # arms raised
    cv.capsule(a + w * 0.08, b + h * (0.05 + lift), a + w * 0.3, b + h * 0.42, JACKET)
    cv.capsule(c - w * 0.3, b + h * (0.05 + lift), c - w * 0.08, b + h * 0.42, JACKET)
    cv.circle(a + w * 0.19, b + h * (0.06 + lift), w * 0.1, SKIN)
    cv.circle(c - w * 0.19, b + h * (0.06 + lift), w * 0.1, SKIN)
    # cloak + legs + body
    cv.polygon([(cx - w * 0.3, b + h * 0.42), (cx + w * 0.3, b + h * 0.42), (c - w * 0.02, b + h * 0.86), (a + w * 0.02, b + h * 0.86)], CLOAK_D)
    cv.capsule(cx - w * 0.26, b + h * 0.62, cx - w * 0.06, d - h * 0.02, LEG)
    cv.capsule(cx + w * 0.06, b + h * 0.62, cx + w * 0.26, d - h * 0.02, LEG)
    cv.rrect(cx - w * 0.28, b + h * 0.34, cx + w * 0.28, b + h * 0.66, w * 0.14, JACKET)
    # head + hair + face
    cv.ellipse(cx - w * 0.34, b + h * 0.13, cx + w * 0.34, b + h * 0.36, HAIR)
    cv.ellipse(cx - w * 0.28, b + h * 0.16, cx + w * 0.28, b + h * 0.37, SKIN)
    cv.ellipse(cx - w * 0.3, b + h * 0.11, cx + w * 0.3, b + h * 0.24, HAIR)
    for dx in (-0.12, 0.12):
        cv.ellipse(cx + w * dx - 4, b + h * 0.26, cx + w * dx + 4, b + h * 0.3, "#3E3126")
    cv.arc((cx - 10, b + h * 0.29, cx + 10, b + h * 0.33), 20, 160, "#B85A6E", 3)
    return place(ctx, cv, 6)


@rule(A + r"girl_\d_\d_\w+$")
def puppet(ctx):
    m = PART.match(ctx.name)
    part = m.group(1) if m else "body"
    cv, (a, b, c, d) = bbox_canvas(ctx, 6)
    w, h = c - a, d - b
    if part == "head":
        cv.ellipse(a, b, c, d, SKIN_D)
        cv.ellipse(a + 2, b + 2, c - 2, d - 4, SKIN)
        cv.ellipse(a + w * 0.12, b + h * 0.58, a + w * 0.3, b + h * 0.78, (244, 166, 190, 150))
        cv.ellipse(c - w * 0.3, b + h * 0.58, c - w * 0.12, b + h * 0.78, (244, 166, 190, 150))
    elif part in ("hair_0", "hair_1"):
        cv.ellipse(a, b, c, d + (h * 0.1 if part == "hair_1" else 0), HAIR)
        cv.ellipse(a + w * 0.2, b + h * 0.1, a + w * 0.6, b + h * 0.35, HAIR_L)
    elif part == "body":
        cv.rrect(a, b, c, d, min(w, h) * 0.3, JACKET_D)
        cv.rrect(a + 2, b + 2, c - 2, d - 6, min(w, h) * 0.3, JACKET)
    elif part == "manto":
        cv.polygon([(a + w * 0.22, b), (c - w * 0.22, b), (c, d - h * 0.06), (a, d - h * 0.06)], CLOAK_D)
        cv.polygon([(a + w * 0.26, b + 3), (c - w * 0.26, b + 3), (c - w * 0.04, d - h * 0.1), (a + w * 0.04, d - h * 0.1)], CLOAK)
        for k in range(5):
            cv.circle(a + w * (0.1 + 0.2 * k), d - h * 0.06, w * 0.1, CLOAK)
    elif part in ("arm_left", "arm_right"):
        cv.capsule(a, b, c, d - h * 0.16, JACKET)
        cv.circle((a + c) / 2, d - min(w, h) * 0.2, min(w, h) * 0.26, SKIN)
    elif part in ("leg_left", "leg_right"):
        cv.capsule(a, b, c, d - h * 0.1, LEG)
        cv.rrect(a - w * 0.1, d - h * 0.16, c + w * 0.2, d, h * 0.08, "#2E2119")
    elif part == "houki":
        cv.capsule(a, b + h * 0.38, a + w * 0.68, b + h * 0.62, "#8A5A3C")
        for k in range(9):
            t = k / 8
            cv.line([(a + w * 0.62, b + h * 0.5), (c, b + h * (0.05 + 0.9 * t))], "#D9B36A", max(2, h * 0.05))
    elif part == "eyes":
        cy = (b + d) / 2
        if h <= 14:
            for cx in (a + w * 0.25, c - w * 0.25):
                cv.arc((cx - w * 0.14, cy - h * 0.7, cx + w * 0.14, cy + h * 0.9), 20, 160, "#3E3126", 3)
        else:
            for cx in (a + w * 0.22, c - w * 0.22):
                cv.ellipse(cx - w * 0.12, b, cx + w * 0.12, d, "#3E3126")
                cv.circle(cx + w * 0.03, b + h * 0.3, min(w, h) * 0.08, "#FFFFFF")
    elif part == "mouth":
        if h >= 19:
            cv.ellipse(a + w * 0.15, b, c - w * 0.15, d, "#B85A6E")
        else:
            cv.arc((a, b - h * 0.6, c, d + h * 0.3), 20, 160, "#B85A6E", 3)
    else:
        cv.rrect(a, b, c, d, min(w, h) * 0.3, JACKET)
    return place(ctx, cv, 6)
