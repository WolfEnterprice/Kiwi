import { useContent } from '../context/ContentContext'

function Footer() {
  const { content } = useContent()

  return (
    <>
      <footer className="bg-background-dark border-t border-slate-800 pt-16 pb-28 md:pb-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="size-8 bg-primary/10 border border-primary/30 rounded flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <span className="material-symbols-outlined text-primary text-xl font-bold transition-transform duration-300 group-hover:scale-110">favorite</span>
              </div>
              <h4 className="font-logo text-2xl tracking-[0.15em] uppercase text-primary">Kiwy</h4>
            </div>
            <p className="text-slate-500 font-medium">
              Hospedaje cómodo y seguro en el corazón de la ciudad, con atención cercana y espacios pensados para tu descanso.
            </p>
          </div>

          <div className="space-y-4">
            <h5 className="text-primary font-900 uppercase tracking-wide text-xs">Contacto directo</h5>
            <ul className="space-y-3 text-slate-300 font-bold">
              <li className="flex items-center gap-3 group/list hover:text-slate-50 transition-colors duration-300">
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover/list:scale-125">call</span>
                {content.whatsapp}
              </li>
              <li className="flex items-center gap-3 group/list hover:text-slate-50 transition-colors duration-300">
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover/list:scale-125">mail</span>
                {content.email}
              </li>
              <li className="flex items-center gap-3 group/list hover:text-slate-50 transition-colors duration-300">
                <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover/list:scale-125">schedule</span>
                Abierto 24 Horas
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h5 className="text-primary font-900 uppercase tracking-wide text-xs">Síguenos</h5>
            <div className="flex gap-4">
              <a 
                className="size-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 hover:rotate-6 hover:shadow-neon-fuchsia transition-all duration-300" 
                href="#"
              >
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">share</span>
              </a>
              <a 
                className="size-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 hover:-rotate-6 hover:shadow-neon-fuchsia transition-all duration-300" 
                href="https://www.instagram.com/residenciaskiwy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">photo_camera</span>
              </a>
              <a 
                className="size-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 hover:rotate-6 hover:shadow-neon-fuchsia transition-all duration-300" 
                href="#"
              >
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">video_library</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs md:text-sm space-y-1">
          <p>© 2024 Kiwy. Todos los derechos reservados.</p>
          <p>Página desarrollada por <span className="font-semibold text-slate-400">WOLF ENTERPRISE</span></p>
        </div>
      </footer>
    </>
  )
}

export default Footer

