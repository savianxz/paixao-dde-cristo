import Hero from './components/Hero'
import PainSection from './components/PainSection'
import BeliefBreaker from './components/BeliefBreaker'
import Testimonials from './components/Testimonials'
import Solution from './components/Solution'
import Confrontation from './components/Confrontation'
import TransformOffer from './components/TransformOffer'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="relative selection:bg-white selection:text-black">
      <Hero />
      <PainSection />
      <BeliefBreaker />
      <Testimonials />
      <Solution />
      <Confrontation />
      <TransformOffer />
      <Footer />
    </main>
  )
}
