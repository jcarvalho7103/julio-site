import { Instagram, Mail } from "lucide-react";

export default function CapiFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(147,51,234,0.15)] py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <span className="text-white font-black text-lg tracking-tight">
            Julio<span className="gradient-text">Carvalho</span>
          </span>
          <p className="text-violet-300/40 text-xs mt-1">
            © {currentYear} Julio Carvalho. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/jcarvalho.ads/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Julio Carvalho"
            className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-violet-300/60 hover:text-white hover:border-[rgba(147,51,234,0.5)] transition-all"
          >
            <Instagram size={16} />
          </a>
          <a
            href="mailto:contato@ojuliocarvalho.com"
            aria-label="Enviar e-mail para Julio Carvalho"
            className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-violet-300/60 hover:text-white hover:border-[rgba(147,51,234,0.5)] transition-all"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
