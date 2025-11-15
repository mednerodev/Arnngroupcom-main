# 🎨 Video Background Layer Diagram

## Visual Layer Structure

```
╔═══════════════════════════════════════════════════════════════╗
║  👁️ WHAT YOU SEE (Features Section)                           ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        ║
║   │  Card 1     │  │  Card 2     │  │  Card 3     │        ║
║   │  Icon       │  │  Icon       │  │  Icon       │   ← Layer 7
║   │  Title      │  │  Title      │  │  Title      │        ║
║   │  Text       │  │  Text       │  │  Text       │        ║
║   └─────────────┘  └─────────────┘  └─────────────┘        ║
║                                                               ║
║   [Glassmorphic cards with hover effects]                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
                            ↑
                     VISIBLE TO USER

═══════════════════════════════════════════════════════════════

## Technical Layer Stack (Bottom → Top)

```
╔═══════════════════════════════════════════════════════════════╗
║ LAYER 7 (TOP)                                                 ║
║ ┌────────────────────────────────────────────────────────┐   ║
║ │  Feature Cards Content                                  │   ║
║ │  • Glassmorphic backdrop                                │   ║
║ │  • White text                                           │   ║
║ │  • Color-coded icons                                    │   ║
║ │  • Hover animations (scale, lift, glow)                 │   ║
║ └────────────────────────────────────────────────────────┘   ║
╚═══════════════════════════════════════════════════════════════╝
                            ↑
╔═══════════════════════════════════════════════════════════════╗
║ LAYER 6                                                        ║
║ ┌────────────────────────────────────────────────────────┐   ║
║ │  Grid Pattern Overlay                                   │   ║
║ │  • 50px × 50px grid                                     │   ║
║ │  • Opacity: 3%                                          │   ║
║ │  • Color: Service brand color                           │   ║
║ │  • Style: Linear gradient lines                         │   ║
║ └────────────────────────────────────────────────────────┘   ║
╚═══════════════════════════════════════════════════════════════╝
                            ↑
╔═══════════════════════════════════════════════════════════════╗
║ LAYER 5                                                        ║
║ ┌────────────────────────────────────────────────────────┐   ║
║ │  Animated Gradient Mesh                                 │   ║
║ │  • Pulsing colored orbs (blur: 150px)                   │   ║
║ │  • Top-left: Brand color (20% opacity, 8s animation)    │   ║
║ │  • Bottom-right: Blue (10% opacity, 10s animation)      │   ║
║ └────────────────────────────────────────────────────────┘   ║
╚═══════════════════════════════════════════════════════════════╝
                            ↑
╔═══════════════════════════════════════════════════════════════╗
║ LAYER 4                                                        ║
║ ┌────────────────────────────────────────────────────────┐   ║
║ │  Gradient Overlay                                       │   ║
║ │  • Diagonal gradient (top-left to bottom-right)         │   ║
║ │  • Colors: #1a1a2e → #0a0a0a → #1a1a2e                 │   ║
║ │  • Opacity: 80% → 60% → 80%                             │   ║
║ └────────────────────────────────────────────────────────┘   ║
╚═══════════════════════════════════════════════════════════════╝
                            ↑
╔═══════════════════════════════════════════════════════════════╗
║ LAYER 3                                                        ║
║ ┌────────────────────────────────────────────────────────┐   ║
║ │  Dark Contrast Overlay                                  │   ║
║ │  • Solid dark color: #0a0a0a                            │   ║
║ │  • Opacity: 85%                                         │   ║
║ │  • Purpose: Ensure text readability                     │   ║
║ └────────────────────────────────────────────────────────┘   ║
╚═══════════════════════════════════════════════════════════════╝
                            ↑
╔═══════════════════════════════════════════════════════════════╗
║ LAYER 2 (NEW!)                                                 ║
║ ┌────────────────────────────────────────────────────────┐   ║
║ │  🎬 VIDEO BACKGROUND                                    │   ║
║ │  • Autoplays on load                                    │   ║
║ │  • Loops continuously                                   │   ║
║ │  • Muted (no audio)                                     │   ║
║ │  • Object-fit: cover (fills entire section)             │   ║
║ │  • Plays inline on mobile                               │   ║
║ │  • URL: data.backgroundVideo or default                 │   ║
║ └────────────────────────────────────────────────────────┘   ║
╚═══════════════════════════════════════════════════════════════╝
                            ↑
