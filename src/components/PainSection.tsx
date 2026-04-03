import { motion } from 'framer-motion'

export default function PainSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden flex items-center justify-center min-h-[60vh] text-center">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6 md:space-y-10"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 tracking-tight leading-relaxed">
            Você acorda sem vontade.
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 tracking-tight leading-relaxed">
            Promete que vai mudar.
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-snug">
            Mas tudo continua igual.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
