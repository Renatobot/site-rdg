import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { SystemMockup } from "./SystemMockups";

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

type Variant = "barber" | "beauty" | "fit";

type Props = {
  id: string;
  chapter: string;
  eyebrow: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  Icon: LucideIcon;
  accent: string;
  variant: Variant;
  reverse?: boolean;
};

export function SystemChapter(p: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id={p.id}
      ref={ref}
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#0A0A0A]"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:py-28 md:grid-cols-2 md:gap-16 md:py-36">
        {/* Text column */}
        <div className={p.reverse ? "md:order-2" : ""}>
          <div className="flex items-center gap-3">
            <span
              className="grid h-8 w-8 place-items-center border border-primary/40 text-primary"
              aria-hidden
            >
              <p.Icon size={14} />
            </span>
            <span className="text-[10px] font-light uppercase tracking-[0.4em] text-primary">
              {p.chapter} · {p.eyebrow}
            </span>
          </div>

          <h2
            className={`mt-6 text-4xl font-light leading-[1.05] tracking-tight text-foreground transition-opacity duration-700 sm:text-5xl md:text-6xl ${
              inView ? "opacity-100" : "opacity-0"
            }`}
            style={{ fontFamily: SERIF }}
          >
            {p.name}
          </h2>

          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-foreground/85">
            {p.tagline}
          </p>

          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            {p.description}
          </p>

          <ul className="mt-8 flex flex-col divide-y divide-white/10 border-y border-white/10">
            {p.features.map((f, i) => (
              <li
                key={f}
                className="flex items-center gap-4 py-3 text-sm font-light text-foreground/80"
              >
                <span className="w-8 text-[10px] font-light tracking-[0.2em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border border-primary/40 px-6 py-3 text-[11px] font-light uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-primary hover:text-[#0A0A0A]"
            >
              Abrir {p.name}
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Mockup column */}
        <div className={p.reverse ? "md:order-1" : ""}>
          <div className="relative">
            {/* thin cyan corner brackets */}
            <span aria-hidden className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-primary/60" />
            <span aria-hidden className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-primary/60" />
            <span aria-hidden className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-primary/60" />
            <span aria-hidden className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-primary/60" />
            <div className="relative border border-white/10 bg-background/40 p-3">
              <SystemMockup variant={p.variant} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
