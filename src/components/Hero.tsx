import { motion } from 'framer-motion';

export default function Hero() {


  return (
    <section 
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center m-0 p-0 overflow-hidden"
    >
      {/* Imagem de Fundo integrada no CSS para garantir controle de performance */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1544427928-144944974d91?q=80&w=2600&auto=format&fit=crop')", // Uma imagem mais impactante e escura
        }}
      />
      
      {/* Overlay Escuro */}
      <div 
        className="absolute inset-0 z-10" 
        style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}
      />

      {/* Container Centralizado */}
      <div className="relative z-20 w-full max-w-[600px] px-[20px] text-center flex flex-col items-center justify-center">
        
        {/* Imagem de Jesus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 w-40 h-40 flex items-center justify-center"
        >
          <img 
            src="/img/jesus.png" 
            alt="Jesus" 
            className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          />
        </motion.div>

        {/* Título Principal */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="m-0 text-[32px] md:text-[40px] font-semibold leading-[1.2] text-white"
        >
          Não deixe que Ele tenha sido em vão…
        </motion.h1>

        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="m-0 mt-[12px] text-[18px] md:text-[20px] font-normal leading-[1.5] text-white/85"
        >
          Faça valer o sacrifício Dele na sua vida.
        </motion.p>

        {/* Texto de Transição */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="m-0 mt-[40px] max-w-[500px] text-[18px] leading-[1.5] text-white/80 font-normal"
        >
          Você continua no mesmo lugar… <br className="hidden md:block" />
          porque ainda não tomou uma decisão de verdade.
        </motion.p>

        {/* Botão CTA */}
        <motion.button 
          initial={{ opacity: 1 }}
          whileHover={{ scale: 1.05, filter: 'brightness(1.15)' }}
          whileTap={{ scale: 0.95 }}
          className="m-0 mt-[28px] border-none outline-none px-[28px] py-[16px] rounded-full text-white text-[16px] font-semibold flex items-center justify-center shadow-[0_8px_30px_rgba(255,106,0,0.3)] transition-all cursor-pointer"
          style={{
            background: 'linear-gradient(90deg, #FF6A00, #FF8C42)',
          }}
          onClick={() => window.location.href = 'https://go.ironpayapp.com.br/nwjt60ww6j'}
        >
          Quero mudar agora
        </motion.button>
      </div>
    </section>
  );
}
