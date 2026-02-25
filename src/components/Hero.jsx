import { useEffect, useState } from 'react'
import { useContent } from '../context/ContentContext'
import { openWhatsAppChat } from '../services/contactService'

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
    openWhatsAppChat(
      content.whatsapp,
      'Hola, me interesa conocer más sobre Residencias Kiwy'
    )
  }

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background-dark">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/40 to-background-dark z-10"></div>
        <img 
          className="w-full h-full object-cover opacity-50" 
          alt="Fachada de Residencias Kiwy de noche" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxnBRBbYd7WbOcsyPlGhgyg_xE5lAG8o2GmCoxBbC3JvtMeK8bRr2CmFIpR3bC8fpEkCYkXYNW-SMzzkcRJJSY6Qha1KT-bB-auUcnT0EmtpljCB8u8tlImuaIMeMFcxzYUWvOhBt2aO04ksDyLLqdVuxngrnVeNVT-_8u5czVuFTzc4SPvWeJ10fIhHjPNEkvkD2lOH_0JOxkRC1IWCitCVlWCHtgFtAPfvgTiW3q2CjngIhECyIuvOdsalIuf1gCpv_saMwmv5M0"
        />
      </div>
      
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6">
        <span className="inline-block bg-primary/10 text-primary border border-primary/30 px-4 py-1 rounded-full text-xs font-semibold tracking-[0.2em] uppercase">
          En el centro de la ciudad
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-800 leading-tight tracking-tight text-slate-50">
          {content.heroTitle} <br/>
          <span className="text-primary neon-text-fuchsia">{content.heroSubtitle}</span> <br/>
          {content.heroDescription}
        </h2>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
          Habitaciones cómodas, atención cercana y ubicación estratégica para que puedas moverte fácil por toda la ciudad.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-2">
          <button 
            onClick={openWhatsApp}
            className="group relative px-8 py-3 bg-primary text-white font-semibold text-sm md:text-base rounded-lg shadow-md transition-all hover:bg-primary/90"
          >
            <span className="flex items-center gap-3">
              <span className="material-symbols-outlined text-xl md:text-2xl">phone_iphone</span>
              Reserva por WhatsApp: {content.whatsapp}
            </span>
          </button>
          <p className="text-slate-400 max-w-xs text-left text-xs md:text-sm font-medium border-l border-primary/30 pl-4">
            Atención 24/7. <br/>Estamos listos para ayudarte con tu reserva.
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

