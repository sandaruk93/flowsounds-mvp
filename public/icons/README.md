# FlowSounds Icons

This directory contains SVG icons for the FlowSounds ambient sound options.

## Current Icons

- **fireplace.svg** - Fireplace/wood burning icon
- **rain.svg** - Rain cloud with raindrops icon  
- **ocean.svg** - Ocean waves icon

## Icon Specifications

- **Format**: SVG (Scalable Vector Graphics)
- **ViewBox**: 24x24 pixels
- **Style**: Line-based icons with `stroke="currentColor"`
- **Fallback**: Emoji fallbacks (🔥, 🌧️, 🌊) if SVG fails to load

## Adding New Icons

1. Create a new SVG file in this directory
2. Follow the naming convention: `soundname.svg`
3. Use the same viewBox (24x24) and styling
4. Update the `soundIcons` object in `src/App.jsx`
5. Add a fallback emoji in the component

## Usage in Code

```javascript
const soundIcons = {
  fireplace: '/icons/fireplace.svg',
  rain: '/icons/rain.svg', 
  ocean: '/icons/ocean.svg'
}
```

## Styling

Icons are styled with CSS filters to match the app's color scheme:
- **Inactive**: Gray color
- **Active**: White color (when sound is selected)
- **Hover**: Blue accent color
