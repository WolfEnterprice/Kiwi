import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Location from '../components/Location'
import Gallery from '../components/Gallery'
import Offers from '../components/Offers'
import Footer from '../components/Footer'
import { ContentProvider } from '../context/ContentContext'

function Home() {
  useEffect(() => {
    // Animación de entrada para secciones
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      section.style.opacity = '0'
      section.style.transform = 'translateY(20px)'
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

  return (
    <ContentProvider>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <Hero />
          <Location />
          <Gallery />
          <Offers />
        </main>
        <Footer />
      </div>
    </ContentProvider>
  )
}

export default Home

