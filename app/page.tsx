import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

// Componentes abaixo do fold — carregados após o LCP
const Clients = dynamic(() => import("@/components/Clients"));
const Problem = dynamic(() => import("@/components/Problem"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Results = dynamic(() => import("@/components/Results"));
const About = dynamic(() => import("@/components/About"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main id="conteudo-principal" className="bg-[#0d0118] text-white">
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
