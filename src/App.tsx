import Hero from './components/Hero'
import PainSection from './components/PainSection'
import BeliefBreaker from './components/BeliefBreaker'
import Testimonials from './components/Testimonials'
import Solution from './components/Solution'
import Confrontation from './components/Confrontation'
import TransformOffer from './components/TransformOffer'
import Footer from './components/Footer'
import OpenLoop from './components/OpenLoop'

export default function App() {
  return (
    <main className="relative selection:bg-white selection:text-black bg-black">
      <Hero />
      
      <OpenLoop text="Não foi coincidência." />
      
      <PainSection />
      
      <OpenLoop text="Você ignorou isso." />
      
      <BeliefBreaker />
      
      <OpenLoop text="Mas continua acontecendo." />
      
      <Testimonials />
      
      <div className="py-20 flex justify-center opacity-30">
        <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
      </div>

      <Solution />
      
      <Confrontation />
      
      <TransformOffer />
      
      <Footer />
    </main>
  )
}
