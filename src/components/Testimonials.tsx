import { motion } from 'framer-motion'

const testimonials = [
  { id: 1, img: '/img/depoimentos01.png' },
  { id: 2, img: '/img/depoimentos02.png' },
  { id: 3, img: '/img/Depoimentos03.png' },
  { id: 4, img: '/img/Depoimentos04.png' },
  { id: 5, img: '/img/depoimentos05.png' },
]

export default function Testimonials() {
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] flex flex-col items-center">
      
      {/* Title with Discovery Tone */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all">
          O momento em que tudo fez sentido.
        </h2>
        <div className="w-16 h-1 bg-white/20 mx-auto mt-6 rounded-full" />
        <p className="text-white/40 text-sm mt-4 font-light tracking-[0.2em] uppercase">Relatos de quem atravessou o véu</p>
      </motion.div>

      {/* Infinite Scroll Wrapper with enhanced glassmorphism */}
      <div className="w-full max-w-[1400px] overflow-hidden relative group">
        <div 
          className="flex gap-6 animate-scroll scroll-container"
          style={{ width: 'fit-content' }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index % testimonials.length) * 0.1 }}
              className="w-[85vw] md:w-[calc(33.333%-1rem)] flex-shrink-0 snap-center"
            >
              <div className="relative rounded-2xl overflow-hidden glass-card border border-white/5 bg-white/[0.04] backdrop-blur-md transition-all duration-700 hover:scale-[1.02] hover:brightness-[1.1] hover:shadow-[0_0_60px_rgba(255,255,255,0.08)] group/card cursor-pointer">
                {/* Dark Overlay inside card */}
                <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none group-hover/card:bg-transparent transition-colors duration-700" />
                
                <img
                  src={item.img}
                  alt={`Relato ${item.id}`}
                  className="w-full h-auto object-cover rounded-2xl grayscale-[0.5] group-hover/card:grayscale-0 transition-all duration-1000"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .scroll-container:hover {
          animation-play-state: paused;
        }

        .glass-card {
          box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 35s;
          }
        }
      ` }} />
    </section>
  )
}
