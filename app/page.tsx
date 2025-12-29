import SplineViewer from './components/SplineViewer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/5">
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
              <a href="#company" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
                COMPANY
              </a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
                SERVICES
              </a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
                PROJECTS
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide">
                CONTACT
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="px-6 py-2.5 bg-gray-200 text-black text-sm font-medium rounded-full hover:bg-white transition-colors">
                GET STARTED
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-20 overflow-hidden">
        <div className="max-w-[1520px] mx-auto px-6 lg:px-8 py-8 lg:py-1">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
          <div className="max-w-4xl">
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
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
              Transforming businesses into industry leaders through integrated digital solutions, 
              systematic execution, and scalable technology infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-500/10 transition-colors text-sm font-medium tracking-wide">
                View Portfolio →
              </button>
              <button className="px-8 py-4 bg-gray-200 text-black rounded-full hover:bg-white transition-colors text-sm font-medium tracking-wide">
                Schedule Consultation →
              </button>
            </div>
          </div>

          {/* Spline 3D Viewer - Right Side */}
          <div className="hidden lg:flex items-center justify-end relative h-[900px] w-full -mr-96">
            <SplineViewer url="https://prod.spline.design/k7M5quOXzDN948AN/scene.splinecode" />
          </div>
          </div>
        </div>

        {/* Purple gradient overlay effects */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-purple-900/30 via-purple-800/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      </main>
    </div>
  );
}
