import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'Tentang' },
    { href: '#skills', label: 'Keahlian' },
    { href: '#projects', label: 'Proyek' },
    { href: '#experience', label: 'Pengalaman' },
    { href: '#services', label: 'Layanan' },
    { href: '#contact', label: 'Kontak' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience','services' ,'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    const targetId = href.replace('#', '')
    setActiveSection(targetId)
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-white/95 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-5 md:px-6">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#home" 
            className="text-2xl font-bold text-slate-800 no-underline"
            onClick={() => handleNavClick('#home')}
          >
            Ilham Arip
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex list-none gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative py-2 text-slate-600 font-medium no-underline transition-colors duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary-500 font-semibold'
                      : 'hover:text-primary-500'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                    document.querySelector(item.href)?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                >
                  {item.label}
                  {activeSection === item.href.replace('#', '') && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden flex flex-col gap-1 cursor-pointer p-2 ${
              isMenuOpen ? 'active' : ''
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`w-6 h-0.5 bg-slate-800 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <ul className="flex flex-col items-center py-8 gap-6 list-none">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`text-lg font-medium no-underline transition-colors duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-primary-500 font-semibold'
                      : 'text-slate-600 hover:text-primary-500'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                    setIsMenuOpen(false)
                    document.querySelector(item.href)?.scrollIntoView({ 
                      behavior: 'smooth' 
                    })
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar