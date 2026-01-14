'use client';

import React from 'react';

interface NavigationProps {
  theme: 'light' | 'dark';
  themeClasses: {
    nav: string;
    link: string;
    button: string;
    themeToggle: string;
    mobileMenu: string;
  };
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleTheme: () => void;
  smoothScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

export default function Navigation({
  theme,
  themeClasses,
  mobileMenuOpen,
  setMobileMenuOpen,
  toggleTheme,
  smoothScrollTo,
}: NavigationProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors duration-300 ${themeClasses.nav}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-wider">
              BIZ<span className="text-purple-500">master</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#company" onClick={(e) => smoothScrollTo(e, '#company')} className={`transition-colors text-sm font-medium tracking-wide ${themeClasses.link}`}>
              COMPANY
            </a>
            <a href="#services" onClick={(e) => smoothScrollTo(e, '#services')} className={`transition-colors text-sm font-medium tracking-wide ${themeClasses.link}`}>
              SERVICES
            </a>
            <a href="#projects" onClick={(e) => smoothScrollTo(e, '#projects')} className={`transition-colors text-sm font-medium tracking-wide ${themeClasses.link}`}>
              PROJECTS
            </a>
            <a href="/gsap-demo" className={`transition-colors text-sm font-medium tracking-wide ${themeClasses.link}`}>
              GSAP DEMO
            </a>
            <a href="#contact" onClick={(e) => smoothScrollTo(e, '#contact')} className={`transition-colors text-sm font-medium tracking-wide ${themeClasses.link}`}>
              CONTACT
            </a>
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all duration-300 ${themeClasses.themeToggle}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button 
              onClick={(e) => smoothScrollTo(e as any, '#contact')} 
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${themeClasses.button}`}
            >
              GET STARTED
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${themeClasses.themeToggle}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-colors ${themeClasses.mobileMenu}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t transition-colors duration-300 ${theme === 'dark' ? 'border-white/5 bg-black/95' : 'border-gray-200 bg-white/95'}`}>
          <div className="px-6 py-4 space-y-3">
            <a 
              href="#company" 
              onClick={(e) => {
                smoothScrollTo(e, '#company');
                setMobileMenuOpen(false);
              }} 
              className={`block py-2 text-sm font-medium tracking-wide transition-colors ${themeClasses.link}`}
            >
              COMPANY
            </a>
            <a 
              href="#services" 
              onClick={(e) => {
                smoothScrollTo(e, '#services');
                setMobileMenuOpen(false);
              }} 
              className={`block py-2 text-sm font-medium tracking-wide transition-colors ${themeClasses.link}`}
            >
              SERVICES
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {
                smoothScrollTo(e, '#projects');
                setMobileMenuOpen(false);
              }} 
              className={`block py-2 text-sm font-medium tracking-wide transition-colors ${themeClasses.link}`}
            >
              PROJECTS
            </a>
            <a 
              href="/gsap-demo"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-sm font-medium tracking-wide transition-colors ${themeClasses.link}`}
            >
              GSAP DEMO
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                smoothScrollTo(e, '#contact');
                setMobileMenuOpen(false);
              }} 
              className={`block py-2 text-sm font-medium tracking-wide transition-colors ${themeClasses.link}`}
            >
              CONTACT
            </a>
            <button 
              onClick={(e) => {
                smoothScrollTo(e as any, '#contact');
                setMobileMenuOpen(false);
              }} 
              className={`w-full px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${themeClasses.button} mt-2`}
            >
              GET STARTED
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
