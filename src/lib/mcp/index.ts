import { defineMcp } from "@lovable.dev/mcp-js";
import echoTool from "./tools/echo";
import listServicesTool from "./tools/list-services";
import listBlogPostsTool from "./tools/list-blog-posts";

export default defineMcp({
  name: "rdg-digital-mcp",
  title: "RDG Digital MCP",
  version: "0.1.0",
  instructions:
    "Ferramentas para consultar informações públicas do site da RDG Digital: serviços oferecidos, posts do blog e um echo para verificar conectividade.",
  tools: [echoTool, listServicesTool, listBlogPostsTool],
});
