import { motion } from 'framer-motion'

export default function BeliefBreaker() {
  return (
    <section className="py-48 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center bg-black">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2 }}
           className="space-y-6"
        >
          <div className="w-1.5 h-1.5 bg-white/20 mx-auto rounded-full mb-8 shadow-[0_0_20px_rgba(255,255,255,0.05)]" />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-widest leading-[1.05] uppercase">
            Onde o desabafo termina… <br />
            <span className="text-white/30 italic font-light lowercase">e o confronto começa.</span>
          </h2>
        </motion.div>

        <div className="space-y-12 relative">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, delay: 0.8 }}
             className="text-2xl md:text-4xl font-light text-white/50 tracking-wide italic"
          >
            "Não foi a falta de recursos que te trouxe aqui."
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, delay: 1.5 }}
             className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Foi a falta de coragem <br className="hidden md:block" /> 
            de olhar para o que dói.
          </motion.div>
        </div>

        {/* Sensory indicator */}
        <div className="absolute top-[40%] right-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-[60%] left-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  )
}
