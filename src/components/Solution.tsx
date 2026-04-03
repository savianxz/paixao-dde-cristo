import { motion } from 'framer-motion'
import { Eye, Shield, Map, Compass } from 'lucide-react'

export default function Solution() {
  const discoveries = [
    { text: "A raiz real da sua estagnação.", sub: "Não é preguiça. É um bloqueio sistêmico.", icon: <Eye className="w-5 h-5" /> },
    { text: "O mapa para a saída definitiva.", sub: "Como romper o ciclo sem depender de força de vontade.", icon: <Map className="w-5 h-5" /> },
    { text: "Proteção contra recaídas emocionais.", sub: "O escudo mental que você nunca teve.", icon: <Shield className="w-5 h-5" /> },
    { text: "Sua nova bússola espiritual.", sub: "Clareza absoluta para seus próximos passos.", icon: <Compass className="w-5 h-5" /> },
  ]

  return (
    <section className="py-32 px-6 md:px-10 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-xl w-full relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center space-y-6"
        >
          <div className="w-12 h-1 bg-white/10 mx-auto rounded-full" />
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-white leading-tight">
             O que você vai <br/> <span className="text-white/40 italic">ver lá dentro…</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {discoveries.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.8 }}
              className="group flex gap-8 p-1 items-start transition-all"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-white/[0.08] transition-all transform group-hover:rotate-6 shadow-xl shadow-black">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-bold text-xl tracking-tight leading-none group-hover:text-white/90 transition-colors">
                  {item.text}
                </h3>
                <p className="text-white/40 text-sm font-light italic">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-12 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, filter: 'brightness(1.2)' }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-white text-black font-black text-lg rounded-full shadow-[0_0_50px_rgba(255,255,255,0.1)] uppercase tracking-[0.2em] transition-all hover:shadow-[0_0_80px_rgba(255,255,255,0.2)]"
            onClick={() => window.location.href = 'https://go.ironpayapp.com.br/nwjt60ww6j'}
          >
            Ver antes que você ignore de novo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
