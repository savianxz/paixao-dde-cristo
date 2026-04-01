import { motion } from 'framer-motion';
import { Target, Zap, Milestone, ArrowUpRight } from 'lucide-react';

export default function Solution() {
  const benefits = [
    { text: "Clareza total do que fazer", icon: <Target className="w-5 h-5 text-white" /> },
    { text: "Sistema simples contra procrastinação", icon: <Zap className="w-5 h-5 text-white" /> },
    { text: "Direção prática para o dia a dia", icon: <Milestone className="w-5 h-5 text-white" /> },
    { text: "Saída do ciclo de tentativa e erro", icon: <ArrowUpRight className="w-5 h-5 text-white" /> },
  ];

  return (
    <section className="bg-transparent text-white px-6 py-20 pb-24 relative overflow-hidden">
      {/* Background glow subtlety */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-white opacity-[0.02] blur-[100px] rounded-full point-events-none"></div>

      <div className="max-w-md mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-3">
            O Método
          </p>
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Protocolo de <br/> Saída do Ciclo
          </h2>
          <p className="text-zinc-300 leading-relaxed font-light text-[17px] mb-12">
            Um método direto, simples e aplicável que mostra exatamente o que fazer para sair da estagnação e criar uma direção real.
          </p>
        </motion.div>

        <ul className="space-y-4">
          {benefits.map((benefit, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                {benefit.icon}
              </div>
              <span className="text-zinc-200 font-medium text-base pt-1">
                {benefit.text}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