╔═══════════════════════════════════════════════════════════════╗
║ LAYER 1 (BOTTOM)                                               ║
║ ┌────────────────────────────────────────────────────────┐   ║
║ │  Base Background Color                                  │   ║
║ │  • Color: #1a1a2e (dark blue-gray)                      │   ║
║ │  • Fallback if video fails to load                      │   ║
║ └────────────────────────────────────────────────────────┘   ║
╚═══════════════════════════════════════════════════════════════╝
```

## Code Implementation

### Layer 2: Video Background (NEW)
```tsx
<div className="absolute inset-0">
  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
    <source src={videoUrl} type="video/mp4" />
  </video>
</div>
```

### Layer 3: Dark Contrast Overlay
```tsx
<div className="absolute inset-0 bg-[#0a0a0a]/85"></div>
```

### Layer 4: Gradient Overlay
```tsx
<div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/80 via-[#0a0a0a]/60 to-[#1a1a2e]/80"></div>
```

### Layer 5: Animated Gradient Mesh
```tsx
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 animate-pulse" 
       style={{ backgroundColor: color, animationDuration: '8s' }}>
  </div>
  <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" 
       style={{ animationDuration: '10s' }}>
  </div>
</div>
```

### Layer 6: Grid Pattern Overlay
```tsx
<div className="absolute inset-0 opacity-[0.03]"
     style={{
       backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
       backgroundSize: '50px 50px'
     }}>
</div>
```

### Layer 7: Feature Cards Content
```tsx
<div className="max-w-[1400px] mx-auto relative">
  {/* Section header and feature cards */}
</div>
```

## Visual Effect Flow

```
USER SEES:
┌─────────────────────────────────────────────────┐
│  Glassmorphic Cards (frosted glass effect)      │
│  with readable white text                       │
│  on a subtly moving background                  │
│  with grid pattern overlay                      │
│  and pulsing gradient orbs                      │
└─────────────────────────────────────────────────┘

TECHNICAL STACK:
┌─────────────────────────────────────────────────┐
│  Cards (z-index: relative)                      │
├─────────────────────────────────────────────────┤
│  Grid pattern (opacity: 3%)                     │
├─────────────────────────────────────────────────┤
│  Gradient mesh (pulsing, blur: 150px)           │
├─────────────────────────────────────────────────┤
│  Gradient overlay (3-stop diagonal)             │
├─────────────────────────────────────────────────┤
│  Dark overlay (85% opacity) ← ENSURES CONTRAST  │
├─────────────────────────────────────────────────┤
│  🎬 VIDEO (looping, muted) ← NEW LAYER!        │
├─────────────────────────────────────────────────┤
│  Base color #1a1a2e (fallback)                  │
└─────────────────────────────────────────────────┘
```

## Opacity Stack Calculation

```
Final Visibility of Video:

Video at 100% brightness
  ↓
× 15% visible (85% dark overlay)
  ↓
× 20-40% visible (gradient overlay varies)
  ↓
× 97% visible (3% grid pattern)
  ↓
≈ 3-6% video brightness visible through all layers

Result: Subtle, non-distracting motion that enhances without overwhelming
```

## Design Philosophy

```
╔════════════════════════════════════════════════════════╗
║  PRINCIPLE: Layered Depth                              ║
╠════════════════════════════════════════════════════════╣
║                                                        ║
║  Video (depth)                                         ║
║    ↓                                                   ║
║  Overlays (atmosphere)                                 ║
║    ↓                                                   ║
║  Grid (structure)                                      ║
║    ↓                                                   ║
║  Cards (content)                                       ║
║                                                        ║
║  = Professional, modern, engaging UI                   ║
╚════════════════════════════════════════════════════════╝
```

## CSS Properties Summary

| Layer | Property | Value | Purpose |
|-------|----------|-------|---------|
| Video | `position` | `absolute` | Background layer |
| Video | `object-fit` | `cover` | Fill section |
| Video | `z-index` | Implicit 0 | Bottom layer |
| Overlays | `position` | `absolute` | Stack on video |
| Overlays | `inset` | `0` | Full coverage |
| Cards | `position` | `relative` | Above overlays |
| Cards | `z-index` | Implicit higher | Top layer |

## Responsive Behavior

### Desktop (1400px+)
```
Video: Full 1920×1080 visible
Cards: 6 cards in bento grid (asymmetric)
Grid: 50px spacing
```

### Tablet (768px - 1399px)
```
Video: Scaled to fit, maintains aspect
Cards: 4 cards, 2-column grid
Grid: 50px spacing
```

### Mobile (<768px)
```
Video: Scaled to fit, maintains aspect
Cards: 6 cards, single column
Grid: 50px spacing
```

---

**🎯 Key Takeaway:**  
The video is Layer 2 of 7, heavily overlaid to ensure it enhances rather than distracts from the content above it.
