'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('heroes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      realName: {
        field:'real_name',
        type: Sequelize.STRING(256)
      },
      originDescription: {
        field:'origin_description',
        type: Sequelize.TEXT
      },
      catchPhrase: {
        field:'catch_phrase',
        type: Sequelize.STRING(512)
      },
      createdAt: {
        field:'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field:'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('heroes');
  }
};