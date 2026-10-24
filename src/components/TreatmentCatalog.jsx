import { useState } from 'react'
import { TREATMENT_CATEGORIES } from '../data/treatments'
import { getTreatmentInquiryUrl } from '../utils/whatsapp'

export default function TreatmentCatalog() {
  const [activeTab, setActiveTab] = useState(TREATMENT_CATEGORIES[0].id)
  const [expandedCards, setExpandedCards] = useState({})

  const activeCategory = TREATMENT_CATEGORIES.find((cat) => cat.id === activeTab) || TREATMENT_CATEGORIES[0]

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <section id="treatment" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs uppercase tracking-widest text-caramel font-semibold mb-2">
            Pilihan Perawatan
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-moka">
            Katalog Perawatan Dahayu
          </h2>
          <p className="text-sm sm:text-base text-moka-soft mt-3">
            Pilih perawatan yang sesuai dengan kebutuhan relaksasi Anda. Setiap sesi disiapkan dengan higienis dan bahan alami pilihan.
          </p>
        </div>

        {/* Category Tabs (Horizontal Scroll on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 pb-3 mb-8">
          {TREATMENT_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeTab
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
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

        {/* Category Brief */}
        <div className="max-w-xl mx-auto text-center mb-8">
          <p className="text-xs sm:text-sm text-moka-soft italic bg-linen-warm/60 px-4 py-2 rounded-xl border border-nude-border/50">
            {activeCategory.description}
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.treatments.map((item) => {
            const isExpanded = !!expandedCards[item.id]

            return (
              <div
                key={item.id}
                className="bg-nude-card rounded-3xl border border-nude-border/80 p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-linen-warm text-caramel border border-nude-border/60">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-medium text-moka-light">
                      ⏱ {item.duration}
                    </span>
                  </div>

                  {/* Title & Arch Decorative Line */}
                  <h3 className="font-serif text-xl font-bold text-moka mb-2">
                    {item.name}
                  </h3>

                  <div className="w-10 h-0.5 bg-caramel/40 rounded-full mb-3" />

                  {/* Short Summary */}
                  <p className="text-xs sm:text-sm text-moka-soft leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {/* Expand / Collapse Toggle for Steps */}
                  <div className="pt-2 border-t border-nude-border/60">
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      className="w-full flex items-center justify-between text-xs font-semibold text-caramel hover:text-caramel-dark py-2 transition-colors cursor-pointer"
                    >
                      <span>
                        {isExpanded ? 'Tutup Rincian Langkah' : 'Lihat Rincian Langkah Perawatan'}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
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
                    </button>

                    {/* Step Details List */}
                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-nude-border/40 space-y-2.5 transition-all">
                        <p className="text-[11px] uppercase tracking-wider font-bold text-moka-soft">
                          Tahapan Perawatan:
                        </p>
                        <ul className="space-y-2">
                          {item.steps.map((step, sIdx) => (
                            <li
                              key={sIdx}
                              className="text-xs text-moka flex items-start gap-2 leading-relaxed"
                            >
                              <span className="text-caramel font-bold text-xs mt-0.5">•</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Secondary Action: Tanya Treatment via WA */}
                <div className="mt-5 pt-3">
                  <a
                    href={getTreatmentInquiryUrl(item.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-linen-warm hover:bg-caramel-light border border-nude-border text-moka hover:text-caramel-dark transition-all active:scale-98 shadow-2xs"
                  >
                    <svg
                      className="w-4 h-4 fill-caramel"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                    </svg>
                    <span>Tanya Treatment via WA</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
