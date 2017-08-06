'use strict';
module.exports = function(sequelize, DataTypes) {
  const signup = sequelize.define('signup', {
    fullName: {
    type: DataTypes.STRING,
    allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    memLevel: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photo: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    isAdmin: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return signup;
};