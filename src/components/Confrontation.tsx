import { motion } from 'framer-motion';

export default function Confrontation() {
  return (
    <section className="bg-transparent text-white px-6 py-20 pb-24 overflow-hidden relative">
      <div className="max-w-md mx-auto text-center flex flex-col items-center">
        
        {/* CRIATIVO 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full flex items-center justify-center aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl mb-6 shadow-[0_0_50px_rgba(255,255,255,0.05)] bg-transparent"
        >
          {/* Imagem Placeholder de Decisão (porta com luz) */}
          <img 
            src="../public/img/criativo1.png" 
            alt="Decisão Crucial" 
            className="w-full h-full object-cover filter brightness-[0.7] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

        {/* Texto do Criativo 2 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl font-medium text-zinc-400 italic mb-16 px-4"
        >
          "Todo recomeço começa <br/>com uma decisão."
        </motion.p>

        {/* Confronto Gatilho Forte */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mb-12 px-2"
        >
          <h2 className="text-4xl font-bold leading-tight tracking-tighter mb-4">
            Se você continuar <span className="text-zinc-500 font-black">assim…</span>
          </h2>
          <p className="text-2xl font-light text-zinc-500 leading-relaxed">
            daqui a <span className="font-semibold text-white">1 ano</span>, <br/> sua vida vai estar igual.
          </p>
        </motion.div>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-[300px] bg-zinc-100 text-black font-bold text-lg py-5 rounded-2xl shadow-2xl transition-all hover:bg-white hover:scale-[1.02] active:scale-95"
          onClick={() => window.location.href = 'https://go.ironpayapp.com.br/nwjt60ww6j'}
        >
          Sair do ciclo agora
        </motion.button>

      </div>
    </section>
  );
}
