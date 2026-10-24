export default function Features() {
  const features = [
    {
      title: 'Terapis Wanita Berpengalaman',
      desc: 'Seluruh tim terapis adalah wanita yang terlatih, ramah, dan berpengalaman dalam teknik pemijatan tradisional serta perawatan kecantikan modern.',
      icon: (
        <svg className="w-6 h-6 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Higienis & Perlengkapan Steril',
      desc: 'Kami membawa matras spa portabel, kain alas bersih baru terbungkus rapi, serta instrumen perawatan yang telah disterilkan sebelum digunakan di rumah Anda.',
      icon: (
        <svg className="w-6 h-6 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Produk Alami & Berkualitas',
      desc: 'Menggunakan racikan lulur rempah tradisional khas nusantara, minyak aromaterapi murni yang menenangkan, serta produk perawatan yang aman bagi kulit sensitif dan ibu hamil.',
      icon: (
        <svg className="w-6 h-6 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v13m0-13V4m0 4a4 4 0 00-4 4v9a4 4 0 004-4m0-9a4 4 0 014 4v9a4 4 0 01-4-4" />
        </svg>
      )
    },
    {
      title: 'Privasi & Kenyamanan Penuh',
      desc: 'Waktu relaksasi Anda seutuhnya terlindungi di dalam kehangatan rumah sendiri. Tidak perlu lelah di jalan, berdandan tergesa-gesa, atau menunggu giliran di salon.',
      icon: (
        <svg className="w-6 h-6 text-caramel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ]

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-linen-warm/50 border-y border-nude-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-caramel font-semibold mb-2">
            Mengapa Memilih Kami
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-moka">
            Kenyamanan Maksimal, Kepercayaan Utama
          </h2>
          <p className="text-sm sm:text-base text-moka-soft mt-3">
            Setiap sentuhan dirancang untuk memberi Anda pengalaman spa yang tenang, bersih, dan berharga di rumah.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => (
            <div
              key={index}
              className="bg-nude-card/90 rounded-2xl p-6 border border-nude-border/80 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-linen-warm border border-nude-border flex items-center justify-center mb-5">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-moka mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-moka-soft leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
