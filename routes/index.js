const express = require("express");

const routes = express.Router();


const pacientesController = require("../controllers/pacientesController");
const psicologoController = require("../controllers/psicologosController");

const createPacientesValidation = require("../validations/pacientes/create");
const updatePacientesValidation = require("../validations/pacientes/update");

const createPsicologoValadion = require("../validations/psicologos/create");
const updatePsicologoValadion = require("../validations/psicologos/update")

//##### PACIENTES #####
routes.get("/pacientes", pacientesController.listarTodos);
routes.get("/pacientes/:id", pacientesController.listarUm);
routes.post("/pacientes", createPacientesValidation, pacientesController.cadastrar);
routes.put("/pacientes/:id", updatePacientesValidation, pacientesController.atualizar);
routes.delete("/pacientes/:id", pacientesController.deletar);

//######  PSICOLOGOS  ########
routes.get("/psicologos", psicologoController.listarPsicologos);
routes.get("/psicologo/:id", psicologoController.psicologoPorId);
routes.post("/psicologo/cadastrar",createPsicologoValadion, psicologoController.cadastrarPsicologo);
routes.delete("/psicologo/:id", psicologoController.deletarPsicologo);
routes.put("/psicologo/:id", updatePsicologoValadion, psicologoController.atulizarPsicologo);



module.exports = routes;