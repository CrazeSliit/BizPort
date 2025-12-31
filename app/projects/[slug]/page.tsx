'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

// Project data with images
const projectData: Record<string, {
  title: string;
  category: string;
  description: string;
  images: string[];
  github: string;
}> = {
  'metro-bus': {
    title: 'Metro Bus System',
    category: 'Transportation • TypeScript',
    description: 'Real-time bus tracking system with route optimization and passenger notifications',
    images: [
      'https://via.placeholder.com/1200x800/6366f1/ffffff?text=Metro+Bus+Dashboard',
      'https://via.placeholder.com/1200x800/8b5cf6/ffffff?text=Live+Tracking+Map',
      'https://via.placeholder.com/1200x800/a855f7/ffffff?text=Route+Management',
      'https://via.placeholder.com/1200x800/c084fc/ffffff?text=Mobile+App+View',
    ],
    github: 'https://github.com/UKRUSH/metro_bus'
  },
  'plumbx': {
    title: 'PlumbX Service Platform',
    category: 'Home Services • JavaScript',
    description: 'On-demand plumbing service platform with booking and payment integration',
    images: [
      'https://via.placeholder.com/1200x800/3b82f6/ffffff?text=PlumbX+Homepage',
      'https://via.placeholder.com/1200x800/2563eb/ffffff?text=Booking+System',
      'https://via.placeholder.com/1200x800/1d4ed8/ffffff?text=Service+Providers',
      'https://via.placeholder.com/1200x800/1e40af/ffffff?text=Customer+Reviews',
    ],
    github: 'https://github.com/UKRUSH/PlumbX-web'
  },
  'techzone': {
    title: 'TechZone E-commerce',
    category: 'E-commerce • JavaScript',
    description: 'Full-featured e-commerce platform with inventory management and analytics',
    images: [
      'https://via.placeholder.com/1200x800/10b981/ffffff?text=TechZone+Store',
      'https://via.placeholder.com/1200x800/059669/ffffff?text=Product+Catalog',
      'https://via.placeholder.com/1200x800/047857/ffffff?text=Shopping+Cart',
      'https://via.placeholder.com/1200x800/065f46/ffffff?text=Admin+Dashboard',
    ],
    github: 'https://github.com/UKRUSH/techzone'
  },
  'tour-guide': {
    title: 'Online Tour Guide Platform',
    category: 'Travel & Tourism • CSS',
    description: 'Interactive tour guide platform with booking and itinerary management',
    images: [
      'https://via.placeholder.com/1200x800/f97316/ffffff?text=Tour+Packages',
      'https://via.placeholder.com/1200x800/ea580c/ffffff?text=Booking+Interface',
      'https://via.placeholder.com/1200x800/c2410c/ffffff?text=Guide+Profiles',
      'https://via.placeholder.com/1200x800/9a3412/ffffff?text=Itinerary+Planner',
    ],
    github: 'https://github.com/UKRUSH/Online-tour-guide'
  },
  'app-store': {
    title: 'Online App Store',
    category: 'Marketplace • TypeScript',
    description: 'Custom app marketplace with download management and user reviews',
    images: [
      'https://via.placeholder.com/1200x800/06b6d4/ffffff?text=App+Store+Home',
      'https://via.placeholder.com/1200x800/0891b2/ffffff?text=App+Catalog',
      'https://via.placeholder.com/1200x800/0e7490/ffffff?text=App+Details',
      'https://via.placeholder.com/1200x800/155e75/ffffff?text=Developer+Dashboard',
    ],
    github: 'https://github.com/UKRUSH/Online-App-Store'
  },
  'rare-beauty': {
    title: 'Rare Beauty Platform',
    category: 'Beauty & Cosmetics • Hack',
    description: 'Modern e-commerce platform with virtual try-on and personalized recommendations',
    images: [
      'https://via.placeholder.com/1200x800/ec4899/ffffff?text=Beauty+Store',
      'https://via.placeholder.com/1200x800/db2777/ffffff?text=Product+Showcase',
      'https://via.placeholder.com/1200x800/be185d/ffffff?text=Virtual+Try-On',
      'https://via.placeholder.com/1200x800/9f1239/ffffff?text=Beauty+Tips',
    ],
    github: 'https://github.com/UKRUSH/Rare-Beauty'
  },
  'hospital-management': {
    title: 'Hospital Management System',
    category: 'Healthcare • TypeScript',
    description: 'Comprehensive hospital management system with patient records, appointments, and billing',
    images: [
      'https://via.placeholder.com/1200x800/ef4444/ffffff?text=Hospital+Dashboard',
      'https://via.placeholder.com/1200x800/dc2626/ffffff?text=Patient+Records',
      'https://via.placeholder.com/1200x800/b91c1c/ffffff?text=Appointment+Scheduler',
      'https://via.placeholder.com/1200x800/991b1b/ffffff?text=Billing+System',
    ],
    github: 'https://github.com/CrazeSliit/hospital-management-system'
  },
  'lms-university': {
    title: 'LMS - LMC University',
    category: 'Education • TypeScript',
    description: 'Complete Learning Management System with course delivery and student tracking',
    images: [
      'https://via.placeholder.com/1200x800/6366f1/ffffff?text=LMS+Dashboard',
      'https://via.placeholder.com/1200x800/4f46e5/ffffff?text=Course+Management',
      'https://via.placeholder.com/1200x800/4338ca/ffffff?text=Student+Portal',
      'https://via.placeholder.com/1200x800/3730a3/ffffff?text=Virtual+Classroom',
    ],
    github: 'https://github.com/CrazeSliit/lms--LMC-University.'
  },
  'primedesk-bpo': {
    title: 'PrimeDesk Solutions BPO',
    category: 'BPO Services • TypeScript',
    description: 'Integrated BPO management system with client portal and workflow automation',
    images: [
      'https://via.placeholder.com/1200x800/14b8a6/ffffff?text=BPO+Dashboard',
      'https://via.placeholder.com/1200x800/0d9488/ffffff?text=Client+Management',
      'https://via.placeholder.com/1200x800/0f766e/ffffff?text=Task+Tracking',
      'https://via.placeholder.com/1200x800/115e59/ffffff?text=Analytics+Reports',
    ],
    github: 'https://github.com/CrazeSliit/PrimeDesk-Solutions-BPO'
  },
  'emotion-recognition': {
    title: 'Face & Emotion Recognition System',
    category: 'AI/ML • Python',
    description: 'AI-powered facial recognition with real-time emotion detection using ML models',
    images: [
      'https://via.placeholder.com/1200x800/eab308/ffffff?text=AI+Interface',
      'https://via.placeholder.com/1200x800/ca8a04/ffffff?text=Face+Detection',
      'https://via.placeholder.com/1200x800/a16207/ffffff?text=Emotion+Analysis',
      'https://via.placeholder.com/1200x800/854d0e/ffffff?text=Analytics+Dashboard',
    ],
    github: 'https://github.com/CrazeSliit/Face-and-Emotion-Recognize-System'
  },
  'expenses-management': {
    title: 'Expenses Management System',
    category: 'Finance • Kotlin (Android)',
    description: 'Native Android app for expense tracking with budget management and reports',
    images: [
      'https://via.placeholder.com/1200x800/10b981/ffffff?text=Expense+Tracker',
      'https://via.placeholder.com/1200x800/059669/ffffff?text=Budget+Planning',
      'https://via.placeholder.com/1200x800/047857/ffffff?text=Visual+Reports',
      'https://via.placeholder.com/1200x800/065f46/ffffff?text=Mobile+Interface',
    ],
    github: 'https://github.com/CrazeSliit/Expenses-Management-System--Android-Kotlin'
  },
  'thysia-marketplace': {
    title: 'Thysia - Buy & Sell Platform',
    category: 'Marketplace • TypeScript',
    description: 'Online marketplace platform with user verification and secure transactions',
    images: [
      'https://via.placeholder.com/1200x800/8b5cf6/ffffff?text=Marketplace+Home',
      'https://via.placeholder.com/1200x800/7c3aed/ffffff?text=Product+Listings',
      'https://via.placeholder.com/1200x800/6d28d9/ffffff?text=User+Profiles',
      'https://via.placeholder.com/1200x800/5b21b6/ffffff?text=Messaging+System',
    ],
    github: 'https://github.com/CrazeSliit/Thysia---Buy-and-Selling-Website-main'
  },
  'plastic-waste': {
    title: 'Plastic Waste Management',
    category: 'Environmental • JavaScript',
    description: 'Web-based platform for plastic waste tracking, collection scheduling, and recycling analytics',
    images: [
      'https://via.placeholder.com/1200x800/84cc16/ffffff?text=Waste+Management',
      'https://via.placeholder.com/1200x800/65a30d/ffffff?text=Collection+Schedule',
      'https://via.placeholder.com/1200x800/4d7c0f/ffffff?text=Recycling+Centers',
      'https://via.placeholder.com/1200x800/3f6212/ffffff?text=Impact+Tracking',
    ],
    github: 'https://github.com/CrazeSliit/plastic-waste-webapp-nextjs'
  },
  'employee-management': {
    title: 'Employee Management System',
    category: 'HR Management • JavaScript',
    description: 'Comprehensive HR management system with payroll, attendance, and performance tracking',
    images: [
      'https://via.placeholder.com/1200x800/0ea5e9/ffffff?text=HR+Dashboard',
      'https://via.placeholder.com/1200x800/0284c7/ffffff?text=Employee+Profiles',
      'https://via.placeholder.com/1200x800/0369a1/ffffff?text=Attendance+System',
      'https://via.placeholder.com/1200x800/075985/ffffff?text=Payroll+Processing',
    ],
    github: 'https://github.com/CrazeSliit/Employee-Management-System'
  },
  'gallery-gavel': {
    title: 'GalleryGavel - Art Auction Platform',
    category: 'Art & Auction • PHP',
    description: 'Online art gallery and auction platform with real-time bidding and artwork showcase',
    images: [
      'https://via.placeholder.com/1200x800/f59e0b/ffffff?text=Art+Gallery',
      'https://via.placeholder.com/1200x800/d97706/ffffff?text=Auction+Bidding',
      'https://via.placeholder.com/1200x800/b45309/ffffff?text=Artist+Portfolios',
      'https://via.placeholder.com/1200x800/92400e/ffffff?text=Auction+History',
    ],
    github: 'https://github.com/CrazeSliit/GalleryGavel'
  },
};

