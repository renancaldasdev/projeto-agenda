const express = require("express");

const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

// Rotas da home
route.get("/", homeController.index);

// Rota de login
route.get("/login/index", loginController.index);
// Criando novo usuário
route.post("/login/register", loginController.register);
// Criando rota pós login
route.post("/login/login", loginController.login);
// Criando rota de logout
route.get("/login/logout", loginController.logout);

module.exports = route;
