import { useReveal } from "@/hooks/use-reveal";

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

export function Manifesto() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative bg-[#0A0A0A] py-20 sm:py-32">
      <div ref={ref} className="reveal relative mx-auto max-w-5xl px-4">
        <p className="text-[10px] font-light uppercase tracking-[0.4em] text-muted-foreground">
          — manifesto
        </p>
        <div
          className="mt-8 space-y-3 text-4xl font-light leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl"
          style={{ fontFamily: SERIF }}
        >
          <p className="manifesto-line">Sites comuns <span className="italic text-muted-foreground">informam</span>.</p>
          <p className="manifesto-line" style={{ animationDelay: "0.18s" }}>
            Sites bem feitos <span className="italic text-primary">vendem</span>.
          </p>
          <p className="manifesto-line" style={{ animationDelay: "0.36s" }}>
            Sites RDG <span className="italic">conquistam</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
