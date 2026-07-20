import { createFileRoute, Link } from "@tanstack/react-router";
import { LOGO_URL } from "@/lib/site";
import { websiteMeta } from "@/lib/seo";
const TITLE = "RDG Digital — Tecnologia por trás do seu sistema";
const DESCRIPTION =
  "Você está utilizando uma solução da RDG Digital. Sistemas e soluções digitais para uma experiência moderna, organizada e eficiente.";

export const Route = createFileRoute("/sistemas")({
  component: SistemasPage,
  head: () => ({
    meta: [
      ...websiteMeta(TITLE, DESCRIPTION, "https://rdgdigital.com.br/sistemas"),
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "https://rdgdigital.com.br/sistemas" }],
  }),
});

const DECOR_ICONS: { icon: string; top: string; left: string; size: string; rot: string }[] = [
  { icon: "💈", top: "12%", left: "8%", size: "text-4xl", rot: "-12deg" },
  { icon: "💇", top: "22%", left: "82%", size: "text-3xl", rot: "10deg" },
  { icon: "🏋️", top: "70%", left: "10%", size: "text-4xl", rot: "8deg" },
  { icon: "🌐", top: "78%", left: "85%", size: "text-3xl", rot: "-6deg" },
  { icon: "📱", top: "44%", left: "5%", size: "text-3xl", rot: "14deg" },
  { icon: "🤖", top: "55%", left: "88%", size: "text-4xl", rot: "-10deg" },
];

function SistemasPage() {
  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      window.history.back();
    }
  };

  return (
    <main
      aria-labelledby="sistemas-title"
      className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0B1220] px-5 py-12 text-white"
    >
      {/* halos radiais */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 20%, rgba(0,217,255,0.14), transparent 70%), radial-gradient(50% 40% at 50% 100%, rgba(0,217,255,0.09), transparent 70%)",
        }}
      />
      {/* grid sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      {/* pontos de luz extras */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 -z-10 h-72 w-72 rounded-full"
        style={{ background: "rgba(0,217,255,0.18)", filter: "blur(80px)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 -z-10 h-80 w-80 rounded-full"
        style={{ background: "rgba(0,217,255,0.14)", filter: "blur(90px)" }}
      />
      {/* ícones decorativos */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {DECOR_ICONS.map((d, i) => (
          <span
            key={i}
            className={`absolute select-none ${d.size}`}
            style={{
              top: d.top,
              left: d.left,
              opacity: 0.07,
              transform: `translate(-50%, -50%) rotate(${d.rot})`,
              filter: "grayscale(1) brightness(1.6)",
            }}
          >
            {d.icon}
          </span>
        ))}
      </div>

      <section
        className="bridge-card relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-9 text-center backdrop-blur-xl sm:px-10 sm:py-16"
        style={{
          boxShadow:
            "0 30px 80px -30px rgba(0,217,255,0.28), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div
          className="bridge-item flex justify-center"
          style={{ ["--d" as string]: "0ms" }}
        >
          <div className="bridge-float">
            <img
              src={LOGO_URL}
              alt="RDG Digital"
              draggable={false}              className="h-16 w-auto select-none sm:h-28"
              style={{
                filter:
                  "drop-shadow(0 0 18px rgba(0,217,255,0.55)) drop-shadow(0 0 42px rgba(0,217,255,0.28))",
              }}
            />
          </div>
        </div>

        <h1
          id="sistemas-title"
          className="bridge-item bridge-up mt-6 text-balance text-xl font-semibold leading-tight tracking-tight sm:mt-10 sm:text-3xl"
          style={{ ["--d" as string]: "140ms" }}
        >
          Você está utilizando uma solução da{" "}
          <span
            style={{
              color: "#00D9FF",
              textShadow: "0 0 24px rgba(0,217,255,0.45)",
            }}
          >
            RDG Digital
          </span>
        </h1>

        <p
          className="bridge-item bridge-up mx-auto mt-4 max-w-md text-pretty text-[13px] leading-relaxed text-white/70 sm:mt-6 sm:text-base"
          style={{ ["--d" as string]: "280ms" }}
        >
          A RDG Digital desenvolve sistemas e soluções digitais que ajudam
          empresas a oferecer uma experiência moderna, organizada e eficiente
          para seus clientes.
        </p>

        <div
          className="bridge-item mt-7 flex flex-col items-center gap-4 sm:mt-10 sm:gap-5"
          style={{ ["--d" as string]: "420ms" }}
        >
          <Link
            to="/"
            className="bridge-cta group inline-flex items-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-[#04121A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D9FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] sm:px-8 sm:py-3.5 sm:text-sm"
            style={{
              background:
                "linear-gradient(135deg, #5EE7FF 0%, #00D9FF 50%, #1FA8C9 100%)",
              boxShadow:
                "0 10px 30px -10px rgba(0,217,255,0.55), 0 0 0 1px rgba(0,217,255,0.35) inset",
            }}
          >
            <span aria-hidden>🚀</span>
            Conhecer nossas soluções
          </Link>

          <button
            type="button"
            onClick={goBack}
            className="bridge-back group inline-flex items-center gap-1.5 text-xs text-white/45 transition-colors duration-200 focus:outline-none"
          >
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 group-hover:-translate-x-1"
            >
              ←
            </span>
            Voltar ao sistema
          </button>
        </div>

        <div
          className="bridge-item mt-8 space-y-1.5 border-t border-white/5 pt-5 sm:mt-14 sm:pt-6"
          style={{ ["--d" as string]: "560ms" }}
        >
          <p className="text-[13px] text-white/55 sm:text-sm">
            Tecnologia que impulsiona negócios.
          </p>
          <p className="text-[11px] text-white/35">
            © 2026 RDG Digital. Todos os direitos reservados.
          </p>
        </div>
      </section>


      <style>{`
        @keyframes bridge-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bridge-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bridge-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .bridge-item {
          opacity: 0;
          animation: bridge-in 0.7s ease-out forwards;
          animation-delay: var(--d, 0ms);
        }
        .bridge-up {
          animation: bridge-up 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          animation-delay: var(--d, 0ms);
        }
        .bridge-float {
          animation: bridge-float 5s ease-in-out infinite;
        }
        .bridge-cta {
          transition: transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1),
                      box-shadow 280ms cubic-bezier(0.2, 0.8, 0.2, 1),
                      filter 280ms ease;
          will-change: transform;
        }
        .bridge-cta:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 22px 48px -12px rgba(0,217,255,0.75),
                      0 0 0 1px rgba(0,217,255,0.55) inset,
                      0 0 32px rgba(0,217,255,0.35);
          filter: brightness(1.05);
        }
        .bridge-cta:active {
          transform: translateY(0) scale(0.98);
          transition-duration: 120ms;
        }
        .bridge-back:hover {
          color: #00D9FF;
        }
        @media (prefers-reduced-motion: reduce) {
          .bridge-item, .bridge-up { opacity: 1; transform: none; animation: none; }
          .bridge-float { animation: none; }
          .bridge-cta { transition: none; }
        }
      `}</style>
    </main>
  );
}
