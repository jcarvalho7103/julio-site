import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getPost, getAllSlugs } from "@/lib/blog";

const BASE_URL = "https://www.ojuliocarvalho.com";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Artigo não encontrado | Julio Carvalho" };
  const url = `${BASE_URL}/blog/${slug}`;
  return {
    title: { absolute: post.meta_title || `${post.title} | Julio Carvalho` },
    description: post.meta_description || post.excerpt || undefined,
    alternates: { canonical: url },
    openGraph: {
      title: post.og_title || post.meta_title || post.title,
      description: post.og_description || post.meta_description || undefined,
      url,
      type: "article",
      images: post.featured_image_url ? [{ url: post.featured_image_url }] : undefined,
    },
    twitter: { card: "summary_large_image", title: post.title, images: post.featured_image_url ? [post.featured_image_url] : undefined },
  };
}

function fmtDate(d: string | null) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": post.schema_article_type || "Article",
    headline: post.title,
    description: post.meta_description || post.excerpt || undefined,
    image: post.featured_image_url || undefined,
    datePublished: post.published_at || undefined,
    dateModified: post.updated_at || post.published_at || undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Person", "@id": `${BASE_URL}/#person`, name: "Julio Carvalho" },
    publisher: { "@type": "Person", "@id": `${BASE_URL}/#person`, name: "Julio Carvalho" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <Nav />
      <main id="conteudo-principal" className="pt-28 pb-20 min-h-screen">
        <article className="section-container max-w-3xl">
          <nav aria-label="Trilha" className="text-xs text-violet-300/50">
            <Link href="/" className="hover:text-white">Início</Link> ·{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </nav>

          <h1 className="mt-4 text-3xl md:text-4xl font-display font-extrabold text-white leading-tight">{post.title}</h1>
          <div className="mt-3 flex items-center gap-3 text-sm text-violet-300/50">
            <span>{fmtDate(post.published_at)}</span>
            {post.reading_time_minutes ? <span>· {post.reading_time_minutes} min de leitura</span> : null}
          </div>

          {post.featured_image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.featured_image_url} alt={post.title} className="mt-6 w-full rounded-2xl border border-[rgba(147,51,234,0.2)]" />
          )}

          <div
            className="prose prose-invert mt-8 max-w-none prose-headings:font-display prose-a:text-violet-300 prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: post.content_html || "" }}
          />

          <div className="mt-12 glass-card rounded-2xl p-6 text-center">
            <p className="text-white font-semibold">Quer aplicar isso no seu negócio?</p>
            <p className="mt-1 text-sm text-violet-200/60">Diagnóstico estratégico gratuito do seu funil de tráfego e dados.</p>
            <Link href="/#cta" className="mt-4 inline-flex rounded-full bg-[#9333ea] px-6 py-3 text-sm font-semibold text-white hover:bg-[#7e22ce] transition-colors">
              Falar com o Julio
            </Link>
          </div>
        </article>
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
