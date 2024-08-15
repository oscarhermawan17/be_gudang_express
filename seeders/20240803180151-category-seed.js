"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          categoryId: 1,
          category: "Pakaian",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          category: "Celana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          category: "Topi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 4,
          category: "Kacamata",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {})
  },
}
