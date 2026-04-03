import { motion } from 'framer-motion'

export default function TransformOffer() {
  return (
    <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            A sua nova vida <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">começa com um passo.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Não deixe para amanhã a decisão que pode mudar <br className="hidden md:block" />
            o curso da sua história hoje.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.95 }}
            className="w-[70vw] md:w-full md:max-w-[400px] py-5 rounded-[999px] bg-white text-black font-extrabold text-xl 
                       shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] 
                       transition-all duration-300 relative overflow-hidden group"
            onClick={() => window.location.href = 'https://go.ironpayapp.com.br/nwjt60ww6j'}
          >
            <span className="relative z-10 uppercase tracking-wider">Quero mudar agora</span>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/50 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>
          
          <div className="flex flex-col items-center gap-2">
            <p className="text-zinc-500 text-xs font-semibold uppercase tracking-[0.2em] opacity-80">
              Pagamento Seguro • Acesso Imediato
            </p>
            <div className="w-12 h-0.5 bg-zinc-800 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-white/5 to-transparent pointer-events-none" />
    </section>
  )
}
