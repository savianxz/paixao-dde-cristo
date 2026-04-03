import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden px-4 md:px-0">
      {/* Video Container */}
      <div className="relative w-full h-full max-w-[1400px] mx-auto overflow-hidden rounded-[0rem] md:rounded-[3rem] shadow-2xl shadow-black/95 bg-black border-x border-white/5">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover grayscale-[0.3] brightness-[0.6]"
        >
          <source src="/img/vsl.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

        {/* Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center py-20 px-8 text-center text-white space-y-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="space-y-6 max-w-4xl"
          >
            <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] tracking-tighter drop-shadow-2xl">
              Você sente… <br />
              <span className="text-white/60">mas nunca entendeu isso.</span>
            </h1>
            
            <p className="text-lg md:text-2xl font-light text-white/50 max-w-2xl mx-auto italic leading-relaxed">
              Tem algo acontecendo na sua vida que você já percebeu, <br className="hidden md:block" /> 
              mas preferiu enterrar em silêncio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative"
          >
            <motion.button 
              whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-black font-black text-lg rounded-full shadow-[0_0_50px_rgba(255,255,255,0.15)] uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] pointer-events-auto cursor-pointer"
              onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
            >
              VER AGORA
            </motion.button>
          </motion.div>
        </div>

        {/* Video progress/status aesthetic */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 opacity-30 pointer-events-none">
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">LIVE SESSION • ENCRYPTED</span>
        </div>
      </div>
    </section>
  )
}
