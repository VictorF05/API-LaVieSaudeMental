'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'psicologos',
      'createdAt', 
      { 
        type: Sequelize.DATE,
        after: 'apresentacao',
      }
    );
    await queryInterface.addColumn(
      'psicologos',
      'updatedAt', 
      { 
        type: Sequelize.DATE,
        after: 'createdAt',
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('psicologos', 'createdAt');
    await queryInterface.removeColumn('psicologos', 'updatedAt');
  }
};
