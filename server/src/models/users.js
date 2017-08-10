/**
 * This function creates the model of
 * Users table in the database, specifying
 * relationships, datatypes and constraints.
 * 
 */
import bcrypt from 'bcrypt';
// const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memLevel: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.BLOB,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, { hooks: {
    beforeCreate: (newUser) => {
      newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8));
    },
    afterUpdate: (newUser) => {
      newUser.password = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8));
    }
  } });
  users.associate = (models) => {
    // associations can be defined here
    users.hasMany(models.reqhistory, {
      foreignKey: 'userId'
    });
  };
  return users;
};
