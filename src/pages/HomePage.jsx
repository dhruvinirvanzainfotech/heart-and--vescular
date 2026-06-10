import Hero from '../components/Hero'
import About from '../components/About'
import HomeServices from '../components/HomeServices'
// import WhyUs from '../components/WhyUs'
import Testimonials from '../components/Testimonials'

import StatsCounter from '../components/StatsCounter'
import Gallery from '../components/Gallery'
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <HomeServices />
      {/* <WhyUs /> */}
      <Testimonials />
      
      <StatsCounter />
     <Gallery />
    </>
  )
}
