import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const SERVICES = [
  {
    slug: "sistemas",
    title: "Sistemas próprios",
    description:
      "Desenvolvimento de sistemas web sob medida para operações internas, agendamento, gestão e vendas.",
    url: "https://rdgdigital.com.br/sistemas",
  },
  {
    slug: "servicos",
    title: "Serviços digitais",
    description:
      "Sites premium, automações, integrações e soluções de IA para impulsionar negócios de qualquer nicho.",
    url: "https://rdgdigital.com.br/servicos",
  },
  {
    slug: "contato",
    title: "Contato / Orçamento",
    description: "Fale com a RDG Digital para pedir orçamento, tirar dúvidas ou iniciar um projeto.",
    url: "https://rdgdigital.com.br/contato",
  },
  {
    slug: "blog",
    title: "Blog",
    description: "Artigos sobre tecnologia, automação, IA e crescimento de negócios digitais.",
    url: "https://rdgdigital.com.br/blog",
  },
];

export default defineTool({
  name: "list_services",
  title: "List RDG Digital services",
  description:
    "Lista os serviços e páginas principais oferecidos pela RDG Digital (sistemas, serviços, contato, blog).",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Filtro opcional por texto (case-insensitive) sobre título/descrição."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const items = q
      ? SERVICES.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.description.toLowerCase().includes(q) ||
            s.slug.includes(q),
        )
      : SERVICES;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});
