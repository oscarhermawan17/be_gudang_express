'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Size.hasMany(models.Product, {
        foreignKey: 'sizeId',
      });
      Size.hasMany(models.SizeVariant, {
        foreignKey: 'sizeId',
      });
    }
  }
  Size.init({
    sizeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    sizeType: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};