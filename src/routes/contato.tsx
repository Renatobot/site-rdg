import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Send, Mail, MapPin } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WHATSAPP_URL, CONTACT_EMAIL, CONTACT_EMAIL_URL } from "@/lib/site";
import { websiteMeta } from "@/lib/seo";

const TITLE = "Contato — RDG Digital";
const DESCRIPTION =
  "Fale com a RDG Digital. Orçamento de sistemas, sites, automações e IA — resposta no mesmo dia útil.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, "https://rdgdigital.com.br/contato"),
    links: [{ rel: "canonical", href: "https://rdgdigital.com.br/contato" }],
  }),
  component: ContatoPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(80),
  whats: z
    .string()
    .trim()
    .min(8, "WhatsApp inválido")
    .max(20)
    .regex(/^[\d\s()+\-]+$/, "Use apenas números"),
  topic: z.enum(["sistema", "site", "instagram", "automacao", "outro"]),
  message: z.string().trim().min(10, "Conte um pouco mais").max(800),
});

const topics = [
  { value: "sistema", label: "Sistema próprio" },
  { value: "site", label: "Criação de site" },
  { value: "instagram", label: "Gestão de Instagram" },
  { value: "automacao", label: "Automação & IA" },
  { value: "outro", label: "Outro assunto" },
] as const;

function ContatoPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      whats: String(fd.get("whats") ?? ""),
      topic: String(fd.get("topic") ?? "outro"),
      message: String(fd.get("message") ?? ""),
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    const topicLabel =
      topics.find((t) => t.value === parsed.data.topic)?.label ?? "Outro";
    const text =
      `Olá, RDG Digital!\n\n` +
      `*Nome:* ${parsed.data.name}\n` +
      `*WhatsApp:* ${parsed.data.whats}\n` +
      `*Interesse:* ${topicLabel}\n\n` +
      parsed.data.message;
    const url = `${WHATSAPP_URL}${WHATSAPP_URL.includes("?") ? "&" : "?"}text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setSending(false), 800);
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground grain">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            as="h1"
            eyebrow="Contato"
            title="Vamos conversar"
            description="Preencha o formulário ou fale direto no WhatsApp. Respondemos no mesmo dia útil com um diagnóstico inicial sem compromisso."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass relative overflow-hidden rounded-3xl border border-border p-6 sm:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
              />
              <div className="relative grid gap-5">
                <Field
                  label="Nome"
                  name="name"
                  placeholder="Como podemos te chamar?"
                  error={errors.name}
                  autoComplete="name"
                  required
                />
                <Field
                  label="WhatsApp"
                  name="whats"
                  placeholder="(11) 99999-9999"
                  error={errors.whats}
                  inputMode="tel"
                  autoComplete="tel"
                  required
                />
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Interesse
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {topics.map((t, i) => (
                      <label
                        key={t.value}
                        className="group cursor-pointer rounded-xl border border-border bg-surface px-3 py-2.5 text-center text-xs transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary"
                      >
                        <input
                          type="radio"
                          name="topic"
                          value={t.value}
                          defaultChecked={i === 0}
                          className="sr-only"
                        />
                        {t.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={800}
                    placeholder="Conta um pouco do seu projeto, prazos e expectativas…"
                    className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  <Send size={16} />
                  {sending ? "Abrindo WhatsApp…" : "Enviar mensagem"}
                </button>
                <p className="text-center text-[11px] text-muted-foreground">
                  Ao enviar, abrimos o WhatsApp com sua mensagem pronta — só clicar em enviar.
                </p>
              </div>
            </form>

            {/* Side info */}
            <aside className="grid gap-4 content-start">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass relative overflow-hidden rounded-3xl border border-primary/30 p-6 transition-all hover:border-primary/60"
              >
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-all group-hover:bg-primary/40" />
                <MessageCircle className="text-primary" size={22} />
                <h3 className="mt-3 font-display text-lg font-semibold">WhatsApp direto</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Mais rápido: fale agora mesmo com a gente.
                </p>
                <span className="mt-3 inline-flex font-mono text-[11px] uppercase tracking-widest text-primary">
                  Abrir conversa →
                </span>
              </a>
              <div className="glass rounded-3xl border border-border p-6">
                <Mail className="text-primary" size={20} />
                <h3 className="mt-3 font-display text-base font-semibold">E-mail</h3>
                <a
                  href={CONTACT_EMAIL_URL}
                  className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div className="glass rounded-3xl border border-border p-6">
                <MapPin className="text-primary" size={20} />
                <h3 className="mt-3 font-display text-base font-semibold">Atendimento</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Brasil inteiro · 100% remoto<br />
                  Seg a sex, 9h–19h
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  error,
  ...rest
}: {
  label: string;
  name: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
        {...rest}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
