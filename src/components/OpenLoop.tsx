import { motion } from 'framer-motion'

interface OpenLoopProps {
  text: string
  delay?: number
}

export default function OpenLoop({ text, delay = 0.2 }: OpenLoopProps) {
  return (
    <section className="py-24 md:py-32 flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay }}
        className="max-w-2xl"
      >
        <p className="text-2xl md:text-4xl font-light italic text-white/50 tracking-widest leading-relaxed">
          {text}
        </p>
      </motion.div>
    </section>
  )
}
