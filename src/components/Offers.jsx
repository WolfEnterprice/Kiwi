import { useContent } from '../context/ContentContext'

function Offers() {
  const { content } = useContent()

  const handleReservar = (offer) => {
    const message = encodeURIComponent(`Hola, me interesa reservar ${offer.title} en Residencias Kiwy`)
    window.open(`https://wa.me/${content.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-background-dark" id="offers">
      <div className="max-w-4xl mx-auto space-y-8">
        {content.offers.filter(offer => offer.active).map((offer) => (
          <div 
            key={offer.id}
            className="relative bg-black border-4 border-primary rounded-3xl p-10 md:p-16 shadow-neon-fuchsia overflow-hidden group"
          >
            {/* Diagonal Banner */}
            <div className="absolute -right-16 top-10 rotate-45 bg-secondary text-black font-900 px-20 py-2 uppercase tracking-widest text-sm shadow-neon-green">
              Hot Deal
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="bg-primary/10 p-6 rounded-full border-2 border-dashed border-primary animate-spin-slow">
                <span className="material-symbols-outlined text-8xl text-primary">cake</span>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-5xl md:text-7xl font-900 tracking-tighter uppercase italic leading-none mb-4">
                  {offer.title} <br/> 
                  <span className="text-secondary neon-text-green">{offer.subtitle}</span>
                </h3>
                <p className="text-xl text-slate-300 mb-8 font-medium">
                  {offer.description}
                </p>
                <button 
                  onClick={() => handleReservar(offer)}
                  className="bg-white text-black hover:bg-secondary hover:text-white transition-all px-10 py-4 rounded-xl font-900 text-lg uppercase tracking-widest shadow-xl"
                >
                  Reservar Ahora
                </button>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="size-3 bg-primary rounded-full animate-pulse"></div>
              <div className="size-3 bg-secondary rounded-full animate-pulse delay-75"></div>
              <div className="size-3 bg-primary rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Offers

