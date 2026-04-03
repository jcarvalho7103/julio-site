import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(147,51,234,0.15)] py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <a href="/" className="text-white font-black text-lg tracking-tight">
              Julio<span className="gradient-text">Carvalho</span>
            </a>
            <p className="text-violet-300/60 text-xs mt-1">Estrategista de Crescimento</p>
          </div>

          {/* Nav */}
          <nav aria-label="Links do rodapé" className="flex items-center gap-4 lg:gap-8 text-sm text-violet-300/50">
            <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
            <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/jcarvalho.ads/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-violet-300/60 hover:text-white hover:border-[rgba(147,51,234,0.5)] transition-all"
            >
              <Instagram size={16} />
            </a>
            <a
              href="mailto:contato@ojuliocarvalho.com"
              aria-label="Email"
              className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-violet-300/60 hover:text-white hover:border-[rgba(147,51,234,0.5)] transition-all"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[rgba(147,51,234,0.1)] text-center text-violet-300/30 text-xs">
          © {currentYear} Julio Carvalho. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
