import { motion } from 'framer-motion';

export default function BeliefBreaker() {
  return (
    <section className="bg-transparent text-white px-6 py-16 pb-24 overflow-hidden relative">
      <div className="max-w-md mx-auto text-center space-y-12">
        
        {/* Quebra de Crença 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight mb-4">
            Você não está <span className="text-zinc-400">sem motivação.</span>
          </h2>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Você está sem <span className="text-white border-b-2 border-zinc-500 pb-1">direção.</span>
          </h2>
        </motion.div>

        {/* Quebra de Crença 2 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-zinc-400 font-light leading-relaxed"
        >
          "Você tentou sozinho… <br/> e sempre voltou pro mesmo lugar."
        </motion.p>

        {/* CRIATIVO 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full aspect-[4/5] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl mt-12 mb-6 bg-transparent"
        >
          {/* Imagem Placeholder de Ambiente Escuro/Dor */}
          <img 
            src="/img/espiritual.jpg" 
            alt="Reflexão espiritual" 
            className="w-full h-full object-contain filter brightness-[0.7] contrast-125 grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        </motion.div>

        {/* Texto do Criativo 1 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg font-medium text-zinc-300 italic"
        >
          Nada muda… <br/>
          quando você continua no mesmo padrão.
        </motion.p>
      </div>
    </section>
  );
}
