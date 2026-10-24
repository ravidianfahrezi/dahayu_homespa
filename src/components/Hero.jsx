import { getGeneralReservationUrl } from '../utils/whatsapp'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[300px] bg-caramel-light/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nude-card border border-nude-border text-xs sm:text-sm font-medium text-moka-soft mb-6 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-caramel animate-pulse" />
          <span>Home Service Khusus Wanita • Area Bangkalan</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-moka leading-tight sm:leading-tight mb-6">
          Sentuhan Relaksasi Spa Pilihan,{' '}
          <span className="italic font-normal text-caramel block sm:inline">
            Hadir di Ruang Ternyaman Rumah Anda.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-moka-soft leading-relaxed mb-8 sm:mb-10">
          Nikmati perawatan tubuh, pijat relaksasi tradisional, facial, hingga pregnancy care tanpa perlu repot keluar rumah, bermacet-macet, atau mengantre di salon. Cukup reservasi, terapis kami tiba membawa kenyamanan penuh untuk Anda.
        </p>

        {/* 2 CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-12">
          <a
            href={getGeneralReservationUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold bg-caramel text-white hover:bg-caramel-dark transition-all shadow-md active:scale-95"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            <span>Reservasi Sekarang</span>
          </a>

          <a
            href="#treatment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold bg-nude-card border border-nude-border text-moka hover:bg-linen-warm hover:border-caramel/40 transition-all shadow-2xs active:scale-95"
          >
            <span>Lihat Treatment</span>
            <svg
              className="w-4 h-4 text-caramel"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Spa Arch Silhouette Visual Card */}
        <div className="relative max-w-3xl mx-auto rounded-t-[100px] sm:rounded-t-[140px] rounded-b-3xl bg-linear-to-b from-linen-warm via-nude-card to-linen border border-nude-border/80 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <p className="font-serif text-2xl font-bold text-caramel">100%</p>
              <p className="text-xs sm:text-sm text-moka-soft mt-1">Khusus Wanita</p>
            </div>
            <div className="p-3">
              <p className="font-serif text-2xl font-bold text-caramel">Alat Steril</p>
              <p className="text-xs sm:text-sm text-moka-soft mt-1">Linen & Matras Bersih</p>
            </div>
            <div className="p-3">
              <p className="font-serif text-2xl font-bold text-caramel">Bangkalan</p>
              <p className="text-xs sm:text-sm text-moka-soft mt-1">& Sekitarnya</p>
            </div>
            <div className="p-3">
              <p className="font-serif text-2xl font-bold text-caramel">09:00 - 17:00</p>
              <p className="text-xs sm:text-sm text-moka-soft mt-1">Buka Setiap Hari</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
