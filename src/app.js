const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());

// Rotas centralizadas (cars + users)
app.use(routes);

module.exports = app;