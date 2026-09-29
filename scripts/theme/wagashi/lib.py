"""Drawing primitives for the placeholder theme ("wagashi").

Everything is drawn on a supersampled canvas (coordinates are in output pixels) and scaled down at the end,
so shapes are anti-aliased without any image assets. Only Pillow and numpy are used.
"""
import math

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

from .fonts import font_path

SS = 4

# --- palette -----------------------------------------------------------------------------------------------
PAL = {
    # block colours by the vendor's colour index 1..4 (red, yellow, green, blue families are kept for readability)
    1: dict(name="sakura", body="#F4B6C8", dark="#D48AA2", hi="#FCE0EA", ink="#D9779A"),
    2: dict(name="yuzu", body="#F6D96E", dark="#D8B23E", hi="#FCEFAE", ink="#C99A1E"),
    3: dict(name="matcha", body="#A9CB8E", dark="#7DA164", hi="#D3E6C0", ink="#5E8A47"),
    4: dict(name="ai", body="#86A6D6", dark="#5E7FB6", hi="#B2C8E7", ink="#4767A0"),
}
WASHI = "#FFF6E3"
BROWN = "#5C4A3A"
BROWN_D = "#3E3126"
GOLD = "#E8B84A"
GOLD_D = "#B98A26"
SHU = "#D9573F"
INDIGO = "#2E3A63"
INDIGO_M = "#46578F"
INDIGO_L = "#7C8FC4"
PINK = "#F4A6BE"
MATCHA = "#9CC17E"
STONE = "#9C9CA2"


def rgb(h, a=255):
    h = h.lstrip("#")
    return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16), a)


def mix(c0, c1, t):
    a, b = rgb(c0), rgb(c1)
    return tuple(int(round(a[i] + (b[i] - a[i]) * t)) for i in range(4))


def hexof(c):
    return "#%02X%02X%02X" % tuple(c[:3])


class Canvas:
    def __init__(self, w, h, ss=SS):
        self.w, self.h, self.ss = int(w), int(h), ss
        self.im = Image.new("RGBA", (self.w * ss, self.h * ss), (0, 0, 0, 0))
        self.d = ImageDraw.Draw(self.im)

    # coordinates
    def s(self, v):
        return v * self.ss

    def pts(self, pts):
        return [(x * self.ss, y * self.ss) for x, y in pts]

    # shapes -------------------------------------------------------------------------------------------------
    def rrect(self, x0, y0, x1, y1, r, fill=None, outline=None, width=0):
        s = self.ss
        self.d.rounded_rectangle([x0 * s, y0 * s, x1 * s - 1, y1 * s - 1], radius=r * s,
                                 fill=self._c(fill), outline=self._c(outline), width=int(width * s))

    def ellipse(self, x0, y0, x1, y1, fill=None, outline=None, width=0):
        s = self.ss
        self.d.ellipse([x0 * s, y0 * s, x1 * s - 1, y1 * s - 1], fill=self._c(fill), outline=self._c(outline), width=int(width * s))

    def circle(self, cx, cy, r, fill=None, outline=None, width=0):
        self.ellipse(cx - r, cy - r, cx + r, cy + r, fill, outline, width)

    def polygon(self, pts, fill=None, outline=None, width=0):
        self.d.polygon(self.pts(pts), fill=self._c(fill), outline=self._c(outline))
        if outline and width:
            self.d.line(self.pts(list(pts) + [pts[0]]), fill=self._c(outline), width=int(width * self.ss), joint="curve")

    def line(self, pts, fill, width=1, round_ends=True):
        s = self.ss
        p = self.pts(pts)
        self.d.line(p, fill=self._c(fill), width=max(1, int(width * s)), joint="curve")
        if round_ends:
            r = width * s / 2
            for x, y in (p[0], p[-1]):
                self.d.ellipse([x - r, y - r, x + r, y + r], fill=self._c(fill))

    def arc(self, box, a0, a1, fill, width=1):
        s = self.ss
        self.d.arc([box[0] * s, box[1] * s, box[2] * s, box[3] * s], a0, a1, fill=self._c(fill), width=max(1, int(width * s)))

    def capsule(self, x0, y0, x1, y1, fill):
        r = min(x1 - x0, y1 - y0) / 2
        self.rrect(x0, y0, x1, y1, r, fill)

    @staticmethod
    def _c(c):
        if c is None:
            return None
        if isinstance(c, str):
            return rgb(c)
        return tuple(c) if len(c) == 4 else tuple(c) + (255,)

    # compositing --------------------------------------------------------------------------------------------
    def layer(self):
        return Image.new("RGBA", self.im.size, (0, 0, 0, 0))

    def over(self, layer, blur=0, opacity=1.0):
        if blur:
            layer = layer.filter(ImageFilter.GaussianBlur(blur * self.ss))
        if opacity < 1.0:
            a = layer.getchannel("A").point(lambda v: int(v * opacity))
            layer.putalpha(a)
        self.im.alpha_composite(layer)
        self.d = ImageDraw.Draw(self.im)

    def glow(self, draw_fn, blur, opacity=1.0):
        """draw_fn(ImageDraw, ss) draws on a temporary layer that is blurred and composited."""
        lay = self.layer()
        draw_fn(ImageDraw.Draw(lay), self.ss)
        self.over(lay, blur, opacity)

    def paste_masked(self, fill_img, mask):
        """fill_img: RGBA at ss size; mask: L at ss size."""
        lay = Image.new("RGBA", self.im.size, (0, 0, 0, 0))
        lay.paste(fill_img, (0, 0), mask)
        self.im.alpha_composite(lay)
        self.d = ImageDraw.Draw(self.im)

    def out(self):
        if self.ss == 1:
            return self.im
        return self.im.resize((self.w, self.h), Image.LANCZOS)


