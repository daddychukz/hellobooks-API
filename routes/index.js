var express = require('express');
var router = express.Router();

const booksController = require('../controller/books');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/books', booksController.create);

router.get('/api/books', booksController.retrieveAll);

router.get('/api/books/:bookId', booksController.retrieve);

router.put('/api/books/:bookId', booksController.updateUser);

router.delete('/api/books/:bookId', booksController.deleteUser);

module.exports = router;
