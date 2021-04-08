'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'images',
      'createdAt'
    );
    await queryInterface.removeColumn(
      'images',
      'updatedAt'
    );
    await queryInterface.addColumn(
      'images',
      'created_at',
      Sequelize.DATE,
      { allowNull: false }
    );
    await queryInterface.addColumn(
      'images',
      'updated_at',
      Sequelize.DATE,
      { allowNull: false }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
