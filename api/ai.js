// Vercel Serverless Function Universal AI Proxy
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    let targetUrl = req.query.url;
    let requestBody = req.body;

    if (!targetUrl && requestBody && typeof requestBody === 'object' && requestBody.targetUrl) {
      targetUrl = requestBody.targetUrl;
      requestBody = { ...requestBody };
      delete requestBody.targetUrl;
    }

    if (!targetUrl) {
      return res.status(400).json({ error: { message: "Missing 'url' query parameter or 'targetUrl' in body" } });
    }

    const authHeader = req.headers['authorization'] || req.headers['Authorization'];
    const forwardHeaders = {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    };
    if (authHeader) {
      forwardHeaders['Authorization'] = authHeader;
    }

    let body = undefined;
    if (req.method === 'POST' || req.method === 'PUT') {
      body = typeof requestBody === 'string' ? requestBody : JSON.stringify(requestBody);
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
    console.error("Universal AI Proxy Error:", err);
    return res.status(500).json({ error: { message: err.message || 'Proxy Error' } });
  }
}
