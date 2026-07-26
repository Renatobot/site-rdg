// Proxy Server-Side para IPTV — Resolve Mixed Content (HTTP→HTTPS), M3U8 Relativos, Direct Redirects, Range Requests e IPTV User-Agent na Vercel
// Rota: /api/proxy?url=<URL_DO_STREAM>
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/proxy")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const reqUrl = new URL(request.url);
        const targetUrl = reqUrl.searchParams.get("url");

        // CORS headers
        const corsHeaders = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges, Content-Type, X-Debug-IsM3u, X-Debug-TargetBase",
        };

        if (!targetUrl) {
          return new Response(JSON.stringify({ error: "Missing 'url' query parameter" }), {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          });
        }

        try {
          // Cabeçalhos para servidores de IPTV (User-Agent do VLC garante que painéis XUI/Nginx não retornem 404)
          const forwardHeaders: Record<string, string> = {
            "User-Agent": "VLC/3.0.18 LibVLC/3.0.18",
            Accept: "*/*",
            "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
          };

          const rangeHeader = request.headers.get("range");
          if (rangeHeader) {
            forwardHeaders["Range"] = rangeHeader;
          }

          // Loop manual de redirecionamentos (301/302) para preservar os cabeçalhos (Range & User-Agent)
          let currentFetchUrl = targetUrl;
          let upstream: Response | null = null;
          let redirects = 0;

          while (redirects < 5) {
            upstream = await fetch(currentFetchUrl, {
              headers: forwardHeaders,
              redirect: "manual",
            });

            if (upstream.status >= 300 && upstream.status < 400) {
              const location = upstream.headers.get("location");
              if (!location) break;
              currentFetchUrl = new URL(location, currentFetchUrl).href;
              redirects++;
            } else {
              break;
            }
          }

          if (!upstream) {
            return new Response(JSON.stringify({ error: "Failed to connect to target stream" }), {
              status: 502,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            });
          }

          const contentType = upstream.headers.get("content-type") || "application/octet-stream";
          const contentLength = upstream.headers.get("content-length");
          const contentRange = upstream.headers.get("content-range");
          const acceptRanges = upstream.headers.get("accept-ranges");

          const isM3u = true; // Forçar sempre true para teste

          const targetBase = currentFetchUrl.substring(0, currentFetchUrl.lastIndexOf("/") + 1);

          const responseHeaders: Record<string, string> = {
            "Content-Type": contentType,
            ...corsHeaders,
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "X-Debug-IsM3u": String(isM3u),
            "X-Debug-TargetBase": targetBase,
          };

          if (contentLength) responseHeaders["Content-Length"] = contentLength;
          if (contentRange) responseHeaders["Content-Range"] = contentRange;
          if (acceptRanges) responseHeaders["Accept-Ranges"] = acceptRanges;

          // Se for lista/manifesto HLS M3U8, reescrever TODAS as URLs usando a URL FINAL do redirecionamento
          if (upstream.ok) {
            let m3uText = await upstream.text();
            const reqOrigin = reqUrl.origin;

            if (m3uText.includes("#EXTM3U") || m3uText.includes("#EXTINF")) {
              const lines = m3uText.split(/\r?\n/);
              const rewrittenLines = lines.map((line) => {
                const trimmed = line.trim();
                if (!trimmed) return line;

                if (trimmed.startsWith("#")) {
                  if (trimmed.includes('URI="')) {
                    return trimmed.replace(/URI="([^"]+)"/g, (_, uri) => {
                      let absoluteUri = uri;
                      try {
                        absoluteUri = new URL(uri, targetBase).href;
                      } catch (_) {}
                      return `URI="${reqOrigin}/api/proxy?url=${encodeURIComponent(absoluteUri)}"`;
                    });
                  }
                  return line;
                }

                // Resolver linhas de segmento (.ts, .m3u8, etc.) em relação ao targetBase final
                let absoluteLineUrl = trimmed;
                try {
                  absoluteLineUrl = new URL(trimmed, targetBase).href;
                } catch (_) {}

                return `${reqOrigin}/api/proxy?url=${encodeURIComponent(absoluteLineUrl)}`;
              });

              m3uText = rewrittenLines.join("\n");
              return new Response(m3uText, {
                status: upstream.status,
                headers: responseHeaders,
              });
            }

            // Se for vídeo binário (.mp4, .mkv, .ts)
            return new Response(m3uText, {
              status: upstream.status,
              headers: responseHeaders,
            });
          }

          // Para vídeos (.mp4, .mkv, .ts), transmitir o stream diretamente (ReadableStream) sem ler na RAM!
          return new Response(upstream.body, {
            status: upstream.status,
            headers: responseHeaders,
          });
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err);
          console.error("[IPTV Proxy] Erro ao buscar URL:", targetUrl, msg);
          return new Response(JSON.stringify({ error: "Proxy error: " + msg }), {
            status: 500,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          });
        }
      },

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
    },
  },
});
