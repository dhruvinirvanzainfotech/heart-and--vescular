import { useEffect, useRef, useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AppointmentProvider } from './components/AppointmentContext'
import SplashScreen from './components/SplashScreen'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import LocationsPage from './pages/LocationsPage'
import ContactPage from './pages/ContactPage'
import AppointmentPage from './pages/AppointmentPage'
import BackToTop from './components/BackToTop';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact';
import CardiacTesting from "./pages/CardiacTesting";
import VaricoseVeins from './pages/VaricoseVeins'
import VascularTesting from './pages/VascularTesting'
import NutritionCounseling from './pages/NutritionCounseling'

import RouteLoader from "./components/RouteLoader";
import GalleryPage from './pages/GalleryPage';
import Insurance from './components/Insurance'


function Layout() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/contactpage" element={<ContactPage />} />


          <Route path="/treatments" element={<ServicesPage />} />
          <Route path="/treatments/:id" element={<ServiceDetailPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/insurance" element={<Insurance />}  />
          <Route
            path="/treatment/cardiactesting"
            element={<CardiacTesting />}
          />
          <Route
            path="/treatment/varicose-veins"
            element={<VaricoseVeins />}
          />
          <Route
            path="/treatment/vascular-testing"
            element={<VascularTesting />}
          />
          <Route
            path="/treatment/nutrition-counseling"
            element={<NutritionCounseling />}
          />
          <Route
  path="*"
  element={
    <div style={{ padding: "50px" }}>
      Route Not Found
    </div>
  }
/>  
        </Routes>
        <FloatingContact />
        <BackToTop />
        <ScrollToTop />
       
      </main>
      <Footer />
    </div>
  )
}

function ScrollRestorer({ ready }) {
  const location = useLocation()
  const hasRestoredRef = useRef(false)

  useEffect(() => {
    if (!ready) return
    if (hasRestoredRef.current) return

    const key = `hv_scroll_y:${location.pathname}${location.search}`
    try {
      const savedYRaw = sessionStorage.getItem(key)
      const savedY = savedYRaw ? Number(savedYRaw) : 0

      if (Number.isFinite(savedY) && savedY >= 0) {
        hasRestoredRef.current = true
        window.scrollTo({ top: savedY, left: 0, behavior: 'auto' })
      }
    } catch {
      // ignore
    }
  }, [ready, location.pathname, location.search])

  useEffect(() => {
    // Reset restore flag when route changes, so it can restore for the new route.
    hasRestoredRef.current = false
  }, [location.pathname, location.search])

  useEffect(() => {
    const keyForCurrentRoute = `hv_scroll_y:${location.pathname}${location.search}`

    const save = () => {
      try {
        sessionStorage.setItem(keyForCurrentRoute, String(window.scrollY || 0))
      } catch {
        // ignore
      }
    }

    // Save on navigation / tab close.
    window.addEventListener('beforeunload', save)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') save()
    })

    return () => {
      window.removeEventListener('beforeunload', save)
    }
  }, [location.pathname, location.search])

  return null
}

function AppReadyGate() {
  const [ready, setReady] = useState(false)
  const onDone = useCallback(() => setReady(true), [])

  return (
    <>
      <SplashScreen onDone={onDone} />
      <ScrollRestorer ready={ready} />
      <div className={`transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <Layout />
      </div>
    </>
  )
}

export default function App() {
  return (

    <BrowserRouter basename="/design/drankurshahheartspecialist">
        <RouteLoader />
      <AppointmentProvider>
        <AppReadyGate />
      </AppointmentProvider>

    </BrowserRouter>
  )
}

