'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'atendimentos',
      'createdAt', 
      { 
        type: Sequelize.DATE,
        after: 'observacao',
      }
    );
    await queryInterface.addColumn(
      'atendimentos',
      'updatedAt', 
      { 
        type: Sequelize.DATE,
        after: 'createdAt',
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('atendimentos', 'createdAt');
    await queryInterface.removeColumn('atendimentos', 'updatedAt');
  }
};
