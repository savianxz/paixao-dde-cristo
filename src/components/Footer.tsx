import { ShieldCheck, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-20 px-6 bg-black border-t border-white/[0.03]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white/90 tracking-tighter italic">Protocolo Paixão de Cristo</h3>
          <div className="w-8 h-1 bg-white/10 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-zinc-500 text-sm">
          <a href="mailto:contato@protocolo.com" className="flex items-center gap-2 hover:text-white transition-all">
            <Mail className="w-4 h-4" />
            contato@protocolo.com
          </a>
          <span className="hidden md:block w-1.5 h-1.5 bg-zinc-800 rounded-full" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Compra 100% Segura
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
          <p className="text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} Protocolo • Direitos Reservados
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors">Termos</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
