import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getPosts } from "@/lib/blog";

const BASE_URL = "https://www.ojuliocarvalho.com";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — Tráfego Pago, IA e Crescimento | Julio Carvalho",
  description:
    "Artigos sobre tráfego pago, rastreamento e API de Conversões, inteligência artificial para marketing e sistemas de crescimento. Por Julio Carvalho.",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "Blog | Julio Carvalho",
    description: "Tráfego pago, IA, rastreamento e crescimento — conteúdo prático.",
    url: `${BASE_URL}/blog`,
    type: "website",
  },
};

function fmtDate(d: string | null) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <>
      <Nav />
      <main id="conteudo-principal" className="pt-28 pb-20 min-h-screen">
        <div className="section-container">
          <header className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white">Blog</h1>
            <p className="mt-3 text-violet-200/70">
              Tráfego pago, rastreamento, IA e os sistemas por trás do crescimento. Sem teoria vazia.
            </p>
          </header>

          {posts.length === 0 ? (
            <p className="mt-12 text-violet-300/50">Em breve, os primeiros artigos.</p>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group glass-card rounded-2xl overflow-hidden transition-all hover:border-[rgba(147,51,234,0.5)]">
                  {p.featured_image_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.featured_image_url} alt={p.title} className="aspect-video w-full object-cover" loading="lazy" />
                  )}
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-white group-hover:text-violet-200 transition-colors">{p.title}</h2>
                    {p.excerpt && <p className="mt-2 text-sm text-violet-200/60 line-clamp-3">{p.excerpt}</p>}
                    <div className="mt-3 flex items-center gap-3 text-xs text-violet-300/40">
                      <span>{fmtDate(p.published_at)}</span>
                      {p.reading_time_minutes ? <span>· {p.reading_time_minutes} min de leitura</span> : null}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
