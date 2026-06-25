import { createClient } from "@supabase/supabase-js";

// Cliente de leitura dos posts publicados no julio-blog-engine (Supabase do engine).
// Usa a anon key + RLS de leitura pública na tabela posts.
function engineClient() {
  return createClient(
    process.env.NEXT_PUBLIC_ENGINE_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_ENGINE_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } }
  );
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content_html: string | null;
  meta_title: string | null;
  meta_description: string | null;
  og_title: string | null;
  og_description: string | null;
  featured_image_url: string | null;
  focus_keyword: string | null;
  reading_time_minutes: number | null;
  schema_article_type: string | null;
  published_at: string | null;
  updated_at: string | null;
}

export async function getPosts(): Promise<Post[]> {
  const supabase = engineClient();
  const { data, error } = await supabase
    .from("posts")
    .select("id, slug, title, excerpt, featured_image_url, reading_time_minutes, published_at")
    .order("published_at", { ascending: false });
  if (error) return [];
  return (data ?? []) as Post[];
}

export async function getPost(slug: string): Promise<Post | null> {
  const supabase = engineClient();
  const { data, error } = await supabase.from("posts").select("*").eq("slug", slug).single();
  if (error) return null;
  return data as Post;
}

export async function getAllSlugs(): Promise<string[]> {
  const supabase = engineClient();
  const { data } = await supabase.from("posts").select("slug");
  return (data ?? []).map((r: { slug: string }) => r.slug);
}
