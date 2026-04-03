import { motion } from 'framer-motion'

export default function TransformOffer() {
  return (
    <section className="py-64 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center bg-black min-h-screen">
      <div className="max-w-5xl mx-auto space-y-24 relative z-10">
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5 }}
           className="space-y-10"
        >
          <div className="w-1.5 h-1.5 bg-red-600/30 mx-auto rounded-full mb-12 shadow-[0_0_40px_rgba(220,38,38,0.2)]" />
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
            A decisão não <br className="hidden md:block" /> 
            é sobre hoje. <br />
            <span className="text-white/20 italic font-light lowercase">é sobre o que restou.</span>
          </h2>
          <p className="text-white/40 text-xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed italic tracking-wide">
            "Você pode fechar esta página e tentar esquecer. Mas a dúvida vai continuar lá. O peso vai continuar lá."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1 }}
          className="flex flex-col items-center gap-12"
        >
          {/* Psychological Urgency Warning */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="text-white/80 text-xl md:text-3xl font-medium tracking-[0.1em] uppercase"
          >
            Se você sair agora… <br className="md:hidden" />
            <span className="font-black text-white">vai continuar exatamente assim.</span>
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, filter: 'brightness(1.5)' }}
            whileTap={{ scale: 0.95 }}
            className="w-[90vw] md:w-full md:max-w-[650px] py-10 rounded-full bg-white text-black font-black text-2xl 
                       shadow-[0_0_100px_rgba(255,255,255,0.2)] hover:shadow-[0_0_150px_rgba(255,255,255,0.4)] 
                       transition-all duration-700 relative overflow-hidden group uppercase tracking-[0.3em]"
            onClick={() => window.location.href = 'https://go.ironpayapp.com.br/nwjt60ww6j'}
          >
            <span className="relative z-10">Parar de ignorar isso agora</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>
          
          <div className="flex flex-col items-center gap-6 opacity-30 group/cta cursor-default">
             <div className="flex items-center gap-6">
                <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse group-hover/cta:scale-150 transition-transform" />
                <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white">
                   ÚLTIMA CHANCE DE ENTENDER
                </p>
             </div>
             <p className="text-[9px] text-white max-w-[320px] uppercase tracking-widest font-bold leading-loose">
                Seu ciclo de silêncio termina no momento em que você decide olhar a verdade nos olhos.
             </p>
          </div>
        </motion.div>
      </div>

      {/* Extreme Radial Gradient for focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-white/[0.05] to-transparent pointer-events-none" />
    </section>
  )
}
