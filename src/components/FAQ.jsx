import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      id: 'faq-1',
      question: 'Apa saja yang perlu saya siapkan di rumah sebelum terapis datang?',
      answer: 'Anda cukup menyediakan ruangan yang tenang dan nyaman, seperti kamar tidur atau ruang keluarga dengan sirkulasi udara atau pendingin ruangan yang pas. Seluruh matras lipat spa portabel, kain sprei bersih, handuk lembut, minyak aromaterapi, dan alat perawatan sudah dibawa lengkap oleh terapis kami.'
    },
    {
      id: 'faq-2',
      question: 'Bagaimana jaminan kebersihan alat, matras, dan kain linen yang digunakan?',
      answer: 'Higienitas adalah komitmen utama Dahayu Home Spa. Setiap pelanggan mendapatkan kain alas, sprei, dan handuk baru yang telah dicuci bersih dan higienis. Seluruh instrumen perawatan wajah maupun spa disterilisasi sebelum dikemas menuju rumah Anda.'
    },
    {
      id: 'faq-3',
      question: 'Bagaimana ketentuan dan metode pembayaran layanan home service?',
      answer: 'Pembayaran dilakukan dengan nyaman setelah seluruh tahapan perawatan selesai dinikmati. Kami menerima transfer bank non-tunai, QRIS, maupun pembayaran tunai langsung kepada terapis kami.'
    },
    {
      id: 'faq-4',
      question: 'Berapa lama sebelumnya saya sebaiknya melakukan reservasi jadwal?',
      answer: 'Kami menyarankan pemesanan dilakukan H-1 atau minimal 3 jam sebelumnya. Hal ini memastikan ketersediaan waktu terapis wanita kami serta memberikan waktu perjalanan yang aman menuju alamat rumah Anda di Bangkalan.'
    }
  ]

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-24 bg-linen-warm/40 border-t border-nude-border/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tajuk Seksi: Serif untuk Headline Utama */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-xs uppercase tracking-widest text-caramel font-semibold mb-2">
              Informasi Praktis
            </p>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-moka">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-sm text-moka-soft mt-3">
              Jawaban seputar persiapan dan kenyamanan layanan spa panggilan ke rumah.
            </p>
          </div>
        </ScrollReveal>

        {/* Daftar Accordion FAQ: Teks Pertanyaan Menggunakan Sans-Serif Modern */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <ScrollReveal key={faq.id} delay={index * 80}>
                <div className="bg-nude-card rounded-2xl border border-nude-border/80 overflow-hidden shadow-2xs transition-all">
                  <button
                    type="button"
                    id={`btn-${faq.id}`}
                    aria-controls={`panel-${faq.id}`}
                    aria-expanded={isOpen}
                    onClick={() => toggle(index)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-linen-warm/50 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-caramel"
                  >
                    <span className="font-sans text-base sm:text-lg font-semibold text-moka">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full bg-linen-warm border border-nude-border flex items-center justify-center text-caramel transition-all duration-300 ${
                        isOpen ? 'rotate-180 bg-caramel-light border-caramel/40 text-caramel-dark' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Panel Jawaban dengan Animasi Scroll Down / Dropdown Lembut Seperti di Navbar */}
                  <div
                    id={`panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`btn-${faq.id}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-moka-soft leading-relaxed border-t border-nude-border/40 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
