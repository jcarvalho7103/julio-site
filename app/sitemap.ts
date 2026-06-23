import { MetadataRoute } from "next";

const BASE_URL = "https://www.ojuliocarvalho.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["capi", "trafego-pago", "crm", "automacoes", "agentes-ia"].map(
      (slug) => ({
        url: `${BASE_URL}/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
      })
    ),
  ];
}
