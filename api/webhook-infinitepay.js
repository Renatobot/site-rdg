export default async function handler(req, res) {
  // Apenas aceita POST (que é o que a InfinitePay envia)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;
    console.log("Recebido Webhook InfinitePay:", body);

    // O mais importante é pegar o order_nsu que enviamos com o e-mail do cliente
    const nsu = body.order_nsu; 
    if (!nsu) {
      return res.status(400).json({ error: 'Faltando order_nsu' });
    }

    // Vamos extrair a chave, o plano e o email
    const parts = nsu.split('_');
    if (parts.length < 3) {
      return res.status(400).json({ error: 'Formato de NSU inválido' });
    }

    const novaChave = parts[0]; // ex: LVB-ABCD1234
    const plan = parts[1]; // MENSAL ou VITALICIO
    const email = parts.slice(2).join('_'); // O resto é o email

    // Lógica de validade
    const isLifetime = plan === 'VITALICIO';
    let expiresAt = null;
    
    if (!isLifetime) {
      // Mensal: vence em 30 dias
      const dataVencimento = new Date();
      dataVencimento.setDate(dataVencimento.getDate() + 30);
      expiresAt = dataVencimento.toISOString();
    }

    // Variáveis do Supabase (Configure isso no painel da Vercel em Environment Variables)
    // Se o seu painel usa VITE_SUPABASE_URL, a Vercel já injeta isso!
    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_SERVICE_ROLE_KEY = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Credenciais do Supabase não configuradas na Vercel.");
      return res.status(500).json({ error: 'Erro interno de servidor' });
    }

    // Salvar no Supabase (Tabela licenses)
    const supabaseRes = await fetch(`${SUPABASE_URL}/rest/v1/licenses`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        key: novaChave,
        cliente: email,
        max_profiles: 999, // Acesso padrão
        is_lifetime: isLifetime,
        status: 'ativo',
        produto: 'lovable',
        expires_at: expiresAt
      })
    });

    if (!supabaseRes.ok) {
      const errorData = await supabaseRes.text();
      console.error("Erro ao salvar no Supabase:", errorData);
      return res.status(500).json({ error: 'Erro ao salvar licença' });
    }

    // =====================================================================
    // TODO: ENVIO DE E-MAIL
    // =====================================================================
    // Aqui a chave foi gerada e está salva no Supabase!
    // Você vai precisar usar um serviço gratuito de e-mail como o Resend.com
    // Basta criar conta lá, gerar a API Key, colar na Vercel (RESEND_API_KEY) e descomentar o código abaixo:
    
    /*
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'RDG Digital <suporte@rdgdigital.com.br>', // Mude para o seu email oficial configurado no Resend
          to: [email],
          subject: 'Seu Acesso à Extensão Lovable chegou!',
          html: `
            <div style="font-family: sans-serif; padding: 20px;">
              <h1>Pagamento Aprovado! 🚀</h1>
              <p>Obrigado por adquirir a Extensão Lovable.</p>
              <p>Abaixo está a sua chave de ativação oficial:</p>
              <h2 style="background: #f4f4f4; padding: 10px; display: inline-block; border-radius: 5px;">${novaChave}</h2>
              <p>Acesse o painel para instalar e ativar: <a href="https://sua-extensao.com/membros">Área de Membros</a></p>
            </div>
          `
        })
      });
    }
    */

    return res.status(200).json({ 
      success: true, 
      message: 'Licença gerada com sucesso!',
      chave: novaChave
    });

  } catch (error) {
    console.error("Erro no Webhook:", error);
    return res.status(500).json({ error: error.message });
  }
}
