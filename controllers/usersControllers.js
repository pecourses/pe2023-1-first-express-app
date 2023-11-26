const { v4: uuidv4 } = require('uuid');

const users = [
  {
    id: '1',
    firstName: 'Test',
    lastName: 'Testovych',
    email: 'mail@mail.com',
  },
  {
    id: '2',
    firstName: 'Test2',
    lastName: 'Testovych2',
    email: 'mail2@mail.com',
  },
];

module.exports.createUser = (req, res) => {
  // Зчитати дані
  const { body } = req;

  // Додати їх в масив
  const createdUser = { ...body, id: uuidv4() };
  users.push(createdUser);

  // 201 {user}
  res.status(201).send(createdUser);
};

module.exports.getUsers = (req, res) => {
  res.status(200).send(users);
};

module.exports.getUserById = (req, res) => {
  // Отримати id
  const { userId } = req.params;

  // Знайти користувача
  const foundUser = users.find(u => u.id === userId);

  // Якщо користувача не існує, то 404
  if (!foundUser) {
    return res.status(404).send('User Not Found');
  }

  // Інакше 200 {user}
  res.status(200).send(foundUser);
};

module.exports.updateUserById = (req, res) => {
  // Отримати id і дані
  const {
    params: { userId },
    body,
  } = req;

  // Знайти користувача
  const foundUserIndex = users.findIndex(u => u.id === userId);

  // Якщо користувача не існує, то 404
  if (foundUserIndex === -1) {
    return res.status(404).send('User Not Found');
  }

  // Інакше оновлюємо і 200 {user}
  users[foundUserIndex] = { ...users[foundUserIndex], ...body };
  res.status(200).send(users[foundUserIndex]);
};

module.exports.deleteUserById = (req, res) => {
  // Отримати id
  const { userId } = req.params;

  // Знайти користувача
  const foundUserIndex = users.findIndex(u => u.id === userId);

  // Якщо користувача не існує, то 404
  if (foundUserIndex === -1) {
    return res.status(404).send('User Not Found');
  }

  // Інакше видаляємо і 204
  users.splice(foundUserIndex, 1);
  res.status(204).end();
};
