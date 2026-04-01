import { motion } from 'framer-motion';

export default function TransformOffer() {
  return (
    <section className="bg-transparent text-white px-6 py-20 pb-16 overflow-hidden relative">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        
        {/* CRIATIVO 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex items-center justify-center aspect-[4/5] rounded-2xl overflow-hidden shadow-xl mb-12 shadow-[0_30px_60px_rgba(0,0,0,0.15)] bg-transparent"
        >
          {/* Imagem Placeholder Homing/Transformação Claro */}
          <img 
            src="../public/img/criativo2.png" 
            alt="Nascer do Sol - Transformação" 
            className="w-full h-full object-cover filter brightness-[0.9] contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        </motion.div>

        {/* Texto Criativo 3 */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold tracking-tighter mb-16 text-white leading-tight"
        >
          Tudo muda quando <br/> <span className="text-zinc-500 italic">você decide mudar.</span>
        </motion.h2>

        {/* Oferta */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.9, delay: 0.4 }}
           className="bg-zinc-900/40 py-10 px-8 rounded-3xl w-full shadow-2xl mb-12 backdrop-blur-sm"
        >
          <p className="text-xl font-medium text-zinc-500 mb-2">
            Você pode continuar como está…
          </p>
          <p className="text-2xl font-bold text-white tracking-tight">
            ou <span className="text-zinc-100 italic underline decoration-zinc-800 underline-offset-8">começar sua mudança agora.</span>
          </p>
        </motion.div>

        {/* CTA Principal */}
        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6, type: 'spring', damping: 20 }}
          className="w-full max-w-[320px] bg-white text-black font-black text-xl py-6 rounded-2xl shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:bg-zinc-100 hover:scale-[1.02] transition-all active:scale-95"
          onClick={() => window.location.href = 'https://go.ironpayapp.com.br/nwjt60ww6j'}
        >
          Começar agora
        </motion.button>
      </div>
    </section>
  );
}
