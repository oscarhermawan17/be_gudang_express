'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductVariant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  ProductVariant.init({
    productVariantId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    productId: DataTypes.INTEGER,
    sizeVariant: {
      allowNull: false,
      type: DataTypes.STRING
    },
    stock: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return ProductVariant;
};