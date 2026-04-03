import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "Você repete isso. Mesmo sabendo.",
    options: ["Toda vez", "Tento não pensar", "Não consigo evitar"]
  },
  {
    id: 2,
    question: "Diante de um desconforto profundo, qual é seu primeiro reflexo?",
    options: ["Ignorar e seguir", "Tentar entender", "Fugir"]
  },
  {
    id: 3,
    question: "E se essa inquietude que você sente agora não fosse um erro, mas um sinal?",
    options: ["Faz sentido...", "Eu já suspeitava", "Não sei dizer"]
  },
  {
    id: 4,
    question: "Até quando você está disposto a carregar o peso de algo que você sabe que precisa ser encarado?",
    options: ["Não mais", "Cheguei no limite", "Quero parar agora"]
  }
]

export default function StrategicQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResult(true)
    }
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-2xl w-full relative z-10">
        
        {/* Minimal Progress Bar */}
        {!showResult && (
          <div className="w-full h-[1px] bg-white/10 mb-20 relative overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute left-0 top-0 h-full bg-white opacity-40 shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="space-y-12"
            >
              <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.6em] text-center">
                Questão {currentStep + 1} de {questions.length}
              </p>
              
              <h3 className="text-2xl md:text-4xl font-bold text-white text-center leading-tight tracking-tight">
                {questions[currentStep].question}
              </h3>

              <div className="grid gap-4 mt-16">
                {questions[currentStep].options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAnswer}
                    className="w-full py-6 px-10 rounded-2xl border border-white/10 bg-white/[0.02] text-left text-white/70 
                               text-lg md:text-xl font-medium transition-all hover:border-white/30 hover:text-white"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="text-center space-y-16"
            >
              <div className="space-y-8">
                 <div className="w-1.5 h-1.5 bg-white/20 mx-auto rounded-full mb-8 animate-pulse" />
                 <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                    Você não está perdido. <br/>
                    <span className="text-white/40 italic font-bold">Você está evitando encarar.</span>
                 </h2>
                 <p className="text-white/40 text-lg md:text-2xl max-w-xl mx-auto leading-relaxed italic">
                    "O silêncio não é ausência de resposta, é o medo da Verdade tentando se proteger."
                 </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'https://go.ironpayapp.com.br/nwjt60ww6j'}
                className="group relative px-12 py-8 bg-white text-black font-black text-xl rounded-full uppercase tracking-[0.3em] overflow-hidden transition-all shadow-[0_0_80px_rgba(255,255,255,0.1)] hover:shadow-[0_0_120px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10 flex items-center gap-4">
                  Parar de ignorar isso agora <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Subtle background tension */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-radial-gradient from-white/[0.03] to-transparent pointer-events-none opacity-50" />
    </section>
  )
}
