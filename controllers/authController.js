const { User, Role } = require("../models")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ where: { email }, include: Role })
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" })
  }

  const isMatch = await bcrypt.compare(password, user.dataValues.password)

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" })
  }

  const userDetails = await User.findOne({
    where: { email }, // Mencari user berdasarkan email
    attributes: ["email"], // Hanya ambil kolom email dari user
    include: {
      model: Role, // Sertakan model Role
      attributes: ["name"], // Hanya ambil role_name dari Role
      through: { attributes: [] }, // Jangan ambil data dari tabel perantara (UserRoles)
    },
  })

  const userRoles = userDetails
    ? userDetails.Roles.map((role) => role.name)
    : []

  // create Token
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  })

  res.json({
    token,
    roles: userRoles,
  })
}

module.exports = { login }
