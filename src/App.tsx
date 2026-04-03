import Hero from './components/Hero'
import PainSection from './components/PainSection'
import BeliefBreaker from './components/BeliefBreaker'
import Solution from './components/Solution'
import TransformOffer from './components/TransformOffer'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="relative selection:bg-white selection:text-black bg-black">
      <Hero />
      <PainSection />
      <BeliefBreaker />
      
      {/* Spacer to give visual breathing room before Solution */}
      <section className="h-[100px] flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-12 opacity-10">
          <div className="w-[1px] h-32 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>
      
      <Solution />
      <TransformOffer />
      <Footer />
    </main>
  )
}
