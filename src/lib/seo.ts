export const SITE_NAME = "RDG Digital";
export const BASE_URL = "https://rdgdigital.com.br";
export const OG_IMAGE_URL = `${BASE_URL}/logo.png`;
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";
export const OG_IMAGE_ALT =
  "RDG Digital — tecnologia que impulsiona negócios com sistemas próprios, sites premium, automação e IA.";

type MetaItem =
  | { title: string }
  | { name: string; content: string }
  | { property: string; content: string };

export function websiteMeta(
  title: string,
  description: string,
  url: string,
  imageUrl: string = OG_IMAGE_URL,
  imageAlt: string = OG_IMAGE_ALT
): MetaItem[] {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: OG_IMAGE_WIDTH },
    { property: "og:image:height", content: OG_IMAGE_HEIGHT },
    { property: "og:image:alt", content: imageAlt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: imageAlt },
  ];
}

export function articleMeta(
  title: string,
  description: string,
  url: string,
  published: string,
  category: string,
  imageUrl: string = OG_IMAGE_URL,
  imageAlt: string = OG_IMAGE_ALT
): MetaItem[] {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "article" },
    { property: "og:url", content: url },
    { property: "og:image", content: imageUrl },
    { property: "og:image:width", content: OG_IMAGE_WIDTH },
    { property: "og:image:height", content: OG_IMAGE_HEIGHT },
    { property: "og:image:alt", content: imageAlt },
    { property: "article:published_time", content: published },
    { property: "article:section", content: category },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: imageAlt },
  ];
}

export const organizationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rdgdigital.com.br/#organization",
  name: "RDG Digital",
  alternateName: ["RDG", "RDG Digital Tecnologia"],
  description:
    "Empresa de tecnologia brasileira que desenvolve sistemas próprios (Fila Zero Barber, Fila Zero Beauty, Smart Treino), sites premium sob medida, automações e agentes de IA para pequenas e médias empresas.",
  url: "https://rdgdigital.com.br",
  logo: {
    "@type": "ImageObject",
    url: OG_IMAGE_URL,
    width: 1200,
    height: 630,
  },
  image: OG_IMAGE_URL,
  email: "contato@rdgdigital.com.br",
  telephone: "+55-21-92007-8469",
  foundingDate: "2024",
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "Place", name: "América Latina" },
  ],
  knowsAbout: [
    "Desenvolvimento de sistemas web",
    "Criação de sites",
    "Automação de processos",
    "Inteligência Artificial aplicada",
    "Agentes de IA",
    "Bots de WhatsApp",
    "SEO técnico",
    "Gestão de Instagram",
    "Sistema para barbearia",
    "Sistema para salão de beleza",
    "Sistema para personal trainer",
  ],
  makesOffer: [
    { "@type": "Offer", name: "Fila Zero Barber", url: "https://filazerobarbery.lovable.app" },
    { "@type": "Offer", name: "Fila Zero Beauty", url: "https://filazerobeauty.lovable.app" },
    { "@type": "Offer", name: "Smart Treino", url: "https://smart-treino.lovable.app" },
    { "@type": "Offer", name: "Criação de sites premium" },
    { "@type": "Offer", name: "Automação e IA sob medida" },
    { "@type": "Offer", name: "Gestão de Instagram" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contato@rdgdigital.com.br",
      telephone: "+55-21-92007-8469",
      areaServed: "BR",
      availableLanguage: ["Portuguese"],
    },
  ],
});

export const homeFaqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é a RDG Digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A RDG Digital é uma empresa brasileira de tecnologia que desenvolve sistemas próprios (Fila Zero Barber, Fila Zero Beauty e Smart Treino), cria sites premium sob medida e implementa automações e agentes de IA para pequenas e médias empresas.",
      },
    },
    {
      "@type": "Question",
      name: "Quais sistemas a RDG Digital oferece?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fila Zero Barber para barbearias, Fila Zero Beauty para salões de beleza e estética, e Smart Treino para personal trainers e academias. Todos são sistemas próprios, 100% online e com IA integrada.",
      },
    },
    {
      "@type": "Question",
      name: "A RDG Digital cria sites do zero?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Cada site é codado do zero em stack moderna, com performance Lighthouse 95+ em mobile, SEO técnico configurado desde o primeiro deploy e identidade visual única — sem templates prontos.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a automação com IA da RDG Digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Implementamos agentes de IA, bots de WhatsApp e fluxos em n8n ou Zapier que respondem clientes 24 horas por dia, integram sistemas e automatizam tarefas repetitivas — liberando o time humano para o que gera receita.",
      },
    },
    {
      "@type": "Question",
      name: "Como falar com a RDG Digital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pelo e-mail contato@rdgdigital.com.br, pelo WhatsApp +55 21 92007-8469 ou pela página de contato em https://rdgdigital.com.br/contato.",
      },
    },
    {
      "@type": "Question",
      name: "A RDG Digital atende em todo o Brasil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. A operação é 100% remota — atendemos clientes em todo o Brasil e projetos pontuais na América Latina.",
      },
    },
  ],
});

export const servicesItemListJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Sistemas e serviços RDG Digital",
  itemListElement: [
    {
      "@type": "SoftwareApplication",
      position: 1,
      name: "Fila Zero Barber",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://filazerobarbery.lovable.app",
      description:
        "Sistema completo de agendamento e gestão para barbearias com IA de retenção.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    },
    {
      "@type": "SoftwareApplication",
      position: 2,
      name: "Fila Zero Beauty",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://filazerobeauty.lovable.app",
      description:
        "Sistema completo de agendamento e gestão para salões de beleza e profissionais da estética.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    },
    {
      "@type": "SoftwareApplication",
      position: 3,
      name: "Smart Treino",
      applicationCategory: "HealthApplication",
      operatingSystem: "Web",
      url: "https://smart-treino.lovable.app",
      description:
        "Plataforma para personal trainers e academias com treino, dieta e Coach IA 24/7.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
    },
    {
      "@type": "Service",
      position: 4,
      name: "Criação de Sites",
      serviceType: "Desenvolvimento de sites",
      provider: { "@id": "https://rdgdigital.com.br/#organization" },
      description:
        "Sites modernos, rápidos e responsivos, codados do zero com performance Lighthouse 100.",
    },
    {
      "@type": "Service",
      position: 5,
      name: "Gestão de Instagram",
      serviceType: "Social media management",
      provider: { "@id": "https://rdgdigital.com.br/#organization" },
      description:
        "Planejamento de conteúdo, identidade visual, engajamento e prospecção.",
    },
    {
      "@type": "Service",
      position: 6,
      name: "Automação & IA",
      serviceType: "Automação e Inteligência Artificial",
      provider: { "@id": "https://rdgdigital.com.br/#organization" },
      description:
        "Agentes de IA, bots de WhatsApp e integrações n8n/Zapier para automatizar processos.",
    },
  ],
});
