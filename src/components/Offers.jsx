import { useContent } from '../context/ContentContext'
import { openWhatsAppChat } from '../services/contactService'

function Offers() {
  const { content } = useContent()

  const handleReservar = (offer) => {
    openWhatsAppChat(
      content.whatsapp,
      `Hola, me interesa reservar ${offer.title} en Kiwy`
    )
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-background-dark" id="offers">
      <div className="max-w-4xl mx-auto space-y-8">
        {content.offers.filter(offer => offer.active).map((offer) => (
          <div 
            key={offer.id}
            className="relative bg-black/60 border border-primary/30 rounded-2xl p-8 md:p-10 shadow-md overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-neon-fuchsia"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="bg-primary/10 p-5 rounded-full border border-primary/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 group-hover:animate-pulse-glow">
                <span className="material-symbols-outlined text-5xl text-primary block transition-transform duration-300 group-hover:scale-110">cake</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-800 tracking-tight leading-snug mb-2 text-slate-50">
                  {offer.title} <br/> 
                  <span className="text-primary">{offer.subtitle}</span>
                </h3>
                <p className="text-sm md:text-base text-slate-300 mb-6 font-medium">
                  {offer.description}
                </p>
                <button 
                  onClick={() => handleReservar(offer)}
                  className="bg-primary text-white hover:bg-primary/90 hover:scale-105 hover:shadow-neon-fuchsia transition-all duration-300 px-8 py-3 rounded-lg text-sm md:text-base font-semibold shadow-md active:scale-95"
                >
                  Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Offers

