import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getPost } from "@/content/posts";
import { articleMeta, OG_IMAGE_URL } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Post — RDG Digital" }] };
    const url = `https://rdgdigital.com.br/blog/${params.slug}`;
    return {
      meta: articleMeta(
        loaderData.title,
        loaderData.excerpt,
        url,
        loaderData.date,
        loaderData.category
      ),
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.excerpt,
            image: [OG_IMAGE_URL],
            datePublished: loaderData.date,
            dateModified: loaderData.date,
            inLanguage: "pt-BR",
            articleSection: loaderData.category,
            author: {
              "@type": "Organization",
              name: "RDG Digital",
              url: "https://rdgdigital.com.br/",
            },
            publisher: {
              "@type": "Organization",
              name: "RDG Digital",
              url: "https://rdgdigital.com.br/",
              logo: {
                "@type": "ImageObject",
                url: OG_IMAGE_URL,
                width: 1200,
                height: 630,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": url,
            },
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", ".prose-rdg p"],
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold">Post não encontrado</h1>
        <Link to="/blog" className="mt-4 inline-block text-primary">
          ← Voltar para o blog
        </Link>
      </div>
    </div>
  ),
  errorComponent: ErrorView,
  component: PostPage,
});

function ErrorView({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  console.error(error);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <p className="font-display text-2xl font-semibold">Não foi possível carregar este post.</p>
      <p className="text-sm text-muted-foreground">Tente novamente ou volte para a lista.</p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => {
            reset();
            router.invalidate();
          }}
          className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary hover:bg-primary/20"
        >
          Tentar novamente
        </button>
        <Link
          to="/blog"
          className="rounded-xl border border-border/60 px-4 py-2 text-sm text-foreground hover:bg-foreground/5"
        >
          Voltar ao blog
        </Link>
      </div>
    </div>
  );
}

function PostPage() {
  const post = Route.useLoaderData();
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground grain">
      <Navbar />
      <main className="pt-32 pb-20">
        <article className="mx-auto max-w-3xl px-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={12} /> Voltar
          </Link>

          <header className="mt-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
              {post.category}
            </span>
            <h1 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="inline-flex items-center gap-1.5" suppressHydrationWarning>
                <Calendar size={12} />
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  timeZone: "UTC",
                })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={12} />
                {post.readingMinutes} min de leitura
              </span>
            </div>
          </header>

          <div className="prose-rdg mt-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
          </div>

          <div className="mt-16 rounded-3xl border border-primary/30 bg-primary/5 p-6 sm:p-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
              Próximo passo
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold">
              Quer aplicar isso no seu negócio?
            </h3>
            <Link
              to="/contato"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Falar com a RDG Digital
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
