require("dotenv").config()

const express = require("express")
// const cors = require("cors")

const { sequelize } = require("./models")
const authRoutes = require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes")

const app = express()
app.use(express.json())
// app.use(
//   cors({
//     origin: "http://localhost:6000",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//   })
// )

// Debug CORS
// app.use((req, res, next) => {
//   console.log("CORS middleware executed")
//   next()
// })

app.use("/auth", authRoutes)

app.use("/api/products", productRoutes)

const PORT = process.env.PORT || 3000

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...")
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => console.log("Error: " + err))
