const userRepository = require("../repositories/userRepository");

// GET All Users
async function listUsers(req, res) {
  const users = await userRepository.getAllUsers();
  res.json(users);
}

// GET User by ID
async function getUser(req, res) {
  const user = await userRepository.getUserById(req.params.id);

  if (!user) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  res.json(user);
}

// POST CreateUser
async function createUser(req, res) {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "Nome é obrigatório" });
  }

  const user = await userRepository.createUser({ nome });

  res.status(201).json(user);
}

// PUT UpdateUser
async function updateUser(req, res) {
  await userRepository.updateUser(req.params.id, req.body);

  res.status(204).send();
}

// DELETE User
async function deleteUser(req, res) {
  await userRepository.deleteUser(req.params.id);

  res.status(204).send();
}

module.exports = {
  listUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};