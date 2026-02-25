import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContent } from '../context/ContentContext'
import { openWhatsAppChat } from '../services/contactService'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { content } = useContent()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const section = document.querySelector(sectionId)
    if (section) {
      const headerHeight = 80
      const targetPosition = section.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      setMobileMenuOpen(false)
    }
  }

  const openWhatsApp = () => {
    openWhatsAppChat(
      content.whatsapp,
      'Hola, me interesa conocer más sobre Residencias Kiwy'
    )
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-primary/20 transition-colors ${
        scrolled ? 'bg-background-dark/95 shadow-lg' : 'bg-background-dark/80'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-10 bg-primary/10 border border-primary/40 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6">
            <span className="material-symbols-outlined text-primary text-2xl transition-transform duration-300 group-hover:scale-110">favorite</span>
          </div>
          <h1 className="text-xl md:text-2xl font-800 tracking-tight group-hover:text-slate-50 transition-colors">
            Residencias <span className="text-primary">Kiwy</span>
          </h1>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#vibe"
            onClick={(e) => scrollToSection(e, '#vibe')}
            className="text-sm font-semibold tracking-wide hover:text-primary transition-all duration-300 link-underline"
          >
            Galería
          </a>
          <a 
            href="#rooms"
            onClick={(e) => scrollToSection(e, '#rooms')}
            className="text-sm font-semibold tracking-wide hover:text-primary transition-all duration-300 link-underline"
          >
            Habitaciones
          </a>
          <a 
            href="#location" 
            onClick={(e) => scrollToSection(e, '#location')}
            className="text-sm font-semibold tracking-wide hover:text-primary transition-all duration-300 link-underline"
          >
            Ubicación
          </a>
          <a 
            href="#offers" 
            onClick={(e) => scrollToSection(e, '#offers')}
            className="text-sm font-semibold tracking-wide hover:text-primary transition-all duration-300 link-underline"
          >
            Ofertas
          </a>
          <button 
            onClick={openWhatsApp}
            className="group/wa bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-neon-fuchsia text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300 active:scale-95 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/wa:animate-wiggle">chat</span>
            WHATSAPP
          </button>
          <Link 
            to="/admin"
            className="text-xs font-semibold tracking-wide hover:text-primary transition-all duration-300 opacity-70 hover:opacity-100 link-underline"
          >
            Admin
          </Link>
        </div>

        <button 
          className="md:hidden text-primary p-2 rounded-lg hover:bg-primary/10 active:scale-95 transition-all duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-20 right-0 w-64 h-screen bg-background-dark/95 backdrop-blur-md border-l border-primary/20 z-50 md:hidden ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="flex flex-col p-6 gap-6">
          <a 
            href="#vibe" 
            onClick={(e) => scrollToSection(e, '#vibe')}
            className="text-sm font-semibold tracking-wide hover:text-primary hover:translate-x-1 transition-all duration-300"
          >
            Galería
          </a>
          <a 
            href="#rooms" 
            onClick={(e) => scrollToSection(e, '#rooms')}
            className="text-sm font-semibold tracking-wide hover:text-primary hover:translate-x-1 transition-all duration-300"
          >
            Habitaciones
          </a>
          <a 
            href="#location" 
            onClick={(e) => scrollToSection(e, '#location')}
            className="text-sm font-semibold tracking-wide hover:text-primary hover:translate-x-1 transition-all duration-300"
          >
            Ubicación
          </a>
          <a 
            href="#offers" 
            onClick={(e) => scrollToSection(e, '#offers')}
            className="text-sm font-semibold tracking-wide hover:text-primary hover:translate-x-1 transition-all duration-300"
          >
            Ofertas
          </a>
          <button 
            onClick={openWhatsApp}
            className="bg-primary hover:bg-primary/90 hover:scale-[1.02] hover:shadow-neon-fuchsia text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300 active:scale-95 flex items-center gap-2 justify-center"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            WHATSAPP
          </button>
          <Link 
            to="/admin"
            className="text-xs font-bold uppercase tracking-widest hover:text-secondary transition-all duration-300 opacity-60 hover:opacity-100 text-center hover:translate-x-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            Admin
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

