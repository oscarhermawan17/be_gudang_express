'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductVariants', {
      productVariantId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'productId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      sizeVariant: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductVariants');
  }
};