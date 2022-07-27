const express = require("express");

const auth = require('../middlewares/auth');

const AuthController = require("../controllers/authController");
const pacientesController = require("../controllers/pacientesController");
const psicologoController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");


// autenticação de login
const authLoginValidation = require('../validations/auth/login');

// VALIDAÇÕES PACIENTES
const createPacientesValidation = require("../validations/pacientes/create");
const updatePacientesValidation = require("../validations/pacientes/update");

// VALIDAÇÕES PSICOLOGOS
const createPsicologoValadion = require("../validations/psicologos/create");
const updatePsicologoValadion = require("../validations/psicologos/update");


const routes = express.Router();

// ##### LOGIN #####
routes.post('/login', authLoginValidation, AuthController.login)


//##### PACIENTES #####
routes.get("/pacientes", pacientesController.listarTodos);
routes.get("/pacientes/:id", pacientesController.listarUm);
routes.post("/pacientes",  createPacientesValidation, pacientesController.cadastrar);
routes.put("/pacientes/:id", updatePacientesValidation, pacientesController.atualizar);
routes.delete("/pacientes/:id", pacientesController.deletar);

//######  PSICOLOGOS  ########
routes.get("/psicologos", psicologoController.listarPsicologos);
routes.get("/psicologo/:id", psicologoController.psicologoPorId);
routes.post("/psicologo/cadastrar",createPsicologoValadion, psicologoController.cadastrarPsicologo);
routes.delete("/psicologo/:id", psicologoController.deletarPsicologo);
routes.put("/psicologo/:id", updatePsicologoValadion, psicologoController.atulizarPsicologo);

// ###### ATENDIMETOS #########
routes.get('/atendimentos',  atendimentosController.listarAtendimentos);
routes.get('/atendimentos/:id', atendimentosController.atendimentosPorId);
routes.post('/atendimentos/cadastrar',auth, atendimentosController.cadastrarAtendimetos)



module.exports = routes;