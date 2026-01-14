'use client';

import React from 'react';

interface ProjectsProps {
  theme: 'light' | 'dark';
}

const projects = [
  {
    id: 1,
    title: "Metro Bus System",
    emoji: "🚌",
    category: "Transportation • TypeScript",
    color: "purple",
    github: "https://github.com/UKRUSH/metro_bus",
    industry: "Public Transportation & Logistics",
    problem: "Inefficient bus tracking and passenger information system",
    solution: "Real-time bus tracking system with route optimization and passenger notifications",
    features: ["Live GPS tracking", "Route scheduling & management", "Passenger mobile app", "Admin dashboard analytics"],
    results: ["40% reduction in wait times", "Enhanced user experience"],
    hasGithub: true
  },
  {
    id: 2,
    title: "PlumbX Service Platform",
    emoji: "🔧",
    category: "Home Services • JavaScript",
    color: "blue",
    github: "https://github.com/UKRUSH/PlumbX-web",
    industry: "Home Services & Plumbing",
    problem: "Difficulty connecting customers with reliable plumbers and managing bookings",
    solution: "On-demand plumbing service platform with booking and payment integration",
    features: ["Real-time booking system", "Service provider profiles & ratings", "Integrated payment gateway", "Customer review system"],
    results: ["50% faster booking process", "Increased customer satisfaction"],
    hasGithub: true
  },
  {
    id: 3,
    title: "TechZone E-commerce",
    emoji: "💻",
    category: "E-commerce • JavaScript",
    color: "green",
    github: "https://github.com/UKRUSH/techzone",
    industry: "Technology Retail & E-commerce",
    problem: "Need for modern online presence to compete with major retailers",
    solution: "Full-featured e-commerce platform with inventory management and analytics",
    features: ["Product catalog with filters", "Shopping cart & checkout", "Order tracking system", "Admin inventory dashboard"],
    results: ["Online sales growth", "Improved inventory management"],
    hasGithub: true
  },
  {
    id: 4,
    title: "Online Tour Guide",
    emoji: "🗺️",
    category: "Travel & Tourism • React",
    color: "orange",
    github: "https://github.com/UKRUSH/Online-tour-guide",
    industry: "Travel & Tourism",
    problem: "Fragmented tour booking and guide information",
    solution: "Comprehensive tour guide platform with booking and itinerary management",
    features: ["Tour listings & booking", "Virtual tour previews", "Guide profiles", "Itinerary builder"],
    results: ["Streamlined booking process", "Enhanced tourist experience"],
    hasGithub: true
  },
  {
    id: 5,
    title: "Online App Store",
    emoji: "📱",
    category: "Marketplace • Next.js",
    color: "indigo",
    github: "https://github.com/UKRUSH/online-app-store",
    industry: "Digital Marketplace",
    problem: "Need for centralized application distribution platform",
    solution: "Modern app store with reviews, ratings, and secure downloads",
    features: ["App listings & categories", "User reviews & ratings", "Secure downloads", "Developer dashboard"],
    results: ["10K+ app downloads", "Active developer community"],
    hasGithub: true
  },
  {
    id: 6,
    title: "Rare Beauty E-commerce",
    emoji: "💄",
    category: "Beauty & Cosmetics • React",
    color: "pink",
    github: "#",
    industry: "Beauty & Cosmetics Retail",
    problem: "Limited online presence for niche beauty products",
    solution: "Specialized e-commerce platform for rare and artisan beauty products",
    features: ["Product showcase", "Virtual try-on", "Subscription boxes", "Beauty blog integration"],
    results: ["Growing customer base", "Premium brand positioning"],
    hasGithub: false
  },
  {
    id: 7,
    title: "Hospital Management System",
    emoji: "🏥",
    category: "Healthcare • TypeScript",
    color: "red",
    github: "https://github.com/CrazeSliit/hospital-management-system",
    industry: "Healthcare & Hospital Management",
    problem: "Complex patient and resource management challenges",
    solution: "Comprehensive HMS with patient records, appointments, and billing",
    features: ["Patient management", "Appointment scheduling", "Electronic health records", "Billing & insurance"],
    results: ["Improved efficiency", "Better patient care"],
    hasGithub: true
  },
  {
    id: 8,
    title: "LMS University",
    emoji: "🎓",
    category: "Education • Next.js",
    color: "blue",
    github: "https://github.com/CrazeSliit/lms--LMC-University.",
    industry: "Education & E-learning",
    problem: "Traditional learning methods limiting student engagement",
    solution: "Modern Learning Management System with interactive features",
    features: ["Course management", "Live classes", "Assignment submission", "Grade tracking"],
    results: ["Enhanced learning experience", "Better student outcomes"],
    hasGithub: true
  },
  {
    id: 9,
    title: "PrimeDesk Solutions BPO",
    emoji: "📞",
    category: "Business Services • React",
    color: "cyan",
    github: "https://github.com/CrazeSliit/PrimeDesk-Solutions-BPO",
    industry: "Business Process Outsourcing",
    problem: "Inefficient customer service operations and tracking",
    solution: "BPO management platform with ticketing and analytics",
    features: ["Ticket management", "Agent dashboard", "Call center integration", "Performance analytics"],
    results: ["Improved response times", "Higher customer satisfaction"],
    hasGithub: true
  },
  {
    id: 10,
    title: "Face & Emotion Recognition",
    emoji: "🤖",
    category: "AI/ML • Python",
    color: "purple",
    github: "https://github.com/CrazeSliit/Face-and-Emotion-Recognize-System",
    industry: "Artificial Intelligence & Computer Vision",
    problem: "Need for real-time emotion analysis in customer interactions",
    solution: "AI-powered face and emotion recognition system",
    features: ["Real-time detection", "Emotion analysis", "Face recognition", "Analytics dashboard"],
    results: ["Accurate emotion detection", "Valuable customer insights"],
    hasGithub: true
  },
  {
    id: 11,
    title: "Expenses Management System",
    emoji: "💰",
    category: "Finance • React",
    color: "green",
    github: "https://github.com/CrazeSliit/Expenses-Management-System--Android-Kotlin",
    industry: "Finance & Accounting",
    problem: "Manual expense tracking causing delays and errors",
    solution: "Automated expense management with receipt scanning and approvals",
    features: ["Receipt scanning", "Expense categorization", "Approval workflows", "Financial reports"],
    results: ["Faster reimbursements", "Reduced errors"],
    hasGithub: true
  },
  {
    id: 12,
    title: "Thysia - Buy and Selling",
    emoji: "🛒",
    category: "Marketplace • Next.js",
    color: "orange",
    github: "https://github.com/CrazeSliit/Thysia---Buy-and-Selling-Website-main",
    industry: "Online Marketplace",
    problem: "Lack of trust and security in peer-to-peer transactions",
    solution: "Secure marketplace platform with escrow and verification",
    features: ["Product listings", "Secure payments", "User verification", "Dispute resolution"],
    results: ["Safe transactions", "Growing user base"],
    hasGithub: true
  },
  {
    id: 13,
    title: "Plastic Waste Management",
    emoji: "♻️",
    category: "Environment • IoT",
    color: "teal",
    github: "https://github.com/CrazeSliit/plastic-waste-webapp-nextjs",
    industry: "Environmental & Waste Management",
    problem: "Inefficient plastic waste collection and recycling",
    solution: "IoT-enabled waste management system with tracking and incentives",
    features: ["Smart bin monitoring", "Collection routing", "Recycling rewards", "Impact tracking"],
    results: ["Increased recycling rates", "Environmental impact"],
    hasGithub: true
  },
  {
    id: 14,
    title: "Employee Management System",
    emoji: "👥",
    category: "HR Management • TypeScript",
    color: "indigo",
    github: "https://github.com/CrazeSliit/Employee-Management-System",
    industry: "Human Resources",
    problem: "Complex employee data and performance management",
    solution: "Comprehensive HRMS with attendance, payroll, and performance tracking",
    features: ["Employee profiles", "Attendance tracking", "Payroll processing", "Performance reviews"],
    results: ["Streamlined HR operations", "Better employee management"],
    hasGithub: true
  },
  {
    id: 15,
    title: "GalleryGavel Art Auction",
    emoji: "🎨",
    category: "Art & Auction • React",
    color: "pink",
    github: "https://github.com/CrazeSliit/GalleryGavel",
    industry: "Art & Collectibles",
    problem: "Limited reach for art auctions and collectors",
    solution: "Online auction platform for art with live bidding",
    features: ["Live auction system", "Bid tracking", "Artist profiles", "Payment integration"],
    results: ["Global reach", "Increased art sales"],
    hasGithub: true
  }
];

