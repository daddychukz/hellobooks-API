'use strict';

module.exports = function (sequelize, DataTypes) {
  var reqhistory = sequelize.define('reqhistory', {
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
    }
  });
  // reqhistory.associate = function(models) {
  //   // associations can be defined here
  //   reqhistory.belongsTo(models.user, {
  //     foreignKey: 'userId',
  //     onDelete: 'CASCADE'
  //   })

  //   reqhistory.belongsTo(models.book, {
  //     foreignKey: 'bookId',
  //     onDelete: 'CASCADE'
  //   })
  // };
  return reqhistory;
};