"""Baked-in text: language text sheets, error-modal texts, language picker, loading glyphs, digits, bitmap font."""
import math

from PIL import Image, ImageDraw

from . import lib
from .lib import INDIGO, INDIGO_L, INDIGO_M, draw_text, rgb
from .registry import rule
from .rules_ui import circle_button, ribbon

STROKE = "#4A3A2E"

TEXT = {
    "ja": {
        "btn_howto_0": ("遊び方", False), "btn_next_0": ("次へ", False), "btn_quit_0": ("タイトルに戻る", False),
        "btn_resume_0": ("ゲームを続ける", False), "btn_resume_1": ("ゲームを続ける", True),
        "btn_use_0": ("使用する", True), "btn_x2_0": ("2倍で獲得する", True),
        "popup_text_continue_0": "下3列を消して再開", "popup_text_flame_0": "下3列を炎で焼き尽くします",
        "popup_text_thunder_0": "下2列をサンダーで消します", "popup_title_coin_0": "獲得コイン",
        "text_ad_0": "※広告を途中でスキップした場合は無効になります", "text_cancel_0": "キャンセル",
    },
    "en": {
        "btn_howto_0": ("HOW TO PLAY", False), "btn_next_0": ("NEXT", False), "btn_quit_0": ("BACK TO TITLE", False),
        "btn_resume_0": ("CONTINUE", False), "btn_resume_1": ("CONTINUE", True),
        "btn_use_0": ("USE", True), "btn_x2_0": ("GET x2", True),
        "popup_text_continue_0": "Clear 3 rows and resume", "popup_text_flame_0": "Burn the bottom 3 rows",
        "popup_text_thunder_0": "Zap the bottom 2 rows", "popup_title_coin_0": "GET COIN",
        "text_ad_0": "* Skipping the ad cancels this.", "text_cancel_0": "CANCEL",
    },
}


def film_icon(cv, x, cy, h, col="#FFFFFF"):
    w = h * 1.15
    cv.rrect(x, cy - h / 2, x + w, cy + h / 2, h * 0.16, col)
    cv.rrect(x + w * 0.12, cy - h * 0.34, x + w * 0.88, cy + h * 0.34, h * 0.08, "#4A3A2E")
    cv.polygon([(x + w * 0.42, cy - h * 0.2), (x + w * 0.42, cy + h * 0.2), (x + w * 0.7, cy)], col)
    return w


@rule(r"languages/(ja|en)/text\.png:(.+)\.png$")
def lang_text(ctx):
    lang, key = ctx.m.group(1), ctx.m.group(2)
    spec = TEXT[lang][key]
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    if key == "popup_title_coin_0":
        return ribbon(ctx, spec)
    if key.startswith("popup_text"):
        draw_text(cv, spec, (x0, y0, x1, y1), "#FFFFFF", "#2A3562", 3, "bold")
        return cv.out()
    if key == "text_ad_0":
        draw_text(cv, spec, (x0, y0, x1, y1), "#FFFFFF", "#2A3562", 1.5, "bold")
        return cv.out()
    if key == "text_cancel_0":
        draw_text(cv, spec, (x0 + 4, y0, x1 - 4, y1 - 6), "#FFFFFF", "#2A3562", 2, "bold")
        cv.line([(x0, y1 - 1), (x1, y1 - 1)], "#FFFFFF", 2)
        return cv.out()
    text, icon = spec
    if icon:
        h = min(y1 - y0, 40)
        iw = film_icon(cv, x0, (y0 + y1) / 2, h)
        draw_text(cv, text, (x0 + iw + 8, y0, x1, y1), "#FFFFFF", STROKE, 3, "black")
    else:
        draw_text(cv, text, (x0, y0, x1, y1), "#FFFFFF", STROKE, 3, "black")
    return cv.out()


# --- utility (error modal) ---------------------------------------------------------------------------------------------
UTIL = {
    "fm_retry_ja": "リトライ", "fm_retry_en": "Retry",
    "fm_title_ja": "読み込みに失敗しました", "fm_title_en": "Failed to load",
    "fm_text_ja": "通信環境の良い場所で\nもう一度お試しください。", "fm_text_en": "Please try again in a location\nwith a good network environment.",
}


