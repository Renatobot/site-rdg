import { MessageCircle, Instagram, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { WHATSAPP_URL, CONTACT_EMAIL_URL } from "@/lib/site";

const socials = [
  { Icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_URL, external: true },
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com/", external: true },
  { Icon: Mail, label: "E-mail", href: CONTACT_EMAIL_URL, external: false },
];

const navLinks = [
  { label: "Início", to: "/" },
  { label: "Serviços", to: "/servicos" },
  { label: "Blog", to: "/blog" },
  { label: "Contato", to: "/contato" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A] pt-20 pb-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 sm:grid-cols-[1.4fr_1fr_1fr] sm:items-start">
          <div>
            <Logo size="md" />
            <p
              className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted-foreground"
            >
              Tecnologia desenvolvida para impulsionar negócios.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-light uppercase tracking-[0.4em] text-primary">
              Navegação
            </p>
            <ul className="mt-5 flex flex-col divide-y divide-white/10 border-t border-white/10">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block py-2.5 text-sm font-light text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-start gap-2 sm:justify-end">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center border border-white/15 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Giant typographic mark */}
        <div className="mt-20 select-none overflow-hidden border-t border-white/10 pt-12">
          <p
            className="font-light leading-none tracking-tight text-transparent text-[18vw] sm:text-[14vw]"
            aria-hidden
            style={{
              fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
              fontStyle: "italic",
              WebkitTextStroke: "1px color-mix(in oklab, var(--primary) 40%, transparent)",
            }}
          >
            RDG Digital
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[10px] font-light uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} RDG Digital · Todos os direitos reservados</p>
          <p>Construído no Brasil · 2026</p>
        </div>
      </div>
    </footer>
  );
}
