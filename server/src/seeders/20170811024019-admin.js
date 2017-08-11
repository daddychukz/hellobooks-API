const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models').users;
require('dotenv').config();

const secret = process.env.SECRET;


module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      fullName: process.env.fullName,
      email: process.env.fullName,
      sex: process.env.fullName,
      userName: process.env.fullName,
      phoneNumber: process.env.phoneNumber,
      password: process.env.password,
      memLevel: process.env.memLevel,
      isAdmin: process.env.isAdmin,
      createdAt: new Date(),
      updatedAt: new Date()
    }], { returning: true },
    { hooks: {
      beforeCreate: (newUser) => {
        newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8));
      },
      afterUpdate: (newUser) => {
        newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8));
      }
    } }
    );
  },

  down(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface
      .bulkDelete('Users', [{ fullName: 'chukwuka' }]);
  }
};
