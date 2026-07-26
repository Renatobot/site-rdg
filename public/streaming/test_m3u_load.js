const http = require('http');

http.get('http://localhost:3005/index.html', (res) => {
  console.log('STATUS:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('INDEX.HTML LENGTH:', data.length);
  });
}).on('error', (err) => {
  console.error('ERROR CONNECTING TO 3005:', err.message);
});
