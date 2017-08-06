'use strict';
module.exports = function(sequelize, DataTypes) {
  var userReg = sequelize.define('userReg', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userReg;
};