'use client';

import { useEffect, useRef, createElement, memo } from 'react';

function SplineViewerComponent({ url }: { url: string }) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    // Prevent multiple loads
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    // Hide Spline branding after component mounts
    const hideSplineLogo = () => {
      const viewer = viewerRef.current?.querySelector('spline-viewer');
      if (viewer) {
        // Hide through shadow DOM
        const shadowRoot = (viewer as any).shadowRoot;
        if (shadowRoot) {
          const logo = shadowRoot.querySelector('#logo');
          if (logo) {
            (logo as HTMLElement).style.display = 'none';
            (logo as HTMLElement).style.visibility = 'hidden';
            (logo as HTMLElement).style.opacity = '0';
            (logo as HTMLElement).remove();
          }
        }
        
        // Hide all children that might be the logo
        const allChildren = viewer.querySelectorAll('*');
        allChildren.forEach((child: Element) => {
          const el = child as HTMLElement;
          const text = el.textContent?.toLowerCase() || '';
          const href = el.getAttribute('href') || '';
          
          // Check if it contains "spline" or "built with"
          if (text.includes('spline') || text.includes('built') || href.includes('spline')) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.style.pointerEvents = 'none';
            el.remove();
          }
          
          // Hide elements in bottom-right corner
          const style = window.getComputedStyle(el);
          if (style.position === 'absolute' && 
              (style.bottom || style.right)) {
            el.style.display = 'none';
            el.remove();
          }
        });
        
        // Hide the last child (often the logo)
        const lastChild = viewer.lastElementChild as HTMLElement;
        if (lastChild) {
          lastChild.style.display = 'none';
          lastChild.remove();
        }
      }
    };

    // Optimized timing for logo hiding - multiple attempts to ensure it's hidden
    const timeouts = [0, 50, 100, 200, 500, 1000, 2000, 3000];
    const timeoutIds = timeouts.map(delay => 
      setTimeout(hideSplineLogo, delay)
    );

    // Continuous interval to keep removing logo
    const intervalId = setInterval(hideSplineLogo, 100);

    // Also set up an observer to catch any dynamic changes
    const observer = new MutationObserver(hideSplineLogo);
    if (viewerRef.current) {
      observer.observe(viewerRef.current, { 
        childList: true, 
        subtree: true 
      });
    }

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        spline-viewer::part(logo) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
        spline-viewer #logo,
        spline-viewer > *:last-child,
        spline-viewer > div:last-child,
        spline-viewer a[href*="spline"],
        spline-viewer *[style*="position: absolute"][style*="bottom"],
        spline-viewer *[style*="position: absolute"][style*="right"],
        spline-viewer div[style*="bottom: 0"],
        spline-viewer div[style*="right: 0"],
        spline-viewer a[style*="bottom"],
        spline-viewer a[style*="right"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
          width: 0 !important;
          height: 0 !important;
          position: absolute !important;
          left: -9999px !important;
        }
        /* Physical overlay to cover the logo area */
        spline-viewer::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 200px;
          height: 60px;
          background: transparent;
          z-index: 999999;
          pointer-events: none;
        }
      `}</style>
      <div 
        ref={viewerRef} 
        style={{ 
          width: '100%', 
          height: '100%',
          transform: 'translateZ(0)',
          willChange: 'transform',
          position: 'relative'
        }}
      >
        {createElement('spline-viewer', {
          url: url,
          loading: 'lazy',
          style: { width: '100%', height: '100%' },
          // @ts-ignore - Custom attribute to hide logo
          'hide-logo': 'true'
        })}
        {/* Physical overlay div to block the logo */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          width: '180px',
          height: '50px',
          background: 'rgb(0, 0, 0)',
          zIndex: 999999,
          pointerEvents: 'none'
        }} />
      </div>
    </>
  );
}

// Memoize the component to prevent unnecessary re-renders
export default memo(SplineViewerComponent);
