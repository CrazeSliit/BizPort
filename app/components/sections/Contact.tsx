'use client';

import React from 'react';

interface ContactProps {
  theme: 'light' | 'dark';
}

export default function Contact({ theme }: ContactProps) {
  return (
    <section id="contact" className={`relative py-12 sm:py-16 md:py-20 lg:py-24 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Contact <span className="text-purple-500">Information</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto"></div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Email Card */}
          <div className={`group p-8 rounded-3xl transition-all duration-300 text-center ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-900/20' 
              : 'bg-gradient-to-br from-purple-50 to-white border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-100/50'
          }`}>
            <div className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform ${
              theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
            }`}>
              <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className={`text-sm mb-4 leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Send us an email and we'll respond within 24 hours.
            </p>
            <a href="mailto:contact@bizmastersolutions.com" className="text-purple-500 hover:text-purple-400 font-medium text-sm break-all transition-colors">
              contact@bizmastersolutions.com
            </a>
          </div>

          {/* Call Card */}
          <div className={`group p-8 rounded-3xl transition-all duration-300 text-center ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-900/20' 
              : 'bg-gradient-to-br from-purple-50 to-white border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-100/50'
          }`}>
            <div className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform ${
              theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
            }`}>
              <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Call Us</h3>
            <p className={`text-sm mb-4 leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Speak directly with our business consulting experts.
            </p>
            <a href="tel:+94777960231" className="text-purple-500 hover:text-purple-400 font-medium text-lg transition-colors">
              +94 77 796 0231
            </a>
          </div>

          {/* Visit Card */}
          <div className={`group p-8 rounded-3xl transition-all duration-300 text-center ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-900/20' 
              : 'bg-gradient-to-br from-purple-50 to-white border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-100/50'
          }`}>
            <div className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform ${
              theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
            }`}>
              <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <p className={`text-sm mb-4 leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Schedule an in-person meeting at our office.
            </p>
            <p className="text-purple-500 font-medium text-sm">
              231/A Athurugiriya<br />Road, Malabe
            </p>
          </div>

          {/* LinkedIn Card */}
          <div className={`group p-8 rounded-3xl transition-all duration-300 text-center ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-900/20' 
              : 'bg-gradient-to-br from-purple-50 to-white border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-100/50'
          }`}>
            <div className={`w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform ${
              theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
            }`}>
              <svg className="w-10 h-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4 text-purple-500">LinkedIn</h3>
            <p className={`text-sm mb-4 leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Connect with us on professional social media.
            </p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-block text-purple-500 hover:text-purple-400 font-medium text-sm transition-colors">
              Follow Us on LinkedIn
            </a>
          </div>
        </div>

        {/* Additional Contact Form or Map can be added here */}
        <div className="mt-16 text-center">
          <div className={`inline-block px-8 py-4 rounded-2xl ${
            theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-50'
          }`}>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Business Hours: <span className="text-purple-500 font-semibold">Monday - Friday, 9:00 AM - 6:00 PM</span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
