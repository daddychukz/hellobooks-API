const express = require('express');

const router = express.Router();

const booksController = require('../controller/books');
const userController = require('../controller/users');
const requestController = require('../controller/history');
const { Auth } = require('../middleware/auth');

/* GET home page. */
router.get('/', (req, res) =>
  res.status(200).send({
    message: 'Online Library Management System',
  })
);

/* All API Routes */
router.post('/api/books', booksController.create);

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
