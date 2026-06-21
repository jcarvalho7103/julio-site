"use client";
import { useState, useEffect } from "react";

export default function CapiNav() {
  const [scrolled, setScrolled] = useState(false);

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
        <a href="#topo" aria-label="Julio Carvalho" className="flex items-center gap-2">
          <span className="text-white font-black text-lg tracking-tight">
            Julio<span className="gradient-text">Carvalho</span>
          </span>
        </a>

        <a
          href="#cta"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#9333ea] hover:bg-[#7e22ce] text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_28px_rgba(147,51,234,0.6)]"
        >
          Diagnóstico gratuito
        </a>
      </div>
    </header>
  );
}
