import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { servicesData } from "@/lib/servicesData";

const data = servicesData["automacoes"];
const BASE_URL = "https://www.ojuliocarvalho.com";

export const metadata: Metadata = {
  title: data.meta.title,
  description: data.meta.description,
  keywords: data.meta.keywords,
  alternates: { canonical: `${BASE_URL}/${data.slug}` },
  openGraph: {
    title: data.meta.ogTitle,
    description: data.meta.ogDescription,
    type: "website",
    locale: "pt_BR",
    url: `${BASE_URL}/${data.slug}`,
    siteName: "Julio Carvalho",
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
