const mongoose = require("mongoose");

async function connectionMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Conectado");
    console.log(mongoose.connection.client.s.url);
  } catch (error) {
    console.error("Erro ao conectar MongoDB:", error);
  }
}

module.exports = connectionMongoDB;