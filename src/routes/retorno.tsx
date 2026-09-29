import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Copy, ArrowRight } from "lucide-react";
import { useState } from "react";
import { websiteMeta, BASE_URL } from "@/lib/seo";

const TITLE = "Pagamento Aprovado — RDG Digital";
const DESCRIPTION = "Sua chave de acesso oficial.";
const CANONICAL_URL = `${BASE_URL}/retorno`;

// Interface para ler os parâmetros da URL
interface RetornoSearch {
  chave?: string;
}

export const Route = createFileRoute("/retorno")({
  validateSearch: (search: Record<string, unknown>): RetornoSearch => {
    return {
      chave: search.chave as string | undefined,
    };
  },
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: RetornoPage,
});

function RetornoPage() {
  const { chave } = Route.useSearch();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (chave) {
      navigator.clipboard.writeText(chave);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md border border-white/10 bg-[#111218] p-8 text-center relative overflow-hidden">
        {/* Efeito de luz */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />

        <div className="mx-auto w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 rounded-full">
          <CheckCircle2 size={32} className="text-emerald-500" />
        </div>

        <h1 className="text-2xl font-light text-white mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Sua Compra foi Concluída!
        </h1>
        
        <p className="text-sm text-foreground/70 font-light leading-relaxed mb-8">
          Abaixo está a sua chave de ativação oficial para entrar na área de membros e acessar a ferramenta.
        </p>

        {chave ? (
          <div className="space-y-4">
            <div className="bg-[#0A0A0A] border border-white/10 p-4 relative group">
              <span className="block text-[10px] uppercase font-mono tracking-widest text-muted-foreground mb-2">
                SUA CHAVE DE LICENÇA
              </span>
              <p className="text-2xl font-mono text-emerald-400 tracking-wider font-bold">
                {chave}
              </p>
              
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-2 hover:bg-white/5 transition-colors text-muted-foreground hover:text-white"
                title="Copiar chave"
              >
                {copied ? <CheckCircle2 size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            <Link
              to="/membros"
              className="mt-6 flex w-full items-center justify-center gap-2 bg-[#7C4DFF] py-3.5 text-center font-mono text-[11px] uppercase tracking-widest text-white hover:brightness-110 transition-all font-bold"
            >
              <ArrowRight size={16} /> Acessar Área de Membros
            </Link>
          </div>
        ) : (
          <div className="bg-amber-500/10 border border-amber-500/20 p-4 text-amber-200/90 text-xs text-left leading-relaxed">
            Sua chave não pôde ser exibida automaticamente. Caso você já tenha pago, acesse o seu e-mail para visualizar sua chave de acesso ou aguarde alguns minutos para o pagamento confirmar.
            <div className="mt-4 text-center">
              <Link to="/membros" className="underline hover:text-amber-100">
                Ir para área de membros
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
