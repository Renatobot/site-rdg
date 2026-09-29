const fetch = require('node-fetch'); // wait, node 20+ has fetch built-in
async function run() {
  try {
    const htmlRes = await fetch('https://rdgdigital.com.br/rdg_ai/index.html');
    const html = await htmlRes.text();
    const match = html.match(/src="(\/rdg_ai\/assets\/index-.*?\.js)"/);
    if (!match) {
      console.log('No JS file found in HTML:', html.substring(0, 500));
      return;
    }
    console.log('JS FILE:', match[1]);
    const jsRes = await fetch('https://rdgdigital.com.br' + match[1]);
    const jsText = await jsRes.text();
    console.log('CONTAINS DEBUG?', jsText.includes('[DEBUG]'));
    console.log('CONTAINS /api/proxy?', jsText.includes('/api/proxy'));
  } catch(e) {
    console.error(e);
  }
}
run();
