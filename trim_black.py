import os
from PIL import Image, ImageChops

def trim_black_borders(img_path):
    try:
        with Image.open(img_path) as im:
            # Convert to RGBA if not already
            im = im.convert("RGBA")
            bg = Image.new("RGBA", im.size, (0, 0, 0, 255))
            diff = ImageChops.difference(im, bg)
            # diff has 0 where im is black (0,0,0,255)
            # We want the bounding box of non-black pixels.
            # Convert diff to grayscale
            diff = diff.convert("L")
            # Any pixel > 10 (slight tolerance) will be considered part of the image
            diff = diff.point(lambda p: p > 10 and 255)
            bbox = diff.getbbox()
            
            if bbox:
                # bbox is (left, upper, right, lower)
                if bbox != (0, 0, im.width, im.height):
                    print(f"Cropping {img_path} to {bbox} (original: {im.size})")
                    im_cropped = im.crop(bbox)
                    im_cropped.save(img_path)
            else:
                print(f"{img_path} is completely black/empty")
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

logos_dir = "public/logos"
for filename in os.listdir(logos_dir):
    if filename.lower().endswith(".png"):
        trim_black_borders(os.path.join(logos_dir, filename))
