'use strict';

var express = require('express');

var router = express.Router();

var booksController = require('../controller/books');
var userController = require('../controller/users');
var requestController = require('../controller/history');

var _require = require('../middleware/auth'),
    Auth = _require.Auth;

/* GET home page. */


router.get('/', function (req, res) {
  return (// {
    // res.render('index', { title: 'Express' });
    res.status(200).send({
      message: 'Online Library Management System'
    })
  );
}
// }
);

/* All API Routes */
router.post('/api/books', Auth.isAdmin, booksController.create);

router.get('/api/books', booksController.retrieveAll);

router.get('/api/books/:bookId', booksController.retrieve);

router.put('/api/books/:bookId', Auth.isAdmin, booksController.updateBook);

router.delete('/api/books/:bookId', Auth.isAdmin, booksController.deleteBook);

router.post('/api/users/signup', userController.register);

router.post('/api/users/signin', userController.login);

router.get('/api/users/:userId/books', Auth.isAdmin, requestController.check);

router.post('/api/users/:bookId/books', requestController.borrowBook);

router.put('/api/users/:bookId/returnbook', requestController.returnBook);

module.exports = router;