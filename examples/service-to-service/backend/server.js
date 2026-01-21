const http = require('http');

const PORT = 80;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Sucessfully requested data from backend ✨',
    date: new Date().toISOString(),
  }, null, 2));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});