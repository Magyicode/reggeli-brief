"""Generate PWA icons (run once): python pipeline/make_icons.py"""
import math
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

OUT = Path(__file__).resolve().parent.parent / "docs" / "icons"
OUT.mkdir(parents=True, exist_ok=True)


def icon(size, pad=0.0):
    img = Image.new("RGB", (size, size), (7, 11, 20))
    glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    g = ImageDraw.Draw(glow)
    c = size / 2
    r = size * (0.30 - pad * 0.3)
    g.ellipse([c - r * 1.25, c - r * 1.25, c + r * 1.25, c + r * 1.25], fill=(125, 211, 252, 70))
    glow = glow.filter(ImageFilter.GaussianBlur(size * 0.06))
    img.paste(glow, (0, 0), glow)
    d = ImageDraw.Draw(img)
    n = 900
    golden = math.pi * (3 - math.sqrt(5))
    for i in range(n):
        y = 1 - i / (n - 1) * 2
        rr = math.sqrt(1 - y * y)
        th = golden * i
        x, z = math.cos(th) * rr, math.sin(th) * rr
        if z < -0.1:
            continue
        t = (x + 1) / 2
        col = (int(125 + (167 - 125) * t), int(211 + (139 - 211) * t), int(252 + (250 - 252) * t))
        px, py = c + x * r, c - y * r
        s = max(1, size * 0.006 * (0.6 + z))
        d.ellipse([px - s, py - s, px + s, py + s], fill=col)
    return img


icon(192).save(OUT / "icon-192.png")
icon(512).save(OUT / "icon-512.png")
icon(512, pad=0.35).save(OUT / "icon-maskable-512.png")
icon(180).save(OUT / "apple-touch-icon.png")
print("icons ->", OUT)
