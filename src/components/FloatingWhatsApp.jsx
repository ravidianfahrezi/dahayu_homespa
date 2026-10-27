import { getGeneralReservationUrl } from '../utils/whatsapp'

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Kontak Cepat WhatsApp" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        href={getGeneralReservationUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-[#25D366] text-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-md shadow-black/10 hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        aria-label="Chat WhatsApp Dahayu Home Spa (08996537070)"
      >
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>

        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          Chat Kami
        </span>
      </a>
    </aside>
  )
}
