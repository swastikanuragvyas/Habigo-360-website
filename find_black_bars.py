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
                
                top_black = all(pixels[x, 0][0] < 30 and pixels[x, 0][1] < 30 and pixels[x, 0][2] < 30 and pixels[x, 0][3] > 200 for x in range(width))
                bottom_black = all(pixels[x, height-1][0] < 30 and pixels[x, height-1][1] < 30 and pixels[x, height-1][2] < 30 and pixels[x, height-1][3] > 200 for x in range(width))
                left_black = all(pixels[0, y][0] < 30 and pixels[0, y][1] < 30 and pixels[0, y][2] < 30 and pixels[0, y][3] > 200 for y in range(height))
                right_black = all(pixels[width-1, y][0] < 30 and pixels[width-1, y][1] < 30 and pixels[width-1, y][2] < 30 and pixels[width-1, y][3] > 200 for y in range(height))
                
                if top_black or bottom_black or left_black or right_black:
                    print(f"{filename} has a black bar! Top:{top_black} Bottom:{bottom_black} Left:{left_black} Right:{right_black}")
        except Exception as e:
            pass
