"""UI sheet (buttons, ribbons, HUD frames, icons), text images, digits and glyph fonts."""
import math

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

from . import lib
from .lib import (BROWN, BROWN_D, GOLD, GOLD_D, INDIGO, INDIGO_L, INDIGO_M, MATCHA, PAL, PINK, SHU, WASHI,
                  draw_text, mix, rgb, text_grad)
from .registry import rule

UI = r"commons/sheet/ui\.png:"


# --- glyph helpers -----------------------------------------------------------------------------------------------
def circle_button(cv, cx, cy, r, base, dark, hi):
    cv.circle(cx, cy + r * 0.06, r, dark)
    m = Image.new("L", cv.im.size, 0)
    ImageDraw.Draw(m).ellipse([(cx - r) * cv.ss, (cy - r) * cv.ss, (cx + r) * cv.ss - 1, (cy + r * 0.94) * cv.ss - 1], fill=255)
    cv.paste_masked(lib.vgrad(cv.im.size, hi, base), m)
    cv.ellipse(cx - r * 0.6, cy - r * 0.85, cx + r * 0.6, cy - r * 0.45, (255, 255, 255, 90))


def g_pause(cv, cx, cy, r, col="#FFFFFF"):
    cv.rrect(cx - r * 0.36, cy - r * 0.4, cx - r * 0.1, cy + r * 0.4, 2, col)
    cv.rrect(cx + r * 0.1, cy - r * 0.4, cx + r * 0.36, cy + r * 0.4, 2, col)


def g_back(cv, cx, cy, r, col="#FFFFFF"):
    cv.line([(cx + r * 0.42, cy), (cx - r * 0.42, cy)], col, r * 0.14)
    cv.line([(cx - r * 0.05, cy - r * 0.38), (cx - r * 0.42, cy), (cx - r * 0.05, cy + r * 0.38)], col, r * 0.14)


def g_cart(cv, cx, cy, r, col="#FFFFFF"):
    cv.line([(cx - r * 0.5, cy - r * 0.35), (cx - r * 0.3, cy - r * 0.35), (cx - r * 0.12, cy + r * 0.2), (cx + r * 0.38, cy + r * 0.2), (cx + r * 0.5, cy - r * 0.2), (cx - r * 0.24, cy - r * 0.2)], col, r * 0.1)
    cv.circle(cx - r * 0.05, cy + r * 0.42, r * 0.08, col)
    cv.circle(cx + r * 0.3, cy + r * 0.42, r * 0.08, col)


def g_speaker(cv, cx, cy, r, on=True, col="#FFFFFF"):
    cv.polygon([(cx - r * 0.45, cy - r * 0.15), (cx - r * 0.2, cy - r * 0.15), (cx + r * 0.05, cy - r * 0.4), (cx + r * 0.05, cy + r * 0.4), (cx - r * 0.2, cy + r * 0.15), (cx - r * 0.45, cy + r * 0.15)], col)
    if on:
        cv.arc((cx - r * 0.05, cy - r * 0.3, cx + r * 0.3, cy + r * 0.3), -50, 50, col, r * 0.09)
        cv.arc((cx - r * 0.12, cy - r * 0.48, cx + r * 0.5, cy + r * 0.48), -50, 50, col, r * 0.09)
    else:
        cv.line([(cx + r * 0.18, cy - r * 0.2), (cx + r * 0.5, cy + r * 0.2)], col, r * 0.09)
        cv.line([(cx + r * 0.5, cy - r * 0.2), (cx + r * 0.18, cy + r * 0.2)], col, r * 0.09)


def flame(cv, cx, cy, r, outer="#F28A2E", inner="#FFD86B"):
    def shape(k):
        return [(cx, cy - r * k), (cx + r * 0.55 * k, cy - r * 0.1 * k), (cx + r * 0.5 * k, cy + r * 0.45 * k), (cx, cy + r * 0.75 * k), (cx - r * 0.5 * k, cy + r * 0.45 * k), (cx - r * 0.55 * k, cy - r * 0.1 * k)]
    cv.polygon(shape(1.0), outer)
    cv.polygon([(x, y + r * 0.18) for x, y in shape(0.55)], inner)


