import { createFileRoute } from "@tanstack/react-router";

// @ts-ignore
export const Route = createFileRoute("/api/tokenrouter/$")({
  server: {
    handlers: {
      OPTIONS: async () => {
        return new Response(null, {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "*",
          },
        });
      },
      POST: async ({ request }) => {
        try {
          const reqUrl = new URL(request.url);
          const subpath = reqUrl.pathname.replace(/^\/api\/tokenrouter\/?/, "") || "chat/completions";
          const targetUrl = `https://api.tokenrouter.com/v1/${subpath}${reqUrl.search}`;

          const bodyText = await request.text();
          const authHeader = request.headers.get("authorization") || request.headers.get("Authorization");

          const headers: Record<string, string> = {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          };
          if (authHeader) {
            headers["Authorization"] = authHeader;
          }

          const response = await fetch(targetUrl, {
            method: "POST",
            headers,
            body: bodyText,
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
          return new Response(JSON.stringify({ error: { message: e.message || "Proxy Failed" } }), {
            status: 500,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          });
        }
      },
    },
  },
});
