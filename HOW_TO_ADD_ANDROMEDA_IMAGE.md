# How to Add Your Andromeda Galaxy Image

## Quick Steps:

1. **Create a `public` folder at the root level** (if it doesn't exist):
   ```
   my-portfolio/
   └── public/          ← Create this folder here (at root, not in src)
       └── andromeda-galaxy.jpg  (your image here)
   ```

2. **Save your Andromeda galaxy image** as `andromeda-galaxy.jpg` and place it in the `public` folder

3. **If your image has a different name**, update `src/components/nightsky.css`:
   - Find: `background-image: url('/andromeda-galaxy.jpg');`
   - Change to match your filename

## Alternative Options:

### Option A: Use image from src/public
If you put the image in `src/public/andromeda-galaxy.jpg`, update the CSS to:
```css
background-image: url('/src/public/andromeda-galaxy.jpg');
```

### Option B: Use an online image URL
If you have the image hosted online, update the CSS to:
```css
background-image: url('YOUR_IMAGE_URL_HERE');
```

## Current Setup:
The code is set to look for `/andromeda-galaxy.jpg` in the root-level `public` folder.

**Just add your Andromeda galaxy image to the `public` folder and it will automatically appear!**