def bolt(cv, cx, cy, r, fill, edge=None):
    pts = [(cx + r * 0.2, cy - r), (cx - r * 0.55, cy + r * 0.15), (cx - r * 0.05, cy + r * 0.15), (cx - r * 0.2, cy + r), (cx + r * 0.55, cy - r * 0.2), (cx + r * 0.05, cy - r * 0.2)]
    cv.polygon(pts, fill, edge, max(1, r * 0.08) if edge else 0)


def soft(cv, fn, blur, opacity=1.0):
    cv.glow(fn, blur, opacity)


# --- ribbons / plates --------------------------------------------------------------------------------------------
def ribbon(ctx, text, main=INDIGO_M, dark=INDIGO, light=INDIGO_L, text_col="#FFFFFF"):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    w, h = x1 - x0, y1 - y0
    tail = w * 0.09
    band_y0, band_y1 = y0 + h * 0.18, y1 - h * 0.28
    cv.polygon([(x0 + tail * 0.55, band_y0 + (band_y1 - band_y0) * 0.35), (x0, band_y0 + (band_y1 - band_y0) * 0.35), (x0 + tail * 0.35, band_y0 + (band_y1 - band_y0) * 0.72), (x0, y1 - h * 0.05), (x0 + tail * 1.25, y1 - h * 0.05), (x0 + tail * 1.25, band_y0 + (band_y1 - band_y0) * 0.6)], dark)
    cv.polygon([(x1 - tail * 0.55, band_y0 + (band_y1 - band_y0) * 0.35), (x1, band_y0 + (band_y1 - band_y0) * 0.35), (x1 - tail * 0.35, band_y0 + (band_y1 - band_y0) * 0.72), (x1, y1 - h * 0.05), (x1 - tail * 1.25, y1 - h * 0.05), (x1 - tail * 1.25, band_y0 + (band_y1 - band_y0) * 0.6)], dark)
    bx0, bx1 = x0 + tail * 0.9, x1 - tail * 0.9
    cv.rrect(bx0, band_y0 + 6, bx1, band_y1 + 6, h * 0.08, dark)
    m = Image.new("L", cv.im.size, 0)
    ImageDraw.Draw(m).rounded_rectangle([bx0 * cv.ss, band_y0 * cv.ss, bx1 * cv.ss - 1, band_y1 * cv.ss - 1], radius=h * 0.08 * cv.ss, fill=255)
    cv.paste_masked(lib.vgrad(cv.im.size, light, main), m)
    cv.rrect(bx0 + 4, band_y0 + 3, bx1 - 4, band_y0 + h * 0.1, 3, (255, 255, 255, 70))
    draw_text(cv, text, (bx0 + w * 0.05, band_y0 + 2, bx1 - w * 0.05, band_y1 - 2), text_col, "#1F274A", 2, "black", size=None)
    return cv.out()


def hexplate(ctx, text, top, bottom, edge=GOLD, text_col="#FFFFFF"):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    ins = 10
    x0, y0, x1, y1 = x0 + ins, y0 + ins, x1 - ins, y1 - ins - 8
    cut = (y1 - y0) * 0.32
    pts = [(x0 + cut, y0), (x1 - cut, y0), (x1, (y0 + y1) / 2), (x1 - cut, y1), (x0 + cut, y1), (x0, (y0 + y1) / 2)]
    m = Image.new("L", cv.im.size, 0)
    ImageDraw.Draw(m).polygon([(x * cv.ss, y * cv.ss) for x, y in pts], fill=255)
    cv.paste_masked(lib.vgrad(cv.im.size, top, bottom), m)
    cv.polygon(pts, None, edge, 3)
    if text:
        # small label in the upper part; the engine draws the number underneath
        draw_text(cv, text, (x0 + cut * 1.2, y0 + 3, x1 - cut * 1.2, y0 + (y1 - y0) * 0.36), text_col, "#1F274A", 1.2, "black")
    return cv.out()


def soft_shape(ctx, kind, color, blur=6, opacity=0.9):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    m = 8

    def fn(d, s):
        if kind == "rrect":
            d.rounded_rectangle([(x0 + m) * s, (y0 + m) * s, (x1 - m) * s, (y1 - m) * s], radius=16 * s, fill=rgb(color))
        elif kind == "ellipse":
            d.ellipse([(x0 + m) * s, (y0 + m) * s, (x1 - m) * s, (y1 - m) * s], fill=rgb(color))
    cv.glow(fn, blur, opacity)
    return cv.out()


