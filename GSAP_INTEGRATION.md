# GSAP Integration Guide

## Overview
GSAP (GreenSock Animation Platform) has been successfully integrated into your BizPort project. GSAP is a professional-grade JavaScript animation library that provides:

- **Blazing Fast Performance**: 60fps animations optimized for all browsers
- **Precise Control**: Frame-by-frame animation control with ease
- **Cross-Browser Compatibility**: Works everywhere, even older browsers
- **Rich Plugin Ecosystem**: ScrollTrigger, TextPlugin, and more

## Installation
GSAP has been installed via npm:
```bash
npm install gsap
```

## What's Been Added

### 1. Homepage Animations (`app/page.tsx`)
- **Hero Section**: Smooth fade-in and slide-up animations for title and subtitle
- **Stats Section**: Sequential animation for statistics cards with scroll triggers
- **Service Cards**: Scroll-triggered animations as elements enter viewport

### 2. GSAP Demo Page (`app/gsap-demo/page.tsx`)
A comprehensive showcase page featuring:
- Hero animation with stagger effects
- Parallax scrolling effects
- Rotation animations on scroll
- Scale animations
- Pinned sections
- Counter animations
- Text typing effects
- Feature grid with hover effects

### 3. Reusable Component (`app/components/GSAPAnimations.tsx`)
A standalone component demonstrating:
- Stagger animations
- Scroll-triggered cards
- Floating animations
- Feature showcases

## Usage Examples

### Basic Animation
```typescript
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

function MyComponent() {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.from(elementRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return <div ref={elementRef}>Animated Content</div>;
}
```

### Scroll Trigger Animation
```typescript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  gsap.from('.element', {
    opacity: 0,
    y: 100,
    scrollTrigger: {
      trigger: '.element',
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
}, []);
```

### Timeline for Sequential Animations
```typescript
const tl = gsap.timeline();
tl.from('.title', { opacity: 0, y: 50, duration: 1 })
  .from('.subtitle', { opacity: 0, y: 30, duration: 0.8 })
  .from('.button', { opacity: 0, scale: 0, duration: 0.5 });
```

## Available Plugins

### ScrollTrigger
Trigger animations based on scroll position:
```typescript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

### TextPlugin
Animate text content:
```typescript
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);
```

## Key Features Used

1. **Fade In/Out**: `opacity: 0` → `opacity: 1`
2. **Slide Animations**: `y: 100` → `y: 0`
3. **Scale Animations**: `scale: 0.5` → `scale: 1`
4. **Rotation**: `rotation: 0` → `rotation: 360`
5. **Stagger**: Sequential delays for multiple elements
6. **Scroll Triggers**: Animations tied to scroll position
7. **Easing Functions**: `power3.out`, `back.out`, etc.

## Navigation

- **Home Page**: Visit `/` to see GSAP animations on homepage
- **GSAP Demo**: Visit `/gsap-demo` for comprehensive animation showcase
- **Navigation Link**: "GSAP DEMO" added to main navigation menu

## Performance Tips

1. **Use `will-change`** for animated properties
2. **Animate transforms and opacity** for best performance
3. **Kill ScrollTriggers** on component unmount:
   ```typescript
   return () => {
     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
   };
   ```
4. **Use `gsap.set()`** for instant property changes
5. **Batch similar animations** using timelines

## Common Patterns

### Entrance Animation
```typescript
gsap.from(element, {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: 'power3.out'
});
```

### Hover Animation
```typescript
gsap.to(element, {
  scale: 1.1,
  duration: 0.3,
  ease: 'power2.out'
});
```

### Infinite Loop
```typescript
gsap.to(element, {
  rotation: 360,
  duration: 2,
  repeat: -1,
  ease: 'linear'
});
```

## Resources

- **Official Documentation**: https://gsap.com/docs/v3/
- **Getting Started**: https://gsap.com/resources/getting-started/
- **ScrollTrigger Docs**: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- **Easing Visualizer**: https://gsap.com/docs/v3/Eases/
- **Forum**: https://gsap.com/community/

## Browser Support

GSAP works in all major browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera
- IE 9+ (with polyfills)

## Next Steps

1. Explore the `/gsap-demo` page to see all animation examples
2. Review the code in `app/page.tsx` to see homepage implementations
3. Experiment with different easing functions
4. Add more scroll-triggered animations to your content
5. Check out GSAP's premium plugins for advanced features

## License

GSAP is free for most projects. Check their [license page](https://gsap.com/pricing/) for commercial usage details.

---

**Happy Animating! 🎨**
