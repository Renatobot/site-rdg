import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WHATSAPP_URL } from "@/lib/site";
import { websiteMeta, BASE_URL } from "@/lib/seo";
import {
  Globe,
  Scissors,
  Sparkles,
  Dumbbell,
  Instagram,
  Wand2,
  MapPin,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

const TITLE = "Serviços — Sites, Sistemas e Automação | RDG Digital";
const DESCRIPTION =
  "Áreas de atuação da RDG Digital: criação de sites, sistemas para barbearia, salão e personal, automação com IA, bots de WhatsApp e Instagram.";
const CANONICAL_URL = `${BASE_URL}/servicos`;

type Term = { label: string; to?: string; hash?: string; href?: string };

type Group = {
  id: string;
  title: string;
  eyebrow: string;
  Icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  accent: string;
  intro: string;
  terms: Term[];
};

const HOME = "/" as const;

const groups: Group[] = [
  {
    id: "criacao-de-sites",
    title: "Criação de sites e landing pages",
    eyebrow: "desenvolvimento web premium",
    Icon: Globe,
    accent: "#00D9FF",
    intro:
      "Sites institucionais, landing pages e portais desenvolvidos do zero com foco em performance, SEO e conversão.",
    terms: [
      { label: "criação de sites profissionais", hash: "sites" },
      { label: "empresa de criação de sites", hash: "sites" },
      { label: "criação de site institucional", hash: "sites" },
      { label: "desenvolvimento de sites sob medida", hash: "sites" },
      { label: "criação de landing page de alta conversão", hash: "sites" },
      { label: "criação de site para empresa", hash: "sites" },
      { label: "site responsivo mobile first", hash: "sites" },
      { label: "site com performance Lighthouse 100", hash: "sites" },
      { label: "site rápido otimizado para SEO", hash: "sites" },
      { label: "criação de site com animações premium", hash: "sites" },
      { label: "site moderno com identidade visual única", hash: "sites" },
      { label: "programador de sites freelancer", hash: "sites" },
      { label: "agência de criação de sites no Rio de Janeiro", hash: "sites" },
      { label: "criação de site para pequenas empresas", hash: "sites" },
      { label: "criação de site para prestador de serviço", hash: "sites" },
      { label: "site profissional com SEO técnico", hash: "sites" },
      { label: "criação de site one page", hash: "sites" },
      { label: "criação de site institucional em React", hash: "sites" },
      { label: "criação de site com deploy contínuo", hash: "sites" },
      { label: "desenvolvedor front-end para site premium", hash: "sites" },
    ],
  },
  {
    id: "barbearia",
    title: "Sistema para barbearia",
    eyebrow: "gestão de barbearia",
    Icon: Scissors,
    accent: "#E5B86A",
    intro:
      "Fila Zero Barber: agendamento online, controle de comissões e IA de retenção de clientes para barbearias.",
    terms: [
      { label: "sistema para barbearia", href: "https://filazerobarbery.lovable.app" },
      { label: "software de gestão para barbearia", href: "https://filazerobarbery.lovable.app" },
      { label: "agendamento online para barbearia", href: "https://filazerobarbery.lovable.app" },
      { label: "app de agendamento de barbeiro", href: "https://filazerobarbery.lovable.app" },
      { label: "sistema com comissão automática para barbearia", href: "https://filazerobarbery.lovable.app" },
      { label: "controle de caixa de barbearia", href: "https://filazerobarbery.lovable.app" },
      { label: "sistema para barbearia com WhatsApp", href: "https://filazerobarbery.lovable.app" },
      { label: "melhor sistema para barbearia moderna", href: "https://filazerobarbery.lovable.app" },
      { label: "programa para gerenciar barbearia", href: "https://filazerobarbery.lovable.app" },
      { label: "sistema de fidelidade para barbearia", href: "https://filazerobarbery.lovable.app" },
      { label: "IA para retenção de clientes de barbearia", href: "https://filazerobarbery.lovable.app" },
      { label: "agenda online barber shop", href: "https://filazerobarbery.lovable.app" },
      { label: "sistema para múltiplos barbeiros", href: "https://filazerobarbery.lovable.app" },
      { label: "dashboard financeiro para barbearia", href: "https://filazerobarbery.lovable.app" },
    ],
  },
  {
    id: "beleza",
    title: "Sistema para salão de beleza e estética",
    eyebrow: "gestão de beleza",
    Icon: Sparkles,
    accent: "#B57BFF",
    intro:
      "Fila Zero Beauty: agendamento, lembretes automáticos e módulos completos para salões e profissionais da estética.",
    terms: [
      { label: "sistema para salão de beleza", href: "https://filazerobeauty.lovable.app" },
      { label: "software para salão de beleza", href: "https://filazerobeauty.lovable.app" },
      { label: "agenda online para salão de beleza", href: "https://filazerobeauty.lovable.app" },
      { label: "sistema para esteticista", href: "https://filazerobeauty.lovable.app" },
      { label: "app de agendamento para salão", href: "https://filazerobeauty.lovable.app" },
      { label: "sistema com lembrete automático de horário", href: "https://filazerobeauty.lovable.app" },
      { label: "plataforma para gerenciar salão de beleza", href: "https://filazerobeauty.lovable.app" },
      { label: "sistema para manicure e cabeleireira", href: "https://filazerobeauty.lovable.app" },
      { label: "software de comissão para salão", href: "https://filazerobeauty.lovable.app" },
      { label: "controle financeiro para salão de beleza", href: "https://filazerobeauty.lovable.app" },
      { label: "sistema de agendamento com link público", href: "https://filazerobeauty.lovable.app" },
      { label: "melhor sistema para clínica de estética", href: "https://filazerobeauty.lovable.app" },
      { label: "gestão de clientes para salão", href: "https://filazerobeauty.lovable.app" },
      { label: "sistema para designer de sobrancelha", href: "https://filazerobeauty.lovable.app" },
    ],
  },
  {
    id: "fitness",
    title: "Sistema para personal trainer e academia",
    eyebrow: "fitness e performance",
    Icon: Dumbbell,
    accent: "#F97316",
    intro:
      "Smart Treino: prescrição de treinos, dieta personalizada e Coach IA 24/7 para personal trainers e academias.",
    terms: [
      { label: "app para personal trainer", href: "https://smart-treino.lovable.app" },
      { label: "plataforma para personal trainer online", href: "https://smart-treino.lovable.app" },
      { label: "sistema para academia", href: "https://smart-treino.lovable.app" },
      { label: "software de prescrição de treino", href: "https://smart-treino.lovable.app" },
      { label: "app de treino com IA", href: "https://smart-treino.lovable.app" },
      { label: "coach de treino com inteligência artificial", href: "https://smart-treino.lovable.app" },
      { label: "sistema de dieta personalizada com IA", href: "https://smart-treino.lovable.app" },
      { label: "plataforma de treino online para alunos", href: "https://smart-treino.lovable.app" },
      { label: "app para acompanhar evolução de aluno", href: "https://smart-treino.lovable.app" },
      { label: "programa para personal trainer gerenciar alunos", href: "https://smart-treino.lovable.app" },
      { label: "sistema de assessoria esportiva online", href: "https://smart-treino.lovable.app" },
      { label: "app de musculação com IA", href: "https://smart-treino.lovable.app" },
      { label: "controle de alunos de academia", href: "https://smart-treino.lovable.app" },
      { label: "planilha de treino digital automatizada", href: "https://smart-treino.lovable.app" },
    ],
  },
  {
    id: "automacao-ia",
    title: "Automação e Inteligência Artificial",
    eyebrow: "automação para empresas",
    Icon: Wand2,
    accent: "#34D399",
    intro:
      "Agentes de IA, bots de WhatsApp e automações n8n/Zapier para eliminar tarefas repetitivas e escalar operação.",
    terms: [
      { label: "agente de IA para WhatsApp", hash: "automacao-ia" },
      { label: "chatbot para atendimento ao cliente", hash: "automacao-ia" },
      { label: "bot de WhatsApp para vendas", hash: "automacao-ia" },
      { label: "automação com n8n para empresas", hash: "automacao-ia" },
      { label: "automação com Zapier", hash: "automacao-ia" },
      { label: "IA para atendimento automático", hash: "automacao-ia" },
      { label: "automação de processos empresariais", hash: "automacao-ia" },
      { label: "integração de sistemas com API", hash: "automacao-ia" },
      { label: "criação de agentes de IA personalizados", hash: "automacao-ia" },
      { label: "chatbot com GPT para empresa", hash: "automacao-ia" },
      { label: "automação de envio de mensagens", hash: "automacao-ia" },
      { label: "automação de planilhas Google", hash: "automacao-ia" },
      { label: "IA para agendamento automático", hash: "automacao-ia" },
      { label: "consultoria em automação e IA", hash: "automacao-ia" },
      { label: "bot de WhatsApp com IA generativa", hash: "automacao-ia" },
      { label: "automação de CRM", hash: "automacao-ia" },
      { label: "empresa de automação com IA no Brasil", hash: "automacao-ia" },
    ],
  },
  {
    id: "instagram",
    title: "Gestão de Instagram e social media",
    eyebrow: "presença digital",
    Icon: Instagram,
    accent: "#E1306C",
    intro:
      "Planejamento de conteúdo, identidade visual, engajamento e prospecção estratégica para marcas no Instagram.",
    terms: [
      { label: "gestão de Instagram para empresas", hash: "instagram" },
      { label: "social media para pequenas empresas", hash: "instagram" },
      { label: "agência de social media", hash: "instagram" },
      { label: "planejamento de conteúdo para Instagram", hash: "instagram" },
      { label: "prospecção ativa no Instagram", hash: "instagram" },
      { label: "identidade visual para Instagram", hash: "instagram" },
      { label: "consultoria de Instagram para negócios", hash: "instagram" },
      { label: "gestão de redes sociais profissional", hash: "instagram" },
      { label: "estratégia de conteúdo para marcas", hash: "instagram" },
      { label: "criação de feed para Instagram", hash: "instagram" },
      { label: "engajamento orgânico no Instagram", hash: "instagram" },
      { label: "marketing digital para prestadores de serviço", hash: "instagram" },
    ],
  },
  {
    id: "regioes",
    title: "Áreas atendidas",
    eyebrow: "atuação nacional",
    Icon: MapPin,
    accent: "#00D9FF",
    intro:
      "Atendemos empresas em todo o Brasil, com foco em pequenos e médios negócios que buscam se destacar com tecnologia.",
    terms: [
      { label: "agência de tecnologia no Rio de Janeiro" },
      { label: "criação de sites em São Paulo" },
      { label: "empresa de automação no Brasil" },
      { label: "desenvolvedor de sites RJ" },
      { label: "sistema para barbearia no Rio de Janeiro" },
      { label: "sistema para salão de beleza em SP" },
      { label: "gestão de Instagram Rio de Janeiro" },
      { label: "empresa de IA para pequenas empresas Brasil" },
      { label: "software house Rio de Janeiro" },
      { label: "consultoria de tecnologia para PMEs" },
    ],
  },
];

const itemListJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Serviços e áreas de atuação da RDG Digital",
  itemListElement: groups.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: g.title,
    description: g.intro,
    url: `${CANONICAL_URL}#${g.id}`,
  })),
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Serviços", item: CANONICAL_URL },
  ],
});

