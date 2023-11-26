const express = require('express');
const {
  createUser,
  getUsers,
  updateUserById,
  getUserById,
  deleteUserById,
} = require('./controllers/usersControllers');
const app = express();

app.use(express.json()); // httpRequestJSON => req.body

// CRUD
app.post('/users', createUser);
app.get('/users', getUsers);
app.get('/users/:userId', getUserById);
app.patch('/users/:userId', updateUserById);
app.delete('/users/:userId', deleteUserById);

module.exports = app;

// Параметри маршрута (завжди рядки)
// GET /contacts/kjhkjsfhkjsdf
// app.get('/contacts/:id', (req, res) => {
//   console.log('req.params :>> ', req.params.id);
// });
