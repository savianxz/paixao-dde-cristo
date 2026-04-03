import Hero from './components/Hero'
import PainSection from './components/PainSection'
import BeliefBreaker from './components/BeliefBreaker'
import Testimonials from './components/Testimonials'
import Solution from './components/Solution'
import Confrontation from './components/Confrontation'
import TransformOffer from './components/TransformOffer'
import Footer from './components/Footer'
import OpenLoop from './components/OpenLoop'
import StrategicQuiz from './components/StrategicQuiz'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <main className="relative selection:bg-white selection:text-black bg-black">
      <Hero />
      
      {/* High-Impact Post-Hero Section */}
      <section className="h-[100vh] flex items-center justify-center text-center px-6 pointer-events-none">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2 }}
          className="text-2xl md:text-5xl font-light italic text-white tracking-[0.2em] leading-relaxed"
        >
          Você já percebeu isso… <br className="md:hidden" /> 
          e escolheu ignorar.
        </motion.p>
      </section>

      <OpenLoop text="Não foi coincidência." />
      
      <PainSection />
      
      <OpenLoop text="Você sabe exatamente do que isso está falando." />
      
      <StrategicQuiz />
      
      <BeliefBreaker />
      
      <OpenLoop text="Agora não dá mais." />
      
      {/* Silence Section / Dead Space */}
      <section className="h-[100vh] flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-12 opacity-10">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
          <div className="w-[1px] h-48 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>
      
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
