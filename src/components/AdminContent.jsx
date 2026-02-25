import { useState } from 'react'
import { useContent } from '../context/ContentContext'

function AdminContent({ activeTab }) {
  const { content, updateContent, updateOffer, addOffer, deleteOffer, updateGalleryImage, addGalleryImage, deleteGalleryImage } = useContent()

  if (activeTab === 'general') {
    return <GeneralSettings content={content} updateContent={updateContent} />
  }
  if (activeTab === 'offers') {
    return <OffersManagement 
      offers={content.offers} 
      updateOffer={updateOffer}
      addOffer={addOffer}
      deleteOffer={deleteOffer}
    />
  }
  if (activeTab === 'gallery') {
    return <GalleryManagement 
      images={content.galleryImages}
      updateGalleryImage={updateGalleryImage}
      addGalleryImage={addGalleryImage}
      deleteGalleryImage={deleteGalleryImage}
    />
  }
  return null
}

function GeneralSettings({ content, updateContent }) {
  const [formData, setFormData] = useState({
    whatsapp: content.whatsapp,
    address: content.address,
    city: content.city,
    email: content.email,
    heroTitle: content.heroTitle,
    heroSubtitle: content.heroSubtitle,
    heroDescription: content.heroDescription
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateContent(formData)
    alert('Configuración guardada exitosamente')
  }

  return (
    <div className="bg-black border border-primary/30 rounded-2xl p-8 shadow-neon-fuchsia">
      <h2 className="text-3xl font-900 uppercase italic mb-6">
        Configuración <span className="text-secondary">General</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">
              WhatsApp
            </label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">
              Dirección
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">
              Ciudad
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">
              Título Hero (Línea 1)
            </label>
            <input
              type="text"
              name="heroTitle"
              value={formData.heroTitle}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">
              Título Hero (Línea 2 - Destacado)
            </label>
            <input
              type="text"
              name="heroSubtitle"
              value={formData.heroSubtitle}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-bold uppercase tracking-widest text-slate-300 mb-2">
              Título Hero (Línea 3)
            </label>
            <input
              type="text"
              name="heroDescription"
              value={formData.heroDescription}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-xl font-bold shadow-neon-fuchsia transition-all active:scale-95 flex items-center gap-2"
        >
          <span className="material-symbols-outlined">save</span>
          Guardar Cambios
        </button>
      </form>
    </div>
  )
}

function OffersManagement({ offers, updateOffer, addOffer, deleteOffer }) {
  const [editingOffer, setEditingOffer] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    active: true
  })

  const handleEdit = (offer) => {
    setEditingOffer(offer.id)
    setFormData(offer)
    setShowAddForm(false)
  }

  const handleSave = (e) => {
    e.preventDefault()
    if (editingOffer) {
      updateOffer(editingOffer, formData)
      setEditingOffer(null)
    } else {
      addOffer(formData)
      setShowAddForm(false)
    }
    setFormData({ title: '', subtitle: '', description: '', active: true })
  }

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta oferta?')) {
      deleteOffer(id)
    }
  }

  return (
    <div className="bg-black border border-primary/30 rounded-2xl p-8 shadow-neon-fuchsia">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-900 uppercase italic">
          Gestión de <span className="text-secondary">Ofertas</span>
        </h2>
        <button
          onClick={() => {
            setShowAddForm(true)
            setEditingOffer(null)
            setFormData({ title: '', subtitle: '', description: '', active: true })
          }}
          className="bg-secondary hover:bg-secondary/80 text-black px-6 py-3 rounded-xl font-bold transition-all active:scale-95 flex items-center gap-2"
        >
          <span className="material-symbols-outlined">add</span>
          Nueva Oferta
        </button>
      </div>

      {(showAddForm || editingOffer) && (
        <form onSubmit={handleSave} className="bg-slate-900 rounded-xl p-6 mb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Título"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
              required
            />
            <input
              type="text"
              placeholder="Subtítulo"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
              required
            />
          </div>
          <textarea
            placeholder="Descripción"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
            rows="3"
            required
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="active"
              checked={formData.active}
              onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
              className="w-4 h-4"
            />
            <label htmlFor="active" className="text-slate-300">Activa</label>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg font-bold transition-all"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => {
                setShowAddForm(false)
                setEditingOffer(null)
              }}
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-bold transition-all"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-slate-900 rounded-xl p-6 border border-slate-800">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-primary">{offer.title}</h3>
                <p className="text-secondary font-bold">{offer.subtitle}</p>
                <p className="text-slate-300 mt-2">{offer.description}</p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold ${
                  offer.active ? 'bg-secondary/20 text-secondary' : 'bg-slate-700 text-slate-400'
                }`}>
                  {offer.active ? 'Activa' : 'Inactiva'}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(offer)}
                  className="bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg font-bold transition-all"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(offer.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition-all"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function GalleryManagement({ images, updateGalleryImage, addGalleryImage, deleteGalleryImage }) {
  const [editingImage, setEditingImage] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    span: ''
  })

  const handleEdit = (image) => {
    setEditingImage(image.id)
    setFormData(image)
    setShowAddForm(false)
  }

  const handleSave = (e) => {
    e.preventDefault()
    if (editingImage) {
      updateGalleryImage(editingImage, formData)
      setEditingImage(null)
    } else {
      addGalleryImage(formData)
      setShowAddForm(false)
    }
    setFormData({ url: '', title: '', span: '' })
  }

  const handleDelete = (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta imagen?')) {
      deleteGalleryImage(id)
    }
  }

  return (
    <div className="bg-black border border-primary/30 rounded-2xl p-8 shadow-neon-fuchsia">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-900 uppercase italic">
          Gestión de <span className="text-secondary">Galería</span>
        </h2>
        <button
          onClick={() => {
            setShowAddForm(true)
            setEditingImage(null)
            setFormData({ url: '', title: '', span: '' })
          }}
          className="bg-secondary hover:bg-secondary/80 text-black px-6 py-3 rounded-xl font-bold transition-all active:scale-95 flex items-center gap-2"
        >
          <span className="material-symbols-outlined">add</span>
          Nueva Imagen
        </button>
      </div>

      {(showAddForm || editingImage) && (
        <form onSubmit={handleSave} className="bg-slate-900 rounded-xl p-6 mb-6 space-y-4">
          <input
            type="url"
            placeholder="URL de la imagen"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
            required
          />
          <input
            type="text"
            placeholder="Título (opcional)"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
          />
          <select
            value={formData.span}
            onChange={(e) => setFormData({ ...formData, span: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary"
          >
            <option value="">Tamaño normal</option>
            <option value="col-span-2">Ancho doble</option>
            <option value="col-span-2 row-span-2">Ancho y alto doble</option>
          </select>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg font-bold transition-all"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => {
                setShowAddForm(false)
                setEditingImage(null)
              }}
              className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-bold transition-all"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image) => (
          <div key={image.id} className="bg-slate-900 rounded-xl p-4 border border-slate-800">
            <img src={image.url} alt={image.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white font-bold">{image.title || 'Sin título'}</p>
                <p className="text-slate-400 text-sm">{image.span || 'Tamaño normal'}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(image)}
                  className="bg-primary hover:bg-primary/80 text-white px-3 py-1 rounded-lg text-sm font-bold transition-all"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(image.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg text-sm font-bold transition-all"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminContent

