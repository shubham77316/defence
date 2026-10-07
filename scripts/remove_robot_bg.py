import os
from PIL import Image
from rembg import remove, new_session

input_path = r"d:\defence\public\images\robot-sentinel.jpg"
output_path = r"d:\defence\public\images\robot-sentinel.png"

print(f"Loading image from {input_path}...")
img = Image.open(input_path)
orig_w, orig_h = img.size
print(f"Original size: {orig_w}x{orig_h}")

# Optional: resize slightly if ultra large, but keeping 6016x4016 keeps exact eye coordinates!
# Let's run remove on the image
print("Removing background with rembg...")
session = new_session("u2net")
result = remove(img, session=session)

# Let's check if there's any stray orb on the right side:
# In the original 6016x4016 image:
# The robot is on the left/center (X: ~1000 to ~4600).
# The light bulb / orb is on the right around X: 4700..5500, Y: 1500..2500.
# Let's clean any non-robot pixels to the right of X=4700
result_rgba = result.convert("RGBA")
pixels = result_rgba.load()
w, h = result_rgba.size

# Zero out any alpha in the region where the background light orb was (X > 4650)
for y in range(h):
    for x in range(int(w * 0.77), w):
        r, g, b, a = pixels[x, y]
        if a > 0:
            pixels[x, y] = (r, g, b, 0)

print(f"Saving transparent PNG to {output_path}...")
result_rgba.save(output_path, "PNG")
print("Done!")
