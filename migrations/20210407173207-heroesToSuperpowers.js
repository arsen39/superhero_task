'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('heroes_to_superpowers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      heroId: {
        field:'hero_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'heroes',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      superpowerId: {
        field:'superpower_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'superpowers',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('heroes_to_superpowers');
  }
};
