const express = require("express");

const route = express.Router();
const homeController = require("./src/controllers/homeControllers");
const contatoController = require("./src/controllers/contatoController");

// Rotas da home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.trataPost);

// Rotas do contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
