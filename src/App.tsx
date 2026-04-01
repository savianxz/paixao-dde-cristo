import Hero from './components/Hero'
import PainSection from './components/PainSection'
import BeliefBreaker from './components/BeliefBreaker'
import Solution from './components/Solution'
import Confrontation from './components/Confrontation'
import TransformOffer from './components/TransformOffer'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="relative selection:bg-orange-500 selection:text-white">
      <Hero />
      <PainSection />
      <BeliefBreaker />
      <Solution />
      <Confrontation />
      <TransformOffer />
      <Footer />
    </main>
  )
}
