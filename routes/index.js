var express = require('express');
var router = express.Router();

const booksController = require('../controller/books');
const userController = require('../controller/signups');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/books', booksController.create);

router.get('/api/books', booksController.retrieveAll);

router.get('/api/books/:bookId', booksController.retrieve);

router.put('/api/books/:bookId', booksController.updateBook);

router.delete('/api/books/:bookId', booksController.deleteBook);

router.post('/api/users/signup', userController.register);

router.post('/api/users/signin', userController.login);

module.exports = router;
