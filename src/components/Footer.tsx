import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-transparent text-white px-6 py-12 pb-20 overflow-hidden relative">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        
        {/* Garantia */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4 bg-zinc-900/40 rounded-3xl p-8 w-full shadow-2xl mb-16 backdrop-blur-sm"
        >
          <ShieldCheck className="w-12 h-12 text-zinc-400 mb-2" />
          <p className="text-zinc-500 font-medium text-lg leading-relaxed italic px-4">
            "Se isso não te ajudar a ter mais clareza e direção, você pode simplesmente desistir."
          </p>
        </motion.div>

        {/* Fechamento */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-xl font-bold tracking-tight text-zinc-500 mb-2">
            Nada muda sozinho.
          </p>
          <p className="text-2xl font-bold tracking-tight text-white">
            Mas tudo pode mudar <br/> com a <span className="border-b-2 border-zinc-500 pb-0.5">decisão certa.</span>
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
