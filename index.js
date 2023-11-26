const http = require('http');

const requestListener = (req, res) => {
  res.statusCode = 200;
  res.end('Hello from server');
};

const server = http.createServer(requestListener);

server.listen(5000, () => {
  console.log(`Server is listening port 5000`);
});
