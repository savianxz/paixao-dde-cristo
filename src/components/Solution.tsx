import { motion } from 'framer-motion'
import { Target, Zap, Milestone, ArrowUpRight } from 'lucide-react'

export default function Solution() {
  const benefits = [
    { text: "Clareza total do que fazer", icon: <Target className="w-5 h-5" /> },
    { text: "Sistema simples contra procrastinação", icon: <Zap className="w-5 h-5" /> },
    { text: "Direção prática para o dia a dia", icon: <Milestone className="w-5 h-5" /> },
    { text: "Saída do ciclo de tentativa e erro", icon: <ArrowUpRight className="w-5 h-5" /> },
  ]

  return (
    <section className="py-24 px-6 md:px-10 relative overflow-hidden flex flex-col items-center">
      <div className="max-w-xl w-full relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-xs font-bold">
            O Método
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Protocolo de <br/> Saída do Ciclo
          </h2>
          <div className="w-12 h-1 bg-white/20 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <span className="text-zinc-300 font-medium text-lg">
                {benefit.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
