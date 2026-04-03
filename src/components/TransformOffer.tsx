import { motion } from 'framer-motion'

export default function TransformOffer() {
  return (
    <section className="py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="space-y-6"
        >
          <div className="w-12 h-1 bg-white/10 mx-auto rounded-full mb-8" />
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-[1.05]">
            A decisão não é técnica. <br />
            <span className="text-white/40 font-light italic">É espiritual.</span>
          </h2>
          <p className="text-white/30 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed italic">
            "Você pode fechar esta página e tentar esquecer. Mas a dúvida vai continuar lá. O peso vai continuar lá."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-10"
        >
          <motion.button
            whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
            whileTap={{ scale: 0.95 }}
            className="w-[85vw] md:w-full md:max-w-[450px] py-6 rounded-full bg-white text-black font-black text-2xl 
                       shadow-[0_0_60px_rgba(255,255,255,0.15)] hover:shadow-[0_0_100px_rgba(255,255,255,0.3)] 
                       transition-all duration-500 relative overflow-hidden group uppercase tracking-[0.25em]"
            onClick={() => window.location.href = 'https://go.ironpayapp.com.br/nwjt60ww6j'}
          >
            <span className="relative z-10">Não ignorar mais</span>
            {/* Liquid Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>
          
          <div className="flex flex-col items-center gap-4 opacity-40">
             <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">
                  ÚLTIMA CHANCE DE ENTENDER
                </p>
             </div>
             <p className="text-[9px] text-white max-w-[280px] uppercase tracking-widest font-light leading-loose">
               Seu ciclo de silêncio termina no momento em que você decide olhar a verdade nos olhos.
             </p>
          </div>
        </motion.div>
      </div>

      {/* Extreme Radial Gradient for focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-white/[0.03] to-transparent pointer-events-none" />
    </section>
  )
}
