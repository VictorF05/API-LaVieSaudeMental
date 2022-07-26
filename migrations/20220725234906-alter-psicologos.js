'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'psicologos',
      'senha', 
      { 
        type: DataTypes.STRING,
        after: 'email',
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('psicologos', 'senha');
  }
};
