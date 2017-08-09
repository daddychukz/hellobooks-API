

module.exports = function (sequelize, DataTypes) {
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
  });
  users.associate = function (models) {
    // associations can be defined here
    users.hasMany(models.reqhistory, {
      foreignKey: 'userId'
    });
  };
  return users;
};
