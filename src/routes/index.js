const express = require("express");
const router = express.Router();

const carRoutes = require("./carRoutes");
const userRoutes = require("./userRoutes");

// Agrupamento de rotas
router.use("/cars", carRoutes);
router.use("/users", userRoutes);

module.exports = router;