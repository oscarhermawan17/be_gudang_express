'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SizeVariant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  SizeVariant.init({
    sizeVariantId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    sizeId: DataTypes.INTEGER,
    sizeVariant: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'SizeVariant',
  });
  return SizeVariant;
};