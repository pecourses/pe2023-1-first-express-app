const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

const users = [
  {
    id: uuidv4(),
    firstName: 'Test',
    lastName: 'Testovych',
    email: 'mail@mail.com',
  },
  {
    id: uuidv4(),
    firstName: 'Test2',
    lastName: 'Testovych2',
    email: 'mail2@mail.com',
  },
];

app.use(express.json()); // httpRequestJSON => req.body

// CRUD
app.post('/users', (req, res) => {
  // Зчитати дані
  const { body } = req;
  // Додати їх в масив
  const createdUser = { ...body, id: uuidv4() };
  users.push(createdUser);
  // 201 {}
  res.status(201).send(createdUser);
});

app.get('/users', (req, res) => {
  res.status(200).send(users);
});

app.get('/users/1', (req, res) => {});
app.patch('/users/1', (req, res) => {});
app.delete('/users/1', (req, res) => {});

module.exports = app;
