'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn(
      'atendimentos',
      'id', 
      { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        before: 'paciente_id',
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('atendimentos', 'id');
  }
};
