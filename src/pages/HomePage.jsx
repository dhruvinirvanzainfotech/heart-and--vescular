import Hero from '../components/Hero'
import HomeServices from '../components/HomeServices'
import About from '../components/About'
import WhyUs from '../components/WhyUs'
import RevealSection from '../components/RevealSection'
import AdsSection from '../components/AdsSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <RevealSection>
        <HomeServices />
      </RevealSection>
      <RevealSection>
        <About />
      </RevealSection>
      <RevealSection>
        <WhyUs />
      </RevealSection>
      <AdsSection />

    </>
  )
}

