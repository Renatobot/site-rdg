import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scissors,
  Sparkles,
  Dumbbell,
  Globe,
  Instagram,
  MapPin,
  Wand2,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { ProductsBadges } from "@/components/site/ProductsBadges";
import { ServicesIntro } from "@/components/site/ServicesIntro";
import { About } from "@/components/site/About";
import { Manifesto } from "@/components/site/Manifesto";
import { SystemChapter } from "@/components/site/SystemChapter";
import { ChapterBreak } from "@/components/site/ChapterBreak";
import { ServiceChapter } from "@/components/site/ServiceChapter";
import { Features } from "@/components/site/Features";
import { FinalCTA } from "@/components/site/FinalCTA";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { SectionDivider } from "@/components/site/SectionDivider";
import { ExplodedScroll } from "@/components/site/ExplodedScroll";
import { websiteMeta, organizationJsonLd, servicesItemListJsonLd, homeFaqJsonLd } from "@/lib/seo";

const TITLE = "RDG Digital — Tecnologia que impulsiona negócios";
const DESCRIPTION =
  "Desenvolvemos sistemas inteligentes e soluções digitais para ajudar empresas a crescer com mais organização, eficiência e presença online.";
const CANONICAL_URL = "https://rdgdigital.com.br/";

const BARBER = "#E5B86A";
const BEAUTY = "#B57BFF";
const FIT = "#F97316";
const WEB = "#00D9FF";
const SOCIAL = "#E1306C";
const GMN = "#4285F4";
const AI = "#34D399";
const TOTAL = "07";

