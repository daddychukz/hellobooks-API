'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('signups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.BIGINT
      },
      password: {
        type: Sequelize.STRING
      },
      memLevel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      photo: {
        type: Sequelize.BLOB
      },
      isAdmin: {
        type: Sequelize.INTEGER,
        defauleValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      
    });
  },
  down: (queryInterface/*, Sequelize*/) => {
    queryInterface.dropTable('signups');
  }
};