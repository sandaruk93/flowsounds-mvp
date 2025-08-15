# Icon Files Directory

This directory contains all SVG icon files for the FlowSounds MVP application.

## Current Icons

### **Focus Sound Icons**
- `white-noise.svg` - Icon for white noise focus sound
- `brown-noise.svg` - Icon for brown noise focus sound
- `pink-noise.svg` - Icon for pink noise focus sound

### **Relax Sound Icons**
- `fireplace.svg` - Icon for fireplace relax sound
- `rain.svg` - Icon for rain relax sound
- `ocean.svg` - Icon for ocean relax sound

## Icon Specifications

- **Format:** SVG (scalable vector graphics)
- **Size:** 24x24 pixels (viewBox)
- **Color:** Uses `currentColor` for theme compatibility
- **Style:** Minimal, clean design
- **Accessibility:** Includes alt text in the application

## Icon Usage

The icons are used in the sound selection buttons to provide visual representation of each sound type:

- **Focus Audio Section:** Shows focus sound icons (white, brown, pink noise)
- **Relax Audio Section:** Shows relax sound icons (fireplace, rain, ocean)

## Fallback Icons

If SVG icons fail to load, the application displays emoji fallbacks:
- **White Noise:** ⚪
- **Brown Noise:** 🟤
- **Pink Noise:** 🩷
- **Fireplace:** 🔥
- **Rain:** 🌧️
- **Ocean:** 🌊

## Customization

To add new icons:
1. Create SVG file with 24x24 viewBox
2. Use `currentColor` for fill/stroke
3. Add to appropriate sound object in App.jsx
4. Add fallback emoji
5. Update this README

## Design Guidelines

- Keep icons simple and recognizable
- Use consistent stroke width
- Ensure good contrast in both light and dark themes
- Test at different sizes for clarity
