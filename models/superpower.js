'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superpower extends Model {
    static associate(models) {
      Superpower.belongsToMany(models.Hero, {
        through: 'heroes_to_superpowers',
        foreignKey: 'superpowerId',
      });
    }
  };
  Superpower.init({
    name: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Superpower',
    tableName: 'superpowers',
    underscored: true,
  });
  return Superpower;
};