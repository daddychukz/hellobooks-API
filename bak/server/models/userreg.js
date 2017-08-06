'use strict';
module.exports = (sequelize, DataTypes)=> {
  const userReg = sequelize.define('userReg', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    isAdmin: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return userReg;
};