'use strict';
module.exports = function(sequelize, DataTypes) {
  var reqhistory = sequelize.define('reqhistory', {
    userId: {
      type: DataTypes.INTEGER,
      Reference: {
        model: 'users',
        key: 'id'
      }
    },
    bookId: {
      type: DataTypes.INTEGER,
      Reference: {
        model: 'book',
        key: 'id'
      }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bookTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    requestDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    returned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return reqhistory;
};