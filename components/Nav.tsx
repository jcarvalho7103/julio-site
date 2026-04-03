"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b ${
        scrolled
          ? "bg-[#0d0118]/80 border-[rgba(147,51,234,0.25)]"
          : "bg-[rgba(13,1,24,0.4)] border-[rgba(147,51,234,0.1)]"
      }`}
      style={{ WebkitBackdropFilter: "blur(20px)" }}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" aria-label="Julio Carvalho — Início da página" className="flex items-center gap-2">
          <span className="text-white font-black text-lg tracking-tight">
            Julio<span className="gradient-text">Carvalho</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-violet-200/70 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_28px_rgba(147,51,234,0.6)]"
        >
          Diagnóstico
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#140225] border-t border-[rgba(147,51,234,0.2)] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-violet-200/80 hover:text-white transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-3 rounded-full bg-[#9333ea] text-white font-semibold"
          >
            Diagnóstico
          </a>
        </div>
      </div>
    </header>
  );
}
