const items = [
  "Sistemas Sob Medida",
  "Performance Real",
  "UI/UX Premium",
  "Automação",
  "Sites Otimizados",
  "Gestão Digital",
  "Suporte Próximo",
  "Engenharia de Produto",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/10 bg-[#0A0A0A] py-4"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent" />
      <div className="marquee flex w-max items-center gap-16 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="text-[10px] font-light uppercase tracking-[0.4em] text-muted-foreground"
          >
            {item}
            <span className="ml-16 text-primary/60">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
