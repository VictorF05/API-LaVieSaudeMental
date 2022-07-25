'use strict';
const { DataTypes } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'psicologos',
      { 
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        apresentacao: {
          type: DataTypes.STRING,
          allowNull: false
        },
        
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('psicologos');
  }
};
