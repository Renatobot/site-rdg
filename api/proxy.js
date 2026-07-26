// Vercel Serverless Function Proxy for IPTV Streams & M3U8 Playlists
// Route: /api/proxy?url=<STREAM_URL>
import { Readable } from "node:stream";

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Expose-Headers", "Content-Length, Content-Range, Accept-Ranges, Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).json({ error: "Missing 'url' query parameter" });
  }

  try {
    const forwardHeaders = {
      "User-Agent": "VLC/3.0.18 LibVLC/3.0.18",
      Accept: "*/*",
      "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
    };

    if (req.headers.range) {
      forwardHeaders["Range"] = req.headers.range;
    }

    // Loop manual de 302 redirects para manter os headers (Range & User-Agent)
    let currentFetchUrl = targetUrl;
    let upstream = null;
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
      return res.status(502).json({ error: "Failed to connect to target stream" });
    }

    const contentType = upstream.headers.get("content-type") || "application/octet-stream";
    const contentLength = upstream.headers.get("content-length");
    const contentRange = upstream.headers.get("content-range");
    const acceptRanges = upstream.headers.get("accept-ranges");

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");

    if (contentRange) res.setHeader("Content-Range", contentRange);
    if (acceptRanges) res.setHeader("Accept-Ranges", acceptRanges);

    // Se for M3U8 / Playlist HLS
    const isM3u =
      contentType.includes("mpegurl") ||
      contentType.includes("m3u") ||
      currentFetchUrl.toLowerCase().includes(".m3u") ||
      targetUrl.toLowerCase().includes(".m3u");

    if (isM3u && upstream.ok) {
      let m3uText = await upstream.text();

      if (m3uText.includes("#EXTM3U") || m3uText.includes("#EXTINF")) {
        const protocol = req.headers["x-forwarded-proto"] || "https";
        const host = req.headers["x-forwarded-host"] || req.headers.host || "www.rdgdigital.com.br";
        const reqOrigin = `${protocol}://${host}`;
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

          // Resolver linhas de segmento (.ts, .m3u8, etc.) em relação ao targetBase final
          let absoluteLineUrl = trimmed;
          try {
            absoluteLineUrl = new URL(trimmed, targetBase).href;
          } catch (_) {}

          return `${reqOrigin}/api/proxy?url=${encodeURIComponent(absoluteLineUrl)}`;
        });

        m3uText = rewrittenLines.join("\n");
        return res.status(upstream.status).send(m3uText);
      }

      return res.status(upstream.status).send(m3uText);
    }

    // Para arquivos binários (.mp4, .mkv, .ts), envia o Content-Length original e transmite o stream
    if (contentLength) res.setHeader("Content-Length", contentLength);

    res.status(upstream.status);
    if (upstream.body) {
      const nodeStream = Readable.fromWeb(upstream.body);
      nodeStream.pipe(res);
    } else {
      res.end();
    }
  } catch (error) {
    console.error("[IPTV Proxy Error]:", error);
    return res.status(500).json({ error: "Proxy error: " + error.message });
  }
}
