import { motion } from 'framer-motion'
import { useState } from 'react'

const testimonials = [
  { id: 1, img: '/img/depoimentos01.png' },
  { id: 2, img: '/img/depoimentos02.png' },
  { id: 3, img: '/img/Depoimentos03.png' },
  { id: 4, img: '/img/Depoimentos04.png' },
  { id: 5, img: '/img/depoimentos05.png' },
]

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false)
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section className="py-48 px-4 relative overflow-hidden bg-black flex flex-col items-center">
      
      {/* Title with Confrontation Tone */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-center mb-24 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-[0.2em] uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]">
          "Me pegou de um jeito que eu não esperava."
        </h2>
        <p className="text-white/20 text-xs mt-6 font-bold tracking-[0.6em] uppercase">Testemunhas do confronto interno</p>
      </motion.div>

      {/* Infinite Scroll Wrapper with non-linear motion */}
      <div className="w-full max-w-[1800px] overflow-hidden relative group">
        <div 
          className={`flex gap-8 animate-scroll-variable ${isPaused ? 'paused' : ''}`}
          style={{ width: 'fit-content' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {duplicatedTestimonials.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className="w-[85vw] md:w-[450px] flex-shrink-0"
            >
              <div className="relative rounded-3xl overflow-hidden glass-card border border-white/5 bg-white/[0.02] backdrop-blur-3xl transition-all duration-1000 hover:scale-[1.01] hover:brightness-[1.2] group/card">
                {/* Dark Overlay inside card */}
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none group-hover/card:bg-black/10 transition-colors duration-1000" />
                
                <img
                  src={item.img}
                  alt={`Relato ${item.id}`}
                  className="w-full h-auto object-cover rounded-3xl grayscale brightness-[0.7] group-hover/card:grayscale-0 group-hover/card:brightness-100 transition-all duration-1000"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-variable {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .animate-scroll-variable {
          animation: scroll-variable 60s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        .paused {
          animation-play-state: paused !important;
        }

        .glass-card {
          box-shadow: inset 0 0 80px rgba(255, 255, 255, 0.02), 0 20px 40px rgba(0,0,0,0.4);
        }

        @media (max-width: 768px) {
          .animate-scroll-variable {
            animation-duration: 40s;
          }
        }
      ` }} />
    </section>
  )
}
