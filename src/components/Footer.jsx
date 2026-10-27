import { getGeneralReservationUrl } from '../utils/whatsapp'
import ScrollReveal from './ScrollReveal'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-linen-warm border-t border-nude-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Kotak Undangan Akhir (Closing CTA Box): Headline Utama Tetap Serif Elegan */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center bg-nude-card rounded-3xl p-8 sm:p-12 border border-nude-border shadow-xs mb-16">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-caramel-light text-caramel mb-4">
              Waktunya Memanjakan Diri
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-moka mb-4">
              Siap Merasakan Relaksasi Istimewa di Rumah Hari Ini?
            </h2>
            <p className="text-xs sm:text-base text-moka-soft max-w-xl mx-auto mb-8 leading-relaxed">
              Biarkan kepenatan seharian berganti dengan kenyamanan sentuhan spa profesional. Hubungi kami untuk berkonsultasi mengenai perawatan terbaik bagi Anda.
            </p>
            <a
              href={getGeneralReservationUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold bg-caramel text-white hover:bg-caramel-dark transition-all shadow-md active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-caramel focus-visible:ring-offset-2"
            >
              <svg
                className="w-5 h-5 fill-current shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
              <span>Chat WhatsApp: 08996537070</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Informasi Brand & Tautan: Seragamkan tipografi dengan Sans-Serif Modern */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-nude-border/80 text-center md:text-left">
            {/* Kolom 1: Dahayu Home Spa (Sans-Serif seragam dengan kolom lainnya) */}
            <div>
              <h3 className="font-sans text-lg font-bold text-moka mb-3">
                Dahayu Home Spa
              </h3>
              <p className="text-xs sm:text-sm text-moka-soft leading-relaxed max-w-sm mx-auto md:mx-0">
                Layanan spa, pijat relaksasi tubuh, facial alami, pregnancy care, dan ratus tradisional panggilan ke rumah khusus wanita di Bangkalan dan sekitarnya.
              </p>
            </div>

            {/* Kolom 2: Jadwal & Layanan */}
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-moka mb-3">
                Jadwal & Layanan
              </h4>
              <ul className="text-xs sm:text-sm text-moka-soft space-y-2">
                <li>Setiap Hari: 09.00 sampai 17.00 WIB</li>
                <li>Wilayah: Bangkalan & Sekitarnya</li>
                <li>Terapis: Khusus Wanita Berpengalaman</li>
              </ul>
            </div>

            {/* Kolom 3: Hubungi Kami */}
            <div>
              <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-moka mb-3">
                Hubungi Kami
              </h4>
              <div className="flex flex-col items-center md:items-start space-y-2.5">
                <a
                  href={getGeneralReservationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-moka-soft hover:text-caramel transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-caramel rounded-sm"
                >
                  <span>WhatsApp:</span>
                  <span className="font-semibold text-moka">0899-6537-070</span>
                </a>

                <a
                  href="https://instagram.com/dahayu.homespa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-moka-soft hover:text-caramel transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-caramel rounded-sm"
                >
                  <span>Instagram:</span>
                  <span className="font-semibold text-moka">@dahayu.homespa</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Hak Cipta */}
        <div className="pt-8 text-center text-xs text-moka-light">
          <p>© {CURRENT_YEAR} Dahayu Home Spa. Seluruh Hak Cipta Dilindungi.</p>
          <p className="mt-1">Kenyamanan & Relaksasi Khusus Wanita di Rumah Anda.</p>
        </div>
      </div>
    </footer>
  )
}
