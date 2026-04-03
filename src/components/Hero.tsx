import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden px-4 md:px-0 bg-black">
      {/* Video Container with dramatic aspect */}
      <div className="relative w-full h-full max-w-[1600px] mx-auto overflow-hidden bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover grayscale brightness-[0.4]"
        >
          <source src="/img/vsl.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Gradient Overlay for intense atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center py-20 px-8 text-center text-white space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 max-w-5xl"
          >
            <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter drop-shadow-2xl">
              Você já tentou mudar. <br />
              <span className="text-white/30 italic">E falhou. De novo.</span>
            </h1>
            
            <p className="text-xl md:text-3xl font-light text-white/40 max-w-2xl mx-auto italic leading-relaxed tracking-wide">
              Chegou a hora de parar de mentir para si mesmo e enfrentar o que te paralisa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="relative"
          >
            <motion.button 
              whileHover={{ scale: 1.02, filter: 'brightness(1.5)' }}
              whileTap={{ scale: 0.98 }}
              className="px-16 py-7 bg-white text-black font-black text-xl rounded-full shadow-[0_0_100px_rgba(255,255,255,0.2)] uppercase tracking-[0.3em] transition-all duration-500 hover:shadow-[0_0_150px_rgba(255,255,255,0.4)] cursor-pointer group overflow-hidden relative"
              onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
            >
              <span className="relative z-10">VER O QUE ESTÁ ME TRAVANDO</span>
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.button>
          </motion.div>
        </div>

        {/* Sensory indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6 opacity-20 hover:opacity-100 transition-opacity duration-1000">
          <div className="h-[1px] w-24 bg-white/50" />
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-white whitespace-nowrap">OBSERVE O SILÊNCIO</span>
          <div className="h-[1px] w-24 bg-white/50" />
        </div>
      </div>
    </section>
  )
}
