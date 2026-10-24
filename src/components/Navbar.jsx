import { useState, useEffect } from 'react'
import { getGeneralReservationUrl } from '../utils/whatsapp'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Treatment', href: '#treatment' },
    { label: 'Cara Reservasi', href: '#cara-reservasi' },
    { label: 'Area Layanan', href: '#area-layanan' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-linen/95 backdrop-blur-md shadow-xs py-3 border-b border-nude-border'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex flex-col group">
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-moka group-hover:text-caramel transition-colors">
            Dahayu Home Spa
          </span>
          <span className="text-[10px] sm:text-xs tracking-wider uppercase text-moka-light font-medium -mt-1">
            Home Service Khusus Wanita • Bangkalan
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-moka-soft hover:text-caramel transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <a
            href={getGeneralReservationUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-caramel text-white hover:bg-caramel-dark transition-all shadow-xs active:scale-95"
          >
            Reservasi Sekarang
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-moka hover:bg-linen-warm transition-colors"
            aria-label="Buka menu navigasi"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-linen-warm/98 border-b border-nude-border px-4 pt-3 pb-5 shadow-lg">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-moka hover:text-caramel py-1 px-2 rounded-md hover:bg-nude-card/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={getGeneralReservationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full text-sm font-semibold bg-caramel text-white hover:bg-caramel-dark transition-all shadow-xs"
              >
                Reservasi via WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
