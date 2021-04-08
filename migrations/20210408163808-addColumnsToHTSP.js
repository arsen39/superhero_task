'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'heroes_to_superpowers',
      'created_at',
      Sequelize.DATE,
      { allowNull: false }
    );
    await queryInterface.addColumn(
      'heroes_to_superpowers',
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
