import { useEffect, useState } from 'react'
import { useContent } from '../context/ContentContext'

function Hero() {
  const { content } = useContent()
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToLocation = () => {
    const locationSection = document.querySelector('#location')
    if (locationSection) {
      const headerHeight = 80
      const targetPosition = locationSection.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola, me interesa conocer más sobre Residencias Kiwy')
    window.open(`https://wa.me/${content.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden halftone-pattern">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-background-dark z-10"></div>
        <div className="absolute inset-0 urban-gradient z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000" 
          alt="Blurred neon city lights at night" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxnBRBbYd7WbOcsyPlGhgyg_xE5lAG8o2GmCoxBbC3JvtMeK8bRr2CmFIpR3bC8fpEkCYkXYNW-SMzzkcRJJSY6Qha1KT-bB-auUcnT0EmtpljCB8u8tlImuaIMeMFcxzYUWvOhBt2aO04ksDyLLqdVuxngrnVeNVT-_8u5czVuFTzc4SPvWeJ10fIhHjPNEkvkD2lOH_0JOxkRC1IWCitCVlWCHtgFtAPfvgTiW3q2CjngIhECyIuvOdsalIuf1gCpv_saMwmv5M0"
        />
      </div>
      
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block bg-secondary/20 text-secondary border border-secondary/50 px-4 py-1 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 animate-pulse">
          Centro de la Ciudad
        </span>
        <h2 className="text-5xl md:text-8xl font-800 leading-[0.9] tracking-tighter mb-8 uppercase italic">
          {content.heroTitle} <br/>
          <span className="text-primary neon-text-fuchsia">{content.heroSubtitle}</span> <br/>
          {content.heroDescription}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={openWhatsApp}
            className="group relative px-10 py-5 bg-primary text-white font-900 text-xl rounded-xl shadow-neon-fuchsia transition-all hover:-translate-y-1 hover:rotate-1"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined text-3xl">phone_iphone</span>
              WHATSAPP: {content.whatsapp}
            </span>
          </button>
          <p className="text-slate-400 max-w-[200px] text-left text-sm font-medium border-l border-primary/40 pl-4">
            Disponibilidad 24/7. <br/>Experiencias inolvidables en el barrio centro.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToLocation}
        >
          <span className="material-symbols-outlined text-primary text-4xl">expand_more</span>
        </div>
      )}
    </section>
  )
}

export default Hero

