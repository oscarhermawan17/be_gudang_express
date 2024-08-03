const express = require('express');
require('dotenv').config();
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// app.use('/', (req, res) => res.json('oke'));
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log('Error: ' + err));