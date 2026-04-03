import { motion } from 'framer-motion'

const testimonials = [
  { id: 1, img: '/img/depoimentos01.png' },
  { id: 2, img: '/img/depoimentos02.png' },
  { id: 3, img: '/img/Depoimentos03.png' },
  { id: 4, img: '/img/Depoimentos04.png' },
  { id: 5, img: '/img/depoimentos05.png' },
]

export default function Testimonials() {
  // Duplicate testimonials for perfect infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] flex flex-col items-center">
      
      {/* Title with Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-24 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          Relatos de quem já percebeu
        </h2>
        <div className="w-16 h-1 bg-white/20 mx-auto mt-6 rounded-full" />
      </motion.div>

      {/* Infinite Scroll Wrapper */}
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
              <div className="relative rounded-2xl overflow-hidden glass-card border border-white/5 bg-white/[0.04] backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:brightness-[1.1] hover:shadow-[0_0_40px_rgba(255,255,255,0.06)] group/card">
                {/* Dark Overlay inside card */}
                <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none group-hover/card:bg-transparent transition-colors duration-500" />
                
                <img
                  src={item.img}
                  alt={`Depoimento ${item.id}`}
                  className="w-full h-auto object-cover rounded-2xl"
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
          animation: scroll 40s linear infinite;
        }

        .scroll-container:hover {
          animation-play-state: paused;
        }

        .glass-card {
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.03);
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 25s; /* Faster for mobile feeling */
          }
        }
      ` }} />
    </section>
  )
}
