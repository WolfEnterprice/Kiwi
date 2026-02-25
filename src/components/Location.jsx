import { useContent } from '../context/ContentContext'

function Location() {
  const { content } = useContent()

  const openGoogleMaps = () => {
    const address = `${content.address}, ${content.city}`
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    window.open(googleMapsUrl, '_blank')
  }

  return (
    <section className="py-24 bg-background-dark relative overflow-hidden" id="location">
      {/* Background Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-full max-w-2xl">
        <svg className="fill-primary" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 90c-15-10-35-25-35-45 0-10 8-18 18-18 6 0 12 3 17 8 5-5 11-8 17-8 10 0 18 8 18 18 0 20-20 35-35 45z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-4xl md:text-6xl font-800 tracking-tighter uppercase italic mb-8">
            Ubícanos en el <br/>
            <span className="text-secondary neon-text-green">Epicentro</span>
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
              <div>
                <h4 className="text-2xl font-bold">{content.address}</h4>
                <p className="text-slate-400 text-lg">{content.city}</p>
              </div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">
              A pasos de los mejores spots nocturnos, restaurantes y la movida urbana que buscas. Residencias Kiwy es tu base de operaciones en la selva de cemento.
            </p>
          </div>
        </div>

        <div className="relative group cursor-pointer" onClick={openGoogleMaps}>
          <div className="absolute inset-0 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/30 transition-all"></div>
          <div className="relative border-2 border-primary/30 rounded-xl overflow-hidden shadow-neon-fuchsia aspect-video">
            <img 
              className="w-full h-full object-cover opacity-80" 
              alt="Stylized neon city map with glowing streets" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWTqGTW1bbgN7v-pwlw4dmfw4s3NDEP-ecJZLHOp-z1dQj9AcJllOvKkv8Rk4xgiON6Jyoulp1zKOSnH0pH27oQjSJ26Buq17lat-tRFtEzsAQaSFMsSL8nHrj2oEvjs2bLgHCrNBjib2YlAPmJQwtaU36Jw8wX5_zdR-pGlZhZIgYc5tSuUrn7tJXxT46D0M7DJBaGOoX4c_OvCRvgBUuGOzUUF6_kYjl0L5dXTqPHEvwLrUFhUK7u8AFb2GmkYwTRoeAZnjjy5KA"
            />
            <div className="absolute inset-0 bg-background-dark/30 flex items-center justify-center group-hover:bg-background-dark/10 transition-colors">
              <div className="bg-primary text-white p-4 rounded-full animate-bounce shadow-neon-fuchsia">
                <span className="material-symbols-outlined text-3xl">pin_drop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location