export default function ProjectImagesPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push('/#projects')}
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => router.push('/')}
              className="text-2xl font-bold tracking-wider"
            >
              BIZ<span className="text-purple-500">master</span>
            </button>
            <button
              onClick={() => router.push('/#projects')}
              className="px-6 py-2.5 bg-gray-200 text-black text-sm font-medium rounded-full hover:bg-white transition-colors"
            >
              ← Back to Projects
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Project Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-4">
              <span className="text-purple-400 text-sm font-medium tracking-wide">{project.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              {project.description}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Main Image Display */}
          <div className="mb-8 rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-transparent">
            <img
              src={project.images[selectedImage]}
              alt={`${project.title} - Image ${selectedImage + 1}`}
              className="w-full h-auto"
            />
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                  selectedImage === index
                    ? 'border-purple-500 shadow-lg shadow-purple-500/50'
                    : 'border-purple-500/20 hover:border-purple-500/50'
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} - Thumbnail ${index + 1}`}
                  className="w-full h-auto"
                />
              </button>
            ))}
          </div>

          {/* Project Note */}
          <div className="mt-12 p-8 rounded-2xl bg-purple-900/20 border border-purple-500/30 text-center">
            <p className="text-gray-400 italic">
              📸 Note: These are placeholder images. Replace them with actual project screenshots for the best presentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
