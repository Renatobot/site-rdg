import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { WHATSAPP_URL } from "@/lib/site";

type NavLink =
  | { kind: "anchor"; href: string; label: string }
  | { kind: "route"; to: string; label: string };

const links: NavLink[] = [
  { kind: "anchor", href: "/#sistemas", label: "Sistemas" },
  { kind: "anchor", href: "/#servicos", label: "Serviços" },
  { kind: "route", to: "/blog", label: "Blog" },
  { kind: "route", to: "/contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "font-mono text-sm uppercase tracking-wider text-foreground/80 transition-colors hover:text-foreground";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`flex items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? "glass shadow-card" : "bg-transparent"
          }`}
        >
          <a href="/" className="shrink-0" aria-label="RDG Digital — início">
            <Logo size="sm" />
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            {links.map((l) =>
              l.kind === "route" ? (
                <Link
                  key={l.to}
                  to={l.to}
                  className={linkClass}
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              ) : (
                <a key={l.href} href={l.href} className={linkClass}>
                  {l.label}
                </a>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 border border-primary/40 px-4 py-2 text-[11px] font-light uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-border text-foreground md:hidden"
              aria-label="Abrir menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl glass p-4 md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Navegação móvel">
              {links.map((l) => {
                const cls =
                  "rounded-lg px-3 py-2.5 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:bg-secondary hover:text-foreground";
                return l.kind === "route" ? (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={cls}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={cls}
                  >
                    {l.label}
                  </a>
                );
              })}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
              >
                <MessageCircle size={16} /> Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
