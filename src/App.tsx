import { useEffect, useLayoutEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { initReveals } from './lib/reveal'
import Home from './pages/Home'
import Uitdaging from './pages/Uitdaging'
import DeCamera from './pages/DeCamera'
import VoorWie from './pages/VoorWie'
import ManagedService from './pages/ManagedService'
import EigenBeheer from './pages/EigenBeheer'
import OverOns from './pages/OverOns'
import Nieuws from './pages/Nieuws'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

gsap.registerPlugin(ScrollTrigger)

const bareRoutes = new Set(['/privacy-statement'])

export default function App() {
  const location = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const bare = bareRoutes.has(location.pathname)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useLayoutEffect(() => {
    if (!mainRef.current) return
    const cleanup = initReveals(mainRef.current)
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => {
      cancelAnimationFrame(raf)
      cleanup()
    }
  }, [location.pathname])

  return (
    <>
      {!bare && <Navbar />}
      <main ref={mainRef}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/uitdaging" element={<Uitdaging />} />
          <Route path="/de-camera" element={<DeCamera />} />
          <Route path="/voor-wie" element={<VoorWie />} />
          <Route path="/oculomix-managed-service" element={<ManagedService />} />
          <Route path="/eigen-beheer" element={<EigenBeheer />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/nieuws" element={<Nieuws />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-statement" element={<Privacy />} />
        </Routes>
      </main>
      {!bare && <Footer />}
    </>
  )
}