# --- gradients (numpy) -----------------------------------------------------------------------------------------
def vgrad(size, c_top, c_bottom):
    w, h = size
    t = np.linspace(0, 1, h).reshape(h, 1, 1)
    a, b = np.array(rgb(c_top) if isinstance(c_top, str) else c_top, float), np.array(rgb(c_bottom) if isinstance(c_bottom, str) else c_bottom, float)
    arr = (a + (b - a) * t) * np.ones((1, w, 1))
    return Image.fromarray(arr.astype(np.uint8), "RGBA")


def hgrad(size, c_left, c_right):
    w, h = size
    t = np.linspace(0, 1, w).reshape(1, w, 1)
    a, b = np.array(rgb(c_left) if isinstance(c_left, str) else c_left, float), np.array(rgb(c_right) if isinstance(c_right, str) else c_right, float)
    arr = (a + (b - a) * t) * np.ones((h, 1, 1))
    return Image.fromarray(arr.astype(np.uint8), "RGBA")


def radial_alpha(size, color, inner=0.0, outer=1.0, power=2.0, peak=255):
    """A soft radial glow: alpha = peak at the centre falling to 0 at radius `outer` (fraction of half size)."""
    w, h = size
    yy, xx = np.mgrid[0:h, 0:w]
    cx, cy = (w - 1) / 2, (h - 1) / 2
    d = np.sqrt(((xx - cx) / (w / 2)) ** 2 + ((yy - cy) / (h / 2)) ** 2)
    a = np.clip((outer - d) / max(outer - inner, 1e-6), 0, 1) ** power * peak
    arr = np.zeros((h, w, 4), np.uint8)
    c = rgb(color) if isinstance(color, str) else color
    arr[..., 0], arr[..., 1], arr[..., 2] = c[0], c[1], c[2]
    arr[..., 3] = a.astype(np.uint8)
    return Image.fromarray(arr, "RGBA")


# --- text --------------------------------------------------------------------------------------------------------
_font_cache = {}


def font(size, weight="bold"):
    key = (int(size), weight)
    if key not in _font_cache:
        _font_cache[key] = ImageFont.truetype(font_path(weight), int(size))
    return _font_cache[key]


def fit_size(text, max_w, max_h, weight="bold", lo=6, hi=400):
    """Largest font size whose rendered text fits in max_w x max_h."""
    best = lo
    while lo <= hi:
        mid = (lo + hi) // 2
        f = font(mid, weight)
        b = f.getbbox(text)
        if (b[2] - b[0]) <= max_w and (b[3] - b[1]) <= max_h:
            best, lo = mid, mid + 1
        else:
            hi = mid - 1
    return best


