import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
    const message = encodeURIComponent('Hola, me interesa conocer más sobre Residencias Kiwy')
    window.open(`https://wa.me/3206425367?text=${message}`, '_blank')
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b border-primary/20 transition-colors ${
        scrolled ? 'bg-background-dark/95' : 'bg-background-dark/80'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-10 bg-primary rounded-lg flex items-center justify-center shadow-neon-fuchsia">
            <span className="material-symbols-outlined text-white text-3xl">favorite</span>
          </div>
          <h1 className="text-2xl font-800 tracking-tighter uppercase italic">
            Residencias <span className="text-secondary">Kiwy</span>
          </h1>
        </Link>
        
        <div className="hidden md:flex items-center gap-10">
          <a 
            href="#vibe" 
            onClick={(e) => scrollToSection(e, '#vibe')}
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            Vibe
          </a>
          <a 
            href="#location" 
            onClick={(e) => scrollToSection(e, '#location')}
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            Ubicación
          </a>
          <a 
            href="#offers" 
            onClick={(e) => scrollToSection(e, '#offers')}
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            Ofertas
          </a>
          <button 
            onClick={openWhatsApp}
            className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full font-bold shadow-neon-fuchsia transition-all active:scale-95 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            WHATSAPP
          </button>
          <Link 
            to="/admin"
            className="text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors opacity-60 hover:opacity-100"
          >
            Admin
          </Link>
        </div>

        <button 
          className="md:hidden text-primary"
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
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            Vibe
          </a>
          <a 
            href="#location" 
            onClick={(e) => scrollToSection(e, '#location')}
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            Ubicación
          </a>
          <a 
            href="#offers" 
            onClick={(e) => scrollToSection(e, '#offers')}
            className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
          >
            Ofertas
          </a>
          <button 
            onClick={openWhatsApp}
            className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-full font-bold shadow-neon-fuchsia transition-all active:scale-95 flex items-center gap-2 justify-center"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            WHATSAPP
          </button>
          <Link 
            to="/admin"
            className="text-xs font-bold uppercase tracking-widest hover:text-secondary transition-colors opacity-60 hover:opacity-100 text-center"
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

