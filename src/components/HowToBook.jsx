import { getGeneralReservationUrl } from '../utils/whatsapp'

export default function HowToBook() {
  const steps = [
    {
      num: '01',
      title: 'Hubungi WhatsApp',
      desc: 'Klik tombol reservasi untuk terhubung langsung dengan admin kami di WhatsApp 08996537070.'
    },
    {
      num: '02',
      title: 'Pilih Perawatan',
      desc: 'Konsultasikan kebutuhan relaksasi Anda dan tentukan paket perawatan spa yang diinginkan.'
    },
    {
      num: '03',
      title: 'Tentukan Waktu & Lokasi',
      desc: 'Atur tanggal, jam sesi spa, dan bagikan titik lokasi rumah Anda di wilayah Bangkalan.'
    },
    {
      num: '04',
      title: 'Terapis Tiba di Rumah',
      desc: 'Terapis wanita kami hadir membawa seluruh perlengkapan, matras, dan produk spa higienis.'
    }
  ]

  return (
    <section id="cara-reservasi" className="py-16 sm:py-24 bg-linen-warm/40 border-t border-nude-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-caramel font-semibold mb-2">
            Alur Pemesanan
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-moka">
            4 Langkah Mudah Menikmati Spa di Rumah
          </h2>
          <p className="text-sm sm:text-base text-moka-soft mt-3">
            Tanpa aplikasi rumit, pemesanan dapat dilakukan secara langsung dan ramah via chat WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-nude-card rounded-2xl p-6 border border-nude-border/80 shadow-2xs relative flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-extrabold text-caramel/70 block mb-4">
                  {step.num}
                </span>
                <h3 className="font-serif text-lg font-bold text-moka mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-moka-soft leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-10">
          <a
            href={getGeneralReservationUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-caramel text-white hover:bg-caramel-dark transition-all shadow-md active:scale-95"
          >
            <span>Reservasi Jadwal Sekarang</span>
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
