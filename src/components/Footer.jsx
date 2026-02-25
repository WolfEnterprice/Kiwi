import { useContent } from '../context/ContentContext'

function Footer() {
  const { content } = useContent()

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hola, me interesa conocer más sobre Residencias Kiwy')
    window.open(`https://wa.me/${content.whatsapp}?text=${message}`, '_blank')
  }

  return (
    <>
      <footer className="bg-black border-t-2 border-secondary/30 pt-16 pb-32 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-secondary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-black text-xl font-bold">favorite</span>
              </div>
              <h4 className="text-xl font-900 tracking-tighter uppercase italic">Kiwy</h4>
            </div>
            <p className="text-slate-500 font-medium">
              Redefiniendo el descanso urbano con estilo pop-art y energía vibrante. El lugar donde la ciudad nunca duerme, pero tú sí.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-primary font-900 uppercase tracking-widest">Contacto Directo</h5>
            <ul className="space-y-3 text-slate-300 font-bold">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">call</span>
                {content.whatsapp}
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">mail</span>
                {content.email}
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">schedule</span>
                Abierto 24 Horas
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-primary font-900 uppercase tracking-widest">Síguenos</h5>
            <div className="flex gap-4">
              <a 
                className="size-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary transition-all" 
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
              <a 
                className="size-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary transition-all" 
                href="#"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a 
                className="size-12 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary transition-all" 
                href="#"
              >
                <span className="material-symbols-outlined">video_library</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          © 2024 Residencias Kiwy. Todos los derechos reservados. Pop-Art Urban Vibes.
        </div>
      </footer>

      {/* Fast Contact Floating Bubble */}
      <div className="fixed bottom-6 right-6 z-[100] md:bottom-10 md:right-10">
        <button
          onClick={openWhatsApp}
          className="flex items-center justify-center size-16 md:size-20 bg-secondary rounded-full shadow-neon-green hover:scale-110 transition-transform active:scale-90 group relative"
        >
          <span className="material-symbols-outlined text-black text-4xl font-bold">add_call</span>
          <span className="absolute right-full mr-4 bg-background-dark text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-secondary pointer-events-none">
            ¿Necesitas habitación? ¡Llama!
          </span>
        </button>
      </div>
    </>
  )
}

export default Footer