@rule(r"utility\.png:(fm_\w+)\.png$")
def utility_text(ctx):
    text = UTIL[ctx.m.group(1)]
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    lines = text.split("\n")
    lh = (y1 - y0) / len(lines)
    size = min(lib.fit_size(l, x1 - x0, lh - 2, "bold") for l in lines)
    for i, l in enumerate(lines):
        draw_text(cv, l, (x0, y0 + lh * i, x1, y0 + lh * (i + 1)), "#FFFFFF", None, 0, "bold", size=size)
    return cv.out()


# --- language picker -------------------------------------------------------------------------------------------------------
@rule(r"langui\.png:btn_0\.png$")
def lang_btn0(ctx):
    cv = ctx.canvas()
    lib.pill(cv, ctx.box(), "#8FC48A", "#5C9560", "#C4E6B8", "#4E8452")
    return cv.out()


@rule(r"langui\.png:btn_1\.png$")
def lang_btn1(ctx):
    cv = ctx.canvas()
    lib.pill(cv, ctx.box(), "#E7E3EE", "#B4AEC4", "#FFFFFF", "#A39CB8")
    return cv.out()


@rule(r"langui\.png:btn_(en|ja)_(\d)\.png$")
def lang_btn_text(ctx):
    lang, k = ctx.m.group(1), int(ctx.m.group(2))
    cv = ctx.canvas()
    draw_text(cv, "English" if lang == "en" else "日本語", ctx.box(), "#FFFFFF" if k == 1 else "#3F6B45", "#3F6B45" if k == 1 else None, 2 if k == 1 else 0, "bold")
    return cv.out()


