const express = require("express");
const routes = express.Router();

const pacientesController = require("../controllers/pacientesController");
const createPacientesValidation = require("../validations/pacientes/create");
const updatePacientesValidation = require("../validations/pacientes/update");

routes.get("/pacientes", pacientesController.listarTodos);
routes.get("/pacientes/:id", pacientesController.listarUm);
routes.post("/pacientes", createPacientesValidation, pacientesController.cadastrar);
routes.put("/pacientes/:id", updatePacientesValidation, pacientesController.atualizar);
routes.delete("/pacientes/:id", pacientesController.deletar);

module.exports = routes;