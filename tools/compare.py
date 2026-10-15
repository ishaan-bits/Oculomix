#!/usr/bin/env python3
"""Side-by-side compare: original capture (left) vs rebuild (right)."""
import sys
from PIL import Image
import os

MAP = {
    'home': 'oculomix-com-home',
    'uitdaging': 'oculomix-com-uitdaging',
    'de-camera': 'oculomix-com-de-camera',
    'voor-wie': 'oculomix-com-voor-wie',
    'managed': 'oculomix-com-oculomix-managed-service',
    'eigen': 'oculomix-com-eigen-beheer',
    'over-ons': 'oculomix-com-over-ons',
    'nieuws': 'oculomix-com-nieuws',
    'contact': 'oculomix-com-contact',
    'privacy': 'oculomix-com-privacy-statement',
}
ORIG = 'docs/capture-pack/screenshots/desktop'
MINE = 'shots/desktop'
OUT = 'shots/compare'


def make(name, y0, y1):
    """Stack original slice and rebuild slice side by side for rows [y0, y1) of ORIGINAL coords."""
    os.makedirs(OUT, exist_ok=True)
    a = Image.open(f'{ORIG}/{MAP[name]}.png').convert('RGB')
    b = Image.open(f'{MINE}/{name}.png').convert('RGB')
    a = a.crop((0, y0, a.width, min(y1, a.height)))
    b = b.crop((0, y0, b.width, min(y1, b.height)))
    h = max(a.height, b.height)
    canvas = Image.new('RGB', (a.width + b.width + 20, h), (40, 40, 40))
    canvas.paste(a, (0, 0))
    canvas.paste(b, (a.width + 20, 0))
    # scale down if too wide for viewing
    max_w = 2000
    if canvas.width > max_w:
        r = max_w / canvas.width
        canvas = canvas.resize((max_w, int(canvas.height * r)), Image.LANCZOS)
    path = f'{OUT}/{name}_{y0}-{y1}.png'
    canvas.save(path)
    print(path, canvas.size)


if __name__ == '__main__':
    name = sys.argv[1]
    if len(sys.argv) == 2:
        # full page overview at scale
        os.makedirs(OUT, exist_ok=True)
        a = Image.open(f'{ORIG}/{MAP[name]}.png').convert('RGB')
        b = Image.open(f'{MINE}/{name}.png').convert('RGB')
        h = max(a.height, b.height)
        canvas = Image.new('RGB', (a.width + b.width + 20, h), (40, 40, 40))
        canvas.paste(a, (0, 0))
        canvas.paste(b, (a.width + 20, 0))
        r = 1600 / canvas.width
        canvas = canvas.resize((1600, int(canvas.height * r)), Image.LANCZOS)
        path = f'{OUT}/{name}_full.png'
        canvas.save(path)
        print(path, canvas.size, 'orig h', a.height, 'mine h', b.height)
    else:
        make(name, int(sys.argv[2]), int(sys.argv[3]))
