import { useContent } from '../context/ContentContext'
import { openGoogleMapsLocation } from '../services/contactService'

function Location() {
  const { content } = useContent()

  const openGoogleMaps = () => {
    openGoogleMapsLocation(content.address, content.city)
  }

  const mapsEmbedUrl = `https://www.google.com/maps?q=5.069384403787749,-75.51505606319438&z=18&output=embed`

  return (
    <section className="py-20 bg-background-dark relative overflow-hidden" id="location">
      {/* Background Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-full max-w-2xl">
        <svg className="fill-primary" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 90c-15-10-35-25-35-45 0-10 8-18 18-18 6 0 12 3 17 8 5-5 11-8 17-8 10 0 18 8 18 18 0 20-20 35-35 45z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-800 tracking-tight mb-6">
            Ubícanos en el <br />
            <span className="text-primary">epicentro de la ciudad</span>
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              <div>
                <h4 className="text-2xl font-bold">{content.address}</h4>
                <p className="text-slate-400 text-lg">{content.city}</p>
              </div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              A pocos minutos de transporte, restaurantes y puntos clave de la ciudad. Ideal para estancias cortas o largas con fácil acceso a todo.
            </p>
            <button
              type="button"
              onClick={openGoogleMaps}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
            >
              <span className="material-symbols-outlined text-base">map</span>
              Ver en Google Maps
            </button>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-primary/30 shadow-md">
          <iframe
            title="Ubicación Residencias Kiwy"
            src={mapsEmbedUrl}
            className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[400px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}

export default Location

