import Hero from '../components/Hero'
import About from '../components/About'
import HomeServices from '../components/HomeServices'
import ServicesPage from '../components/ServicesPage'
import Testimonials from '../components/Testimonials'

import StatsCounter from '../components/StatsCounter'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HomeServices />
     <ServicesPage />
      <Testimonials />
      
      <StatsCounter />
     <Gallery />
    </>
  )
}
