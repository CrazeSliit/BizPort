'use client';

import { useState, useEffect, useLayoutEffect, useCallback, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MainLayout from './components/layout/MainLayout';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  // Initialize theme directly from localStorage
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
      return saved || 'dark';
    }
    return 'dark';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // GSAP refs
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement[]>([]);
  const servicesRef = useRef<HTMLDivElement[]>([]);

  // Sync theme to localStorage only when it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // GSAP animations - useLayoutEffect runs before paint for smoother animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      if (heroTitleRef.current) {
        gsap.from(heroTitleRef.current, {
          opacity: 0,
          y: 100,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.2,
        });
      }

      if (heroSubtitleRef.current) {
        gsap.from(heroSubtitleRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          delay: 0.5,
        });
      }

      // Stats animation
      if (statsRef.current.length > 0) {
        statsRef.current.forEach((stat, index) => {
          if (stat) {
            gsap.from(stat, {
              opacity: 0,
              y: 50,
              duration: 0.8,
              ease: 'power3.out',
              delay: 0.8 + index * 0.1,
              scrollTrigger: {
                trigger: stat,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            });
          }
        });
      }

      // Services animation
      if (servicesRef.current.length > 0) {
        servicesRef.current.forEach((service) => {
          if (service) {
            gsap.from(service, {
              opacity: 0,
              y: 80,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: service,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            });
          }
        });
      }
    });

    // Cleanup using gsap.context
    return () => ctx.revert();
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }, [theme]);

  const smoothScrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  // Memoize theme classes
  const themeClasses = useMemo(() => ({
    main: theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900',
    nav: theme === 'dark' ? 'bg-black/80 border-white/5' : 'bg-white/80 border-gray-200',
    link: theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900',
    button: theme === 'dark' ? 'bg-gray-200 text-black hover:bg-white' : 'bg-gray-900 text-white hover:bg-gray-800',
    themeToggle: theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-200 hover:bg-gray-300 text-gray-700',
    mobileMenu: theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900',
    text: theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
    sectionBg: theme === 'dark' ? 'bg-gradient-to-b from-black via-purple-950/10 to-black' : 'bg-gradient-to-b from-gray-50 via-purple-50 to-gray-50',
    cardBg: theme === 'dark' ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/10' : 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200',
    valueBg: theme === 'dark' ? 'bg-gradient-to-br from-purple-900/10 to-transparent border-purple-500/10 hover:border-purple-500/30' : 'bg-gradient-to-br from-purple-50 to-transparent border-purple-200 hover:border-purple-400',
  }), [theme]);

  return (
    <MainLayout
      theme={theme}
      themeClasses={themeClasses}
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
      toggleTheme={toggleTheme}
      smoothScrollTo={smoothScrollTo}
      heroTitleRef={heroTitleRef}
      heroSubtitleRef={heroSubtitleRef}
      statsRef={statsRef}
      servicesRef={servicesRef}
    />
  );
}
