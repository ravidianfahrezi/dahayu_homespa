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

  // Menutup menu drawer saat tombol Escape ditekan (aksesibilitas)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Treatment', href: '#treatment' },
    { label: 'Cara Reservasi', href: '#cara-reservasi' },
    { label: 'Area Layanan', href: '#area-layanan' },
    { label: 'FAQ', href: '#faq' }
  ]

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-linen/95 backdrop-blur-md shadow-xs py-3 border-b border-nude-border/80'
          : 'bg-linen/90 backdrop-blur-xs py-4 sm:py-5 border-b border-nude-border/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identitas */}
        <a
          href="#"
          className="group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-caramel rounded-sm"
          aria-label="Dahayu Home Spa - Beranda"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-moka group-hover:text-caramel transition-colors">
            Dahayu Home Spa
          </span>
        </a>

        {/* Navigasi Desktop: Responsif dengan spacing proporsional */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navigasi Utama">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-moka-soft hover:text-caramel transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-caramel rounded-sm py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Tombol Reservasi & Toggle Mobile */}
        <div className="flex items-center gap-3">
          <a
            href={getGeneralReservationUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-caramel text-white hover:bg-caramel-dark transition-all shadow-xs active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-caramel focus-visible:ring-offset-2"
          >
            Reservasi Sekarang
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-xl text-moka hover:bg-linen-warm transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-caramel"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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

      {/* Mobile Drawer: Berada dalam flow sticky header sehingga saat terbuka, tampilan utama di bawahnya otomatis terdorong ke bawah tanpa tertutupi */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'max-h-96 opacity-100 border-t border-nude-border/50 mt-3 pt-2'
            : 'max-h-0 opacity-0 pointer-events-none'
        } px-4 sm:px-6`}
      >
        <nav className="flex flex-col space-y-1.5 pb-4" aria-label="Navigasi Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleMobileLinkClick}
              className="text-sm font-medium text-moka hover:text-caramel py-2.5 px-3 rounded-xl hover:bg-linen-warm/80 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={getGeneralReservationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMobileLinkClick}
              className="w-full inline-flex items-center justify-center px-4 py-3 rounded-full text-xs font-semibold bg-caramel text-white hover:bg-caramel-dark transition-all shadow-xs"
            >
              Reservasi via WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
