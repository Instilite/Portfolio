'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NAV_LINKS = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const handleMonogramClick = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  const linkClass =
    'text-14 font-semibold text-text-primary relative py-2 min-h-[44px] flex items-center ' +
    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent ' +
    'after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 ' +
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent focus-visible:rounded-sm'

  return (
    <>
      <div ref={sentinelRef} className="h-px w-full" aria-hidden="true" />
      <header
        className={`sticky top-0 z-50 bg-page-bg/90 backdrop-blur-sm border-b-2 border-offset-shadow h-16 transition-shadow duration-200 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <nav
          className="flex items-center justify-between px-8 max-w-5xl mx-auto w-full h-full"
          aria-label="Main navigation"
        >
          <button
            onClick={handleMonogramClick}
            aria-label="Scroll to top"
            className="border-2 border-offset-shadow font-bold text-14 w-10 h-10 flex items-center justify-center rounded-lg bg-accent text-text-primary flex-shrink-0 hover:bg-accent-dark transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            RK
          </button>

          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="/resume"
              className="hidden md:flex border-2 border-offset-shadow bg-white text-text-primary rounded-lg px-5 py-2 text-14 font-bold min-h-[44px] items-center hover:bg-accent hover:border-accent transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Resume
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center border-2 border-offset-shadow rounded-lg bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <XMarkIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Bars3Icon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t-2 border-offset-shadow bg-page-bg/95 backdrop-blur-sm"
          >
            <ul className="flex flex-col px-8 py-4 gap-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-14 font-semibold text-text-primary py-3 min-h-[44px] flex items-center hover:text-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-14 font-bold text-text-primary py-3 min-h-[44px] flex items-center hover:text-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}
