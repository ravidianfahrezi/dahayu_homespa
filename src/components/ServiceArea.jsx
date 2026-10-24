import { getGeneralReservationUrl } from '../utils/whatsapp'

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
    <section id="area-layanan" className="py-16 sm:py-20 border-t border-nude-border/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-br from-nude-card via-linen-warm to-nude-card rounded-3xl border border-nude-border p-7 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-caramel-light text-caramel mb-3">
                Jangkauan Layanan
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-moka mb-4">
                Area Layanan & Jam Operasional
              </h2>
              <p className="text-xs sm:text-sm text-moka-soft leading-relaxed mb-6">
                Dahayu Home Spa siap melayani panggilan ke rumah, perumahan, indekos wanita, maupun penginapan di wilayah Bangkalan dan sekitarnya. Terapis kami hadir tepat waktu dengan perlengkapan lengkap.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-linen-warm border border-nude-border flex items-center justify-center shrink-0">
                    <span className="text-caramel text-sm">🕒</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-moka uppercase tracking-wider">
                      Jam Operasional
                    </p>
                    <p className="text-sm text-moka font-medium">
                      Setiap Hari: 09:00 – 17:00 WIB
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-linen-warm border border-nude-border flex items-center justify-center shrink-0">
                    <span className="text-caramel text-sm">📅</span>
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
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-caramel hover:text-caramel-dark underline decoration-caramel/50 underline-offset-4 transition-colors"
              >
                Tanyakan ketersediaan jadwal terapis di lokasi Anda →
              </a>
            </div>

            {/* Right List of Coverage Pills */}
            <div className="bg-linen/80 rounded-2xl p-6 border border-nude-border/70">
              <h3 className="font-serif text-base font-bold text-moka mb-3">
                Titik Jangkauan Wilayah
              </h3>
              <p className="text-xs text-moka-soft mb-4">
                Layanan spa panggilan tersedia untuk area berikut:
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {coverageAreas.map((area, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-nude-card/70 border border-nude-border/50 text-xs font-medium text-moka"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
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
      </div>
    </section>
  )
}
