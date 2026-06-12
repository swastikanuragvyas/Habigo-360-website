import os
from PIL import Image

logos_dir = "public/logos"
for filename in os.listdir(logos_dir):
    if filename.lower().endswith(".png"):
        img_path = os.path.join(logos_dir, filename)
        try:
            with Image.open(img_path) as im:
                im = im.convert("RGBA")
                width, height = im.size
                pixels = im.load()
                
                for y in range(height):
                    row_black = 0
                    row_opaque = 0
                    for x in range(width):
                        r, g, b, a = pixels[x, y]
                        if a > 50:
                            row_opaque += 1
                            if r < 30 and g < 30 and b < 30:
                                row_black += 1
                    if row_opaque > width * 0.5 and row_black > row_opaque * 0.9:
                        print(f"{filename} has a black bar at row {y}")
                        break
                        
                for x in range(width):
                    col_black = 0
                    col_opaque = 0
                    for y in range(height):
                        r, g, b, a = pixels[x, y]
                        if a > 50:
                            col_opaque += 1
                            if r < 30 and g < 30 and b < 30:
                                col_black += 1
                    if col_opaque > height * 0.5 and col_black > col_opaque * 0.9:
                        print(f"{filename} has a black bar at col {x}")
                        break
        except Exception as e:
            pass
