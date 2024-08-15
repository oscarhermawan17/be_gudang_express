"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Sizes",
      [
        {
          sizeId: 1,
          sizeType: "A",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeId: 2,
          sizeType: "B",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeId: 3,
          sizeType: "C",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Sizes", null, {})
  },
}
