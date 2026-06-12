import os
from PIL import Image

def crop_black_edges(img_path):
    with Image.open(img_path) as im:
        im = im.convert("RGBA")
        width, height = im.size
        pixels = im.load()
        
        top = 0
        for y in range(height):
            dark = sum(1 for x in range(width) if pixels[x,y][0] < 50 and pixels[x,y][1] < 50 and pixels[x,y][2] < 50 and pixels[x,y][3] > 100)
            if dark > width * 0.5: top = y + 1
            else: break
                
        bottom = height
        for y in range(height-1, -1, -1):
            dark = sum(1 for x in range(width) if pixels[x,y][0] < 50 and pixels[x,y][1] < 50 and pixels[x,y][2] < 50 and pixels[x,y][3] > 100)
            if dark > width * 0.5: bottom = y
            else: break
                
        left = 0
        for x in range(width):
            dark = sum(1 for y in range(height) if pixels[x,y][0] < 50 and pixels[x,y][1] < 50 and pixels[x,y][2] < 50 and pixels[x,y][3] > 100)
            if dark > height * 0.5: left = x + 1
            else: break
                
        right = width
        for x in range(width-1, -1, -1):
            dark = sum(1 for y in range(height) if pixels[x,y][0] < 50 and pixels[x,y][1] < 50 and pixels[x,y][2] < 50 and pixels[x,y][3] > 100)
            if dark > height * 0.5: right = x
            else: break
                
        if top > 0 or bottom < height or left > 0 or right < width:
            print(f"Cropping {os.path.basename(img_path)}: L={left}, T={top}, R={right}, B={bottom} (was {width}x{height})")
            if right > left and bottom > top:
                im_cropped = im.crop((left, top, right, bottom))
                im_cropped.save(img_path)

logos_dir = "public/logos"
for filename in os.listdir(logos_dir):
    if filename.lower().endswith(".png"):
        img_path = os.path.join(logos_dir, filename)
        try:
            crop_black_edges(img_path)
        except Exception as e:
            pass
