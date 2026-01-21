const http = require('http');

const PORT = 80;
const NAME = process.env["NAME"]

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: `Hello, ${NAME} 👋🏻`
  }, null, 2));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});