"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "SizeVariants",
      [
        {
          sizeVariantId: 1,
          sizeId: 1,
          sizeVariant: "S",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeVariantId: 2,
          sizeId: 1,
          sizeVariant: "M",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeVariantId: 3,
          sizeId: 1,
          sizeVariant: "L",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeVariantId: 4,
          sizeId: 1,
          sizeVariant: "XL",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeVariantId: 5,
          sizeId: 2,
          sizeVariant: "AA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeVariantId: 6,
          sizeId: 2,
          sizeVariant: "BB",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeVariantId: 7,
          sizeId: 2,
          sizeVariant: "CC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeVariantId: 8,
          sizeId: 2,
          sizeVariant: "DD",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeVariantId: 9,
          sizeId: 2,
          sizeVariant: "ZZ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeVariantId: 10,
          sizeId: 3,
          sizeVariant: "14",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeVariantId: 11,
          sizeId: 3,
          sizeVariant: "15",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          sizeVariantId: 12,
          sizeId: 3,
          sizeVariant: "16",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("SizeVariants", null, {})
  },
}
