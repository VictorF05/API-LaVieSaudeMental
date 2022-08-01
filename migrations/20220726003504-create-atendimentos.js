'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      "atendimentos", 
    {
      paciente_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'pacientes',
              key: 'id'
            }
        },
      psicologo_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'psicologos',
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
