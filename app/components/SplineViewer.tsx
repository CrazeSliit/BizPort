'use client';

import { useEffect, useRef, createElement, memo, useState } from 'react';

function SplineViewerComponent({ url }: { url: string }) {
  const viewerRef = useRef<HTMLDivElement>(null);
  const hasLoaded = useRef(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Prevent multiple loads
    if (hasLoaded.current) return;
    hasLoaded.current = true;

    // Error handling
    const handleError = () => {
      console.warn('Spline viewer failed to load');
      setError(true);
    };

    window.addEventListener('error', handleError);

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
          }
        }
      }
    };

    // Optimized timing for logo hiding
    const timeouts = [0, 100, 500, 1000];
    const timeoutIds = timeouts.map(delay => 
      setTimeout(hideSplineLogo, delay)
    );

    return () => {
      window.removeEventListener('error', handleError);
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, []);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-transparent">
        <div className="text-center">
          <div className="text-6xl mb-4">🎨</div>
          <p className="text-purple-400">3D Scene Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>{`
        spline-viewer::part(logo) {
          display: none !important;
        }
        spline-viewer #logo,
        spline-viewer > *:last-child {
          display: none !important;
        }
      `}</style>
      <div 
        ref={viewerRef} 
        style={{ 
          width: '100%', 
          height: '100%',
          position: 'relative'
        }}
      >
        {createElement('spline-viewer', {
          url: url,
          style: { width: '100%', height: '100%' }
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
