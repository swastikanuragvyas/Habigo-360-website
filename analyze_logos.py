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
                
                black_pixels = 0
                white_pixels = 0
                colored_pixels = 0
                
                for y in range(height):
                    for x in range(width):
                        r, g, b, a = pixels[x, y]
                        if a > 50:
                            if r < 30 and g < 30 and b < 30:
                                black_pixels += 1
                            elif r > 220 and g > 220 and b > 220:
                                white_pixels += 1
                            else:
                                colored_pixels += 1
                
                total = black_pixels + white_pixels + colored_pixels
                if total > 0:
                    if black_pixels/total > 0.8:
                        print(f"{filename} is VERY BLACK ({black_pixels/total:.1%})")
                    if white_pixels/total > 0.8:
                        print(f"{filename} is VERY WHITE ({white_pixels/total:.1%})")
        except Exception as e:
            print(e)
