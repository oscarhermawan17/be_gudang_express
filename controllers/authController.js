const { User, Role } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email }, include: Role });
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }


  const isMatch = await bcrypt.compare(password, user.dataValues.password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // const roles = user.Roles.map(role => role.name);
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token, user });
};

module.exports = { login };
