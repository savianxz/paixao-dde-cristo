import { motion } from 'framer-motion'

export default function PainSection() {
  return (
    <section className="py-48 px-6 relative overflow-hidden flex items-center justify-center min-h-[80vh] text-center bg-black">
      <div className="max-w-5xl mx-auto space-y-24">
        
        {/* Perception Layer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5 }}
          className="space-y-4"
        >
          <p className="text-3xl md:text-5xl font-light text-white/40 tracking-wider leading-relaxed italic">
            "A sensação no peito quando o silêncio chega."
          </p>
        </motion.div>

        {/* Denial Layer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="space-y-4"
        >
          <p className="text-3xl md:text-5xl font-light text-white/30 tracking-tight leading-relaxed line-through decoration-white/10">
            Você diz a si mesmo que está tudo bem.
          </p>
        </motion.div>

        {/* Confrontation Layer */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 2, delay: 1.8 }}
           className="space-y-6"
        >
          <p className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">
            Mas sabe que o tempo está acabando.
          </p>
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full mx-auto animate-pulse shadow-[0_0_10px_rgba(220,38,38,0.5)]" />
        </motion.div>
        
      </div>
    </section>
  )
}
