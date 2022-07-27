const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
      paciente_id: Joi.string().required(),
      psicologo_id: Joi.string().required(),
      data_atendimento: Joi.date().required(),
      observacao: Joi.string().required()
    }),
});