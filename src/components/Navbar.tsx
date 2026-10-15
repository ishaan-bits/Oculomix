import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import lottie from 'lottie-web'
import type { AnimationItem } from 'lottie-web'
import { IMG } from '../lib/assets'

const NAV_LINKS = [
  { id: 'w-node-_8dec7d5c-090d-1901-c117-434074fe0cc2-74fe0cb5', to: '/uitdaging', label: 'De uitdaging' },
  { id: 'w-node-_8dec7d5c-090d-1901-c117-434074fe0cc5-74fe0cb5', to: '/de-camera', label: 'De camera' },
  { id: 'w-node-_8dec7d5c-090d-1901-c117-434074fe0cc8-74fe0cb5', to: '/voor-wie', label: 'Voor wie' },
] as const

const NAV_LINKS_TAIL = [
  { id: 'w-node-_8dec7d5c-090d-1901-c117-434074fe0ccd-74fe0cb5', to: '/over-ons', label: 'Over ons' },
  { id: 'w-node-_8dec7d5c-090d-1901-c117-434074fe0cd0-74fe0cb5', to: '/nieuws', label: 'Nieuws' },
  { id: 'w-node-_8dec7d5c-090d-1901-c117-434074fe0cd3-74fe0cb5', to: '/contact', label: 'Contact' },
] as const

const MOBILE_LINKS = [
  { id: 'w-node-_85e4aaa2-6a06-a0e0-c201-8979c8e00b6f-74fe0cb5', to: '/uitdaging', label: 'De uitdaging' },
  { id: 'w-node-_85e4aaa2-6a06-a0e0-c201-8979c8e00b72-74fe0cb5', to: '/de-camera', label: 'De camera' },
  { id: 'w-node-_85e4aaa2-6a06-a0e0-c201-8979c8e00b75-74fe0cb5', to: '/voor-wie', label: 'Voor wie' },
] as const

const MOBILE_LINKS_TAIL = [
  { id: 'w-node-_85e4aaa2-6a06-a0e0-c201-8979c8e00b82-74fe0cb5', to: '/over-ons', label: 'Over ons' },
  { id: 'w-node-_85e4aaa2-6a06-a0e0-c201-8979c8e00b85-74fe0cb5', to: '/nieuws', label: 'Nieuws' },
  { id: 'w-node-_85e4aaa2-6a06-a0e0-c201-8979c8e00b88-74fe0cb5', to: '/contact', label: 'Contact' },
] as const

function GlassFilter() {
  return (
    <div className="nav-bar-glass-filter w-embed">
      <svg style={{ display: 'none' }}>
        <filter id="glass-distortion" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.014" numOctaves="1" seed="5" result="turbulence" />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="4" result="softMap" />
          <feSpecularLighting in="softMap" surfaceScale="5" specularConstant="1" specularExponent="100" lightingColor="white" result="specLight">
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite in="specLight" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litImage" />
          <feDisplacementMap in="SourceGraphic" in2="softMap" scale="20" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </div>
  )
}

function NavLink({ to, label, id }: { to: string; label: string; id: string }) {
  return (
    <Link id={id} to={to} className="aa-button menu w-inline-block">
      <div>{label}</div>
    </Link>
  )
}

export default function Navbar() {
  const location = useLocation()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const lottieRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (!lottieRef.current) return
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/lottie/menu-nav.json',
    })
    animRef.current = anim
    return () => {
      anim.destroy()
      animRef.current = null
    }
  }, [])

  useEffect(() => {
    const anim = animRef.current
    if (!anim) return
    if (menuOpen) anim.play()
    else anim.stop()
  }, [menuOpen])

  useEffect(() => {
    setDropdownOpen(false)
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!dropdownOpen) return
    const onDown = (e: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setDropdownOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [dropdownOpen])

  return (
    <div data-collapse="medium" data-duration="600" data-easing="ease-out" data-easing2="ease-in" role="banner" className="section nav-bar w-nav">
      <div className="nav-bar-glass-effect"></div>
      <div className="nav-bar-glass-tint"></div>
      <div className="nav-bar-glass-shine"></div>
      <GlassFilter />
      <div className="container nav-bar w-container">
        <Link to="/" aria-current="page" className="brand w-nav-brand w--current">
          <img width={170} sizes="170px" alt="OculomiX Logo" src={IMG.logo} loading="lazy" className="image-11" />
        </Link>
        <nav role="navigation" className="nav-menu w-nav-menu">
          <div className="nav-grid">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} {...l} />
            ))}
            <div data-hover="false" data-delay="0" ref={dropdownRef} className={`aa-button menu w-dropdown${dropdownOpen ? ' w--open' : ''}`}>
              <div
                className={`dropdown-toggle w-dropdown-toggle${dropdownOpen ? ' w--open' : ''}`}
                role="button"
                tabIndex={0}
                onClick={() => setDropdownOpen((v) => !v)}
                onKeyDown={(e) => e.key === 'Enter' && setDropdownOpen((v) => !v)}
              >
                <div className="w-icon-dropdown-toggle"></div>
                <div>Onze services:</div>
              </div>
              <nav className={`dropdown w-dropdown-list${dropdownOpen ? ' w--open' : ''}`}>
                <Link to="/oculomix-managed-service" className="aa-button w-dropdown-link">
                  OculomiX Managed Service
                </Link>
                <Link to="/eigen-beheer" className="aa-button w-dropdown-link">
                  Eigen Beheer
                </Link>
              </nav>
            </div>
            {NAV_LINKS_TAIL.map((l) => (
              <NavLink key={l.to} {...l} />
            ))}
          </div>
        </nav>
        <nav role="navigation" className={`nav-menu mobile w-nav-menu${menuOpen ? ' w--nav-menu-open' : ''}`} {...(menuOpen ? { 'data-nav-menu-open': '' } : {})}>
          <div className="nav-bar-glass-effect"></div>
          <div className="nav-bar-glass-tint"></div>
          <div className="nav-bar-glass-shine"></div>
          <div className="nav-grid">
            {MOBILE_LINKS.map((l) => (
              <NavLink key={l.to} {...l} />
            ))}
            <div data-hover="false" data-delay="0" className={`aa-button menu w-dropdown${dropdownOpen ? ' w--open' : ''}`}>
              <div
                className={`dropdown-toggle w-dropdown-toggle${dropdownOpen ? ' w--open' : ''}`}
                role="button"
                tabIndex={0}
                onClick={() => setDropdownOpen((v) => !v)}
              >
                <div className="w-icon-dropdown-toggle"></div>
                <div>Onze services:</div>
              </div>
              <nav className={`dropdown w-dropdown-list${dropdownOpen ? ' w--open' : ''}`}>
                <Link to="/oculomix-managed-service" className="aa-button w-dropdown-link">
                  OculomiX Managed Service
                </Link>
                <Link to="/eigen-beheer" className="aa-button w-dropdown-link">
                  Eigen Beheer
                </Link>
              </nav>
            </div>
            {MOBILE_LINKS_TAIL.map((l) => (
              <NavLink key={l.to} {...l} />
            ))}
          </div>
        </nav>
        <div
          className="lottie-wrap"
          role="button"
          tabIndex={0}
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
          onKeyDown={(e) => e.key === 'Enter' && setMenuOpen((v) => !v)}
        >
          <div ref={lottieRef} className="lottie-animation"></div>
        </div>
      </div>
    </div>
  )
}
