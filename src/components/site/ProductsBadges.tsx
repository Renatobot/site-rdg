import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    code: "S01",
    name: "RDG instaPRO",
    description: "Software de automação de Instagram e prospecção no piloto automático.",
    href: "/extensao",
  },
  {
    code: "S02",
    name: "Fila Zero Barber",
    description: "Sistema de agendamento e gestão para barbearias premium.",
    href: "#sistemas",
  },
  {
    code: "S03",
    name: "Fila Zero Beauty",
    description: "Plataforma completa para salões e profissionais da beleza.",
    href: "#beauty",
  },
  {
    code: "S04",
    name: "Smart Treino",
    description: "Gestão de alunos e treinos para personais e academias.",
    href: "#smart-treino",
  },
];

export function ProductsBadges() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-16 sm:py-24 bg-[#0A0A0A]">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-4">
        <SectionHeading
          align="left"
          eyebrow="ecossistema"
          title={<>Nossas <span className="italic text-primary">soluções</span></>}
          description="Sistemas e softwares desenvolvidos para impulsionar a rotina e as vendas de empresas e profissionais."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <a
              key={it.code}
              href={it.href}
              className="group flex flex-col gap-4 border border-white/10 p-8 transition-colors duration-500 hover:border-primary"
            >
              <span className="text-[10px] font-light uppercase tracking-[0.3em] text-primary">
                {it.code}
              </span>
              <h3 className="text-xl font-light text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {it.name}
              </h3>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                {it.description}
              </p>
              <div className="mt-4 h-px w-8 bg-primary transition-all duration-500 group-hover:w-16" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
