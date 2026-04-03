import { motion } from 'framer-motion'

export default function Confrontation() {
  return (
    <section className="py-24 px-6 md:px-10 overflow-hidden relative flex flex-col items-center">
      <div className="max-w-xl w-full text-center flex flex-col items-center space-y-16">
        
        {/* Visual Cue */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5"
        >
          <img 
            src="/img/criativo1.png" 
            alt="Decisão Crucial" 
            className="w-full h-full object-cover grayscale brightness-[0.7] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-0 w-full px-6">
            <p className="text-xl md:text-2xl font-medium text-white italic drop-shadow-lg">
              "Todo recomeço começa <br/>com uma decisão."
            </p>
          </div>
        </motion.div>

        {/* Strong Confrontation Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter text-white">
            Se você continuar <span className="text-zinc-500 font-extrabold uppercase text-2xl md:text-4xl block mt-2">assim…</span>
          </h2>
          <p className="text-2xl md:text-3xl font-light text-zinc-400 leading-relaxed">
            daqui a <span className="font-bold text-white uppercase tracking-wider">1 ano</span>, <br/>
            sua vida estará exatamente no mesmo lugar.
          </p>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[320px] bg-white text-black font-extrabold text-lg py-5 rounded-full shadow-2xl transition-all hover:scale-[1.03] active:scale-95 uppercase tracking-widest"
          onClick={() => window.location.href = 'https://go.ironpayapp.com.br/nwjt60ww6j'}
        >
          Sair do ciclo agora
        </motion.button>
      </div>
    </section>
  )
}
