import { useReveal } from "@/hooks/use-reveal";

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

const bullets = [
  "Modernização de processos internos",
  "Atendimento ao cliente mais fluido",
  "Presença digital fortalecida",
  "Ferramentas simples e intuitivas",
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="empresa" className="relative bg-[#0A0A0A] py-20 sm:py-32">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-4">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <span className="block text-[10px] font-light uppercase tracking-[0.4em] text-muted-foreground">
              quem somos
            </span>
            <h2
              className="mt-6 text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl"
              style={{ fontFamily: SERIF }}
            >
              Soluções digitais <span className="italic text-primary">com propósito</span>.
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              A RDG Digital arquiteta soluções para empresas que desejam modernizar seus processos, melhorar o atendimento e fortalecer sua presença na internet.
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground/80">
              Cada projeto é desenhado sob medida, sem template pronto — combinando precisão técnica com estética editorial.
            </p>
            <ul className="mt-2 flex flex-col divide-y divide-white/10 border-y border-white/10">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-4 py-4 text-sm font-light text-foreground/90"
                >
                  <span className="h-px w-6 bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
