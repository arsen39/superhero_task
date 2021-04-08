'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'heroes',
      'img',
      Sequelize.TEXT
    );
  },

  down: async (queryInterface, Sequelize) => {
  }
};
