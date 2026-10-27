import { getGeneralReservationUrl } from '../utils/whatsapp'
import ScrollReveal from './ScrollReveal'

export default function ServiceArea() {
  const coverageAreas = [
    'Bangkalan Kota',
    'Kecamatan Kamal',
    'Kecamatan Socah',
    'Kecamatan Burneh',
    'Kecamatan Arosbaya',
    'Wilayah Sekitarnya'
  ]

  return (
    <section id="area-layanan" className="scroll-mt-20 py-16 sm:py-24 border-t border-nude-border/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-linen-warm/60 rounded-3xl border border-nude-border p-7 sm:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Kolom Kiri: Informasi Layanan */}
              <div>
                <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-caramel-light text-caramel mb-3.5">
                  Jangkauan Layanan
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-moka mb-4">
                  Area Layanan & Jam Operasional
                </h2>
                <p className="text-xs sm:text-sm text-moka-soft leading-relaxed mb-6">
                  Dahayu Home Spa siap melayani panggilan ke rumah, perumahan, indekos wanita, maupun penginapan di wilayah Bangkalan dan sekitarnya. Terapis kami hadir tepat waktu dengan perlengkapan lengkap.
                </p>

                <div className="space-y-4 mb-6">
                  {/* Jam Operasional */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-nude-card border border-nude-border flex items-center justify-center shrink-0 text-caramel">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-moka uppercase tracking-wider">
                        Jam Operasional
                      </p>
                      <p className="text-sm text-moka font-medium">
                        Setiap Hari: 09.00 sampai 17.00 WIB
                      </p>
                    </div>
                  </div>

                  {/* Waktu Reservasi */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-nude-card border border-nude-border flex items-center justify-center shrink-0 text-caramel">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-moka uppercase tracking-wider">
                        Waktu Pemesanan
                      </p>
                      <p className="text-sm text-moka font-medium">
                        Disarankan reservasi H-1 atau minimal 3 jam sebelumnya
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={getGeneralReservationUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-caramel hover:text-caramel-dark underline decoration-caramel/50 underline-offset-4 transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-caramel rounded-sm"
                >
                  <span>Tanyakan ketersediaan jadwal terapis di lokasi Anda</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* Kolom Kanan: Daftar Wilayah */}
              <div className="bg-nude-card rounded-2xl p-6 sm:p-7 border border-nude-border/80 shadow-2xs">
                <h3 className="font-sans text-base font-bold text-moka mb-2.5">
                  Titik Jangkauan Wilayah
                </h3>
                <p className="text-xs text-moka-soft mb-4">
                  Layanan spa panggilan tersedia untuk area berikut:
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {coverageAreas.map((area, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-linen-warm/80 border border-nude-border/60 text-xs font-medium text-moka"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-caramel shrink-0" aria-hidden="true" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-moka-light mt-4 italic">
                  * Untuk lokasi di luar area di atas, silakan hubungi admin kami via WhatsApp untuk pengecekan jarak dan rute terapis.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
