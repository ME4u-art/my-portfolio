# Andromeda Galaxy Background Setup

## Using Your Own Image

To use your own Andromeda galaxy image:

1. **Add your image to the `public` folder:**
   - Save your Andromeda galaxy image as `andromeda-galaxy.jpg` (or `.png`)
   - Place it in: `src/public/andromeda-galaxy.jpg`

2. **Update the CSS:**
   - Open `src/components/nightsky.css`
   - Find the `.galaxy-background` class
   - Uncomment the local image line:
   ```css
   background-image: url('/andromeda-galaxy.jpg');
   ```
   - Comment out or remove the Unsplash URL line

## Current Setup

The background currently uses an Unsplash space image as a placeholder. Replace it with your actual Andromeda galaxy image for the best effect.

## Image Recommendations

- **Format**: JPG or PNG
- **Size**: 1920x1080 or larger (will be scaled automatically)
- **Quality**: High resolution for best results
- **Aspect Ratio**: 16:9 or wider works best

## Animations

The background includes three subtle animations to make it feel alive:
1. **Breathing** - Gentle scale pulsing (20s cycle)
2. **Parallax** - Slow drift movement (60s cycle)
3. **Slow Zoom** - Very subtle zoom in/out (120s cycle)

All animations are smooth and subtle to enhance the experience without being distracting.