def draw_text(cv, text, box, fill="#FFFFFF", stroke=None, stroke_w=0, weight="bold", glow=None, glow_blur=3, size=None, align="center", shadow=None):
    """Draw text fitted to box=(x0,y0,x1,y1) on a Canvas (logical px)."""
    x0, y0, x1, y1 = box
    sw = stroke_w
    if size is None:
        size = fit_size(text, (x1 - x0) - 2 * sw, (y1 - y0) - 2 * sw, weight)
    ss = cv.ss
    f = font(size * ss, weight)
    bb = f.getbbox(text, stroke_width=int(sw * ss))
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    cx = (x0 + x1) / 2 * ss
    cy = (y0 + y1) / 2 * ss
    px = cx - tw / 2 - bb[0] if align == "center" else x0 * ss - bb[0]
    py = cy - th / 2 - bb[1]
    if glow:
        cv.glow(lambda d, s: d.text((px, py), text, font=f, fill=rgb(glow), stroke_width=int((sw + 1.5) * s), stroke_fill=rgb(glow)), glow_blur, 0.9)
    if shadow:
        sx, sy, sc = shadow
        cv.d.text((px + sx * ss, py + sy * ss), text, font=f, fill=rgb(sc), stroke_width=int(sw * ss), stroke_fill=rgb(sc))
    cv.d.text((px, py), text, font=f, fill=cv._c(fill), stroke_width=int(sw * ss), stroke_fill=rgb(stroke) if stroke else None)
    return size


def text_layout(cv, text, box, size=None, weight="bold", sw=0, align="center"):
    x0, y0, x1, y1 = box
    if size is None:
        size = fit_size(text, (x1 - x0) - 2 * sw, (y1 - y0) - 2 * sw, weight)
    ss = cv.ss
    f = font(size * ss, weight)
    bb = f.getbbox(text, stroke_width=int(sw * ss))
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    cx, cy = (x0 + x1) / 2 * ss, (y0 + y1) / 2 * ss
    px = cx - tw / 2 - bb[0] if align == "center" else x0 * ss - bb[0]
    py = cy - th / 2 - bb[1]
    return f, px, py, size


def text_grad(cv, text, box, c_top, c_bottom, stroke=None, sw=0, weight="black", size=None, glow=None, glow_blur=3, angle=0):
    """Text filled with a vertical gradient (and an optional outline / glow)."""
    f, px, py, size = text_layout(cv, text, box, size, weight, sw)
    ss = cv.ss
    if glow:
        cv.glow(lambda d, s: d.text((px, py), text, font=f, fill=rgb(glow), stroke_width=int((sw + 1.5) * s), stroke_fill=rgb(glow)), glow_blur, 0.9)
    if stroke and sw:
        cv.d.text((px, py), text, font=f, fill=rgb(stroke), stroke_width=int(sw * ss), stroke_fill=rgb(stroke))
    mask = Image.new("L", cv.im.size, 0)
    ImageDraw.Draw(mask).text((px, py), text, font=f, fill=255)
    if angle:
        pass
    y0, y1 = int(box[1] * ss), int(box[3] * ss)
    grad_full = Image.new("RGBA", cv.im.size, rgb(c_bottom))
    grad_full.paste(vgrad((cv.im.size[0], max(1, y1 - y0)), c_top, c_bottom), (0, y0))
    for y in range(0, y0, 1):
        pass
    top_fill = Image.new("RGBA", (cv.im.size[0], max(0, y0)), rgb(c_top))
    if y0 > 0:
        grad_full.paste(top_fill, (0, 0))
    cv.paste_masked(grad_full, mask)
    return size


