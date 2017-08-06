'use strict';
module.exports = (sequelize, DataTypes)=> {
  const Books = sequelize.define('Books', {
    bookTitle: DataTypes.STRING,
    bookAuthor: DataTypes.STRING,
    units: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Books;
};