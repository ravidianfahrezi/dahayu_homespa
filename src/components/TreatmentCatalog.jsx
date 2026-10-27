import { useState } from 'react'
import { TREATMENT_CATEGORIES } from '../data/treatments'
import { getTreatmentInquiryUrl } from '../utils/whatsapp'
import ScrollReveal from './ScrollReveal'

const CATEGORY_IMAGES = {
  'paket-spa': {
    url: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80',
    alt: 'Perawatan spa dan pijat relaksasi tubuh tradisional'
  },
  'pregnancy-care': {
    url: 'https://images.unsplash.com/photo-1457342813143-a1ae27448a82?auto=format&fit=crop&w=900&q=80',
    alt: 'Perawatan relaksasi aman dan nyaman untuk ibu hamil'
  },
  'face-eye': {
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    alt: 'Perawatan kecantikan wajah alami dan lingkar mata'
  },
  'body-miss-v': {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    alt: 'Lulur rempah tradisional dan perawatan herbal kewanitaan'
  }
}

export default function TreatmentCatalog() {
  const [activeTab, setActiveTab] = useState(TREATMENT_CATEGORIES[0].id)
  const [expandedCards, setExpandedCards] = useState({})

  const activeCategory = TREATMENT_CATEGORIES.find((cat) => cat.id === activeTab) || TREATMENT_CATEGORIES[0]
  const currentImage = CATEGORY_IMAGES[activeTab] || CATEGORY_IMAGES['paket-spa']

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // Tata letak grid simetris:
  // - 5 item (pregnancy-care): 3 kartu di baris pertama, 2 kartu di tengah baris kedua (grid 6 kolom desktop), tidak ada ruang kosong ganjil di kanan
  // - 3 item (paket-spa): 3 kolom sejajar
  // - 4 item (face-eye, body-miss-v): 2x2 kolom seimbang
  const count = activeCategory.treatments.length
  const gridLayoutClass =
    count === 5
      ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8'
      : count === 3
      ? 'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8'
      : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8'

  const getItemSpanClass = (index, total) => {
    if (total === 5) {
      if (index < 3) {
        return 'lg:col-span-2'
      }
      if (index === 3) {
        return 'lg:col-span-2 lg:col-start-2'
      }
      if (index === 4) {
        return 'md:col-span-2 md:max-w-md md:mx-auto w-full lg:col-span-2 lg:max-w-none'
      }
    }
    return ''
  }

  return (
    <section id="treatment" className="scroll-mt-20 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tajuk Seksi: Serif khusus untuk Headline Utama */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-xs uppercase tracking-widest text-caramel font-semibold mb-2">
              Pilihan Perawatan
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-moka">
              Katalog Perawatan Dahayu
            </h2>
            <p className="text-sm sm:text-base text-moka-soft mt-3">
              Pilih perawatan yang sesuai dengan kebutuhan relaksasi Anda. Setiap sesi disiapkan secara higienis dengan bahan alami pilihan.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigasi Kategori */}
        <ScrollReveal delay={100}>
          <div
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8"
            role="tablist"
            aria-label="Kategori Perawatan"
          >
            {TREATMENT_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeTab
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`min-h-11 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-caramel ${
                    isActive
                      ? 'bg-caramel text-white shadow-xs'
                      : 'bg-nude-card text-moka-soft hover:bg-linen-warm hover:text-moka border border-nude-border/80'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Banner Visual Kategori: Lebar Penuh Simetris, Tinggi Ramping & Bebas Badge Berlebihan */}
        <ScrollReveal delay={150}>
          <div className="w-full mb-8 sm:mb-10">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-nude-border/80 bg-nude-card shadow-2xs">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                {/* Foto Suasana Kategori: Ramping & Proporsional */}
                <div className="md:col-span-4 lg:col-span-3 h-36 sm:h-40 md:h-44 relative overflow-hidden">
                  <img
                    src={currentImage.url}
                    alt={currentImage.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="400"
                    height="280"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-moka/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Deskripsi Kategori: Bersih, Alami, Tanpa Tempelan Badge */}
                <div className="md:col-span-8 lg:col-span-9 p-5 sm:p-6 md:p-7">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-moka mb-1.5 sm:mb-2">
                    {activeCategory.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-moka-soft leading-relaxed max-w-3xl">
                    {activeCategory.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Daftar Kartu Perawatan: Tinggi kartu sejajar dan rincian langkah ekspansi teratur tanpa celah kosong */}
        <div className={gridLayoutClass}>
          {activeCategory.treatments.map((treatment, index) => {
            const isExpanded = !!expandedCards[treatment.id]
            const spanClass = getItemSpanClass(index, count)

            return (
              <ScrollReveal
                key={treatment.id}
                delay={index * 80}
                className={spanClass}
              >
                <article className="bg-nude-card rounded-3xl border border-nude-border/90 p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow h-full">
                  <div>
                    {/* Badge & Durasi */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-caramel-light text-caramel">
                        {treatment.badge}
                      </span>
                      <span className="text-xs font-medium text-moka-light">
                        {treatment.duration}
                      </span>
                    </div>

                    {/* Nama Paket Perawatan: Tipografi Sans-Serif Modern & Proporsional */}
                    <h4 className="font-sans text-lg sm:text-xl font-bold text-moka mb-3 min-h-[3.25rem] flex items-center leading-snug">
                      {treatment.name}
                    </h4>

                    {/* Area Konten: Ringkasan atau Rincian Langkah dengan scroll halus jika panjang */}
                    <div className="min-h-[5.5rem] mb-4">
                      {!isExpanded ? (
                        <p className="text-xs sm:text-sm text-moka-soft leading-relaxed">
                          {treatment.summary}
                        </p>
                      ) : (
                        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                          <p className="text-[11px] uppercase font-bold tracking-wider text-caramel mb-1">
                            Tahapan Perawatan:
                          </p>
                          <ul className="space-y-1.5">
                            {treatment.steps.map((step, sIdx) => (
                              <li key={sIdx} className="flex items-start gap-2 text-xs text-moka-soft leading-relaxed">
                                <span className="w-4 h-4 rounded-full bg-linen-warm border border-nude-border flex items-center justify-center shrink-0 mt-0.5 text-caramel">
                                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Tombol Toggle Rincian Langkah */}
                    <div className="border-t border-nude-border/70 pt-3 mb-4">
                      <button
                        type="button"
                        onClick={() => toggleExpand(treatment.id)}
                        className="w-full flex items-center justify-between py-1.5 text-xs font-semibold text-moka hover:text-caramel transition-colors cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-caramel rounded-sm"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Kembali ke Ringkasan' : 'Lihat Rincian Langkah'}</span>
                        <svg
                          className={`w-4 h-4 text-caramel transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Tombol Aksi Sekunder Khusus Perawatan: Tanya via WhatsApp */}
                  <div className="pt-3 border-t border-nude-border/70">
                    <a
                      href={getTreatmentInquiryUrl(treatment.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold bg-linen-warm hover:bg-caramel hover:text-white border border-nude-border text-moka transition-all shadow-2xs active:scale-95 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-caramel"
                    >
                      <svg
                        className="w-3.5 h-3.5 fill-current shrink-0"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                      </svg>
                      <span>Tanya Treatment via WA</span>
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
