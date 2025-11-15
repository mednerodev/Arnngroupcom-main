# 🎥 Video Backgrounds Guide

## Overview
The service pages now support video backgrounds in the **Features section** while preserving all design elements (grid patterns, gradients, glassmorphic cards, and hover effects).

## Current Implementation

### Default Video
By default, all service pages use the home page video:
```
https://cdn.pixabay.com/video/2021/10/12/91744-636709154_large.mp4
```

### Features Section with Video Background
The `ServiceFeatures` component now includes:
- ✅ Video background layer (bottom layer)
- ✅ Dark overlay for contrast
- ✅ Gradient overlay
- ✅ Animated gradient mesh
- ✅ Grid pattern overlay
- ✅ All feature cards and content (top layer)

**Layering Order (bottom to top):**
1. Video background
2. Dark overlay (85% opacity)
3. Gradient overlay
4. Animated gradient mesh
5. Grid pattern
6. Feature cards content

## How to Add Custom Videos Per Service

### Step 1: Edit Service Data
Open `/data/servicesData.ts` and add `backgroundVideo` to the features section:

```typescript
{
  id: "1",
  slug: "economic-empowerment",
  title: "Economic Empowerment",
  // ... other properties
  
  features: {
    title: "Comprehensive Investment Solutions",
    subtitle: "Key Focus Areas",
    layout: "bento",
    backgroundVideo: "YOUR_CUSTOM_VIDEO_URL_HERE.mp4", // 👈 Add this line
    items: [
      // ... feature cards
    ]
  },
}
```

### Step 2: Video URL Format
Use the same format as existing videos:
```
https://cdn.pixabay.com/video/YYYY/MM/DD/VIDEO_ID-HASH_large.mp4
```

### Example: Adding Custom Video
```typescript
features: {
  title: "Comprehensive Investment Solutions",
  subtitle: "Key Focus Areas",
  layout: "bento",
  backgroundVideo: "https://cdn.pixabay.com/video/2022/10/25/136577-764149809_large.mp4", // Custom video
  items: [
    // ... feature cards
  ]
}
```

## Video Requirements

### Technical Specs
- ✅ Format: MP4 (H.264)
- ✅ Recommended resolution: 1920x1080 or higher
- ✅ File size: Under 10MB for optimal performance
- ✅ Duration: 10-30 seconds (looping)
- ✅ Framerate: 30fps or 60fps
- ✅ Aspect ratio: 16:9 (widescreen)

### Content Guidelines
- ✅ Use subtle, non-distracting motion
- ✅ Avoid bright or flashy content
- ✅ Use business-appropriate themes
- ✅ Test with dark overlays (85% opacity)
- ✅ Ensure text remains readable

## Design Preservation

### What Stays the Same
All existing design elements are preserved:
- ✅ Grid pattern overlay (opacity 0.03)
- ✅ Gradient mesh animations
- ✅ Glassmorphic feature cards
- ✅ Hover effects and transformations
- ✅ Text readability and contrast
- ✅ Border effects and glows
- ✅ Responsive layout

### Contrast Control
The dark overlay (85% opacity) ensures:
- White text remains legible
- Cards stand out from background
- Hover effects are visible
- Brand colors remain vibrant

## Example Services with Custom Videos

### Economic Empowerment
```typescript
backgroundVideo: "https://cdn.pixabay.com/video/2021/10/12/91744-636709154_large.mp4"
```
**Theme:** Business partnership, handshakes, professional meetings

### Real Estate Development (Future)
```typescript
backgroundVideo: "https://cdn.pixabay.com/video/2020/XX/XX/XXXXX-XXXXXXXX_large.mp4"
```
**Theme:** Architecture, construction, modern buildings

### ICT (Future)
```typescript
backgroundVideo: "https://cdn.pixabay.com/video/2021/XX/XX/XXXXX-XXXXXXXX_large.mp4"
```
**Theme:** Technology, coding, digital interfaces

## Troubleshooting

### Video Not Playing
1. Check video URL is accessible
2. Ensure MP4 format
3. Verify autoPlay is supported in browser
4. Check file size (should be under 10MB)

### Video Too Bright/Distracting
1. Increase dark overlay opacity in `/components/service/ServiceFeatures.tsx`:
   ```typescript
   <div className="absolute inset-0 bg-[#0a0a0a]/90"></div>
   ```
   Change `/85` to `/90` or `/95`

### Performance Issues
1. Compress video file
2. Use lower resolution (1280x720)
3. Reduce video duration
4. Use video optimization tools

## Browser Support
- ✅ Chrome/Edge: Full support
- ✅ Firefox: Full support
- ✅ Safari: Full support (requires inline playback)
- ✅ Mobile: Supported (with playsInline attribute)

## Accessibility
- Videos are decorative only (no important content)
- All text has sufficient contrast
- No audio (muted by default)
- No flashing or strobing content

## Performance Optimization
- Videos are lazy-loaded
- Autoplay only when in viewport
- Muted to avoid user interruption
- Looping for continuous effect

---

**Need a different video?** Simply update the `backgroundVideo` property in `/data/servicesData.ts` for each service! 🎬
