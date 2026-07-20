import { ArrowUpRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const SERIF = "'Cormorant Garamond', 'Times New Roman', serif";

export function FinalCTA() {
  return (
    <section className="relative border-t border-white/10 bg-[#0A0A0A] py-24 sm:py-40">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative">
          {/* corner brackets */}
          <span aria-hidden className="absolute -left-2 -top-2 h-5 w-5 border-l border-t border-primary/60" />
          <span aria-hidden className="absolute -right-2 -top-2 h-5 w-5 border-r border-t border-primary/60" />
          <span aria-hidden className="absolute -bottom-2 -left-2 h-5 w-5 border-b border-l border-primary/60" />
          <span aria-hidden className="absolute -bottom-2 -right-2 h-5 w-5 border-b border-r border-primary/60" />

          <div className="px-6 py-20 text-center sm:px-16 sm:py-28">
            <span className="text-[10px] font-light uppercase tracking-[0.4em] text-primary">
              Vamos construir
            </span>
            <h2
              className="mx-auto mt-6 max-w-2xl text-4xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl"
              style={{ fontFamily: SERIF }}
            >
              Vamos transformar seu negócio{" "}
              <em className="italic text-primary">com tecnologia</em>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
              Conheça nossos sistemas ou fale com nossa equipe para desenvolver uma
              solução digital personalizada para sua empresa.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#sistemas"
                className="group inline-flex items-center gap-3 bg-primary px-7 py-3.5 text-[11px] font-light uppercase tracking-[0.25em] text-[#0A0A0A] transition-colors hover:bg-primary/90"
              >
                Conhecer nossos sistemas
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/20 px-7 py-3.5 text-[11px] font-light uppercase tracking-[0.25em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle size={14} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
