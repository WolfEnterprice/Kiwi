import { createContext, useContext, useState, useEffect } from 'react'

const ContentContext = createContext()

const defaultContent = {
  whatsapp: '3206425367',
  address: 'Calle 26 # 19-47',
  city: 'Barrio Centro, La Ciudad.',
  email: 'info@residenciaskiwy.com',
  heroTitle: 'En el corazón de la ciudad,',
  heroSubtitle: 'donde tus ganas',
  heroDescription: 'encuentran el lugar',
  offers: [
    {
      id: 1,
      title: 'Plan Cumpleaños',
      subtitle: 'Cumpleaños',
      description: 'Celebra tu nivel más alto con nosotros. Decoración neon, bebidas de cortesía y la mejor vibra de la ciudad.',
      active: true
    }
  ],
  galleryImages: [
    {
      id: 1,
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0MMK56AQkpS8fkXiwFquRmt66OdNbNZI01_P0tas8GN8QI4qKKjib2vskIY5odsIKwxDUXL4u0efCIeeHVpfObiYKamvEnjuUg0FBablw_jeepLHm83q7yXd7PH2m2485rLT-y4vQFapakfDzIbKg1o2JL8bCR40jctL4BEfH_bXFU1V6cb-trtyCiNTjW1x-a6r2BINEB-Oji2nOBCkSaAKDYoG6VVO2UMLRtpzr97TiD1LCIjZl_jWZ1MOvmReMJ78o662ktyr5',
      title: 'Fachada Colorful',
      span: 'col-span-2 row-span-2'
    },
    {
      id: 2,
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxPJS4f449J-YpfZLMyOcMRIvR_BH55mu7gDJRH6pa-qardz6nu4Mgr02QJQebb8R5DKHdAySk-6Lp432cjGeDTARyMIZHip8MuScbWmHhveWNLbgav-UebfQ7Oh-FPe20cl1-S4SSwQkKkU9LHUIj7bUuMKDHlZmoNSitsFuon1ekSCFjR97fcB2x8nr_-Wb1a7U-ld7YEg-r-G_y2NsAM3e7Q0Gy3yKYmgrXjgk1uIHA6KElOd8P8DGm0c_Dcbf12fkKzqRUDvg_',
      title: '',
      span: ''
    },
    {
      id: 3,
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbNPAL3U_K6jPxUvXC8ec84eF4eBmAmA8gCfpZVAFDsJherDivnxz1gHvuhplcBJr81G_25Uor-HSog-vtftD6svrBUJiMdTQLB40UwgLnashkt96Ql6ZTfshVwlYXAaTMHrQWCpmhM7ZYneOGCQq-AE8zYcK6wgATHO-UHDXTZMM2DhKcUu_p1fAnwdSILjym4D_px6jR2dxOV_f_nYupJqifTIZ1u7So6XwHrSyF-_uJz85pelLwUbG_HcwM1H8Zg9a_XFsvef84',
      title: '',
      span: ''
    },
    {
      id: 4,
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZFdtHP78Lbl6MpdQBHkbD-PtJCRCVkqami9htwBozcZe0-uQaxAy2mw49IiT0Jp8K5ZA6xN4FiqM772wosBka5aRC5HxpsjbdwaSmtDxlcd0R39Ra-1Et7ChwRPV5uN1SxA55iKQ0HcQsL0thOxbFB68Wi9stKYkAcV_47lLyO9MXg1WoPS7H-_nVJlOW7hWzOhCog8O3RWIljsK-e1L4mKljuE4_uyO2eYIRxrUeTMcdtWFVRPUdlGnGsOeMSjFGyHDQq5e4lRsw',
      title: 'Themed Nights',
      span: 'col-span-2'
    }
  ]
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(defaultContent)

  useEffect(() => {
    const savedContent = localStorage.getItem('kiwy_content')
    if (savedContent) {
      setContent(JSON.parse(savedContent))
    }
  }, [])

  const updateContent = (newContent) => {
    const updated = { ...content, ...newContent }
    setContent(updated)
    localStorage.setItem('kiwy_content', JSON.stringify(updated))
  }

  const updateOffer = (offerId, offerData) => {
    const updatedOffers = content.offers.map(offer =>
      offer.id === offerId ? { ...offer, ...offerData } : offer
    )
    updateContent({ offers: updatedOffers })
  }

  const addOffer = (offerData) => {
    const newOffer = {
      id: Date.now(),
      ...offerData,
      active: true
    }
    updateContent({ offers: [...content.offers, newOffer] })
  }

  const deleteOffer = (offerId) => {
    updateContent({
      offers: content.offers.filter(offer => offer.id !== offerId)
    })
  }

  const updateGalleryImage = (imageId, imageData) => {
    const updatedImages = content.galleryImages.map(img =>
      img.id === imageId ? { ...img, ...imageData } : img
    )
    updateContent({ galleryImages: updatedImages })
  }

  const addGalleryImage = (imageData) => {
    const newImage = {
      id: Date.now(),
      ...imageData
    }
    updateContent({ galleryImages: [...content.galleryImages, newImage] })
  }

  const deleteGalleryImage = (imageId) => {
    updateContent({
      galleryImages: content.galleryImages.filter(img => img.id !== imageId)
    })
  }

  return (
    <ContentContext.Provider value={{
      content,
      updateContent,
      updateOffer,
      addOffer,
      deleteOffer,
      updateGalleryImage,
      addGalleryImage,
      deleteGalleryImage
    }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  return useContext(ContentContext)
}

