import os
from PIL import Image

def detect_black_bar(img_path):
    with Image.open(img_path) as im:
        im = im.convert("RGBA")
        width, height = im.size
        pixels = im.load()
        
        # Check rows for black bars
        black_rows = []
        for y in range(height):
            dark_pixels = 0
            opaque_pixels = 0
            for x in range(width):
                r, g, b, a = pixels[x, y]
                if a > 50:
                    opaque_pixels += 1
                    if r < 50 and g < 50 and b < 50:
                        dark_pixels += 1
            if opaque_pixels > width * 0.2 and dark_pixels > opaque_pixels * 0.8:
                black_rows.append(y)
                
        # Check cols for black bars
        black_cols = []
        for x in range(width):
            dark_pixels = 0
            opaque_pixels = 0
            for y in range(height):
                r, g, b, a = pixels[x, y]
                if a > 50:
                    opaque_pixels += 1
                    if r < 50 and g < 50 and b < 50:
                        dark_pixels += 1
            if opaque_pixels > height * 0.2 and dark_pixels > opaque_pixels * 0.8:
                black_cols.append(x)
                
        return black_rows, black_cols

logos_dir = "public/logos"
for filename in os.listdir(logos_dir):
    if filename.lower().endswith(".png"):
        img_path = os.path.join(logos_dir, filename)
        try:
            r, c = detect_black_bar(img_path)
            if r or c:
                print(f"{filename}: black rows: {len(r)}, black cols: {len(c)}")
                if len(r) > 0:
                    print(f"  Rows: min={min(r)}, max={max(r)}")
                if len(c) > 0:
                    print(f"  Cols: min={min(c)}, max={max(c)}")
        except Exception as e:
            pass
