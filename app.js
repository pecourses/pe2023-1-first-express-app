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
app.get('/users/:userId', getUserById); // path after /users/ to req.params.userId
app.patch('/users/:userId', updateUserById); // path after /users/ to req.params.userId
app.delete('/users/:userId', deleteUserById); // path after /users/ to req.params.userId

module.exports = app;
