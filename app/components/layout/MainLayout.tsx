'use client';

import React from 'react';
import Navigation from '../sections/Navigation';
import Hero from '../sections/hero';
import Company from '../sections/company';
import Services from '../sections/Services';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

interface MainLayoutProps {
  theme: 'light' | 'dark';
  themeClasses: {
    main: string;
    nav: string;
    link: string;
    button: string;
    themeToggle: string;
    mobileMenu: string;
    text: string;
    sectionBg: string;
    cardBg: string;
    valueBg: string;
  };
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  toggleTheme: () => void;
  smoothScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  heroTitleRef: React.RefObject<HTMLHeadingElement | null>;
  heroSubtitleRef: React.RefObject<HTMLParagraphElement | null>;
  statsRef: React.MutableRefObject<HTMLDivElement[]>;
  servicesRef: React.MutableRefObject<HTMLDivElement[]>;
}

const SectionDivider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
);

export default function MainLayout({
  theme,
  themeClasses,
  mobileMenuOpen,
  setMobileMenuOpen,
  toggleTheme,
  smoothScrollTo,
  heroTitleRef,
  heroSubtitleRef,
  statsRef,
  servicesRef,
}: MainLayoutProps) {
  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses.main}`}>
      {/* Navigation */}
      <Navigation
        theme={theme}
        themeClasses={{
          nav: themeClasses.nav,
          link: themeClasses.link,
          button: themeClasses.button,
          themeToggle: themeClasses.themeToggle,
          mobileMenu: themeClasses.mobileMenu,
        }}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        toggleTheme={toggleTheme}
        smoothScrollTo={smoothScrollTo}
      />

      {/* Hero Section */}
      <Hero
        theme={theme}
        heroTitleRef={heroTitleRef}
        heroSubtitleRef={heroSubtitleRef}
        smoothScrollTo={smoothScrollTo}
      />
      
      <SectionDivider />

      {/* Company Overview Section */}
      <Company
        theme={theme}
        themeClasses={{
          sectionBg: themeClasses.sectionBg,
          cardBg: themeClasses.cardBg,
          valueBg: themeClasses.valueBg,
        }}
        statsRef={statsRef}
      />

      <SectionDivider />

      {/* Services Section */}
      <Services
        theme={theme}
        themeClasses={{
          text: themeClasses.text,
        }}
        servicesRef={servicesRef}
      />

      <SectionDivider />

      {/* Projects Section */}
      <Projects theme={theme} />

      <SectionDivider />

      {/* Contact Section */}
      <Contact theme={theme} />

      <SectionDivider />

      {/* Footer */}
      <Footer theme={theme} smoothScrollTo={smoothScrollTo} />
    </div>
  );
}
