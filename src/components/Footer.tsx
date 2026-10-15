import { Link } from 'react-router-dom'
import { IMG } from '../lib/assets'

const FOOTER_LINKS = [
  { to: '/', label: 'Home', id: 'w-node-_056314f0-b539-e3d9-d510-f244044bc03a-044bc033', current: true },
  { to: '/oculomix-managed-service', label: 'Oculomix managed service' },
  { to: '/uitdaging', label: 'De uitdaging' },
  { to: '/eigen-beheer', label: 'Eigen beheer' },
  { to: '/de-camera', label: 'De camera' },
  { to: '/contact', label: 'Contact' },
  { to: '/over-ons', label: 'Over ons' },
  { to: '/privacy-statement', label: 'Privacy statement', external: true },
  { to: '/nieuws', label: 'Nieuws' },
] as const

export default function Footer() {
  return (
    <section className="section footer">
      <div className="blob-background footer"></div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-container">
          <div className="footer-wrapper grid">
            <div id="w-node-_43cb6886-e0fe-e239-bcc6-0cf06d903fb6-044bc033" className="div-block-3">
              <img width={70} loading="lazy" alt="" src={IMG.logoBeige} sizes="70px" className="image-17" />
              <div className="footer-contact-wrapper is-small">
                <div className="socials-wrapper">
                  <div className="social-icon w-embed">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19.25 4H4.75A2.755 2.755 0 0 0 2 6.75v10.5A2.755 2.755 0 0 0 4.75 20h14.5A2.755 2.755 0 0 0 22 17.25V6.75A2.755 2.755 0 0 0 19.25 4ZM4.75 5.5h14.5c.69 0 1.25.56 1.25 1.25v.975l-8.5 4.91-8.5-4.91V6.75c0-.69.56-1.25 1.25-1.25Zm14.5 13H4.75c-.69 0-1.25-.56-1.25-1.25V9.46l8.5 4.91 8.5-4.91v7.79c0 .69-.56 1.25-1.25 1.25Z"
                        fill="Currentcolor"
                      />
                    </svg>
                  </div>
                  <a href="mailto:info@oculomix.ai" className="button footer w-inline-block">
                    <p className="aa-button footer">
                      info@oculomix.ai
                      <br />
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div id="w-node-_056314f0-b539-e3d9-d510-f244044bc039-044bc033" className="footer-contact-wrapper grid">
              {FOOTER_LINKS.map((l) =>
                'external' in l && l.external ? (
                  <a key={l.to} href={l.to} target="_blank" rel="noreferrer" className="button footer w-inline-block">
                    <p className="aa-button footer">{l.label}</p>
                  </a>
                ) : (
                  <Link
                    key={l.to}
                    id={'id' in l ? l.id : undefined}
                    to={l.to}
                    aria-current={'current' in l && l.current ? 'page' : undefined}
                    className={`button footer w-inline-block${'current' in l && l.current ? ' w--current' : ''}`}
                  >
                    <p className="aa-button footer">{l.label}</p>
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="aa-body-subheader footer">2026 © Copyright Oculomix</div>
    </section>
  )
}
