import { useContent } from '../context/ContentContext'
import { openWhatsAppChat } from '../services/contactService'

function Footer() {
  const { content } = useContent()

  const openWhatsApp = () => {
    openWhatsAppChat(
      content.whatsapp,
      'Hola, me interesa conocer más sobre Residencias Kiwy'
    )
  }

  return (
    <>
      <footer className="bg-background-dark border-t border-slate-800 pt-16 pb-28 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-primary/10 border border-primary/30 rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl font-bold">favorite</span>
              </div>
              <h4 className="text-xl font-900 tracking-tight">Kiwy</h4>
            </div>
            <p className="text-slate-500 font-medium">
              Hospedaje cómodo y seguro en el corazón de la ciudad, con atención cercana y espacios pensados para tu descanso.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-primary font-900 uppercase tracking-wide text-xs">Contacto directo</h5>
            <ul className="space-y-3 text-slate-300 font-bold">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                {content.whatsapp}
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                {content.email}
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Abierto 24 Horas
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-primary font-900 uppercase tracking-wide text-xs">Síguenos</h5>
            <div className="flex gap-4">
              <a 
                className="size-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" 
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
              <a 
                className="size-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" 
                href="https://www.instagram.com/residenciaskiwy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a 
                className="size-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" 
                href="#"
              >
                <span className="material-symbols-outlined">video_library</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs md:text-sm">
          © 2024 Residencias Kiwy. Todos los derechos reservados.
        </div>
      </footer>

      {/* Fast Contact Floating Bubble */}
      <div className="fixed bottom-6 right-6 z-[100] md:bottom-10 md:right-10">
        <button
          onClick={openWhatsApp}
          className="flex items-center justify-center size-14 md:size-16 bg-primary rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <span className="material-symbols-outlined text-white text-3xl font-bold">add_call</span>
          <span className="absolute right-full mr-4 bg-background-dark text-white px-3 py-2 rounded-lg text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 pointer-events-none">
            ¿Necesitas habitación? ¡Llama!
          </span>
        </button>
      </div>
    </>
  )
}

export default Footer

