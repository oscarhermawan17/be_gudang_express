'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.ProductVariant, {
        foreignKey: 'productId',
      });
    }
  }
  Product.init({
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    sku: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    supplierName: DataTypes.STRING,
    colorId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};