import os
from PIL import Image
from collections import Counter

logos_dir = "public/logos"
for filename in ["4.png", "8.png", "11.png", "13.png", "15.png", "17.png"]:
    img_path = os.path.join(logos_dir, filename)
    try:
        with Image.open(img_path) as im:
            im = im.convert("RGBA")
            data = im.getdata()
            colors = [ (r,g,b) for (r,g,b,a) in data if a > 50 ]
            c = Counter(colors)
            print(f"{filename} most common colors:")
            for color, count in c.most_common(5):
                print(f"  {color}: {count}")
    except Exception as e:
        pass
