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
      <section id="company" className="relative py-24 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6">
              <span className="text-purple-400 text-sm font-medium tracking-wide">WHO WE ARE</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Company <span className="text-purple-500">Overview</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              BizMaster is a strategic business development partner dedicated to elevating companies 
              through comprehensive digital transformation and operational excellence.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/10">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-400 text-sm tracking-wide">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/10">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-400 text-sm tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/10">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">200+</div>
              <div className="text-gray-400 text-sm tracking-wide">Happy Clients</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/10">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm tracking-wide">Success Rate</div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To empower businesses with cutting-edge technology solutions and strategic guidance 
                that drive measurable growth and sustainable success.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the leading business development partner recognized globally for transforming 
                companies into industry leaders through innovation and excellence.
              </p>
            </div>

            {/* Approach */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-transparent border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Our Approach</h3>
              <p className="text-gray-400 leading-relaxed">
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
      <section id="services" className="relative py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-6">
              <span className="text-purple-400 text-sm font-medium tracking-wide">WHAT WE OFFER</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Our <span className="text-purple-500">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phase 1 */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20">
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
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
                    <div className="text-base font-semibold text-white">React.js</div>
                    <div className="text-xs text-gray-400 mt-2">Frontend Library</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">▲</div>
                    <div className="text-base font-semibold text-white">Next.js</div>
                    <div className="text-xs text-gray-400 mt-2">React Framework</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💚</div>
                    <div className="text-base font-semibold text-white">Vue.js</div>
                    <div className="text-xs text-gray-400 mt-2">Progressive Framework</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🅰️</div>
                    <div className="text-base font-semibold text-white">Angular</div>
                    <div className="text-xs text-gray-400 mt-2">Platform Framework</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🟢</div>
                    <div className="text-base font-semibold text-white">Node.js</div>
                    <div className="text-xs text-gray-400 mt-2">Runtime Environment</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📘</div>
                    <div className="text-base font-semibold text-white">TypeScript</div>
                    <div className="text-xs text-gray-400 mt-2">Typed JavaScript</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                    <div className="text-base font-semibold text-white">Tailwind CSS</div>
                    <div className="text-xs text-gray-400 mt-2">Utility CSS</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🐍</div>
                    <div className="text-base font-semibold text-white">Python/Django</div>
                    <div className="text-xs text-gray-400 mt-2">Backend Framework</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🔷</div>
                    <div className="text-base font-semibold text-white">PostgreSQL</div>
                    <div className="text-xs text-gray-400 mt-2">SQL Database</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🍃</div>
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
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                    <div className="text-base font-semibold text-white">React Native</div>
                    <div className="text-xs text-gray-400 mt-2">Cross-Platform</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                    <div className="text-base font-semibold text-white">Flutter</div>
                    <div className="text-xs text-gray-400 mt-2">Dart Framework</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🍎</div>
                    <div className="text-base font-semibold text-white">Swift</div>
                    <div className="text-xs text-gray-400 mt-2">iOS Native</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
                    <div className="text-base font-semibold text-white">Kotlin</div>
                    <div className="text-xs text-gray-400 mt-2">Android Native</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📲</div>
                    <div className="text-base font-semibold text-white">Expo</div>
                    <div className="text-xs text-gray-400 mt-2">Development Platform</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🔥</div>
                    <div className="text-base font-semibold text-white">Firebase</div>
                    <div className="text-xs text-gray-400 mt-2">Backend Service</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🔔</div>
                    <div className="text-base font-semibold text-white">Push Notifications</div>
                    <div className="text-xs text-gray-400 mt-2">Real-time Alerts</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🗺️</div>
                    <div className="text-base font-semibold text-white">Maps SDK</div>
                    <div className="text-xs text-gray-400 mt-2">Location Services</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💳</div>
                    <div className="text-base font-semibold text-white">Payment Gateway</div>
                    <div className="text-xs text-gray-400 mt-2">Secure Payments</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🔐</div>
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
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
                    <div className="text-base font-semibold text-white">Electron.js</div>
                    <div className="text-xs text-gray-400 mt-2">Desktop Apps</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⚛️</div>
                    <div className="text-base font-semibold text-white">React Native</div>
                    <div className="text-xs text-gray-400 mt-2">Mobile POS</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💳</div>
                    <div className="text-base font-semibold text-white">Stripe Terminal</div>
                    <div className="text-xs text-gray-400 mt-2">Card Processing</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🏪</div>
                    <div className="text-base font-semibold text-white">Square API</div>
                    <div className="text-xs text-gray-400 mt-2">Payment Solutions</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🖨️</div>
                    <div className="text-base font-semibold text-white">Thermal Printer</div>
                    <div className="text-xs text-gray-400 mt-2">Receipt Printing</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
                    <div className="text-base font-semibold text-white">Inventory Mgmt</div>
                    <div className="text-xs text-gray-400 mt-2">Stock Control</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                    <div className="text-base font-semibold text-white">Barcode Scanner</div>
                    <div className="text-xs text-gray-400 mt-2">Product Scanning</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">☁️</div>
                    <div className="text-base font-semibold text-white">Cloud Sync</div>
                    <div className="text-xs text-gray-400 mt-2">Data Backup</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📈</div>
                    <div className="text-base font-semibold text-white">Sales Analytics</div>
                    <div className="text-xs text-gray-400 mt-2">Business Insights</div>
                  </div>
                  <div className="group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400 hover:bg-purple-900/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
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
    </div>
  );
}
