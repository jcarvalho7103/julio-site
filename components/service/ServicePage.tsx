import dynamic from "next/dynamic";
import CapiNav from "@/components/capi/CapiNav";
import CapiTracker from "@/components/capi/CapiTracker";
import ServiceHero from "./ServiceHero";
import { buildServiceSchemas, type ServiceData } from "@/lib/servicesData";

// Abaixo do fold — carregados após o LCP
const Clients = dynamic(() => import("@/components/Clients"));
const ServiceProblem = dynamic(() => import("./ServiceProblem"));
const ServiceDeliverables = dynamic(() => import("./ServiceDeliverables"));
const ServiceProcess = dynamic(() => import("./ServiceProcess"));
const About = dynamic(() => import("@/components/About"));
const ServiceFAQ = dynamic(() => import("./ServiceFAQ"));
const ServiceCTA = dynamic(() => import("./ServiceCTA"));
const CapiFooter = dynamic(() => import("@/components/capi/CapiFooter"));

export default function ServicePage({ data }: { data: ServiceData }) {
  const schemas = buildServiceSchemas(data);
  return (
    <main id="conteudo-principal" className="bg-[#0d0118] text-white">
      {/* event_id de page-load no dataLayer ANTES do GTM, para o Pixel
          (PageView/ViewContent) e a CAPI partilharem o mesmo id → dedup */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(function(){window.dataLayer=window.dataLayer||[];try{window.__capiEid=(self.crypto&&crypto.randomUUID)?crypto.randomUUID():(Date.now()+'-'+Math.random().toString(36).slice(2));}catch(e){window.__capiEid=Date.now()+'-'+Math.random();}window.dataLayer.push({meta_event_id:window.__capiEid});})();",
        }}
      />
      <CapiTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumb) }}
      />
      <CapiNav />
      <ServiceHero data={data} />
      <Clients />
      <ServiceProblem data={data} />
      <ServiceDeliverables data={data} />
      <ServiceProcess data={data} />
      <About />
      <ServiceFAQ faq={data.faq} slug={data.slug} />
      <ServiceCTA data={data} />
      <CapiFooter />
    </main>
  );
}
