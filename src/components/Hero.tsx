import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden px-4 md:px-0">
      {/* Video Container */}
      <div className="relative w-full h-full max-w-[1200px] mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl shadow-black/90 border border-white/5 bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/img/vsl.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Text Overlays */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-between py-16 px-6 text-center text-white pointer-events-none pb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold drop-shadow-md tracking-tight opacity-90">
              Você já tentou mudar…
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] drop-shadow-2xl">
              E mesmo assim… <br />
              <span className="text-white/90">nada mudou.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold drop-shadow-md tracking-tight opacity-90">
              E no fundo… você sabe o porquê.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
