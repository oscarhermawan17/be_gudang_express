'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const saltRounds = 10;
    const password = 'oscar17X';
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await queryInterface.bulkInsert('Users', [{
      email: 'oscar@gmail.com',
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', { email: 'oscar@gmail.com' }, {});
  }
};
