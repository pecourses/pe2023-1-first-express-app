const http = require('http');
const express = require('express');

const app = express();

// GET /
app.get('/', (req, res) => {
  res.status(200).send('Hello from app');
});

// GET /users
app.get('/users', (req, res) => {
  const user = { name: 'Test' };
  res.status(200).send(user);
});

// app - handler for createServer
const server = http.createServer(app);

server.listen(5000, () => {
  console.log(`Server is listening port 5000`);
});
