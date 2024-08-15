'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sizes', {
      sizeId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sizeType: {
        allowNull: false,
        unique: true,
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
      // uniqueKeys: {
      //   unique_tag: {
      //     fields: ['sizeType', 'sizeVariant']
      //   }
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sizes');
  }
};