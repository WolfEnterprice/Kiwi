import { useState } from 'react'
import { useContent } from '../context/ContentContext'
import { openWhatsAppChat } from '../services/contactService'

function Rooms() {
  const { content } = useContent()
  const rooms = content.rooms || []
  const [selectedRoom, setSelectedRoom] = useState(null)

  const handleConsult = (room) => {
    openWhatsAppChat(
      content.whatsapp,
      `Hola, me gustaría consultar disponibilidad y tarifa de la ${room.name} en Residencias Kiwy`
    )
  }

  const formatPrice = (value) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value)

  const openDetails = (room) => {
    setSelectedRoom(room)
  }

  const closeDetails = () => {
    setSelectedRoom(null)
  }

  return (
    <section id="rooms" className="py-20 px-6 bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-800 tracking-tight text-slate-50">
            Nuestras <span className="text-primary">habitaciones</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Elige la opción que más se ajusta a tu plan. Todas incluyen atención discreta y espacios confortables.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => {
            const isAvailable = room.status === 'available'
            const statusLabel = isAvailable ? 'Disponible' : 'No disponible'
            const statusClasses = isAvailable
              ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40'
              : 'bg-red-500/15 text-red-300 border-red-500/40'

            return (
              <article
                key={room.id}
                className="group/card flex flex-col rounded-3xl bg-slate-900 text-slate-50 overflow-hidden border border-slate-800 transition-all duration-300 hover:border-primary/40 hover:shadow-neon-fuchsia hover:-translate-y-2"
              >
                <div className="relative h-32 bg-gradient-to-b from-primary/20 via-slate-900 to-slate-900 overflow-hidden">
                  {room.imageUrl ? (
                    <img
                      src={room.imageUrl}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                  ) : null}

                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold border ${statusClasses}`}
                    >
                      <span className="inline-block size-2 rounded-full bg-current" />
                      {statusLabel}
                    </span>
                  </div>

                  {room.favorite && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary text-white px-3 py-1 text-xs font-semibold">
                        <span className="material-symbols-outlined text-sm">favorite</span>
                        Favorita
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex-1 px-5 py-4 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-slate-50">
                        {room.name}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-400">{room.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm md:text-base font-semibold text-slate-50">
                        {formatPrice(room.price)}
                      </p>
                      <p className="text-[11px] md:text-xs text-slate-400">
                        {room.baseHours} horas en adelante
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 text-slate-300 text-xs md:text-sm mt-1">
                    {room.amenities?.includes('wifi') && (
                      <div className="inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">wifi</span>
                        <span>WiFi</span>
                      </div>
                    )}
                    {room.amenities?.includes('tv') && (
                      <div className="inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">live_tv</span>
                        <span>TV</span>
                      </div>
                    )}
                    {room.amenities?.includes('jacuzzi') && (
                      <div className="inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">bathtub</span>
                        <span>Jacuzzi</span>
                      </div>
                    )}
                    {room.amenities?.includes('parking') && (
                      <div className="inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">local_parking</span>
                        <span>Parqueadero</span>
                      </div>
                    )}
                    {room.amenities?.includes('minibar') && (
                      <div className="inline-flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">local_bar</span>
                        <span>Minibar</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 space-y-2">
                  <button
                    type="button"
                    onClick={() => openDetails(room)}
                    className="w-full rounded-full border border-slate-700 bg-slate-800 text-slate-100 text-xs md:text-sm font-medium py-2.5 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 active:scale-[0.98]"
                  >
                    Ver detalles y tarifas
                  </button>
                  <button
                    type="button"
                    onClick={() => handleConsult(room)}
                    disabled={!isAvailable}
                    className={`w-full rounded-full text-xs md:text-sm font-semibold py-2.5 flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98] ${
                      isAvailable
                        ? 'bg-primary hover:bg-primary/90 hover:scale-[1.02] hover:shadow-neon-fuchsia text-white'
                        : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm md:text-base">call</span>
                    {isAvailable ? 'Consultar por WhatsApp' : 'No disponible'}
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {selectedRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 animate-fade-in-up">
          <div className="w-full max-w-md md:max-w-lg bg-background-dark border border-slate-800 rounded-2xl shadow-neon-fuchsia p-6 space-y-4 relative animate-scale-in">
            <button
              type="button"
              onClick={closeDetails}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-100 rounded-lg p-1 hover:bg-slate-800 transition-all duration-300"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex items-start gap-4">
              <div className="hidden sm:block w-24 h-24 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                {selectedRoom.imageUrl ? (
                  <img
                    src={selectedRoom.imageUrl}
                    alt={selectedRoom.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs">
                    Sin foto
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-50">
                  {selectedRoom.name}
                </h3>
                <p className="text-sm text-slate-400">{selectedRoom.subtitle}</p>
                <p className="mt-2 text-sm text-slate-300">
                  Tarifa base:{' '}
                  <span className="font-semibold">
                    {formatPrice(selectedRoom.price)} / {selectedRoom.baseHours} horas
                  </span>
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-slate-300">
              <p>
                Las tarifas pueden variar según día, temporada o solicitudes especiales. Escríbenos por WhatsApp
                para confirmar disponibilidad, decorar la habitación o ajustar tu plan.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedRoom.amenities?.map((amenity) => (
                  <span
                    key={amenity}
                    className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={closeDetails}
                className="flex-1 rounded-full border border-slate-700 bg-slate-900 text-slate-100 text-xs md:text-sm font-medium py-2.5 hover:bg-slate-800 transition-all duration-300 active:scale-[0.98]"
              >
                Cerrar
              </button>
              <button
                type="button"
                onClick={() => {
                  handleConsult(selectedRoom)
                  closeDetails()
                }}
                className="flex-1 rounded-full bg-primary hover:bg-primary/90 hover:scale-[1.02] hover:shadow-neon-fuchsia text-white text-xs md:text-sm font-semibold py-2.5 flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-sm md:text-base">call</span>
                Consultar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Rooms

