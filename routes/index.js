const express = require("express");

const auth = require('../middlewares/auth');

const AuthController = require("../controllers/authController");
const pacientesController = require("../controllers/pacientesController");
const psicologoController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");

// VALIDAÇÕES
const authLoginValidation = require('../validations/auth/login');
const createPacientesValidation = require("../validations/pacientes/create");
const updatePacientesValidation = require("../validations/pacientes/update");
const createPsicologosValidation = require("../validations/psicologos/create");
const updatePsicologosValidation = require("../validations/psicologos/update");
const createAtendimentosValidation = require("../validations/atendimentos/create");

const routes = express.Router();

// ##### LOGIN #####
routes.post('/login', authLoginValidation, AuthController.login)

//##### PACIENTES #####
routes.get("/pacientes", pacientesController.listarTodos);
routes.get("/pacientes/:id", pacientesController.listarPorId);
routes.post("/pacientes",  createPacientesValidation, pacientesController.cadastrar);
routes.put("/pacientes/:id", updatePacientesValidation, pacientesController.atualizar);
routes.delete("/pacientes/:id", pacientesController.deletar);

//######  PSICOLOGOS  ########
routes.get("/psicologos", psicologoController.listarTodos);
routes.get("/psicologos/:id", psicologoController.listarPorId);
routes.post("/psicologos", createPsicologosValidation, psicologoController.cadastrar);
routes.put("/psicologos/:id", updatePsicologosValidation, psicologoController.atulizar);
routes.delete("/psicologos/:id", psicologoController.deletar);

// ###### ATENDIMENTOS #########
routes.get('/atendimentos',  atendimentosController.listarTodos);
routes.get('/atendimentos/:id', atendimentosController.listarPorId);
routes.post('/atendimentos', auth, createAtendimentosValidation, atendimentosController.cadastrar)


module.exports = routes;