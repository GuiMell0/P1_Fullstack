const carRepository = require("../repositories/carRepository");

// Listar
async function lisCars(req, res) {
  const cars = await carRepository.getAllCars();
  res.json(cars);
}

// Buscar por id
async function getCar(req, res) {
  const car = await carRepository.getCarByid(req.params.id);

  if (!car) {
    return res.status(404).json({ erro: "carro não encontrado" });
  }

  res.json(car);
}

// Criar
async function createCar(req, res) {
  const { modelo, marca, ano } = req.body;

  if (!modelo || !marca || !ano) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
  }

  const id = await carRepository.createCar({ modelo, marca, ano });

  res.status(201).json({
    id,
    modelo,
    marca,
    ano,
  });
}

// Atualizar
async function updateCar(req, res) {
  await carRepository.updateCar(req.params.id, req.body);

  res.status(204).send();
}

// Deletar
async function deleteCar(req, res) {
  await carRepository.deleteCar(req.params.id);

  res.status(204).send();
}

module.exports = {
  lisCars,
  getCar,
  createCar,
  updateCar,
  deleteCar,
};