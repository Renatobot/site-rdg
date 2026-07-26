import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// ── PROXY HANDLER DEDICADO PARA STREAMING IPTV ──
async function handleProxyRequest(request: Request): Promise<Response> {
  const reqUrl = new URL(request.url);
  const targetUrl = reqUrl.searchParams.get("url");

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Expose-Headers": "Content-Length, Content-Range, Accept-Ranges, Content-Type",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: "Missing 'url' query parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const forwardHeaders: Record<string, string> = {
      "User-Agent": "VLC/3.0.18 LibVLC/3.0.18",
      Accept: "*/*",
      "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
    };

    const rangeHeader = request.headers.get("range");
    if (rangeHeader) {
      forwardHeaders["Range"] = rangeHeader;
    }

    // Manual 302 redirect loop preserving Range & VLC User-Agent headers
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

    const responseHeaders: Record<string, string> = {
      "Content-Type": contentType,
      ...corsHeaders,
      "Cache-Control": "no-cache, no-store, must-revalidate",
    };

    if (contentLength) responseHeaders["Content-Length"] = contentLength;
    if (contentRange) responseHeaders["Content-Range"] = contentRange;
    if (acceptRanges) responseHeaders["Accept-Ranges"] = acceptRanges;

    const isM3u =
      contentType.includes("mpegurl") ||
      contentType.includes("m3u") ||
      currentFetchUrl.toLowerCase().includes(".m3u");

    // M3U8 Playlist: Rewrite ALL lines (relative & absolute) using final redirected URL
    if (isM3u && upstream.ok) {
      let m3uText = await upstream.text();
      const reqOrigin = reqUrl.origin;
      const targetBase = currentFetchUrl.substring(0, currentFetchUrl.lastIndexOf("/") + 1);

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

    // Video streams (.mp4, .mkv, .ts): Stream body directly
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
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/proxy") {
        return await handleProxyRequest(request);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
