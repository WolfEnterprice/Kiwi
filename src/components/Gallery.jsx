import { useContent } from '../context/ContentContext'

function Gallery() {
  const { content } = useContent()

  return (
    <section className="py-24 px-6 bg-[#0f0f0f]" id="vibe">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="text-4xl md:text-6xl font-800 tracking-tighter uppercase italic">
              Vibe <span className="text-primary">Gallery</span>
            </h3>
            <p className="text-slate-400 font-medium">
              Explora la energía de nuestras noches temáticas y diseño único.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-secondary text-5xl">auto_awesome</span>
            <span className="material-symbols-outlined text-primary text-5xl">celebration</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
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

