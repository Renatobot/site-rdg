import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Copy, Instagram, Search, Sparkles } from "lucide-react";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import { waLink } from "@/lib/site";
import promptsData from "@/content/instagram-prompts.json";

const TITLE = "Prompts para Instagram — Biblioteca gratuita | RDG Digital";
const DESCRIPTION =
  "Biblioteca gratuita com prompts prontos para fotos e conteúdos de Instagram. Busque, filtre por categoria e copie com 1 clique.";
const CANONICAL_URL = `${BASE_URL}/prompts-instagram`;

const WA_LINK = waLink(
  "Olá, RDG! Vim pela página de Prompts de Instagram e quero conhecer o serviço de gestão."
);

type Prompt = {
  id: string;
  category: string;
  title: string;
  prompt: string;
};

const PROMPTS = promptsData satisfies Prompt[];

const CATEGORIES = ["Todos", ...Array.from(new Set(PROMPTS.map((p) => p.category)))];

export const Route = createFileRoute("/prompts-instagram")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: PromptsInstagramPage,
});

function PromptsInstagramPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROMPTS.filter((p) => {
      const matchCat = category === "Todos" || p.category === category;
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.prompt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, category]);

  async function handleCopy(p: Prompt) {
    setCopiedPrompt(p.prompt);
    setTimeout(() => setCopiedPrompt((c) => (c === p.prompt ? null : c)), 1800);

    const fallbackCopy = () => {
      const textarea = document.createElement("textarea");
      textarea.value = p.prompt;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    };

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(p.prompt);
      } else {
        fallbackCopy();
      }
    } catch {
      fallbackCopy();
    }
  }

  const categoryEmoji: Record<string, string> = {
    Todos: "🔵",
    Feminino: "👩",
    Masculino: "👨",
    Geral: "🎯",
    Empresarial: "💼",
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white">
      {/* Top bar */}
      <div className="border-b border-white/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <span className="text-sm font-bold tracking-wide">
              PROMPTS <span className="text-purple-400">RDG</span>
            </span>
          </div>
          <Link
            to="/instagram"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition hover:bg-white/10"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8">
        {/* Title */}
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Seus Prompts</h1>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-red-700"
          >
            <Instagram className="h-3.5 w-3.5" /> Como gerar?
          </a>
        </div>
        <p className="mt-2 text-sm text-white/60">
          Encontre e copie prompts profissionais para gerar suas fotos com IA
        </p>

        {/* Search */}
        <div className="relative mt-6">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar prompts..."
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-white/40 focus:border-purple-500/60"
            aria-label="Buscar prompts"
          />
        </div>

        {/* Category chips */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const active = cat === category;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={
                  "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition " +
                  (active
                    ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                    : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08]")
                }
              >
                <span>{categoryEmoji[cat] ?? "✨"}</span>
                {cat}
              </button>
            );
          })}
        </div>

        {category !== "Todos" && (
          <p className="mt-5 text-xs text-purple-400">
            ▼ Filtro: {category}
          </p>
        )}

        {/* Cards grid */}
        <section className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, index) => {
            const copied = copiedPrompt === p.prompt;
            const preview = p.prompt.length > 40 ? p.prompt.slice(0, 40) + "..." : p.prompt;
            return (
              <article
                key={`${p.id}-${index}`}
                className="flex flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition hover:border-white/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-sm font-bold uppercase tracking-wide text-white">
                    {p.title}
                  </h2>
                  <span className="text-base leading-none">
                    {categoryEmoji[p.category] ?? "✨"}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-xs text-white/50">
                  Prompt: {preview}
                </p>
                <button
                  type="button"
                  onClick={() => handleCopy(p)}
                  className={
                    "mt-5 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition " +
                    (copied
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-purple-600/20 text-purple-300 hover:bg-purple-600/30")
                  }
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" /> Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copiar Prompt
                    </>
                  )}
                </button>
              </article>
            );
          })}
        </section>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center text-sm text-white/60">
            Nenhum prompt encontrado.
          </div>
        )}
      </main>
    </div>
  );
}
