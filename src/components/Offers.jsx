import { useContent } from '../context/ContentContext'
import { openWhatsAppChat } from '../services/contactService'

function Offers() {
  const { content } = useContent()

  const handleReservar = (offer) => {
    openWhatsAppChat(
      content.whatsapp,
      `Hola, me interesa reservar ${offer.title} en Residencias Kiwy`
    )
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-background-dark" id="offers">
      <div className="max-w-4xl mx-auto space-y-8">
        {content.offers.filter(offer => offer.active).map((offer) => (
          <div 
            key={offer.id}
            className="relative bg-black/60 border border-primary/30 rounded-2xl p-8 md:p-10 shadow-md overflow-hidden group"
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="bg-primary/10 p-5 rounded-full border border-primary/40">
                <span className="material-symbols-outlined text-5xl text-primary">cake</span>
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
                  className="bg-primary text-white hover:bg-primary/90 transition-all px-8 py-3 rounded-lg text-sm md:text-base font-semibold shadow-md"
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

