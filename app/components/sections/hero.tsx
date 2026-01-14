'use client';

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import SplineViewer with no SSR
const SplineViewer = dynamic(() => import('../SplineViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-purple-400">Loading 3D...</div>
    </div>
  ),
});

interface HeroProps {
  theme: 'light' | 'dark';
  heroTitleRef: React.RefObject<HTMLHeadingElement | null>;
  heroSubtitleRef: React.RefObject<HTMLParagraphElement | null>;
  smoothScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function Hero({ theme, heroTitleRef, heroSubtitleRef, smoothScrollTo }: HeroProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-20 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-8">
              <span className="text-purple-400 text-sm font-medium tracking-wide">
                ✨ TRANSFORM YOUR BUSINESS
              </span>
            </div>

            <h1 
              ref={heroTitleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight"
            >
              Building Digital
              <br />
              <span className="text-purple-500">Excellence</span>
            </h1>

            <p 
              ref={heroSubtitleRef}
              className={`text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              We empower businesses through innovative technology solutions, 
              strategic consulting, and world-class development services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact"
                onClick={(e) => smoothScrollTo(e, '#contact')}
                className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40"
              >
                Start Your Project
              </a>
              <a 
                href="#services"
                onClick={(e) => smoothScrollTo(e, '#services')}
                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 border ${
                  theme === 'dark' 
                    ? 'border-white/10 hover:border-purple-500/50 text-white hover:bg-purple-500/10' 
                    : 'border-gray-300 hover:border-purple-500 text-gray-900 hover:bg-purple-50'
                }`}
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-purple-500/20">
              <div>
                <div className="text-3xl font-bold text-purple-500 mb-1">10+</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-500 mb-1">500+</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-500 mb-1">98%</div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right content - 3D Viewer or Visual */}
          <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-transparent">
              {/* Optional: Uncomment to add 3D Spline viewer */}
              {/* <SplineViewer /> */}
              
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-900/20 blur-3xl animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-48 h-48 text-purple-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-10 left-10 px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-lg border border-purple-500/20">
                <p className="text-sm text-purple-400 font-medium">💡 Innovation</p>
              </div>
              <div className="absolute bottom-10 right-10 px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-lg border border-purple-500/20">
                <p className="text-sm text-purple-400 font-medium">🚀 Growth</p>
              </div>
              <div className="absolute top-1/2 right-10 px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-lg border border-purple-500/20">
                <p className="text-sm text-purple-400 font-medium">⚡ Performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}