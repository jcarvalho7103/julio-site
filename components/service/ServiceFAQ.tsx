"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/servicesData";

export default function ServiceFAQ({
  faq,
  slug,
}: {
  faq: { h2: string; sub: string; items: FaqItem[] };
  slug: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const { h2, sub, items } = faq;

  return (
    <section id="faq" className="py-24 bg-[#0a0114]">
      <div className="section-container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-white mb-5 leading-[1.05]">
          {h2}
        </h2>
        <p className="text-center text-violet-100/70 max-w-xl mx-auto mb-12 text-lg">{sub}</p>

        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((f, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? "border-[rgba(147,51,234,0.5)]" : ""
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left group"
                aria-expanded={open === i}
                aria-controls={`${slug}-faq-answer-${i}`}
                id={`${slug}-faq-question-${i}`}
              >
                <span className="text-white font-semibold text-sm md:text-base pr-4 group-hover:text-violet-200 transition-colors">
                  {f.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#9333ea] flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                id={`${slug}-faq-answer-${i}`}
                role="region"
                aria-labelledby={`${slug}-faq-question-${i}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-7 pb-6 text-violet-200/65 text-sm leading-relaxed border-t border-[rgba(147,51,234,0.15)] pt-4">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
