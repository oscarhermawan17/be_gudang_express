'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SizeVariants', {
      sizeVariantId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sizeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sizes',
          key: 'sizeId'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      sizeVariant: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SizeVariants');
  }
};