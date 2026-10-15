import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function initReveals(root: HTMLElement): () => void {
  const ctx = gsap.context(() => {
    const els = Array.from(
      root.querySelectorAll<HTMLElement>('section [style*="opacity: 0"], section [style*="opacity:0"], div [style*="opacity: 0"], div [style*="opacity:0"]'),
    )
    for (const el of els) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true,
          },
        },
      )
    }
  }, root)
  return () => ctx.revert()
}
