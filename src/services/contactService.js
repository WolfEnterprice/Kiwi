const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export const buildWhatsAppUrl = (phone, message) => {
  const text = message || ''
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

export const openWhatsAppChat = (phone, message) => {
  if (!phone) return
  const url = buildWhatsAppUrl(phone, message)
  openInNewTab(url)
}

// Coordenadas de Residencias Kiwy
const KIWY_LAT = 5.069384403787749
const KIWY_LNG = -75.51505606319438

export const buildGoogleMapsSearchUrl = (address, city, lat = KIWY_LAT, lng = KIWY_LNG) => {
  const hasCoords = typeof lat === 'number' && typeof lng === 'number'
  const query = hasCoords
    ? `${lat},${lng}`
    : [address, city].filter(Boolean).join(', ')

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

export const openGoogleMapsLocation = (address, city, lat = KIWY_LAT, lng = KIWY_LNG) => {
  const url = buildGoogleMapsSearchUrl(address, city, lat, lng)
  openInNewTab(url)
}