def pill(cv, box, base, dark, hi, outline=None):
    """A glossy pill button: darker underside, lighter top band."""
    x0, y0, x1, y1 = box
    h = y1 - y0
    r = h / 2
    cv.rrect(x0, y0 + h * 0.06, x1, y1, r, dark)
    mask = Image.new("L", cv.im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([x0 * cv.ss, y0 * cv.ss, x1 * cv.ss - 1, (y1 - h * 0.06) * cv.ss - 1], radius=r * cv.ss, fill=255)
    cv.paste_masked(vgrad(cv.im.size, hi, base), mask)
    cv.rrect(x0 + h * 0.3, y0 + h * 0.12, x1 - h * 0.3, y0 + h * 0.3, h * 0.09, (255, 255, 255, 120))
    if outline:
        cv.rrect(x0, y0, x1, y1 - h * 0.06, r, None, outline, max(1, h * 0.03))


def star5(cv, cx, cy, r, fill, outline=None):
    pts = []
    for i in range(10):
        a = math.radians(-90 + i * 36)
        rr = r if i % 2 == 0 else r * 0.45
        pts.append((cx + rr * math.cos(a), cy + rr * math.sin(a)))
    cv.polygon(pts, fill, outline, max(1, r * 0.08) if outline else 0)


def coin(cv, cx, cy, r, squeeze=1.0, face="#F2C14E", rim="#B98A26", hole="#7A5A18"):
    """Gold coin with a square hole (edo-period style); `squeeze` < 1 makes it look rotated."""
    rx = r * max(0.08, abs(squeeze))
    cv.ellipse(cx - rx, cy - r, cx + rx, cy + r, rim)
    cv.ellipse(cx - rx + r * 0.1 * squeeze, cy - r + r * 0.1, cx + rx - r * 0.1 * squeeze, cy + r - r * 0.1, face)
    hw = r * 0.26 * max(0.15, abs(squeeze))
    cv.rrect(cx - hw, cy - r * 0.26, cx + hw, cy + r * 0.26, 2, hole)


def text_bbox_size(text, size, weight="bold", ss=1):
    f = font(size * ss, weight)
    b = f.getbbox(text)
    return b[2] - b[0], b[3] - b[1]


# --- shapes used in many places ----------------------------------------------------------------------------------
def star4(cv, cx, cy, r, fill, inner=0.28):
    pts = []
    for i in range(8):
        a = math.pi / 2 * i / 2 - math.pi / 2
        rr = r if i % 2 == 0 else r * inner
        pts.append((cx + rr * math.cos(a), cy + rr * math.sin(a)))
    cv.polygon(pts, fill)


def sakura(cv, cx, cy, r, fill, center="#FFF6E3"):
    for k in range(5):
        a = math.radians(k * 72 - 90)
        px, py = cx + math.cos(a) * r * 0.5, cy + math.sin(a) * r * 0.5
        cv.ellipse(px - r * 0.42, py - r * 0.42, px + r * 0.42, py + r * 0.42, fill)
    cv.circle(cx, cy, r * 0.2, center)


def leaf(cv, cx, cy, r, fill, vein=None):
    pts = []
    for i in range(0, 361, 10):
        t = math.radians(i)
        pts.append((cx + math.sin(t) * r * 0.55, cy - math.cos(t) * r))
    # leaf outline: pointed at top and bottom
    pts = [(cx + (r * 0.55) * math.sin(math.radians(a)) * (1 - abs(math.cos(math.radians(a))) ** 3 * 0.6),
            cy - r * math.cos(math.radians(a))) for a in range(0, 360, 6)]
    cv.polygon(pts, fill)
    if vein:
        cv.line([(cx, cy - r * 0.85), (cx, cy + r * 0.85)], vein, max(1, r * 0.08))


def ring_glow(cv, cx, cy, r, width, color, blur=2, opacity=1.0):
    def f(d, s):
        d.ellipse([(cx - r) * s, (cy - r) * s, (cx + r) * s, (cy + r) * s], outline=rgb(color), width=max(1, int(width * s)))
    cv.glow(f, blur, opacity)
    cv.circle(cx, cy, r, None, color, width)


def crop_visible(img):
    b = img.getchannel("A").point(lambda v: 255 if v > 10 else 0).getbbox()
    return b


# --- helpers for parts that live inside big transparent canvases ---------------------------------------------------
def bbox_canvas(ctx, pad=8):
    """A canvas covering just the original's visible box (+pad); returns (canvas, local box)."""
    x0, y0, x1, y1 = ctx.box()
    w, h = int(x1 - x0 + 2 * pad), int(y1 - y0 + 2 * pad)
    ss = 4 if max(w, h) <= 400 else (2 if max(w, h) <= 900 else 1)
    return Canvas(w, h, ss), (pad, pad, pad + (x1 - x0), pad + (y1 - y0))


def place(ctx, cv, pad=8):
    """Paste a bbox canvas back into a full-size transparent frame at the original position."""
    x0, y0, _, _ = ctx.box()
    return place_image(ctx, cv.out(), int(x0 - pad), int(y0 - pad))


def place_image(ctx, im, dx, dy):
    out = Image.new("RGBA", (ctx.w, ctx.h), (0, 0, 0, 0))
    sx, sy = max(0, -dx), max(0, -dy)
    ex, ey = min(im.size[0], ctx.w - dx), min(im.size[1], ctx.h - dy)
    if ex > sx and ey > sy:
        out.alpha_composite(im.crop((sx, sy, ex, ey)), (dx + sx, dy + sy))
    return out
