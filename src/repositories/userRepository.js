const User = require("../models/userModel");

// Listar
async function getAllUsers() {
  const users = await User.find();

  return users.map((user) => ({
    id: user._id,
    nome: user.nome,
  }));
}

// Buscar por id
async function getUserById(id) {
  const user = await User.findById(id);

  if (!user) {
    return null;
  }

  return {
    id: user._id,
    nome: user.nome,
  };
}

// Criar
async function createUser(data) {
  const user = await User.create(data);

  return {
    id: user._id,
    nome: user.nome,
  };
}

// Atualizar
async function updateUser(id, data) {
  await User.findByIdAndUpdate(id, data);
}

// Deletar
async function deleteUser(id) {
  await User.findByIdAndDelete(id);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};