// Vercel Serverless Function Proxy for OpenRouter
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

    const targetUrl = `https://openrouter.ai/api/v1${subpath}`;

    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    const forwardHeaders = {
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://rdgdigital.com.br',
      'X-Title': 'RDG AI Platform',
    };
    if (authHeader) {
      forwardHeaders['Authorization'] = authHeader;
    }

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
    console.error("OpenRouter Proxy Error:", err);
    return res.status(500).json({ error: { message: err.message || 'Proxy Error' } });
  }
}