const faqs: { q: string; a: string }[] = [
  {
    q: "Quais serviços a RDG Digital oferece?",
    a: "A RDG Digital desenvolve sites profissionais, landing pages de alta conversão, sistemas próprios para barbearia (Fila Zero Barber), salão de beleza e estética (Fila Zero Beauty) e personal trainer/academia (Smart Treino), além de automações com IA, bots de WhatsApp e gestão de Instagram.",
  },
  {
    q: "A RDG Digital atende empresas em todo o Brasil?",
    a: "Sim. Atendemos empresas em todo o território nacional de forma 100% online, com foco em pequenos e médios negócios que querem se destacar com tecnologia, presença digital e automação.",
  },
  {
    q: "Quanto custa criar um site profissional com a RDG Digital?",
    a: "O investimento varia conforme o escopo: sites institucionais, landing pages e portais sob medida têm propostas personalizadas. Fale com o nosso time no WhatsApp para receber um orçamento gratuito.",
  },
  {
    q: "Os sistemas da RDG Digital funcionam no celular?",
    a: "Sim. Fila Zero Barber, Fila Zero Beauty e Smart Treino são 100% responsivos, funcionam direto no navegador do celular, tablet e desktop, sem precisar instalar aplicativo.",
  },
  {
    q: "A RDG Digital cria automações com Inteligência Artificial?",
    a: "Sim. Desenvolvemos agentes de IA personalizados, chatbots com GPT, bots de WhatsApp para atendimento e vendas, além de automações com n8n e Zapier para eliminar tarefas repetitivas.",
  },
  {
    q: "Como falar com a equipe da RDG Digital?",
    a: "O canal mais rápido é o WhatsApp, disponível no botão principal do site. Também é possível entrar em contato pelo e-mail contato@rdgdigital.com.br.",
  },
];

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
    scripts: [
      { type: "application/ld+json" as const, children: itemListJsonLd },
      { type: "application/ld+json" as const, children: breadcrumbJsonLd },
      { type: "application/ld+json" as const, children: faqJsonLd },
    ],
  }),
  component: ServicosPage,
});

