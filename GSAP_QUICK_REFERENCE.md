# GSAP Quick Reference Card

## 🎯 Quick Access
- **Homepage**: http://localhost:3000/
- **GSAP Demo**: http://localhost:3000/gsap-demo

## 📦 Files Created/Modified

### New Files
1. `app/gsap-demo/page.tsx` - Full GSAP showcase page
2. `app/components/GSAPAnimations.tsx` - Reusable component
3. `GSAP_INTEGRATION.md` - Complete integration guide
4. `GSAP_SUMMARY.md` - Summary of changes

### Modified Files
1. `app/page.tsx` - Added GSAP animations to homepage
2. `package.json` - Added GSAP dependency

## 🎨 Common GSAP Patterns

### Fade In
```tsx
gsap.from(ref.current, {
  opacity: 0,
  duration: 1
});
```

### Slide Up
```tsx
gsap.from(ref.current, {
  y: 100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});
```

### Scroll Trigger
```tsx
gsap.from(ref.current, {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: ref.current,
    start: 'top 80%',
    toggleActions: 'play none none none'
  }
});
```

### Stagger Multiple Elements
```tsx
gsap.from('.items', {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.8
});
```

### Counter Animation
```tsx
const obj = { count: 0 };
gsap.to(obj, {
  count: 100,
  duration: 2,
  onUpdate: () => {
    element.textContent = Math.floor(obj.count);
  }
});
```

## 🔧 Setup Template

```tsx
'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Component() {
  const elementRef = useRef(null);

  useEffect(() => {
    // Your animations here
    gsap.from(elementRef.current, {
      opacity: 0,
      y: 50,
      duration: 1
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return <div ref={elementRef}>Content</div>;
}
```

## ⚡ Easing Functions
- `power1.out` - Gentle ease
- `power2.out` - Medium ease
- `power3.out` - Strong ease (default for smooth)
- `power4.out` - Very strong ease
- `back.out` - Overshoots then settles
- `elastic.out` - Bouncy
- `bounce.out` - Bounces at end

## 🎬 Timeline Methods
```tsx
const tl = gsap.timeline();
tl.from('.el1', { opacity: 0 })
  .from('.el2', { x: -100 })
  .from('.el3', { scale: 0 }, '-=0.5'); // Overlap by 0.5s
```

## 📱 Responsive Animations
```tsx
gsap.matchMedia().add('(min-width: 768px)', () => {
  // Desktop animations
  gsap.from('.desktop', { x: 100 });
});

gsap.matchMedia().add('(max-width: 767px)', () => {
  // Mobile animations
  gsap.from('.mobile', { y: 50 });
});
```

## 🎯 ScrollTrigger Options
```tsx
scrollTrigger: {
  trigger: element,        // Element to watch
  start: 'top 80%',       // When to start
  end: 'bottom 20%',      // When to end
  scrub: true,            // Link to scroll position
  pin: true,              // Pin element
  toggleActions: 'play none none reverse'
  // onEnter onLeave onEnterBack onLeaveBack
}
```

## 🚀 Performance Tips
1. Animate `transform` and `opacity` only for best performance
2. Use `will-change: transform` in CSS for animated elements
3. Kill ScrollTriggers on component unmount
4. Batch similar animations in timelines
5. Use `ease: 'none'` for scrub animations

## 📖 Learn More
- Docs: https://gsap.com/docs/v3/
- ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Easing: https://gsap.com/docs/v3/Eases/
- Forum: https://gsap.com/community/

---
**GSAP Version**: 3.x  
**Next.js Version**: 16.1.1  
**Date Added**: 2026-01-14
