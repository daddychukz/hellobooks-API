'use strict';
module.exports = function(sequelize, DataTypes) {
  const signup = sequelize.define('signup', {
    fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    memLevel: {
      type: DataTypes.STRING,
      allowNull: false,
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