function TermPill({ term }: { term: Term }) {
  const cls =
    "inline-flex items-center rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:bg-primary/5";
  if (term.href) {
    return (
      <a href={term.href} target="_blank" rel="noopener noreferrer" className={cls}>
        {term.label}
      </a>
    );
  }
  if (term.hash) {
    return (
      <Link to={HOME} hash={term.hash} className={cls}>
        {term.label}
      </Link>
    );
  }
  return (
    <Link to={HOME} className={cls}>
      {term.label}
    </Link>
  );
}

function ServicosPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground grain">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-14 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Índice completo · SEO
            </p>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Serviços de tecnologia,{" "}
              <span className="text-primary">sites, sistemas e automação</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Um mapa completo de todas as áreas de atuação da RDG Digital.
              Clique em qualquer termo para conhecer o serviço, o sistema ou
              conversar com a nossa equipe.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>
              <Link
                to={HOME}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
              >
                <ArrowLeft size={16} />
                Voltar para a home
              </Link>
            </div>
          </div>

          {/* Table of contents */}
          <nav
            aria-label="Índice de serviços"
            className="mb-14 rounded-2xl border border-border bg-surface/40 p-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
              Neste índice
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {groups.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-primary/40 hover:text-foreground"
                  >
                    <g.Icon size={12} style={{ color: g.accent }} />
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-14">
            {groups.map((g) => (
              <section
                key={g.id}
                id={g.id}
                className="scroll-mt-24 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-background"
                    style={{ color: g.accent, boxShadow: `0 0 30px ${g.accent}22` }}
                  >
                    <g.Icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="font-mono text-[10px] uppercase tracking-[0.25em]"
                      style={{ color: g.accent }}
                    >
                      {g.eyebrow}
                    </p>
                    <h2 className="mt-1 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {g.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                      {g.intro}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {g.terms.map((t) => (
                    <TermPill key={t.label} term={t} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section
            id="faq"
            aria-labelledby="faq-title"
            className="mt-16 rounded-3xl border border-border bg-surface/40 p-6 sm:p-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Perguntas frequentes
            </p>
            <h2
              id="faq-title"
              className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl"
            >
              FAQ — RDG Digital
            </h2>
            <div className="mt-6 divide-y divide-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-foreground sm:text-base">
                    <span>{f.q}</span>
                    <span className="text-primary transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </section>



          <div className="mt-16 rounded-3xl border border-primary/30 bg-primary/5 p-8 text-center">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Não achou o que procurava?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              A RDG Digital desenvolve soluções sob medida. Fale com a nossa
              equipe e receba uma proposta personalizada para o seu negócio.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <MessageCircle size={16} />
              Solicitar proposta
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
