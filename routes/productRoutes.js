const express = require("express")
const { Product } = require("../models")

const productRoutes = express.Router()

productRoutes.get("/", async (req, res, next) => {
  const getAllProducts = await Product.findAll({
    attributes: [
      "productId",
      "sku",
      "productName",
      "description",
      "categoryId",
      "supplierName",
      "colorId",
      "sizeId",
    ],
  })
  if (!getAllProducts) {
    console.log('masuk')
    return res.status(401).json({ message: "No Products " })
  }
  console.log('else')
  res.status(200).json(getAllProducts)
})

module.exports = productRoutes