const jsonLdScripts = [
  { type: "application/ld+json" as const, children: organizationJsonLd },
  { type: "application/ld+json" as const, children: servicesItemListJsonLd },
  { type: "application/ld+json" as const, children: homeFaqJsonLd },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: websiteMeta(TITLE, DESCRIPTION, CANONICAL_URL),
    links: [{ rel: "canonical", href: CANONICAL_URL }],
    scripts: jsonLdScripts,
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground grain">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ProductsBadges />
        <SectionDivider />
        <About />
        <Manifesto />
        <ExplodedScroll />


        {/* ───────────────── SISTEMAS PRÓPRIOS ───────────────── */}
        <ChapterBreak index="01" total={TOTAL} label="BARBER" fromColor={WEB} toColor={BARBER} Icon={Scissors} />
        <SystemChapter
          id="sistemas"
          chapter="Capítulo 01"
          eyebrow="barbearia premium"
          name="Fila Zero Barber"
          tagline="Sistema completo de agendamento e gestão para barbearias."
          description="Clientes agendam sozinhos pelo link, comissões fecham automáticas e a IA identifica quem está sumindo pra reativar antes que vá pro concorrente."
          features={["Agenda online", "Comissões auto", "IA de retenção", "Dashboard ao vivo"]}
          href="https://filazerobarbery.lovable.app"
          Icon={Scissors}
          accent={BARBER}
          variant="barber"
        />

        <ChapterBreak index="02" total={TOTAL} label="BEAUTY" fromColor={BARBER} toColor={BEAUTY} Icon={Sparkles} />
        <SystemChapter
          id="beauty"
          chapter="Capítulo 02"
          eyebrow="beleza & estética"
          name="Fila Zero Beauty"
          tagline="Sistema completo de agendamento e gestão para salões de beleza e profissionais da área da beleza."
          description="Confirmação automática, lembrete uma hora antes, cancelamento e reagendamento — tudo num só sistema, com 9 módulos pensados pro dia a dia do salão."
          features={["WhatsApp 1-clique", "Lembrete 1h antes", "Link público", "9 módulos integrados"]}
          href="https://filazerobeauty.lovable.app"
          Icon={Sparkles}
          accent={BEAUTY}
          variant="beauty"
          reverse
        />

        <ChapterBreak index="03" total={TOTAL} label="FITNESS" fromColor={BEAUTY} toColor={FIT} Icon={Dumbbell} />
        <SystemChapter
          id="smart-treino"
          chapter="Capítulo 03"
          eyebrow="fitness & performance"
          name="Smart Treino"
          tagline="Plataforma para personal trainers e academias gerenciarem alunos e treinos de forma simples e eficiente."
          description="A pessoa segue, registra e o Coach IA ajusta cargas, repetições e plano nutricional com base na evolução real — 24/7."
          features={["Treino com IA", "Dieta personalizada", "Coach 24/7", "Evolução em tempo real"]}
          href="https://smart-treino.lovable.app"
          Icon={Dumbbell}
          accent={FIT}
          variant="fit"
        />

        {/* ───────────────── SERVIÇOS DIGITAIS ───────────────── */}
        <ServicesIntro />

        <ChapterBreak index="04" total={TOTAL} label="SITES" fromColor={FIT} toColor={WEB} Icon={Globe} />
        <ServiceChapter
          id="sites"
          chapter="Capítulo 04"
          eyebrow="criação de sites"
          name="Criação de Sites"
          tagline="Modelos prontos para lançar rápido — ou um site sob medida, do jeito que você imagina."
          description="Comece por um template premium da nossa vitrine ou traga a sua ideia: construímos do zero de acordo com o gosto e a marca do cliente. Modelos prontos saem no mesmo dia; projetos personalizados têm prazo conforme a complexidade do escopo."
          features={["Templates premium prontos", "Projetos 100% sob medida", "Personalização conforme sua marca", "Prazo conforme a complexidade"]}
          message="Olá! Quero um orçamento para criação de site com a RDG Digital."
          ctaLabel="Ver modelos de site"
          ctaHref="https://sites.rdgdigital.com.br"
          Icon={Globe}
          accent={WEB}
          variant="web"
          reverse
        />


        <ChapterBreak index="05" total={TOTAL} label="SOCIAL" fromColor={WEB} toColor={SOCIAL} Icon={Instagram} />
        <ServiceChapter
          id="instagram"
          chapter="Capítulo 05"
          eyebrow="gestão de instagram"
          name="Gestão de Instagram & Software"
          tagline="Gestão estratégica ou software autônomo no piloto automático."
          description="Aumente as vendas do seu negócio no Instagram: contrate a RDG para gerenciar tudo para você ou adquira nossa extensão RDG instaPRO para rodar a automação no seu computador."
          features={["Prospecção no Piloto Automático", "Filtros Anti-Fake Inteligentes", "Disparador Direct 24/7", "Exportador Meta Ads CSV"]}
          message="Olá! Quero um orçamento para gestão de Instagram com a RDG Digital."
          ctaLabel="Gestão Completa (A RDG Faz)"
          ctaHref="/instagram"
          ctaInternal
          secondaryCtaLabel="Comprar Software RDG instaPRO"
          secondaryCtaHref="/extensao"
          secondaryCtaInternal
          Icon={Instagram}
          accent={SOCIAL}
          variant="social"
        />

        <ChapterBreak index="06" total={TOTAL} label="LOCAL" fromColor={SOCIAL} toColor={GMN} Icon={MapPin} />
        <ServiceChapter
          id="gmn"
          chapter="Capítulo 06"
          eyebrow="google meu negócio"
          name="Google Meu Negócio"
          tagline="Apareça no topo quando alguém do seu bairro busca o que você vende."
          description="Ficha otimizada, fotos profissionais, categorias corretas, respostas de avaliação e postagens semanais. Seu negócio passa a aparecer no Maps, no pack local e nas buscas 'perto de mim' — trazendo cliente decidido a comprar."
          features={["Ficha otimizada", "Pack local no topo", "Gestão de avaliações", "Insights mensais"]}
          message="Olá! Quero um orçamento para gestão do Google Meu Negócio com a RDG Digital."
          ctaLabel="Ver método completo"
          ctaHref="/gmn"
          ctaInternal
          Icon={MapPin}
          accent={GMN}
          variant="gmn"
          reverse
        />

        <ChapterBreak index="07" total={TOTAL} label="AUTOMAÇÃO & IA" fromColor={GMN} toColor={AI} Icon={Wand2} />
        <ServiceChapter
          id="automacao-ia"
          chapter="Capítulo 07"
          eyebrow="automação & ia"
          name="Automação & IA"
          tagline="Automatize processos, economize tempo e aumente a produtividade com soluções inteligentes."
          description="Bots de WhatsApp, agentes de IA que respondem clientes, automações entre planilhas, CRMs e sistemas. Seu time foca no que importa, a máquina faz o resto."
          features={["Agentes de IA", "Bots WhatsApp", "n8n / Zapier", "Integrações custom"]}
          message="Olá! Quero conhecer as soluções de Automação & IA da RDG Digital."
          ctaLabel="Conhecer soluções"
          Icon={Wand2}
          accent={AI}
          variant="ai"
        />


        <Features />
        <FAQ />
        <FinalCTA />
        <div className="border-t border-border/50 py-6 text-center">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70 transition-colors hover:text-primary"
          >
            Ver todos os serviços e áreas de atuação
            <span aria-hidden>→</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

