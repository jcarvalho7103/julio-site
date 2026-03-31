import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Results from "@/components/Results";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0d0118] text-white">
      <Nav />
      <Hero />
      <Clients />
      <Problem />
      <HowItWorks />
      <Results />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

// Testimonials.tsx foi criado mas propositalmente omitido da página
// Adicione quando tiver depoimentos reais dos clientes
