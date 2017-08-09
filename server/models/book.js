

module.exports = function (sequelize, DataTypes) {
  const book = sequelize.define('book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    units: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
  });
  book.associate = function (models) {
    // associations can be defined here
    book.hasMany(models.reqhistory, {
      foreignKey: 'bookId'
    });
  };
  return book;
};
