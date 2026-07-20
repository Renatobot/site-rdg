import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "list_blog_posts",
  title: "List blog posts",
  description: "Lista os posts do blog da RDG Digital (slug, título, resumo, data).",
  inputSchema: {
    query: z.string().optional().describe("Filtro opcional por texto no título ou resumo."),
    limit: z.number().int().min(1).max(50).optional().describe("Máximo de posts a retornar."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ query, limit }) => {
    const mod = await import("@/content/posts");
    const posts = mod.posts ?? [];
    const q = query?.trim().toLowerCase();
    const filtered = q
      ? posts.filter((p) =>
          `${p.title} ${p.excerpt} ${p.category} ${p.slug}`.toLowerCase().includes(q),
        )
      : posts;
    const items = filtered.slice(0, limit ?? 20).map((p) => ({
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      date: p.date,
      category: p.category,
      url: `https://rdgdigital.com.br/blog/${p.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});
