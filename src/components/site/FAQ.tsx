const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

const FAQS = [
  {
    q: "O que é a RDG Digital?",
    a: "A RDG Digital é uma empresa brasileira de tecnologia que desenvolve sistemas próprios (Fila Zero Barber, Fila Zero Beauty e Smart Treino), cria sites premium sob medida e implementa automações e agentes de IA para pequenas e médias empresas.",
  },
  {
    q: "Quais sistemas a RDG Digital oferece?",
    a: "Fila Zero Barber para barbearias, Fila Zero Beauty para salões de beleza e estética, e Smart Treino para personal trainers e academias. Todos são sistemas próprios, 100% online e com IA integrada.",
  },
  {
    q: "A RDG Digital cria sites do zero?",
    a: "Sim. Cada site é codado do zero em stack moderna, com performance Lighthouse 95+ em mobile, SEO técnico configurado desde o primeiro deploy e identidade visual única — sem templates prontos.",
  },
  {
    q: "Como funciona a automação com IA da RDG Digital?",
    a: "Implementamos agentes de IA, bots de WhatsApp e fluxos em n8n ou Zapier que respondem clientes 24 horas por dia, integram sistemas e automatizam tarefas repetitivas — liberando o time humano para o que gera receita.",
  },
  {
    q: "Como falar com a RDG Digital?",
    a: "Pelo e-mail contato@rdgdigital.com.br, pelo WhatsApp +55 21 92007-8469 ou pela página de contato em rdgdigital.com.br/contato.",
  },
  {
    q: "A RDG Digital atende em todo o Brasil?",
    a: "Sim. A operação é 100% remota — atendemos clientes em todo o Brasil e projetos pontuais na América Latina.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative border-t border-white/10 bg-[#0A0A0A] py-20 sm:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <span className="text-[10px] font-light uppercase tracking-[0.4em] text-primary">
            Perguntas frequentes
          </span>
          <h2
            id="faq-heading"
            className="mt-5 text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: SERIF }}
          >
            Tudo sobre a <em className="italic text-primary">RDG Digital</em>
          </h2>
        </div>

        <div className="mt-14 flex flex-col divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((f, i) => (
            <details key={f.q} className="group px-2 py-6 sm:px-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <div className="flex items-start gap-6">
                  <span className="pt-1 text-[10px] font-light tracking-[0.25em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-light tracking-tight text-foreground sm:text-xl">
                    {f.q}
                  </span>
                </div>
                <span
                  aria-hidden
                  className="mt-2 text-primary transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="ml-0 mt-4 max-w-2xl pl-0 text-sm font-light leading-relaxed text-muted-foreground sm:ml-16 sm:text-base">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
