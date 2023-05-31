const express = require("express");

const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const contatoController = require("./src/controllers/contatoController");

const { loginRequired } = require("./src/middlewares/middlewares");

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
// Criando rota de contato
route.get("/contato/index", loginRequired, contatoController.index);
// Criando rota de cadastro de usuários
route.post("/contato/register", loginRequired, contatoController.register);
// Criando rota de edição de usuários
route.get("/contato/index/:id", loginRequired, contatoController.editIndex);
route.post("/contato/edit/:id", loginRequired, contatoController.edit);

module.exports = route;
