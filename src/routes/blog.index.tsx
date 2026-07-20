import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { posts } from "@/content/posts";
import { websiteMeta } from "@/lib/seo";

const TITLE = "Blog — RDG Digital";
const DESCRIPTION =
  "Conteúdo sobre tecnologia, sistemas, automação e como negócios reais usam software para crescer.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, "https://rdgdigital.com.br/blog"),
    links: [{ rel: "canonical", href: "https://rdgdigital.com.br/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground grain">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            as="h1"
            eyebrow="Blog"
            title="Ideias, bastidores e cases"
            description="Tudo que aprendemos construindo sistemas e sites para negócios reais — sem teoria, só o que funciona."
          />

          <ul className="mt-12 grid gap-5">
            {sorted.map((post) => (
              <li key={post.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group glass relative block overflow-hidden rounded-3xl border border-border p-6 transition-all hover:border-primary/40 sm:p-8"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:bg-primary/25"
                  />
                  <div className="relative">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      {post.category}
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5" suppressHydrationWarning>
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          timeZone: "UTC",
                        })}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={12} />
                        {post.readingMinutes} min
                      </span>
                      <span className="ml-auto inline-flex items-center gap-1.5 text-primary transition-transform group-hover:translate-x-1">
                        Ler post <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
