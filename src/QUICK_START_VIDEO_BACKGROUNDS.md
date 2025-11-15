# 🎬 Quick Start: Custom Video Backgrounds

## ✅ Current Status

**Video backgrounds are LIVE on all service pages!**

- **Section:** Features (the 6 bento grid cards section)
- **Current Video:** Home page default video
- **Design Elements:** 100% preserved (grid, gradients, cards, effects)

## 🚀 How to Add Your Custom Videos (3 Easy Steps)

### Step 1: Prepare Your Videos

Get 10 MP4 videos (one for each service):

| # | Service | Video Theme Suggestion |
|---|---------|----------------------|
| 1 | Economic Empowerment | Business meetings, partnerships |
| 2 | Real Estate Development | Architecture, modern buildings |
| 3 | ICT | Technology, coding, digital |
| 4 | Agro-Aquaculture | Farming, water, agriculture |
| 5 | Fashion Industries | Textiles, design, manufacturing |
| 6 | Food & Beverage | Kitchen, culinary, ingredients |
| 7 | Aviation Services | Airports, planes, sky |
| 8 | Healthcare | Medical facilities, technology |
| 9 | Education | Learning, classrooms, tech |
| 10 | Luxury Goods | Premium products, craftsmanship |

**Video Specs:**
- Format: MP4 (H.264)
- Size: 1920x1080 or 1280x720
- Duration: 10-30 seconds
- File size: Under 10MB
- Motion: Subtle, non-distracting

### Step 2: Update the Data File

Open `/data/servicesData.ts` and add this line to each service:

```typescript
features: {
  title: "...",
  subtitle: "...",
  layout: "bento",
  backgroundVideo: "https://your-video-url.mp4", // 👈 ADD THIS
  items: [ ... ]
}
```

### Step 3: Done! 🎉

Videos will automatically display with all design elements intact.

## 📋 Example: Economic Empowerment

**Before (current):**
```typescript
features: {
  title: "Comprehensive Investment Solutions",
  subtitle: "Key Focus Areas",
  layout: "bento",
  items: [
    // ... 6 feature cards
  ]
}
```

**After (with custom video):**
```typescript
features: {
  title: "Comprehensive Investment Solutions",
  subtitle: "Key Focus Areas",
  layout: "bento",
  backgroundVideo: "https://cdn.pixabay.com/video/2023/01/15/12345-67890_large.mp4", // 👈 ADDED
  items: [
    // ... 6 feature cards (unchanged)
  ]
}
```

## 🎯 What Happens Automatically

When you add `backgroundVideo`:
- ✅ Video plays in background
- ✅ Grid pattern overlays on top
- ✅ Gradient effects remain
- ✅ Cards stay glassmorphic
- ✅ Hover effects work
- ✅ Text stays readable
- ✅ Responsive on all devices

## 🔍 Where to See It

**Live Example:**
1. Go to: `/services/economic-empowerment`
2. Scroll down to: "Comprehensive Investment Solutions" section
3. Look for: 6 bento grid cards with video background

## 💡 Pro Tips

### Choosing Videos
- ✅ Match theme to service
- ✅ Use subtle motion (not fast/jerky)
- ✅ Darker tones work better (due to overlay)
- ✅ Avoid text in video
- ✅ Test with 85% dark overlay

### Testing Videos
Before adding:
1. Play video with dark overlay filter
2. Check if text would be readable on top
3. Ensure motion isn't distracting
4. Verify file size is reasonable

### Finding Videos
**Free Sources:**
- Pixabay (https://pixabay.com/videos/)
- Pexels (https://www.pexels.com/videos/)
- Videvo (https://www.videvo.net/)

**Premium Sources:**
- Storyblocks
- Shutterstock
- Adobe Stock

## 📱 Device Testing Checklist

After adding videos, test on:
- [ ] Desktop Chrome
- [ ] Desktop Safari
- [ ] Tablet (iPad)
- [ ] Mobile (iPhone)
- [ ] Mobile (Android)

## ⚡ Performance Checklist

Ensure videos are:
- [ ] Under 10MB file size
- [ ] MP4 format (H.264)
- [ ] Optimized/compressed
- [ ] Hosted on fast CDN
- [ ] Accessible URL

## 🆘 Troubleshooting

### Video Not Showing
→ Check URL is correct and accessible

### Video Too Bright
→ Increase overlay opacity in component:
```typescript
bg-[#0a0a0a]/85  →  bg-[#0a0a0a]/90
```

### Video Too Dark
→ Decrease overlay opacity:
```typescript
bg-[#0a0a0a]/85  →  bg-[#0a0a0a]/75
```

### Video Lagging
→ Reduce file size or resolution

## 📚 Documentation

**Full Guides:**
- `/VIDEO_BACKGROUNDS_GUIDE.md` - Complete reference
- `/VIDEO_BACKGROUND_IMPLEMENTATION.md` - Technical details
- `/FEATURE_UPDATE_SUMMARY.md` - What was changed

**Template Guide:**
- `/SERVICE_TEMPLATE_GUIDE.md` - How to add new services

## ✅ Checklist: Adding All 10 Videos

Use this to track progress:

- [ ] 1. Economic Empowerment - Video added
- [ ] 2. Real Estate Development - Video added
- [ ] 3. ICT - Video added
- [ ] 4. Agro-Aquaculture - Video added
- [ ] 5. Fashion Industries - Video added
- [ ] 6. Food & Beverage - Video added
- [ ] 7. Aviation Services - Video added
- [ ] 8. Healthcare - Video added
- [ ] 9. Education - Video added
- [ ] 10. Luxury Goods - Video added

---

## 🎉 Ready to Go!

**Current:** All services use default video  
**Next:** Add custom videos using the template above  
**Result:** Each service has unique, themed video background

**Need help?** Refer to `/VIDEO_BACKGROUNDS_GUIDE.md` for detailed instructions!
