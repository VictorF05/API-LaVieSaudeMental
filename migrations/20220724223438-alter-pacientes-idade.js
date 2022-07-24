'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'pacientes',
      'idade', 
      { 
        type: DataTypes.DATEONLY,
        allowNull: false,
        after: 'email',
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('pacientes', 'idade');
  }
};