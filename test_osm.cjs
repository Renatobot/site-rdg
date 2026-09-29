const fetch = require('node-fetch');

(async () => {
  const queries = [
    "Odontologia Rio de Janeiro",
    "Odontologia, Copacabana, Rio de Janeiro"
  ];
  for (const q of queries) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&addressdetails=1&limit=50`;
    console.log("Fetching:", q);
    const res = await fetch(url, { headers: { 'User-Agent': 'RDG-Test/1.0 (contact@rdgdigital.com.br)' } });
    console.log('Status:', res.status);
    const data = await res.json();
    console.log('Results length:', data.length);
  }
})();
