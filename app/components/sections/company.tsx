'use client';

import React, { useRef } from 'react';

interface CompanyProps {
  theme: 'light' | 'dark';
  themeClasses: {
    sectionBg: string;
    cardBg: string;
    valueBg: string;
  };
  statsRef: React.MutableRefObject<HTMLDivElement[]>;
}

export default function Company({ theme, themeClasses, statsRef }: CompanyProps) {
  return (
    <section id="company" className={`relative py-12 sm:py-16 md:py-20 lg:py-24 transition-colors duration-300 ${themeClasses.sectionBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6">
            <span className="text-purple-400 text-sm font-medium tracking-wide">WHO WE ARE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            Company <span className="text-purple-500">Overview</span>
          </h2>
          <p className={`text-base sm:text-lg max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            BizMaster is a strategic business development partner dedicated to elevating companies 
            through comprehensive digital transformation and operational excellence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-20">
          <div ref={(el) => { if (el) statsRef.current[0] = el; }} className={`text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/10' : 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200'
          }`}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 mb-1 sm:mb-2">10+</div>
            <div className={`text-xs sm:text-sm tracking-wide ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>Years Experience</div>
          </div>
          <div ref={(el) => { if (el) statsRef.current[1] = el; }} className={`text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/10' : 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200'
          }`}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 mb-1 sm:mb-2">500+</div>
            <div className={`text-sm tracking-wide ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>Projects Delivered</div>
          </div>
          <div ref={(el) => { if (el) statsRef.current[2] = el; }} className={`text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/10' : 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200'
          }`}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 mb-1 sm:mb-2">200+</div>
            <div className={`text-sm tracking-wide ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>Happy Clients</div>
          </div>
          <div ref={(el) => { if (el) statsRef.current[3] = el; }} className={`text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-colors duration-300 ${
            theme === 'dark' ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/10' : 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200'
          }`}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 mb-1 sm:mb-2">98%</div>
            <div className={`text-sm tracking-wide ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>Success Rate</div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Mission */}
          <div className={`p-8 rounded-2xl border transition-all duration-300 ${
            theme === 'dark' ? 'bg-gradient-to-br from-purple-900/10 to-transparent border-purple-500/10 hover:border-purple-500/30' : 'bg-gradient-to-br from-purple-50 to-transparent border-purple-200 hover:border-purple-400'
          }`}>
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <div className="w-16 h-1 bg-purple-500 mb-4"></div>
            <p className={`leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              To empower businesses with cutting-edge technology solutions and strategic guidance 
              that drive measurable growth and sustainable success.
            </p>
          </div>

          {/* Vision */}
          <div className={`p-8 rounded-2xl border transition-all duration-300 ${
            theme === 'dark' ? 'bg-gradient-to-br from-purple-900/10 to-transparent border-purple-500/10 hover:border-purple-500/30' : 'bg-gradient-to-br from-purple-50 to-transparent border-purple-200 hover:border-purple-400'
          }`}>
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <div className="w-16 h-1 bg-purple-500 mb-4"></div>
            <p className={`leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              To be the leading business development partner recognized globally for transforming 
              companies into industry leaders through innovation and excellence.
            </p>
          </div>

          {/* Approach */}
          <div className={`p-8 rounded-2xl border transition-all duration-300 md:col-span-2 lg:col-span-1 ${
            theme === 'dark' ? 'bg-gradient-to-br from-purple-900/10 to-transparent border-purple-500/10 hover:border-purple-500/30' : 'bg-gradient-to-br from-purple-50 to-transparent border-purple-200 hover:border-purple-400'
          }`}>
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Our Approach</h3>
            <div className="w-16 h-1 bg-purple-500 mb-4"></div>
            <p className={`leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              We combine strategic thinking with technical expertise to deliver integrated solutions 
              that are scalable, sustainable, and aligned with your business objectives.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}