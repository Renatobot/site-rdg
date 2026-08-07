import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/ai-proxy" as any)({
  server: {
    handlers: {
      OPTIONS: async () => {
        return new Response(null, {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "*",
          },
        });
      },
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const targetUrl = body.targetUrl;
          if (!targetUrl) {
            return new Response(JSON.stringify({ error: { message: "No targetUrl provided in the body for proxy" } }), { 
              status: 400,
              headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" }
            });
          }

          // Remover targetUrl para não enviar à API de destino
          const targetBody = { ...body };
          delete targetBody.targetUrl;

          const authHeader = request.headers.get("Authorization");
          const headers: Record<string, string> = {
            "Content-Type": "application/json",
          };
          if (authHeader) {
            headers["Authorization"] = authHeader;
          }

          const response = await fetch(targetUrl, {
            method: "POST",
            headers,
            body: JSON.stringify(targetBody),
          });

          const data = await response.text();

          return new Response(data, {
            status: response.status,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": response.headers.get("Content-Type") || "application/json",
            },
          });
        } catch (e: any) {
          console.error("AI Proxy Error:", e);
          return new Response(JSON.stringify({ error: { message: e.message || "Proxy Failed to fetch" } }), {
            status: 500,
            headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" }
          });
        }
      }
    }
  }
});
