import { getGeneralReservationUrl } from '../utils/whatsapp'

export default function Hero() {
  return (
    <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden">
      {/* Pendaran Hangat Latar Belakang (Atmospheric Warm Glow) */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[340px] sm:w-[700px] h-[360px] bg-caramel-light/50 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Kolom Teks & Aksi */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Judul Utama Puitis & Hangat */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-moka leading-tight sm:leading-tight mb-5">
              Sentuhan Relaksasi Spa,{' '}
              <span className="italic font-normal text-caramel block sm:inline">
                di Kenyamanan Rumah Anda.
              </span>
            </h1>

            {/* Sub-judul Hangat & Mengalir Menenangkan */}
            <p className="text-base sm:text-lg text-moka-soft leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
              Nikmati perawatan tubuh dan pijat relaksasi tanpa repot keluar rumah. Terapis wanita profesional kami hadir membawa matras bersih dan kehangatan aromaterapi langsung ke ruang pribadi Anda.
            </p>

            {/* Dua Tombol CTA Utama */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-8 sm:mb-10">
              <a
                href={getGeneralReservationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold bg-caramel text-white hover:bg-caramel-dark transition-all shadow-md active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-caramel focus-visible:ring-offset-2"
              >
                <svg
                  className="w-5 h-5 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
                <span>Reservasi Sekarang</span>
              </a>

              <a
                href="#treatment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-nude-card border border-nude-border text-moka hover:bg-linen-warm hover:border-caramel/40 transition-all shadow-2xs active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-caramel"
              >
                <span>Lihat Treatment</span>
              </a>
            </div>

            {/* Komitmen Kualitas: 3 Kolom Simetris yang Sejajar Sempurna di Desktop */}
            <div className="pt-6 sm:pt-7 border-t border-nude-border/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-2 lg:gap-3 xl:gap-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
                <div className="w-5 h-5 rounded-full bg-caramel-light border border-caramel/25 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-moka whitespace-nowrap">
                  Terapis Berpengalaman
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
                <div className="w-5 h-5 rounded-full bg-caramel-light border border-caramel/25 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-moka whitespace-nowrap">
                  Linen & Matras Steril
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
                <div className="w-5 h-5 rounded-full bg-caramel-light border border-caramel/25 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs sm:text-[13px] font-semibold text-moka whitespace-nowrap">
                  Privasi Ruang Terjaga
                </span>
              </div>
            </div>
          </div>

          {/* Kolom Visual: Komposisi Kubah Lengkung Berlapis (Layered Spa Arch) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md px-3 sm:px-0">
              {/* Bingkai Latar Dekoratif (Architectural Layering Accent) */}
              <div
                className="absolute -inset-2 sm:-inset-3.5 rounded-t-[5rem] sm:rounded-t-[7rem] rounded-b-3xl border-2 border-caramel/25 bg-linen-warm/60 -rotate-2 -z-10 transition-transform duration-500"
                aria-hidden="true"
              />

              {/* Bingkai Kubah Lengkung Utama (Main Spa Arch Frame) */}
              <div className="relative rounded-t-[4.5rem] sm:rounded-t-[6.5rem] rounded-b-3xl overflow-hidden shadow-2xl shadow-caramel/15 border-4 border-nude-card bg-nude-card aspect-4/5">
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80"
                  alt="Suasana relaksasi spa dan pemijatan profesional Dahayu Home Spa"
                  className="w-full h-full object-cover"
                  loading="eager"
                  width="800"
                  height="1000"
                />

                {/* Gradasi Lembut Latar Belakang Foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-moka/40 via-transparent to-transparent pointer-events-none" />

                {/* Kartu Mengambang Aksen Higienitas: Ringkas & Tidak Mengaburkan Foto */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 z-10 p-3 sm:p-3.5 rounded-2xl bg-linen/95 backdrop-blur-md border border-nude-border/90 shadow-md">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-caramel-light border border-caramel/30 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-moka">Standar Higienitas Terjaga</p>
                      <p className="text-[10px] sm:text-[11px] text-moka-soft leading-tight mt-0.5">Linen baru steril di setiap sesi perawatan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
