'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect, useCallback, useMemo } from 'react';

// Dynamically import SplineViewer with no SSR for faster initial load
const SplineViewer = dynamic(() => import('./components/SplineViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-pulse text-purple-400">Loading 3D...</div>
    </div>
  ),
});

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Set dark as default and save it
      localStorage.setItem('theme', 'dark');
    }
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
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses.main}`}>
      {/* Navigation */}
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
              <a href="#contact" onClick={(e) => smoothScrollTo(e, '#contact')} className={`transition-colors text-sm font-medium tracking-wide ${themeClasses.link}`}>
                CONTACT
              </a>
            </div>

            {/* Theme Toggle & CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              {/* Theme Toggle Button */}
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

              <button className={`px-6 py-2.5 text-sm font-medium rounded-full transition-colors ${themeClasses.button}`}>
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
              <button className={`transition-colors ${themeClasses.mobileMenu}`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-0 overflow-hidden">
        <div className="max-w-[2020px] mx-auto px-6 lg:px-35 py-0 -mt-29">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
          <div className="max-w-4xl px-6 lg:px-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-8">
              <span className="text-purple-400 text-sm font-medium tracking-wide">INTRODUCING </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8">
              BUSINESS
              <br />
              DEVELOPMENT
              <br />
              PARTNER
            </h1>

            {/* Subheading */}
            <p className={`text-lg md:text-xl max-w-2xl mb-12 leading-relaxed ${themeClasses.text}`}>
              Transforming businesses into industry leaders through integrated digital solutions, 
              systematic execution, and scalable technology infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500/10 transition-colors text-sm font-medium tracking-wide">
                View Portfolio →
              </button>
              <button className={`px-8 py-4 rounded-full transition-colors text-sm font-medium tracking-wide ${themeClasses.button}`}>
                Schedule Consultation →
              </button>
            </div>
          </div>

          {/* Spline 3D Viewer - Right Side */}
          <div className="hidden lg:flex items-center justify-end relative h-[1200px] w-full -mr-[160px]">
            <SplineViewer url="https://prod.spline.design/k7M5quOXzDN948AN/scene.splinecode" />
          </div>
          </div>
        </div>

        {/* Purple gradient overlay effects */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-900/30 via-purple-800/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      </main>

      {/* Company Overview Section */}
      <section id="company" className={`relative py-24 transition-colors duration-300 ${themeClasses.sectionBg}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6">
              <span className="text-purple-400 text-sm font-medium tracking-wide">WHO WE ARE</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Company <span className="text-purple-500">Overview</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              BizMaster is a strategic business development partner dedicated to elevating companies 
              through comprehensive digital transformation and operational excellence.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className={`text-center p-6 rounded-2xl border transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/10' : 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200'
            }`}>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">10+</div>
              <div className={`text-sm tracking-wide ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Years Experience</div>
            </div>
            <div className={`text-center p-6 rounded-2xl border transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/10' : 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200'
            }`}>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className={`text-sm tracking-wide ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Projects Delivered</div>
            </div>
            <div className={`text-center p-6 rounded-2xl border transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/10' : 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200'
            }`}>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">200+</div>
              <div className={`text-sm tracking-wide ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Happy Clients</div>
            </div>
            <div className={`text-center p-6 rounded-2xl border transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-500/10' : 'bg-gradient-to-br from-purple-100 to-purple-50 border-purple-200'
            }`}>
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">98%</div>
              <div className={`text-sm tracking-wide ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Success Rate</div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className={`p-8 rounded-2xl border transition-all duration-300 ${
              theme === 'dark' ? 'bg-gradient-to-br from-purple-900/10 to-transparent border-purple-500/10 hover:border-purple-500/30' : 'bg-gradient-to-br from-purple-50 to-transparent border-purple-200 hover:border-purple-400'
            }`}>
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
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
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
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
              <h3 className="text-xl font-bold mb-4">Our Approach</h3>
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

      {/* Services Section */}
      <section id="services" className={`relative py-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6">
              <span className="text-purple-400 text-sm font-medium tracking-wide">WHAT WE OFFER</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Our <span className="text-purple-500">Services</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Comprehensive solutions designed to transform your business from concept to market leader
            </p>
          </div>

          {/* Service Portfolio */}
          <div className="mb-32">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Service <span className="text-purple-500">Portfolio</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Digital Strategy */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-900/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Digital Strategy & Consulting</h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Strategic planning and roadmap development to align technology with business objectives
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Business Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Market Research
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Digital Transformation
                  </li>
                </ul>
              </div>

              {/* Web Development */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-900/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Web & App Development</h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Custom web and mobile applications built with modern frameworks and best practices
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Progressive Web Apps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Mobile Applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    E-commerce Solutions
                  </li>
                </ul>
              </div>

              {/* Cloud Infrastructure */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-900/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Cloud Infrastructure</h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Scalable cloud solutions with automated deployment and monitoring systems
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    AWS/Azure/GCP Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    DevOps & CI/CD
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Infrastructure Security
                  </li>
                </ul>
              </div>

              {/* UI/UX Design */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-900/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">UI/UX Design</h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  User-centric design solutions that enhance engagement and drive conversions
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    User Research
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Wireframing & Prototyping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Design Systems
                  </li>
                </ul>
              </div>

              {/* Digital Marketing */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-900/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Digital Marketing</h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Data-driven marketing strategies to increase visibility and generate leads
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    SEO & Content Strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Social Media Marketing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Performance Analytics
                  </li>
                </ul>
              </div>

              {/* Business Automation */}
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-900/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4">Business Automation</h4>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Streamline operations with intelligent automation and workflow optimization
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    Process Automation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    CRM Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    API Development
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Execution Model */}
          <div className="mb-32">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Our <span className="text-purple-500">Execution Model</span>
            </h3>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              A proven systematic approach to deliver projects on time and exceed expectations
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {/* Phase 1 */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-visible">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-xl font-bold">
                  01
                </div>
                <h4 className="text-lg font-bold mb-3 mt-6">Discovery & Planning</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  In-depth analysis of requirements, market research, and strategic roadmap development
                </p>
              </div>

              {/* Phase 2 */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-xl font-bold">
                  02
                </div>
                <h4 className="text-lg font-bold mb-3 mt-6">Design & Architecture</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Creating user-centric designs and robust technical architecture for scalability
                </p>
              </div>

              {/* Phase 3 */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-xl font-bold">
                  03
                </div>
                <h4 className="text-lg font-bold mb-3 mt-6">Development & Testing</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Agile development with continuous testing and quality assurance at every stage
                </p>
              </div>

              {/* Phase 4 */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-xl font-bold">
                  04
                </div>
                <h4 className="text-lg font-bold mb-3 mt-6">Launch & Support</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Smooth deployment with ongoing maintenance, monitoring, and feature updates
                </p>
              </div>
            </div>
          </div>

          {/* Feature Expansion */}
          <div className="mb-32">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Feature <span className="text-purple-500">Expansion</span>
            </h3>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              Continuous innovation and feature enhancement to keep your business ahead of the competition
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* MVP Development */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10">
                <div className="text-5xl font-bold text-purple-500 mb-4">MVP</div>
                <h4 className="text-xl font-bold mb-4">Minimum Viable Product</h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Launch quickly with core features to validate your business model and gather user feedback
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Core functionality
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Fast time-to-market
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    User validation
                  </li>
                </ul>
              </div>

              {/* Growth Phase */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
                <div className="text-5xl font-bold text-purple-500 mb-4">V2</div>
                <h4 className="text-xl font-bold mb-4">Growth & Scaling</h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Add advanced features based on user data and scale infrastructure for growing demand
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Enhanced features
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Performance optimization
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Analytics integration
                  </li>
                </ul>
              </div>

              {/* Enterprise */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
                <div className="text-5xl font-bold text-purple-500 mb-4">V3+</div>
                <h4 className="text-xl font-bold mb-4">Enterprise & Innovation</h4>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Advanced capabilities, AI integration, and cutting-edge features for market leadership
                </p>
                <ul className="space-y-3 text-sm text-gray-500">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    AI & Machine Learning
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Advanced automation
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Custom integrations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Technology <span className="text-purple-500">Stack</span>
            </h3>
            <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions
            </p>
            
            {/* Tech Categories */}
            <div className="space-y-16">
              {/* Web Development */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-transparent border border-purple-500/20">
                <h4 className="text-2xl font-bold mb-8 text-purple-400 flex items-center gap-3">
                  <span className="text-4xl">🌐</span>
                  Web Development Main Technologies
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">⚛️</div>
                    <div className="text-base font-semibold text-white">React.js</div>
                    <div className="text-xs text-gray-400 mt-2">Frontend Library</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">▲</div>
                    <div className="text-base font-semibold text-white">Next.js</div>
                    <div className="text-xs text-gray-400 mt-2">React Framework</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">💚</div>
                    <div className="text-base font-semibold text-white">Vue.js</div>
                    <div className="text-xs text-gray-400 mt-2">Progressive Framework</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🅰️</div>
                    <div className="text-base font-semibold text-white">Angular</div>
                    <div className="text-xs text-gray-400 mt-2">Platform Framework</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🟢</div>
                    <div className="text-base font-semibold text-white">Node.js</div>
                    <div className="text-xs text-gray-400 mt-2">Runtime Environment</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">📘</div>
                    <div className="text-base font-semibold text-white">TypeScript</div>
                    <div className="text-xs text-gray-400 mt-2">Typed JavaScript</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🎨</div>
                    <div className="text-base font-semibold text-white">Tailwind CSS</div>
                    <div className="text-xs text-gray-400 mt-2">Utility CSS</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🐍</div>
                    <div className="text-base font-semibold text-white">Python/Django</div>
                    <div className="text-xs text-gray-400 mt-2">Backend Framework</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🔷</div>
                    <div className="text-base font-semibold text-white">PostgreSQL</div>
                    <div className="text-xs text-gray-400 mt-2">SQL Database</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🍃</div>
                    <div className="text-base font-semibold text-white">MongoDB</div>
                    <div className="text-xs text-gray-400 mt-2">NoSQL Database</div>
                  </div>
                </div>
              </div>

              {/* Mobile App Development */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-transparent border border-purple-500/20">
                <h4 className="text-2xl font-bold mb-8 text-purple-400 flex items-center gap-3">
                  <span className="text-4xl">📱</span>
                  Mobile App Main Technologies
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <div className="text-base font-semibold text-white">React Native</div>
                    <div className="text-xs text-gray-400 mt-2">Cross-Platform</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">⚡</div>
                    <div className="text-base font-semibold text-white">Flutter</div>
                    <div className="text-xs text-gray-400 mt-2">Dart Framework</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🍎</div>
                    <div className="text-base font-semibold text-white">Swift</div>
                    <div className="text-xs text-gray-400 mt-2">iOS Native</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <div className="text-base font-semibold text-white">Kotlin</div>
                    <div className="text-xs text-gray-400 mt-2">Android Native</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">📲</div>
                    <div className="text-base font-semibold text-white">Expo</div>
                    <div className="text-xs text-gray-400 mt-2">Development Platform</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🔥</div>
                    <div className="text-base font-semibold text-white">Firebase</div>
                    <div className="text-xs text-gray-400 mt-2">Backend Service</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🔔</div>
                    <div className="text-base font-semibold text-white">Push Notifications</div>
                    <div className="text-xs text-gray-400 mt-2">Real-time Alerts</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <div className="text-base font-semibold text-white">Maps SDK</div>
                    <div className="text-xs text-gray-400 mt-2">Location Services</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">💳</div>
                    <div className="text-base font-semibold text-white">Payment Gateway</div>
                    <div className="text-xs text-gray-400 mt-2">Secure Payments</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🔐</div>
                    <div className="text-base font-semibold text-white">OAuth/Biometric</div>
                    <div className="text-xs text-gray-400 mt-2">Authentication</div>
                  </div>
                </div>
              </div>

              {/* POS Systems */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 via-purple-800/10 to-transparent border border-purple-500/20">
                <h4 className="text-2xl font-bold mb-8 text-purple-400 flex items-center gap-3">
                  <span className="text-4xl">🏪</span>
                  POS Main Technologies
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">💻</div>
                    <div className="text-base font-semibold text-white">Electron.js</div>
                    <div className="text-xs text-gray-400 mt-2">Desktop Apps</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">⚛️</div>
                    <div className="text-base font-semibold text-white">React Native</div>
                    <div className="text-xs text-gray-400 mt-2">Mobile POS</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">💳</div>
                    <div className="text-base font-semibold text-white">Stripe Terminal</div>
                    <div className="text-xs text-gray-400 mt-2">Card Processing</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🏪</div>
                    <div className="text-base font-semibold text-white">Square API</div>
                    <div className="text-xs text-gray-400 mt-2">Payment Solutions</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🖨️</div>
                    <div className="text-base font-semibold text-white">Thermal Printer</div>
                    <div className="text-xs text-gray-400 mt-2">Receipt Printing</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <div className="text-base font-semibold text-white">Inventory Mgmt</div>
                    <div className="text-xs text-gray-400 mt-2">Stock Control</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <div className="text-base font-semibold text-white">Barcode Scanner</div>
                    <div className="text-xs text-gray-400 mt-2">Product Scanning</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">☁️</div>
                    <div className="text-base font-semibold text-white">Cloud Sync</div>
                    <div className="text-xs text-gray-400 mt-2">Data Backup</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">📈</div>
                    <div className="text-base font-semibold text-white">Sales Analytics</div>
                    <div className="text-xs text-gray-400 mt-2">Business Insights</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 transition-colors duration-200 text-center">
                    <div className="text-6xl mb-4">🔒</div>
                    <div className="text-base font-semibold text-white">Offline Mode</div>
                    <div className="text-xs text-gray-400 mt-2">No Internet Needed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradients */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </section>

      {/* Projects / Case Studies Section */}
      <section id="projects" className={`relative py-24 transition-colors duration-300 overflow-visible ${
        theme === 'dark' ? 'bg-gradient-to-b from-black via-purple-950/10 to-black' : 'bg-gradient-to-b from-gray-50 via-purple-50 to-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 overflow-visible">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6">
              <span className="text-purple-400 text-sm font-medium tracking-wide">OUR WORK</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Case Studies & <span className="text-purple-500">Sample Projects</span>
            </h2>
            <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Real-world solutions that drive business growth and digital transformation
            </p>
            <p className="text-purple-400 text-sm mt-4 italic">
              * Sample Concept Projects - Demonstrating our capabilities and approach
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 pt-2">
            {/* Project 1: Metro Bus */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-purple-600/20 to-purple-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">🚌</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/UKRUSH/metro_bus" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full mb-4">
                  Transportation • TypeScript
                </div>
                <h3 className="text-2xl font-bold mb-3">Metro Bus System</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Public Transportation & Logistics</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Inefficient bus tracking and passenger information system</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Real-time bus tracking system with route optimization and passenger notifications</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Live GPS tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Route scheduling & management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Passenger mobile app</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Admin dashboard analytics</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>40% reduction in wait times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Enhanced user experience</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/UKRUSH/metro_bus" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/metro-bus" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: PlumbX */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-blue-600/20 to-blue-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">🔧</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/UKRUSH/PlumbX-web" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded-full mb-4">
                  Home Services • JavaScript
                </div>
                <h3 className="text-2xl font-bold mb-3">PlumbX Service Platform</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Home Services & Plumbing</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Difficulty connecting customers with reliable plumbers and managing bookings</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">On-demand plumbing service platform with booking and payment integration</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Real-time booking system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Service provider profiles & ratings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Integrated payment gateway</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Customer review system</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>50% faster booking process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Increased customer satisfaction</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/UKRUSH/PlumbX-web" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/plumbx" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: TechZone */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-green-600/20 to-green-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">💻</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/UKRUSH/techzone" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full mb-4">
                  E-commerce • JavaScript
                </div>
                <h3 className="text-2xl font-bold mb-3">TechZone E-commerce</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Technology Retail & E-commerce</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Need for modern online presence to compete with major retailers</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Full-featured e-commerce platform with inventory management and analytics</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Product catalog with filters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Shopping cart & checkout</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Order tracking system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Admin inventory dashboard</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Online sales growth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Improved inventory management</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/UKRUSH/techzone" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/techzone" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4: Online Tour Guide */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-orange-600/20 to-orange-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">🗺️</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/UKRUSH/Online-tour-guide" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-semibold rounded-full mb-4">
                  Travel & Tourism • CSS
                </div>
                <h3 className="text-2xl font-bold mb-3">Online Tour Guide Platform</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Travel, Tourism & Hospitality</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Lack of digital platform for tour bookings and guide information</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Interactive tour guide platform with booking and itinerary management</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Tour packages showcase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Online booking system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Guide profiles & ratings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Itinerary customization</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Increased online bookings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Better customer engagement</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/UKRUSH/Online-tour-guide" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/tour-guide" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 5: Online App Store */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-cyan-600/20 to-cyan-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">📱</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/UKRUSH/Online-App-Store" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full mb-4">
                  Marketplace • TypeScript
                </div>
                <h3 className="text-2xl font-bold mb-3">Online App Store</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Digital Products & Software Distribution</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Need for centralized platform to distribute and manage mobile applications</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Custom app marketplace with download management and user reviews</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>App catalog & search</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Download management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>User ratings & reviews</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Developer dashboard</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Streamlined app distribution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Increased developer engagement</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/UKRUSH/Online-App-Store" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/app-store" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 6: Rare Beauty */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-pink-600/20 to-pink-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">💄</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/UKRUSH/Rare-Beauty" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-pink-500/20 text-pink-400 text-xs font-semibold rounded-full mb-4">
                  Beauty & Cosmetics • Hack
                </div>
                <h3 className="text-2xl font-bold mb-3">Rare Beauty Platform</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Beauty, Cosmetics & E-commerce</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Need for engaging online shopping experience for beauty products</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Modern e-commerce platform with virtual try-on and personalized recommendations</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Product showcase gallery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Virtual try-on feature</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Personalized recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Beauty tips & tutorials</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Enhanced customer experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Higher conversion rates</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/UKRUSH/Rare-Beauty" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/rare-beauty" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 7: Hospital Management System */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-red-600/20 to-red-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">🏥</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/CrazeSliit/hospital-management-system" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full mb-4">
                  Healthcare • TypeScript
                </div>
                <h3 className="text-2xl font-bold mb-3">Hospital Management System</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Healthcare & Medical Services</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Manual processes causing inefficiencies in patient care and record management</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Comprehensive hospital management system with patient records, appointments, and billing</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Patient records management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Appointment scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Doctor & staff management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Billing & invoicing system</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>60% faster patient processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Improved data accuracy</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/CrazeSliit/hospital-management-system" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/hospital-management" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 8: LMS University */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-indigo-600/20 to-indigo-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">🎓</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/CrazeSliit/lms--LMC-University." target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-semibold rounded-full mb-4">
                  Education • TypeScript
                </div>
                <h3 className="text-2xl font-bold mb-3">LMS - LMC University</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Education & E-Learning</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Need for digital platform to manage courses, students, and academic resources</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Complete Learning Management System with course delivery and student tracking</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Course management & content delivery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Student enrollment & tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Assignment & grading system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Virtual classroom integration</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Enhanced learning experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Improved academic administration</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/CrazeSliit/lms--LMC-University." target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/lms-university" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 9: PrimeDesk Solutions BPO */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-teal-600/20 to-teal-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">📞</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/CrazeSliit/PrimeDesk-Solutions-BPO" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-semibold rounded-full mb-4">
                  BPO Services • TypeScript
                </div>
                <h3 className="text-2xl font-bold mb-3">PrimeDesk Solutions BPO</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Business Process Outsourcing & Customer Service</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Lack of unified platform for managing BPO operations and client communications</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Integrated BPO management system with client portal and workflow automation</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Client management dashboard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Task & project tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Employee performance analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Automated reporting system</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>35% increase in productivity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Better client satisfaction</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/CrazeSliit/PrimeDesk-Solutions-BPO" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/primedesk-bpo" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 10: Face & Emotion Recognition */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-yellow-600/20 to-yellow-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">🤖</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/CrazeSliit/Face-and-Emotion-Recognize-System" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold rounded-full mb-4">
                  AI/ML • Python
                </div>
                <h3 className="text-2xl font-bold mb-3">Face & Emotion Recognition System</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">AI, Security & Customer Experience</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Need for automated emotion detection for customer sentiment analysis</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">AI-powered facial recognition with real-time emotion detection using ML models</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Real-time face detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Emotion classification (7 emotions)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Machine learning models (CNN)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Analytics dashboard</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>85%+ accuracy in emotion detection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Enhanced customer insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/CrazeSliit/Face-and-Emotion-Recognize-System" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/emotion-recognition" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 11: Expenses Management System */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-emerald-600/20 to-emerald-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">💰</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/CrazeSliit/Expenses-Management-System--Android-Kotlin" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full mb-4">
                  Finance • Kotlin (Android)
                </div>
                <h3 className="text-2xl font-bold mb-3">Expenses Management System</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Personal Finance & Money Management</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Users struggle to track and manage daily expenses effectively</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Native Android app for expense tracking with budget management and reports</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Expense tracking & categorization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Budget planning & alerts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Visual reports & charts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Recurring expenses management</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Better financial awareness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>20% reduction in overspending</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/CrazeSliit/Expenses-Management-System--Android-Kotlin" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/expenses-management" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 12: Thysia - Buy and Selling */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-violet-600/20 to-violet-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">🛒</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/CrazeSliit/Thysia---Buy-and-Selling-Website-main" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-violet-500/20 text-violet-400 text-xs font-semibold rounded-full mb-4">
                  Marketplace • TypeScript
                </div>
                <h3 className="text-2xl font-bold mb-3">Thysia - Buy & Sell Platform</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Classifieds & Online Marketplace</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Need for secure peer-to-peer marketplace for buying and selling goods</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Online marketplace platform with user verification and secure transactions</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Product listing & search</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>User profiles & verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Messaging system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Reviews & ratings</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Safe buying/selling environment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Increased user trust</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/CrazeSliit/Thysia---Buy-and-Selling-Website-main" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/thysia-marketplace" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 13: Plastic Waste Management */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-lime-600/20 to-lime-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">♻️</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/CrazeSliit/plastic-waste-webapp-nextjs" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-lime-500/20 text-lime-400 text-xs font-semibold rounded-full mb-4">
                  Environmental • JavaScript
                </div>
                <h3 className="text-2xl font-bold mb-3">Plastic Waste Management</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Environmental Services & Sustainability</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Lack of efficient system to track and manage plastic waste collection and recycling</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Web-based platform for plastic waste tracking, collection scheduling, and recycling analytics</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Waste collection scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Recycling center locator</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Environmental impact tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Community engagement features</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>40% increase in recycling rates</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Better environmental awareness</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/CrazeSliit/plastic-waste-webapp-nextjs" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/plastic-waste" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 14: Employee Management System */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-sky-600/20 to-sky-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">👥</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/CrazeSliit/Employee-Management-System" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-sky-500/20 text-sky-400 text-xs font-semibold rounded-full mb-4">
                  HR Management • JavaScript
                </div>
                <h3 className="text-2xl font-bold mb-3">Employee Management System</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Human Resources & Corporate Management</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Manual HR processes leading to inefficiencies in employee data management</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Comprehensive HR management system with payroll, attendance, and performance tracking</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Employee profiles & records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Attendance & leave management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Payroll processing system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Performance evaluation tools</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>50% reduction in HR admin time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Improved employee satisfaction</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/CrazeSliit/Employee-Management-System" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/employee-management" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>

            {/* Project 15: GalleryGavel */}
            <div className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-amber-600/20 to-amber-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">🎨</div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <a href="https://github.com/CrazeSliit/GalleryGavel" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                    View on GitHub →
                  </a>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full mb-4">
                  Art & Auction • PHP
                </div>
                <h3 className="text-2xl font-bold mb-3">GalleryGavel - Art Auction Platform</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">Art Gallery & Online Auctions</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">Need for digital platform to host art auctions and reach wider audience</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">Online art gallery and auction platform with real-time bidding and artwork showcase</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Art gallery showcase</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Real-time auction bidding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Artist profiles & portfolios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Secure payment integration</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>Global audience reach</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>30% increase in auction sales</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a href="https://github.com/CrazeSliit/GalleryGavel" target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a href="/projects/gallery-gavel" className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Images
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-12 rounded-3xl bg-gradient-to-br from-purple-900/30 to-transparent border border-purple-500/30">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can build a custom solution tailored to your specific needs and industry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                Schedule a Consultation
              </button>
              <a href="https://github.com/UKRUSH" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500/10 transition-colors font-medium">
                View More Projects on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      </section>
    </div>
  );
}





