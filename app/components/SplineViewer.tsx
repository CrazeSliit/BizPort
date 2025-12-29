'use client';

import { useEffect, useRef, createElement } from 'react';

export default function SplineViewer({ url }: { url: string }) {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide Spline branding after component mounts
    const hideSplineLogo = () => {
      const viewer = viewerRef.current?.querySelector('spline-viewer');
      if (viewer) {
        const shadowRoot = (viewer as any).shadowRoot;
        if (shadowRoot) {
          const logo = shadowRoot.querySelector('#logo');
          if (logo) {
            (logo as HTMLElement).style.display = 'none';
          }
        }
      }
    };

    // Try multiple times as the logo might load asynchronously
    const intervals = [100, 500, 1000, 2000];
    intervals.forEach(delay => {
      setTimeout(hideSplineLogo, delay);
    });

    return () => {};
  }, []);

  return (
    <div ref={viewerRef} style={{ width: '100%', height: '100%' }}>
      {createElement('spline-viewer', {
        url: url,
        style: { width: '100%', height: '100%' }
      })}
    </div>
  );
}
