import { motion } from 'framer-motion'

export default function BeliefBreaker() {
  return (
    <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center bg-zinc-900/10">
      <div className="max-w-5xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-medium text-white/80 tracking-tight"
        >
          Não é falta de força.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-5xl font-medium text-white/80 tracking-tight"
        >
          Não é falta de fé.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tighter"
        >
          É falta de direção.
        </motion.div>
      </div>
    </section>
  )
}
