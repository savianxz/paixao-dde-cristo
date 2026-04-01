import { motion } from 'framer-motion';
import { AlertTriangle, Clock, TrendingDown, RefreshCcw, XCircle } from 'lucide-react';

export default function PainSection() {
  const painPoints = [
    { text: "Você acorda sem vontade", icon: <AlertTriangle className="w-5 h-5 text-zinc-500" /> },
    { text: "Procrastina mesmo sabendo o que precisa fazer", icon: <Clock className="w-5 h-5 text-zinc-500" /> },
    { text: "Sente que está ficando para trás", icon: <TrendingDown className="w-5 h-5 text-zinc-500" /> },
    { text: "Começa e nunca termina", icon: <XCircle className="w-5 h-5 text-zinc-500" /> },
    { text: "Vive preso no mesmo ciclo", icon: <RefreshCcw className="w-5 h-5 text-zinc-500" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="pain-section" className="bg-transparent text-white px-6 py-20 pb-24 overflow-hidden relative">
      <div className="max-w-md mx-auto">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={containerVariants}
        >
          {/* CRIATIVO 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl mb-10 bg-black/40"
          >
            <video 
              src="/img/vsl.mp4" 
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
          </motion.div>
          <ul className="space-y-6">
            {painPoints.map((pain, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-center gap-5 p-2"
              >
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-zinc-500 shadow-[0_0_8px_rgba(255,255,255,0.2)]"></div>
                <span className="text-zinc-400 font-medium text-lg leading-tight tracking-tight">
                  {pain.text}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 text-zinc-400 font-medium text-lg leading-snug"
        >
          Se você se viu nisso, <br/>
          <span className="text-white font-semibold">o problema não é você.</span>
        </motion.p>
      </div>
    </section>
  );
}
