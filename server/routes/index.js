var express = require('express');
var router = express.Router();

const booksController = require('../controller/books');
const userController = require('../controller/users');
const requestController = require('../controller/history');

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

router.get('/api/users/:userId/books', requestController.check);

router.post('/api/users/:bookId/books', requestController.borrowBook);

router.post('/api/users/:userId/create', requestController.createdd);

//router.put('/api/users/:bookId/returnbook', requestController.returnBook);

module.exports = router;
