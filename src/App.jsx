import { Routes, Route } from 'react-router-dom'
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
import NicheLanding from './pages/NicheLanding'
import { niches } from './data/niches.jsx'

function MainLanding() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLanding />} />
      <Route path="/sistema-academico"        element={<NicheLanding niche={niches['sistema-academico']} />} />
      <Route path="/clinicas"                element={<NicheLanding niche={niches.clinicas} />} />
      <Route path="/restaurantes"            element={<NicheLanding niche={niches.restaurantes} />} />
      <Route path="/academias"               element={<NicheLanding niche={niches.academias} />} />
      <Route path="/servicios-profesionales" element={<NicheLanding niche={niches['servicios-profesionales']} />} />
      <Route path="/retail"                  element={<NicheLanding niche={niches.retail} />} />
    </Routes>
  )
}