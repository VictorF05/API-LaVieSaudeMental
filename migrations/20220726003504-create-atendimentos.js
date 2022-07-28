'use strict';

const { DataTypes } = require("sequelize");
const Pacientes = require('../models/Pacientes');
const Psicologos = require('../models/Psicologos');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      "atendimentos", 
    {
      paciente_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Pacientes',
              key: 'id'
            }
        },
      psicologo_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Psicologos',
              key: 'id'
            }
        },
        data_atendimento: {
            type: DataTypes.DATE, 
            allowNull: false,
        },
        observacao: {
            type: DataTypes.STRING,
            allowNull: false,
        }}
    )},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('atendimentos');
  }
};
