"use strict"

const product = ["Adidas", "Nike", "ElectroHell"]
const productSeed = []
const createdAt = new Date()
const updatedAt = new Date()

for (let i = 1; i <= 10; i++) {
  const object = {
    productId: i,
    sku: `SKU-${i}`,
    productName: `${product[Math.floor(Math.random() * 3)]} ${i}`,
    categoryId: Math.floor(Math.random() * 4) + 1,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    colorId: Math.floor(Math.random() * 3) + 1,
    sizeId: Math.floor(Math.random() * 3) + 1,
    createdAt,
    updatedAt,
  }
  productSeed.push(object)
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", productSeed, {})
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {})
  },
}
