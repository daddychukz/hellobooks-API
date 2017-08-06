const addBooksController = require('../controllers').addBooks;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'HOLAAAAAAAAAA!',
  }));

  app.post('/api/todos', addBooksController.create);
};