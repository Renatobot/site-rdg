export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const INFINITEPAY_API_KEY = process.env.INFINITEPAY_API_KEY;
    
    if (!INFINITEPAY_API_KEY) {
      return res.status(500).json({ error: 'Falta configurar INFINITEPAY_API_KEY nas variáveis de ambiente da Vercel.' });
    }

    // URL oficial da InfinitePay (Pode precisar ajustar se eles atualizarem a versão da API)
    const API_URL = "https://api.infinitepay.io/v2/payment-links";

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${INFINITEPAY_API_KEY}`
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    console.error("Erro no servidor ao criar checkout InfinitePay:", err);
    return res.status(500).json({ error: err.message });
  }
}
