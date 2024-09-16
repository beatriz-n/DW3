//@ Importa as bibliotecas e arquivos
const express = require("express");
const routerApp = express.Router(); 
const appcalculadora = require("../controller/calculadora");

//@ Configura as rotas
routerApp.post("/calculadora", appcalculadora.calculadora);

//@ Exporta a variável com as rotas
module.exports = routerApp