#!/usr/bin/env python3
"""Generate PWA icons for the Fijian language app."""
from PIL import Image, ImageDraw, ImageFont
import math

# App colors
PRIMARY = (74, 144, 217)    # #4A90D9
PRIMARY_DARK = (58, 123, 200)  # #3A7BC8
WHITE = (255, 255, 255)
SECONDARY = (255, 159, 28)  # #FF9F1C

def generate_icon(size):
    """Generate a simple hibiscus-themed icon."""
    img = Image.new('RGB', (size, size), PRIMARY)
    draw = ImageDraw.Draw(img)

    # Draw a simple hibiscus flower (stylized)
    center_x = size // 2
    center_y = size // 2

    # Scale factors based on size
    petal_outer = size * 0.18
    petal_inner = size * 0.11
    center_size = size * 0.08

    # Draw 5 petals around the center
    for i in range(5):
        angle = (i * 72) * math.pi / 180
        px = center_x + math.cos(angle) * (petal_outer * 0.4)
        py = center_y + math.sin(angle) * (petal_outer * 0.4)

        # Draw petal (oval)
        petal_rect = [
            px - petal_outer * 0.5,
            py - petal_outer * 0.3,
            px + petal_outer * 0.5,
            py + petal_outer * 0.3
        ]
        draw.ellipse(petal_rect, fill=SECONDARY)

    # Draw flower center
    center_rect = [
        center_x - center_size,
        center_y - center_size,
        center_x + center_size,
        center_y + center_size
    ]
    draw.ellipse(center_rect, fill=WHITE)

    # Draw a simple leaf
    leaf_size_x = size * 0.18
    leaf_size_y = size * 0.06
    leaf_rect = [
        center_x - leaf_size_x + size * 0.05,
        center_y + center_size * 0.5,
        center_x + leaf_size_x + size * 0.05,
        center_y + center_size * 0.5 + leaf_size_y
    ]
    draw.ellipse(leaf_rect, fill=(46, 204, 113))  # green

    # Draw another leaf on the other side
    leaf_rect2 = [
        center_x - leaf_size_x - size * 0.05,
        center_y + center_size * 0.5,
        center_x + leaf_size_x - size * 0.05,
        center_y + center_size * 0.5 + leaf_size_y
    ]
    draw.ellipse(leaf_rect2, fill=(46, 204, 113))

    # Add a second ring of petals for a more complete flower look
    for i in range(5):
        angle = (i * 72 + 36) * math.pi / 180
        px = center_x + math.cos(angle) * (petal_outer * 0.7)
        py = center_y + math.sin(angle) * (petal_outer * 0.7)
        petal_rect = [
            px - petal_outer * 0.4,
            py - petal_outer * 0.25,
            px + petal_outer * 0.4,
            py + petal_outer * 0.25
        ]
        draw.ellipse(petal_rect, fill=SECONDARY)

    return img

# Generate icons
icon192 = generate_icon(192)
icon512 = generate_icon(512)

icon192.save('/Users/calebklaehnhaight/.local/share/dev/fijian-app/icons/icon-192.png')
icon512.save('/Users/calebklaehnhaight/.local/share/dev/fijian-app/icons/icon-512.png')

# Also generate a 180x180 for Apple touch icon
icon180 = generate_icon(180)
icon180.save('/Users/calebklaehnhaight/.local/share/dev/fijian-app/icons/apple-touch-icon.png')

print("Icons generated successfully!")
