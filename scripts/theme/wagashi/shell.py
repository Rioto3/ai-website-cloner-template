"""Site icons for the Next.js shell (favicon and home-screen icon)."""
import os

from PIL import Image

from . import lib
from .lib import PAL, WASHI


def icon(size):
    ss = 4 if size >= 96 else 8
    cv = lib.Canvas(size, size, ss)
    r = size * 0.22
    cv.rrect(0, 0, size, size, r, "#2E3A63")
    cv.rrect(size * 0.05, size * 0.05, size * 0.95, size * 0.95, r * 0.8, "#46578F")
    lib.sakura(cv, size / 2, size / 2, size * 0.3, PAL[1]["body"], WASHI)
    cv.circle(size / 2, size / 2, size * 0.06, "#E8B84A")
    return cv.out()


def generate(root):
    out = os.path.join(root, "public/seo")
    os.makedirs(out, exist_ok=True)
    icon(180).save(os.path.join(out, "apple-touch-icon.png"), optimize=True)
    big = icon(256)
    big.save(os.path.join(out, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    return 2
