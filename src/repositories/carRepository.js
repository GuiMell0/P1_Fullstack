const db = require("../config/mysql");
const Car = require("../models/carModel");

// Listar
async function getAllCars() {
  const [rows] = await db.query("SELECT * FROM carros");

  return rows.map(
    (row) => new Car(row.id, row.modelo, row.marca, row.ano)
  );
}

// Buscar por id
async function getCarByid(id) {
  const [rows] = await db.query(
    "SELECT * FROM carros WHERE id = ?",
    [id]
  );

  if (!rows[0]) {
    return null;
  }

  const row = rows[0];
  return new Car(row.id, row.modelo, row.marca, row.ano);
}

// Criar
async function createCar(car) {
  const { modelo, marca, ano } = car;

  const [result] = await db.query(
    "INSERT INTO carros (modelo, marca, ano) VALUES (?, ?, ?)",
    [modelo, marca, ano]
  );

  return result.insertId;
}

// Atualizar
async function updateCar(id, car) {
  const { modelo, marca, ano } = car;

  await db.query(
    "UPDATE carros SET modelo = ?, marca = ?, ano = ? WHERE id = ?",
    [modelo, marca, ano, id]
  );
}

// Deletar
async function deleteCar(id) {
  await db.query(
    "DELETE FROM carros WHERE id = ?",
    [id]
  );
}

module.exports = {
  getAllCars,
  getCarByid,
  createCar,
  updateCar,
  deleteCar,
};