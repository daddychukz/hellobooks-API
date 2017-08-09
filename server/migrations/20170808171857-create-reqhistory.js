

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('reqhistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        Reference: {
          model: 'users',
          key: 'id',
          as: 'userId',
        },
      },
      bookId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        Reference: {
          model: 'book',
          key: 'id',
          as: 'bookId',
        }
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bookTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      requestDate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      returned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('reqhistories');
  }
};
