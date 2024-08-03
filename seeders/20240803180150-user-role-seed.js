'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('UserRoles', [
      { userId: 1, roleId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, roleId: 2, createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, roleId: 3, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserRoles', null, {});
  }
};
