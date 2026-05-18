import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import PainSection from './components/PainSection/PainSection'
import ProductAcademico from './components/ProductAcademico/ProductAcademico'
import ProductGeneradorIA from './components/ProductGeneradorIA/ProductGeneradorIA'
import HowWeWork from './components/HowWeWork/HowWeWork'
import Niches from './components/Niches/Niches'
import WhyNexio from './components/WhyNexio/WhyNexio'
import ContactSection from './components/ContactSection/ContactSection'
import Footer from './components/Footer/Footer'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <ProductAcademico />
        <ProductGeneradorIA />
        <HowWeWork />
        <Niches />
        <WhyNexio />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
