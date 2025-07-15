import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isGlitching, setIsGlitching] = useState(false)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section detection
  useEffect(() => {
    const sections = ['hero', 'about', 'showcase', 'contact']
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Random glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance every 2 seconds
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200)
      }
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [])

  const navItems = [
    { href: '#hero', label: './home', id: 'hero' },
    { href: '#about', label: './profile', id: 'about' },
    { href: '#showcase', label: './info', id: 'showcase' },
    { href: '#contact', label: './connect', id: 'contact' }
  ]

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-green-400/20 py-3' 
          : 'bg-transparent '
      }`}
    >
      {/* Matrix rain effect on navbar */}
      <div className='absolute inset-0 pointer-events-none opacity-5'>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className='absolute text-green-400 font-mono text-xs animate-pulse'
            style={{
              left: `${i * 6.67}%`,
              top: '10px',
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Neo Logo */}
          <a 
            className="relative group font-mono" 
            href="#hero"
            onClick={(e) => handleNavClick(e, 'hero')}
          >
            <div className="flex items-center gap-3">
              
              
              {/* Name with glitch effect */}
              <span className={`text-2xl lg:text-3xl font-bold text-green-400 transition-all duration-300 group-hover:text-white relative ${
                isGlitching ? 'animate-pulse' : ''
              }`}>
                {isGlitching ? 'N3O.exe' : 'NEO'}
                {isGlitching && (
                  <span className="absolute inset-0 text-red-500 translate-x-px animate-pulse">
                    N3O.exe
                  </span>
                )}
              </span>
            </div>
            
            {/* Terminal cursor */}
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-6 bg-green-400 animate-pulse opacity-60"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-green-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center gap-2">
              {/* Matrix brackets */}
              <span className="text-green-400/40 font-mono text-xl">[</span>
              
              <ul className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <li 
                    key={item.id}
                    className="transform transition-all duration-300"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`relative px-4 py-2 font-mono text-sm transition-all duration-300 group border ${
                        activeSection === item.id
                          ? 'text-black bg-green-400 border-green-400 shadow-lg shadow-green-400/20'
                          : 'text-green-400 hover:text-white hover:bg-green-400/10 border-green-400/30 hover:border-green-400'
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Command execution effect */}
                      {activeSection === item.id && (
                        <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-black animate-pulse"></div>
                      )}
                      
                      {/* Hover scan line */}
                      <div className="absolute inset-0 bg-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute top-0 left-0 w-full h-px bg-green-400/50 transform -translate-y-full group-hover:translate-y-full transition-transform duration-500"></div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              
              <span className="text-green-400/40 font-mono text-xl">]</span>
            </div>
          </nav>

          {/* System Status & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* System Status - Desktop only */}
            <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-green-400/60">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>ONLINE</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden relative w-10 h-10 border border-green-400/30 bg-black hover:bg-green-400/10 transition-all duration-300 group"
              onClick={() => {
                console.log('Mobile menu toggle')
              }}
            >
              <div className="relative flex flex-col items-center justify-center gap-1">
                <span className="block w-4 h-px bg-green-400 transition-all duration-300 group-hover:w-5"></span>
                <span className="block w-4 h-px bg-green-400 transition-all duration-300 group-hover:w-3"></span>
                <span className="block w-4 h-px bg-green-400 transition-all duration-300 group-hover:w-5"></span>
              </div>
              
              {/* Scan effect */}
              <div className="absolute inset-0 border border-green-400/0 group-hover:border-green-400/50 transition-all duration-300"></div>
            </button>
          </div>
        </div>

        {/* Terminal Command Line - When scrolled */}
        

        {/* Matrix particles */}
        <div className="absolute top-4 right-20 w-1 h-1 bg-green-400 animate-bounce opacity-40"></div>
        <div className="absolute bottom-4 left-20 w-1 h-1 bg-green-400 animate-bounce opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-px h-px bg-green-400 animate-ping opacity-30" style={{ animationDelay: '2s' }}></div>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        /* Matrix scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.8);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #00ff00, #008800);
          border-radius: 0;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #00ff00, #00aa00);
        }
        
        /* Custom matrix font smoothing */
        .font-mono {
          font-feature-settings: "liga" 0;
          text-rendering: optimizeLegibility;
        }
      `}</style>
    </header>
  )
}

export default Navbar