import { useContent } from '../context/ContentContext'

function Gallery() {
  const { content } = useContent()

  return (
    <section className="py-20 px-6 bg-background-dark" id="vibe">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-800 tracking-tight">
              Nuestra <span className="text-primary">galería</span>
            </h3>
            <p className="text-slate-400 font-medium">
              Conoce algunos de nuestros espacios y el ambiente que te espera en Residencias Kiwy.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary text-4xl">hotel</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {content.galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={`${image.span || ''} rounded-xl overflow-hidden relative group`}
            >
              <img 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={image.title || 'Gallery image'} 
                src={image.url}
              />
              {image.title && (
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-xl font-800 uppercase italic">
                    {image.title}
                  </span>
                </div>
              )}
              {image.title === 'Themed Nights' && (
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-xl font-800 uppercase italic text-black">
                    {image.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