@rule(r"langui\.png:btn_language_0\.png$")
def lang_globe(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cx, cy, r = (x0 + x1) / 2, (y0 + y1) / 2, min(x1 - x0, y1 - y0) / 2 - 2
    circle_button(cv, cx, cy, r, "#F39BB8", "#C96A8C", "#FBCFDD")
    cv.circle(cx, cy - 1, r * 0.55, None, "#FFFFFF", 3)
    cv.arc((cx - r * 0.25, cy - 1 - r * 0.55, cx + r * 0.25, cy - 1 + r * 0.55), 0, 360, "#FFFFFF", 3)
    cv.line([(cx - r * 0.55, cy - 1), (cx + r * 0.55, cy - 1)], "#FFFFFF", 3)
    return cv.out()


@rule(r"langui\.png:btn_x_0\.png$")
def lang_x(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    cx, cy, r = (x0 + x1) / 2, (y0 + y1) / 2, min(x1 - x0, y1 - y0) / 2 - 2
    circle_button(cv, cx, cy, r, "#F39BB8", "#C96A8C", "#FBCFDD")
    cv.line([(cx - r * 0.35, cy - r * 0.35), (cx + r * 0.35, cy + r * 0.35)], "#FFFFFF", r * 0.14)
    cv.line([(cx + r * 0.35, cy - r * 0.35), (cx - r * 0.35, cy + r * 0.35)], "#FFFFFF", r * 0.14)
    return cv.out()


@rule(r"langui\.png:popup_title_language_0\.png$")
def lang_title(ctx):
    return ribbon(ctx, "LANGUAGE")


# --- loading screen ------------------------------------------------------------------------------------------------------
@rule(r"sheet/loading\.png:c(\d+)\.png$")
def loading_char(ctx):
    return glyph(ctx, chr(int(ctx.m.group(1))), 0.78)


@rule(r"sheet/loading\.png:loading_line\.png$")
def loading_line(ctx):
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    n = 7
    for i in range(n):
        cx = x0 + (x1 - x0) * (i + 0.5) / n
        lib.sakura(cv, cx, (y0 + y1) / 2, 11 if i % 2 == 0 else 8, "#FFFFFF", "#FFF6E3")
    return cv.out()


@rule(r"sheet/loading\.png:loading_girl\.png$")
def loading_silhouette(ctx):
    """A white teapot silhouette (replaces the witch)."""
    cv = ctx.canvas()
    x0, y0, x1, y1 = ctx.box()
    w, h = x1 - x0, y1 - y0
    cx = (x0 + x1) / 2
    W = "#FFFFFF"
    cv.ellipse(cx - w * 0.36, y0 + h * 0.34, cx + w * 0.36, y0 + h * 0.9, W)
    cv.rrect(cx - w * 0.26, y0 + h * 0.27, cx + w * 0.26, y0 + h * 0.4, 8, W)
    cv.circle(cx, y0 + h * 0.22, w * 0.07, W)
    cv.polygon([(cx + w * 0.3, y0 + h * 0.55), (cx + w * 0.55, y0 + h * 0.4), (cx + w * 0.5, y0 + h * 0.52), (cx + w * 0.33, y0 + h * 0.68)], W)
    cv.arc((cx - w * 0.5, y0 + h * 0.42, cx - w * 0.2, y0 + h * 0.78), 90, 270, W, w * 0.07)
    for i, dx in enumerate((-0.12, 0.02, 0.16)):
        cv.arc((cx + w * dx - 6, y0 - 2 + (i % 2) * 5, cx + w * dx + 6, y0 + 16 + (i % 2) * 5), 60, 300, (255, 255, 255, 190), 3)
    return cv.out()


# --- glyphs (bitmap fonts) --------------------------------------------------------------------------------------------------
def glyph(ctx, ch, baseline=0.78):
    cv = ctx.canvas()
    if ch.strip() == "":
        return cv.out()
    size = ctx.h * 0.8
    f = lib.font(size * cv.ss, "bold")
    cv.d.text((ctx.w / 2 * cv.ss, ctx.h * baseline * cv.ss), ch, font=f, anchor="ms", fill=(255, 255, 255, 255), stroke_width=int(1.5 * cv.ss), stroke_fill=rgb("#33406F"))
    return cv.out()


@rule(r"sheet/sascii\.png:c(\d+)\.png$")
def sascii(ctx):
    return glyph(ctx, chr(int(ctx.m.group(1))))


# --- digits ---------------------------------------------------------------------------------------------------------------------
STYLES = {
    "0": dict(fill="#FFFFFF", stroke="#33406F", sw=2),
    "1": dict(grad=("#FFE28A", "#F2A93B"), stroke="#8A4B12", sw=3),
    "2": dict(fill="#FFFFFF", stroke="#46578F", sw=3),
    "2e": dict(fill="#FFFFFF", stroke="#FFFFFF", sw=2, glow="#FFD9E6"),
    "3": dict(grad=("#FFB6D0", "#F06C9B"), stroke="#FFFFFF", sw=3),
    "4": dict(grad=("#D6F0C0", "#7DB067"), stroke="#3F6B45", sw=3),
    "5": dict(grad=("#C9D5F5", "#7C8FC4"), stroke="#33406F", sw=3),
}


@rule(r"sheet/number\.png:no_(\d)(_effect_0)?_(\d|c)\.png$")
def digit(ctx):
    style = STYLES[ctx.m.group(1) + ("e" if ctx.m.group(2) else "")]
    ch = "," if ctx.m.group(3) == "c" else ctx.m.group(3)
    cv = ctx.canvas()
    bx0, by0, bx1, by1 = ctx.box()
    sw = style["sw"]
    if ch == ",":
        box = (bx0, by0 - 2, bx1, by1 + 6)
        size = max(10, int((by1 - by0) * 1.6))
    else:
        size = lib.fit_size("0", 999, (by1 - by0) - 2 * sw, "black")
        box = (0, by0, ctx.w, by1)
    if "grad" in style:
        lib.text_grad(cv, ch, box, style["grad"][0], style["grad"][1], style["stroke"], sw, "black", size=size)
    else:
        draw_text(cv, ch, box, style["fill"], style["stroke"], sw, "black", glow=style.get("glow"), size=size)
    return cv.out()
