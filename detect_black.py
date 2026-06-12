import os
from PIL import Image

logos_dir = "public/logos"
for filename in os.listdir(logos_dir):
    if filename.lower().endswith(".png"):
        img_path = os.path.join(logos_dir, filename)
        with Image.open(img_path) as im:
            im = im.convert("RGBA")
            width, height = im.size
            # Check edge pixels to see if background is black or white
            # Let's sample the 4 corners
            corners = [
                im.getpixel((0, 0)),
                im.getpixel((width - 1, 0)),
                im.getpixel((0, height - 1)),
                im.getpixel((width - 1, height - 1))
            ]
            
            black_corners = sum(1 for c in corners if c[0] < 30 and c[1] < 30 and c[2] < 30 and c[3] > 200)
            if black_corners >= 3:
                print(f"{filename} has a black background.")
            else:
                pass
