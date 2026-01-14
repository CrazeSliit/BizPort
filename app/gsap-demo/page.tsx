'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Link from 'next/link';

// Register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function GSAPShowcase() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const rotateRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Hero animation on load
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.from('.hero-title', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'back.out(1.7)',
      })
        .from('.hero-subtitle', {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power3.out',
        })
        .from('.hero-button', {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.6,
          ease: 'power2.out',
        });
    }

    // Parallax scrolling effect
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        y: 200,
        ease: 'none',
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }

    // Rotate on scroll
    if (rotateRef.current) {
      gsap.to(rotateRef.current, {
        rotation: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: rotateRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });
    }

    // Scale on scroll
    if (scaleRef.current) {
      gsap.from(scaleRef.current, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: scaleRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Pin section while scrolling
    if (pinRef.current) {
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: 'top top',
        end: '+=500',
        pin: true,
        pinSpacing: true,
      });
    }

    // Counter animation
    if (counterRef.current) {
      const obj = { count: 0 };
      gsap.to(obj, {
        count: 1000,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: counterRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(obj.count).toLocaleString();
          }
        },
      });
    }

    // Text animation with TextPlugin
    if (textRef.current) {
      gsap.from(textRef.current, {
        duration: 2,
        text: '',
        ease: 'none',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const themeClasses = {
    bg: theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900',
    card: theme === 'dark'
      ? 'bg-gradient-to-br from-purple-900/20 to-transparent border-purple-500/20'
      : 'bg-gradient-to-br from-purple-100 to-transparent border-purple-200',
    text: theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-purple-500/20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            BIZ<span className="text-purple-500">master</span>
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <Link
              href="/"
              className="px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-full text-white font-medium transition-colors"
            >
              Back Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center">
          <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6">
            GSAP <span className="text-purple-500">Showcase</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Explore the power of GreenSock Animation Platform with interactive examples
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hero-button px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full font-medium transition-colors">
              Scroll to Explore
            </button>
            <button className="hero-button px-8 py-4 border border-purple-500 hover:bg-purple-500/10 rounded-full font-medium transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-9xl opacity-10">🚀</div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Parallax Scrolling</h2>
          <p className="text-xl text-gray-400">Scroll to see the rocket move</p>
        </div>
      </section>

      {/* Rotate Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">Rotate Animation</h2>
          <div
            ref={rotateRef}
            className="w-40 h-40 mx-auto bg-gradient-to-br from-purple-600 to-purple-400 rounded-3xl flex items-center justify-center text-6xl"
          >
            ⭐
          </div>
          <p className="text-xl text-gray-400 mt-12">Scrolls and rotates smoothly</p>
        </div>
      </section>

      {/* Scale Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">Scale Animation</h2>
          <div
            ref={scaleRef}
            className={`p-12 rounded-3xl border ${themeClasses.card}`}
          >
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-3xl font-bold mb-4">Zoom Effect</h3>
            <p className={`text-lg ${themeClasses.text}`}>
              This card scales up as you scroll into view
            </p>
          </div>
        </div>
      </section>

      {/* Pin Section */}
      <section ref={pinRef} className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Pinned Section</h2>
          <p className="text-xl text-gray-400 mb-8">
            This section stays pinned while you scroll
          </p>
          <div className="text-8xl">📌</div>
        </div>
      </section>

      {/* Counter Animation */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">Counter Animation</h2>
          <h3
            ref={counterRef}
            className="text-7xl md:text-9xl font-bold text-purple-500 mb-6"
          >
            0
          </h3>
          <p className="text-xl text-gray-400">Projects Completed</p>
        </div>
      </section>

      {/* Text Animation */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">Text Animation</h2>
          <p
            ref={textRef}
            className="text-2xl md:text-3xl font-medium leading-relaxed"
          >
            GSAP makes it incredibly simple to create professional animations that work everywhere.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Why Use GSAP?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Blazing Fast',
                desc: 'Optimized for 60fps performance',
              },
              {
                icon: '🎯',
                title: 'Precise Control',
                desc: 'Frame-by-frame animation control',
              },
              {
                icon: '🔧',
                title: 'Plugin System',
                desc: 'Extend with powerful plugins',
              },
              {
                icon: '🌐',
                title: 'Cross-Browser',
                desc: 'Works everywhere, even IE',
              },
              {
                icon: '📦',
                title: 'Lightweight',
                desc: 'Small file size, big impact',
              },
              {
                icon: '💪',
                title: 'Production Ready',
                desc: 'Used by major companies',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border ${themeClasses.card} hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className={themeClasses.text}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            GSAP is now integrated into your project. Start creating amazing animations!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://gsap.com/docs/v3/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full font-medium transition-colors inline-block"
            >
              View GSAP Docs
            </a>
            <Link
              href="/"
              className="px-8 py-4 border border-purple-500 hover:bg-purple-500/10 rounded-full font-medium transition-colors inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 text-center">
        <p className={themeClasses.text}>
          © 2026 BizMaster - Powered by GSAP
        </p>
      </footer>
    </div>
  );
}
