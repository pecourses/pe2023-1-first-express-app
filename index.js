const http = require('http');
const app = require('./app');

// app - handler for createServer
const server = http.createServer(app);

server.listen(5000, () => {
  console.log(`Server is listening port 5000`);
});
