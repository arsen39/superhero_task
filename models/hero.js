'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hero extends Model {
    
    static associate(models) {
      Hero.hasMany(models.Image, {
        foreignKey: 'heroId',
      });
      Hero.belongsToMany(models.Superpower, {
        through: 'heroes_to_superpowers',
        foreignKey: 'heroId',
      });
    }
  };
  Hero.init({
    nickname: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: true,
        notEmpty: true,
      },
    },
    realName: {
      field: 'real_name',
      unique: true,
      allowNull: true,
      type: DataTypes.STRING,
    },
    originDescription: {
      field: 'origin_description',
      allowNull: true,
      type: DataTypes.TEXT,
    },
    catchPhrase: {
      field: 'catch_phrase',
      allowNull: true,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Hero',
    tableName: 'heroes',
    underscored: true,
  });
  return Hero;
};