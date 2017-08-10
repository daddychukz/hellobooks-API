'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      fullName: process.env.fullName,
      email: process.env.fullName,
      sex: process.env.fullName,
      userName: process.env.fullName,
      phoneNumber: process.env.phoneNumber,
      pasword: process.env.pasword,
      memLevel: process.env.memLevel,
      isAdmin: process.env.isAdmin,
      createdAt: new Date(),
      updatedAt: new Date()
    }], { returning: true });
  },
  down: function down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete('Users', null);
  }
};