def glow_disc(ctx, color, power=1.6, peak=255):
    im = lib.radial_alpha((ctx.w, ctx.h), color, 0.0, 1.0, power, peak)
    return im


# --- ui.png ---------------------------------------------------------------------------------------------------------
@rule(UI + r"block_0_effect_6_0\.png$")
def ui_block_glow(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.glow(lambda d, s: d.rounded_rectangle([(x0 + 14) * s, (y0 + 14) * s, (x1 - 14) * s, (y1 - 14) * s], radius=22 * s, fill=rgb("#A9E0A0")), 9, 0.95)
    return cv.out()


@rule(UI + r"block_0_effect_7_0\.png$")
def ui_beam(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    m = Image.new("L", cv.im.size, 0)
    ImageDraw.Draw(m).rectangle([x0 * cv.ss, y0 * cv.ss, x1 * cv.ss, y1 * cv.ss], fill=255)
    lay = lib.vgrad(cv.im.size, (169, 224, 160, 0), (169, 224, 160, 235))
    cv.paste_masked(lay, m)
    return cv.out()


@rule(UI + r"btn_0\.png$")
def ui_btn0(ctx):
    cv = ctx.canvas()
    lib.pill(cv, ctx.box(), "#8FC48A", "#5C9560", "#C4E6B8", "#4E8452")
    return cv.out()


@rule(UI + r"btn_1\.png$")
def ui_btn1(ctx):
    cv = ctx.canvas()
    lib.pill(cv, ctx.box(), "#F39BB8", "#C96A8C", "#FBCFDD", "#B85A7C")
    return cv.out()


@rule(UI + r"btn_0_shade_0\.png$")
def ui_btn_shade(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.glow(lambda d, s: d.ellipse([x0 * s, y0 * s, x1 * s, y1 * s], fill=rgb("#4E8452", 200)), 5)
    return cv.out()


def round_icon(ctx, base, dark, hi, glyph):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    r = min(x1 - x0, y1 - y0) / 2 - 2
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    circle_button(cv, cx, cy, r, base, dark, hi)
    glyph(cv, cx, cy - 1, r)
    return cv.out()


@rule(UI + r"btn_flame_0\.png$")
def ui_btn_flame(ctx):
    return round_icon(ctx, "#F2903A", "#C0641C", "#FFC078", lambda cv, cx, cy, r: flame(cv, cx, cy + r * 0.05, r * 0.55, "#FFF3D6", "#FFD86B"))


@rule(UI + r"btn_pause_0\.png$")
def ui_btn_pause(ctx):
    return round_icon(ctx, INDIGO_M, INDIGO, INDIGO_L, g_pause)


@rule(UI + r"btn_return_0\.png$")
def ui_btn_return(ctx):
    return round_icon(ctx, INDIGO_M, INDIGO, INDIGO_L, g_back)


@rule(UI + r"btn_shop_0\.png$")
def ui_btn_shop(ctx):
    return round_icon(ctx, INDIGO_M, INDIGO, INDIGO_L, g_cart)


@rule(UI + r"btn_sound_0_off_0\.png$")
def ui_btn_soff(ctx):
    return round_icon(ctx, "#F39BB8", "#C96A8C", "#FBCFDD", lambda cv, cx, cy, r: g_speaker(cv, cx, cy, r, False))


@rule(UI + r"btn_sound_0_on_0\.png$")
def ui_btn_son(ctx):
    return round_icon(ctx, "#F39BB8", "#C96A8C", "#FBCFDD", lambda cv, cx, cy, r: g_speaker(cv, cx, cy, r, True))


def coin_image(ctx, glow=False):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    r = min(x1 - x0, y1 - y0) / 2 - 1
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    if glow:
        cv.glow(lambda d, s: d.ellipse([(cx - r) * s, (cy - r) * s, (cx + r) * s, (cy + r) * s], fill=rgb("#FFE9A0")), 4, 0.9)
    lib.coin(cv, cx, cy, r)
    return cv.out()


@rule(UI + r"coin_0_0\.png$")
def ui_coin(ctx):
    return coin_image(ctx)


@rule(UI + r"icon_coin_0\.png$")
def ui_icon_coin0(ctx):
    return coin_image(ctx)


@rule(UI + r"icon_coin_1\.png$")
def ui_icon_coin1(ctx):
    return coin_image(ctx, True)


@rule(UI + r"icon_coin_0_effect_0\.png$")
def ui_coin_effect(ctx):
    return glow_disc(ctx, "#FFF3C4", 0.8)


@rule(UI + r"effect_kira_4_0\.png$")
def ui_kira(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.glow(lambda d, s: d.ellipse([(x0 + 8) * s, (y0 + 10) * s, (x1 - 8) * s, (y1 - 10) * s], fill=rgb("#FFFFFF", 160)), 3)
    lib.star4(cv, (x0 + x1) / 2, (y0 + y1) / 2, min(x1 - x0, y1 - y0) / 2, "#FFFFFF")
    return cv.out()


@rule(UI + r"effect_slice_0\.png$")
def ui_slice(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cx = (x0 + x1) / 2
    cv.glow(lambda d, s: d.line([(cx * s, y0 * s), (cx * s, y1 * s)], fill=rgb("#9BE3C1"), width=int(9 * s)), 5, 1.0)
    cv.line([(cx, y0 + 2), (cx, y1 - 2)], "#F2FFF8", 3)
    return cv.out()


@rule(UI + r"icon_best_0_0\.png$")
def ui_best_ring(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cx, cy, r = (x0 + x1) / 2, (y0 + y1) / 2, min(x1 - x0, y1 - y0) / 2 - 12
    lib.ring_glow(cv, cx, cy, r, 5, "#F4A6BE", 6)
    lib.ring_glow(cv, cx, cy, r * 0.72, 3, "#FFD4E2", 4, 0.8)
    for k in range(8):
        a = math.radians(k * 45)
        lib.sakura(cv, cx + r * math.cos(a), cy + r * math.sin(a), 7, "#F4A6BE")
    return cv.out()


@rule(UI + r"icon_best_0_1\.png$")
def ui_best_text(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    lib.text_grad(cv, "BEST!", (x0, y0, x1, y1), "#FFB6D0", "#F06C9B", "#FFFFFF", 4, "black")
    im = cv.out().rotate(12, resample=Image.BICUBIC, center=(ctx.w / 2, ctx.h / 2))
    return im


@rule(UI + r"icon_q_0\.png$")
def ui_q(ctx):
    cv = ctx.canvas()
    draw_text(cv, "?", ctx.box(), "#FFFFFF", "#7C8FC4", 2, "black")
    return cv.out()


@rule(UI + r"icon_rarity_0\.png$")
def ui_rarity(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    lib.star5(cv, (x0 + x1) / 2, (y0 + y1) / 2 + 1, min(x1 - x0, y1 - y0) / 2 + 2, "#F5C542", "#B98A26")
    return cv.out()


@rule(UI + r"icon_x2_0\.png$")
def ui_x2(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.rrect(x0 + 2, y0 + 8, x1 - 2, y1 - 8, 12, "#F39BB8")
    draw_text(cv, "x2", (x0 + 6, y0 + 10, x1 - 6, y1 - 10), "#FFFFFF", "#B85A7C", 2, "black")
    return cv.out()


@rule(UI + r"light_1_0\.png$")
def ui_light(ctx):
    return glow_disc(ctx, "#FFFFFF", 1.2, 230)


@rule(UI + r"popup_image_continue_0\.png$")
def ui_plus(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    w = (x1 - x0) * 0.2
    L = (x1 - x0) * 0.5
    m = Image.new("L", cv.im.size, 0)
    d = ImageDraw.Draw(m)
    d.rounded_rectangle([(cx - w / 2) * cv.ss, (cy - L / 2) * cv.ss, (cx + w / 2) * cv.ss, (cy + L / 2) * cv.ss], radius=w / 2 * cv.ss, fill=255)
    d.rounded_rectangle([(cx - L / 2) * cv.ss, (cy - w / 2) * cv.ss, (cx + L / 2) * cv.ss, (cy + w / 2) * cv.ss], radius=w / 2 * cv.ss, fill=255)
    cv.glow(lambda dd, s: dd.rounded_rectangle([(cx - w / 2) * s, (cy - L / 2) * s, (cx + w / 2) * s, (cy + L / 2) * s], radius=w / 2 * s, fill=rgb("#FFE9A0")), 8, 0.8)
    cv.paste_masked(lib.vgrad(cv.im.size, "#FFE79A", "#F2A93B"), m)
    return cv.out()


@rule(UI + r"popup_image_thunder_0\.png$")
def ui_thunder_img(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cx, cy, r = (x0 + x1) / 2, (y0 + y1) / 2, (y1 - y0) / 2 - 14
    cv.glow(lambda d, s: d.polygon([(px * s, py * s) for px, py in [(cx + r * 0.2, cy - r), (cx - r * 0.55, cy + r * 0.15), (cx - r * 0.05, cy + r * 0.15), (cx - r * 0.2, cy + r), (cx + r * 0.55, cy - r * 0.2), (cx + r * 0.05, cy - r * 0.2)]], fill=rgb("#8DA9F0")), 9, 1.0)
    bolt(cv, cx, cy, r, "#FFFBD0", "#E8C64A")
    return cv.out()


@rule(UI + r"popup_line_0\.png$")
def ui_popup_line(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cy = (y0 + y1) / 2
    m = Image.new("L", cv.im.size, 0)
    ImageDraw.Draw(m).rounded_rectangle([x0 * cv.ss, (cy - 2) * cv.ss, x1 * cv.ss, (cy + 2) * cv.ss], radius=2 * cv.ss, fill=255)
    h = np.abs(np.linspace(-1, 1, cv.im.size[0]))
    a = (np.clip(1 - h ** 3, 0, 1) * 200).astype(np.uint8)
    arr = np.zeros((cv.im.size[1], cv.im.size[0], 4), np.uint8)
    arr[..., :3] = (226, 219, 246)
    arr[..., 3] = a[None, :]
    cv.paste_masked(Image.fromarray(arr, "RGBA"), m)
    return cv.out()


RIBBON_JA = {"continue": "コンティニュー", "flame": "ファイア", "pause": "一時停止", "score": "スコア", "shop": "ショップ", "thunder": "サンダー"}


@rule(UI + r"popup_title_(continue|flame|pause|score|shop|thunder)_0\.png$")
def ui_ribbons(ctx):
    return ribbon(ctx, RIBBON_JA[ctx.m.group(1)])


def text_frame(ctx, text, fill="#FFFFFF", stroke=None, sw=0, weight="black", glow=None, grad=None, underline=False, rot=0):
    cv = ctx.canvas()
    box = ctx.box()
    if grad:
        lib.text_grad(cv, text, box, grad[0], grad[1], stroke, sw, weight, glow=glow)
    else:
        draw_text(cv, text, box, fill, stroke, sw, weight, glow=glow)
    if underline:
        x0, y0, x1, y1 = box
        cv.line([(x0, y1 + 1), (x1, y1 + 1)], fill, 2)
    im = cv.out()
    return im.rotate(rot, resample=Image.BICUBIC, center=(ctx.w / 2, ctx.h / 2)) if rot else im


@rule(UI + r"text_best_0\.png$")
def ui_text_best(ctx):
    return text_frame(ctx, "BEST!", grad=("#FFE28A", "#F2A93B"), stroke="#8A4B12", sw=4, rot=-8)


@rule(UI + r"text_bestscore_0\.png$")
def ui_text_bestscore(ctx):
    return text_frame(ctx, "ベストスコア", "#FFFFFF", "#33406F", 3)


@rule(UI + r"text_combo_0\.png$")
def ui_text_combo(ctx):
    return text_frame(ctx, "コンボ", "#FFFFFF", "#D9578A", 4, grad=("#FFFFFF", "#FFC2D8"))


@rule(UI + r"text_combo_0_effect_0\.png$")
def ui_text_combo_fx(ctx):
    return text_frame(ctx, "コンボ", "#FFFFFF", "#FFFFFF", 3, glow="#FFD9E6")


@rule(UI + r"text_kakko_0_(left|right)\.png$")
def ui_kakko(ctx):
    return text_frame(ctx, "(" if ctx.m.group(1) == "left" else ")", "#FFFFFF", "#33406F", 2, "bold")


@rule(UI + r"text_new_0\.png$")
def ui_text_new(ctx):
    return ribbon(ctx, "NEW")


@rule(UI + r"text_ok_0\.png$")
def ui_text_ok(ctx):
    return text_frame(ctx, "OK", "#FFFFFF", "#33406F", 2, "black", underline=True)


@rule(UI + r"text_percent_0\.png$")
def ui_text_pct(ctx):
    return text_frame(ctx, "%", "#FFFFFF", "#33406F", 2, "bold")


@rule(UI + r"text_score_0\.png$")
def ui_text_score(ctx):
    return text_frame(ctx, "スコア", grad=("#FFE28A", "#F2A93B"), stroke="#8A4B12", sw=3)


@rule(UI + r"text_scorebonus_0\.png$")
def ui_text_scorebonus(ctx):
    return text_frame(ctx, "スコアボーナス", "#FFFFFF", "#33406F", 3)


@rule(UI + r"text_start_0\.png$")
def ui_text_start(ctx):
    return text_frame(ctx, "スタート", "#FFFFFF", "#1F274A", 5)


@rule(UI + r"text_x_0\.png$")
def ui_text_x(ctx):
    return text_frame(ctx, "×", "#FFFFFF", "#D9578A", 3)


@rule(UI + r"text_x_0_effect_0\.png$")
def ui_text_x_fx(ctx):
    return text_frame(ctx, "×", "#FFFFFF", "#FFFFFF", 2, glow="#FFD9E6")


@rule(UI + r"ui_bar_0_0\.png$")
def ui_bar0(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.rrect(x0, y0, x1, y1, (y1 - y0) / 2, "#F39BB8")
    lay = cv.layer()
    d = ImageDraw.Draw(lay)
    for x in range(int(x0) - 40, int(x1), 16):
        d.polygon([((x) * cv.ss, y1 * cv.ss), ((x + 8) * cv.ss, y1 * cv.ss), ((x + 22) * cv.ss, y0 * cv.ss), ((x + 14) * cv.ss, y0 * cv.ss)], fill=(255, 255, 255, 70))
    m = Image.new("L", cv.im.size, 0)
    ImageDraw.Draw(m).rounded_rectangle([x0 * cv.ss, y0 * cv.ss, x1 * cv.ss - 1, y1 * cv.ss - 1], radius=(y1 - y0) / 2 * cv.ss, fill=255)
    cv.paste_masked(lay, m)
    return cv.out()


@rule(UI + r"ui_bar_1_0_0\.png$")
def ui_bar10(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    for x in range(int(x0) + 4, int(x1), 12):
        cv.circle(x, (y0 + y1) / 2, 2, (226, 219, 246, 150))
    return cv.out()


@rule(UI + r"ui_bar_1_1_\d\.png$")
def ui_bar11(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.rrect(x0, y0, x1, y1, (y1 - y0) / 2, (226, 219, 246, 210))
    return cv.out()


@rule(UI + r"ui_frame_0_best_0\.png$")
def ui_frame_best(ctx):
    return hexplate(ctx, "ベスト", "#7C8FC4", "#46578F")


@rule(UI + r"ui_frame_0_target_0\.png$")
def ui_frame_target(ctx):
    return hexplate(ctx, "目標", "#C58BB0", "#8E4F7E")


@rule(UI + r"ui_frame_0_target_0_effect_0\.png$")
def ui_frame_target_fx(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    ins = 20
    x0, y0, x1, y1 = x0 + ins, y0 + ins, x1 - ins, y1 - ins
    cut = (y1 - y0) * 0.32
    pts = [(x0 + cut, y0), (x1 - cut, y0), (x1, (y0 + y1) / 2), (x1 - cut, y1), (x0 + cut, y1), (x0, (y0 + y1) / 2)]
    cv.glow(lambda d, s: d.polygon([(x * s, y * s) for x, y in pts], fill=rgb("#FFE79A")), 8, 1.0)
    return cv.out()


@rule(UI + r"ui_frame_0_score_effect_0\.png$")
def ui_frame_score_fx(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    h = y1 - y0
    cv.glow(lambda d, s: (d.ellipse([(x0 + 10) * s, (y0 + 10) * s, (x0 + h - 10) * s, (y1 - 10) * s], fill=rgb("#FFE79A")), d.rounded_rectangle([(x0 + h * 0.6) * s, (y0 + h * 0.3) * s, (x1 - 10) * s, (y1 - h * 0.3) * s], radius=16 * s, fill=rgb("#FFE79A"))), 8, 0.95)
    return cv.out()


@rule(UI + r"ui_frame_1_0\.png$")
def ui_frame1(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.rrect(x0, y0, x1, y1, (y1 - y0) / 2, (35, 43, 77, 200))
    return cv.out()


@rule(UI + r"ui_frame_2_0\.png$")
def ui_frame2(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.rrect(x0, y0, x1, y1, 16, (255, 255, 255, 70))
    cv.rrect(x0, y0, x1, y1, 16, None, (255, 255, 255, 140), 2)
    return cv.out()


@rule(UI + r"ui_frame_2_effect_0\.png$")
def ui_frame2_fx(ctx):
    return soft_shape(ctx, "rrect", "#FFFFFF", 7)


@rule(UI + r"ui_gage_0_0\.png$")
def ui_gage0(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.rrect(x0, y0, x1, y1, (y1 - y0) / 2, "#2A3562")
    cv.rrect(x0 + 1, y0 + 1, x1 - 1, y1 - 1, (y1 - y0) / 2, None, "#7C8FC4", 2)
    return cv.out()


@rule(UI + r"ui_gage_0_1\.png$")
def ui_gage1(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    lib.pill(cv, (x0, y0, x1, y1), "#8FC48A", "#5C9560", "#C4E6B8")
    return cv.out()


@rule(UI + r"ui_gage_0_effect_0\.png$")
def ui_gage_fx(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.glow(lambda d, s: d.rounded_rectangle([(x0 + 8) * s, (y0 + 8) * s, (x1 - 8) * s, (y1 - 8) * s], radius=10 * s, fill=rgb("#FFFFFF")), 4, 1.0)
    return cv.out()


@rule(UI + r"ui_grid_next_0\.png$")
def ui_grid_next(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cv.rrect(x0, y0, x1, y1, 10, (36, 44, 80, 175))
    cw = (x1 - x0) / 8
    for i in range(1, 8):
        cv.line([(x0 + cw * i, y0 + 8), (x0 + cw * i, y1 - 8)], (255, 255, 255, 45), 2, False)
    cv.rrect(x0, y0, x1, y1, 10, None, (255, 255, 255, 70), 2)
    return cv.out()


@rule(UI + r"ui_header_0_0\.png$")
def ui_header(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    m = Image.new("L", cv.im.size, 0)
    ImageDraw.Draw(m).rectangle([x0 * cv.ss, y0 * cv.ss, x1 * cv.ss, y1 * cv.ss], fill=255)
    cv.paste_masked(lib.vgrad(cv.im.size, (35, 43, 77, 200), (35, 43, 77, 60)), m)
    return cv.out()


@rule(UI + r"ui_icon_i_0\.png$")
def ui_icon_i(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    r = min(x1 - x0, y1 - y0) / 2 - 2
    circle_button(cv, (x0 + x1) / 2, (y0 + y1) / 2, r, INDIGO_M, INDIGO, INDIGO_L)
    draw_text(cv, "!", (x0 + r * 0.7, y0 + r * 0.45, x1 - r * 0.7, y1 - r * 0.45), "#FFFFFF", None, 0, "black")
    return cv.out()


@rule(UI + r"ui_shop_frame_0_(\d)\.png$")
def ui_shop_frame(ctx):
    k = int(ctx.m.group(1))
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    edge = ["#FFFFFF", "#E8B84A", "#B78AD9"][k]
    cv.rrect(x0 + 4, y0 + 4, x1 - 4, y1 - 4, 18, (255, 255, 255, 60) if k == 0 else rgb(edge, 55))
    cv.rrect(x0 + 4, y0 + 4, x1 - 4, y1 - 4, 18, None, edge, 3)
    return cv.out()


@rule(UI + r"ui_shop_frame_0_effect_0\.png$")
def ui_shop_frame_fx(ctx):
    return soft_shape(ctx, "rrect", "#FFFFFF", 8)
