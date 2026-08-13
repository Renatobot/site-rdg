// Vercel Serverless Function Proxy for TokenRouter
// Resolves CORS & strips Origin header to prevent OpenResty 403 Forbidden
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    let subpath = req.query.path;
    if (Array.isArray(subpath)) {
      subpath = subpath.join('/');
    }
    if (!subpath) {
      subpath = 'chat/completions';
    }
    if (!subpath.startsWith('/')) {
      subpath = '/' + subpath;
    }

    const targetUrl = `https://api.tokenrouter.com/v1${subpath}`;

    const authHeader = req.headers['authorization'] || req.headers['Authorization'] || req.headers.authorization;
    res.setHeader('X-Debug-Auth-Received', String(Boolean(authHeader)));
    const forwardHeaders = {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    };
    if (authHeader) {
      forwardHeaders['Authorization'] = authHeader;
      forwardHeaders['authorization'] = authHeader;
    }

    // Do NOT forward Origin or Referer to TokenRouter - prevents 403
    let body = undefined;
    if (req.method === 'POST' || req.method === 'PUT') {
      body = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
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
