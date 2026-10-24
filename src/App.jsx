import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import TreatmentCatalog from './components/TreatmentCatalog'
import HowToBook from './components/HowToBook'
import ServiceArea from './components/ServiceArea'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen bg-linen text-moka flex flex-col font-sans selection:bg-caramel-light selection:text-caramel-dark">
      <Navbar />
      <main className="grow">
        <Hero />
        <Features />
        <TreatmentCatalog />
        <HowToBook />
        <ServiceArea />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