export default function Projects({ theme }: ProjectsProps) {
  return (
    <section id="projects" className={`relative py-12 sm:py-16 md:py-20 lg:py-24 transition-colors duration-300 overflow-visible ${
      theme === 'dark' ? 'bg-gradient-to-b from-black via-purple-950/10 to-black' : 'bg-gradient-to-b from-white via-purple-50/50 to-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 overflow-visible">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6">
            <span className="text-purple-400 text-sm font-medium tracking-wide">OUR WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16 pt-2">
          {projects.map((project) => (
            <div key={project.id} className="rounded-3xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 overflow-hidden hover:border-purple-400 hover:-translate-y-1 transition-all duration-200">
              {/* Project Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-purple-600/20 to-purple-900/20 flex items-center justify-center overflow-hidden">
                <div className="text-8xl opacity-50">{project.emoji}</div>
                {project.github !== "#" && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-full font-medium transition-colors">
                      View on GitHub →
                    </a>
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full mb-4">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Client Industry:</p>
                    <p className="text-gray-400">{project.industry}</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Business Problem:</p>
                    <p className="text-gray-400">{project.problem}</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Solution Provided:</p>
                    <p className="text-gray-400">{project.solution}</p>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Key Features:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-purple-400 font-semibold mb-1">Expected Results:</p>
                    <ul className="text-gray-400 space-y-1 ml-4">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-500 mt-1">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-purple-500/20 flex gap-3">
                  <a 
                    href={project.hasGithub ? project.github : "https://github.com/UKRUSH"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-center rounded-lg text-sm font-medium transition-colors"
                  >
                    GitHub
                  </a>
                  <a href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-center rounded-lg text-sm font-medium transition-colors">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
