import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

export function ServicesIntro() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="servicos" className="relative pt-16 pb-4 sm:pt-28 sm:pb-8">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="o que entregamos"
          title={<>Serviços <span className="text-duotone">Digitais</span></>}
          description="Além dos sistemas próprios, a RDG Digital também desenvolve soluções sob demanda — sites, automações e gestão estratégica para fortalecer a presença digital do seu negócio."
        />
      </div>
    </section>
  );
}
