// Vercel Serverless Function Proxy for TokenRouter
// Resolves CORS & strips Origin header to prevent OpenResty 403 Forbidden
export const config = { api: { bodyParser: true } };

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    // Build the subpath from URL, since vercel rewrites /api/tokenrouter/* to /api/tokenrouter?path=*
    let subpath = req.query.path;
    if (Array.isArray(subpath)) {
      subpath = subpath.join('/');
    }
    // Also try to extract from URL path directly
    if (!subpath) {
      const urlPath = req.url || '';
      const match = urlPath.match(/\/api\/tokenrouter\/?(.*?)(\?|$)/);
      if (match && match[1]) {
        subpath = match[1];
      }
    }
    if (!subpath) {
      subpath = 'chat/completions';
    }
    if (!subpath.startsWith('/')) {
      subpath = '/' + subpath;
    }

    const targetUrl = `https://api.tokenrouter.com/v1${subpath}`;

    // Read auth header — Vercel lowercases all headers
    const authHeader = req.headers['authorization'];
    res.setHeader('X-Debug-Auth-Received', String(Boolean(authHeader)));
    res.setHeader('X-Debug-Auth-Preview', authHeader ? authHeader.substring(0, 20) + '...' : 'none');
    res.setHeader('X-Debug-Subpath', subpath);
    res.setHeader('X-Debug-Target', targetUrl);

    const forwardHeaders = {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    };
    if (authHeader) {
      forwardHeaders['Authorization'] = authHeader;
    }

    // Get body as string to avoid double serialization
    let body = undefined;
    if (req.method === 'POST' || req.method === 'PUT') {
      if (typeof req.body === 'string') {
        body = req.body;
      } else if (req.body) {
        body = JSON.stringify(req.body);
      }
    }

    const upstream = await fetch(targetUrl, {
      method: req.method,
      headers: forwardHeaders,
      body,
    });

    const responseText = await upstream.text();
    res.setHeader('Content-Type', upstream.headers.get('content-type') || 'application/json');
    return res.status(upstream.status).send(responseText);
  } catch (err) {
    console.error("TokenRouter Proxy Error:", err);
    return res.status(500).json({ error: { message: err.message || 'Proxy Error' } });
  }
}
