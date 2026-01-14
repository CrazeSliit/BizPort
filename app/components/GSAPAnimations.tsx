'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface GSAPAnimationsProps {
  theme?: 'light' | 'dark';
}

export default function GSAPAnimations({ theme = 'dark' }: GSAPAnimationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxesRef = useRef<HTMLDivElement[]>([]);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Hero text animation
    if (heroTextRef.current) {
      gsap.from(heroTextRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });
    }

    // Stagger animation for boxes
    if (boxesRef.current.length > 0) {
      gsap.from(boxesRef.current, {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: boxesRef.current[0],
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Card animation on scroll
    if (cardsRef.current.length > 0) {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      });
    }

    // Floating animation for boxes
    boxesRef.current.forEach((box, index) => {
      gsap.to(box, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.2,
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`min-h-screen py-20 ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center mb-32">
          <h1
            ref={heroTextRef}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            GSAP <span className="text-purple-500">Animations</span>
          </h1>
          <p
            className={`text-xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Powerful animations with GreenSock Animation Platform
          </p>
        </section>

        {/* Animated Boxes Section */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-12">
            Stagger Animation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                ref={(el) => {
                  if (el) boxesRef.current[item - 1] = el;
                }}
                className={`h-40 rounded-2xl flex items-center justify-center text-2xl font-bold ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-purple-900/40 to-purple-600/40 border border-purple-500/30'
                    : 'bg-gradient-to-br from-purple-200 to-purple-100 border border-purple-300'
                }`}
              >
                Box {item}
              </div>
            ))}
          </div>
        </section>

        {/* Feature Cards with Scroll Animation */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-12">
            Scroll-Triggered Cards
          </h2>
          <div className="space-y-8">
            {[
              {
                title: 'Smooth Animations',
                desc: 'Create buttery smooth 60fps animations with GSAP',
                icon: '⚡',
              },
              {
                title: 'ScrollTrigger',
                desc: 'Trigger animations based on scroll position',
                icon: '📜',
              },
              {
                title: 'Timeline Control',
                desc: 'Sequence multiple animations with precise control',
                icon: '⏱️',
              },
              {
                title: 'Plugin Ecosystem',
                desc: 'Extend functionality with powerful plugins',
                icon: '🧩',
              },
            ].map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`p-8 rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20'
                    : 'bg-gradient-to-br from-purple-50 to-transparent border border-purple-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p
                      className={
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }
                    >
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Animated Text Examples */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-12">
            More GSAP Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className={`p-6 rounded-xl text-center ${
                theme === 'dark'
                  ? 'bg-purple-900/20 border border-purple-500/20'
                  : 'bg-purple-100 border border-purple-200'
              }`}
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold mb-2">Precise Timing</h3>
              <p className="text-sm text-gray-400">
                Control animation timing with ease
              </p>
            </div>
            <div
              className={`p-6 rounded-xl text-center ${
                theme === 'dark'
                  ? 'bg-purple-900/20 border border-purple-500/20'
                  : 'bg-purple-100 border border-purple-200'
              }`}
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold mb-2">Any Property</h3>
              <p className="text-sm text-gray-400">
                Animate CSS, SVG, canvas, and more
              </p>
            </div>
            <div
              className={`p-6 rounded-xl text-center ${
                theme === 'dark'
                  ? 'bg-purple-900/20 border border-purple-500/20'
                  : 'bg-purple-100 border border-purple-200'
              }`}
            >
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="font-bold mb-2">Performance</h3>
              <p className="text-sm text-gray-400">
                Optimized for maximum performance
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
