'use strict';

var reqHistory = require('../models').reqhistory;
var Book = require('../models').book;

var check = function check(req, res) {
  if (req.query.returned) {
    reqHistory.findAll({
      where: {
        userId: req.params.userId,
        returned: req.query.returned
      } }).then(function (books) {
      return res.status(200).send(books);
    }
    // if (books === []) {
    //   return res.status(404).send({
    //     message: 'User Not Found!'
    //   });
    // }
    ).catch(function (err) {
      return res.status(400).send(err);
    });
  }
};

var createdd = function createdd(req, res) {
  return reqHistory.create({
    userId: req.body.userId,
    userName: req.body.userName,
    bookTitle: req.body.bookTitle,
    author: req.body.author,
    requestDate: req.body.requestDate
  }).then(function (request) {
    return res.status(200).send(request);
  }).catch(function (err) {
    return res.status(400).send(err);
  });
};

var borrowBook = function borrowBook(req, res) {
  Book.findOne({
    where: {
      id: req.params.bookId
    }
  }).then(function (foundBook) {
    if (!foundBook) {
      return res.status(404).send({
        message: 'This book is not registered!'
      });
    }
    return reqHistory.create({
      userId: req.body.userId,
      bookId: req.params.bookId,
      userName: req.body.userName,
      bookTitle: req.body.bookTitle,
      author: req.body.author,
      requestDate: req.body.requestDate
    }).then(function (borrowed) {
      return res.send({
        message: 'A book has been borrowed by ' + req.body.userName });
    }).catch(function (err) {
      return res.status(400).send(err);
    });
  });
};

var returnBook = function returnBook(req, res) {
  reqHistory.findOne({
    where: {
      id: req.params.bookId
    }
  }).then(function (foundBook) {
    var updateFields = {};
    if (foundBook === null) {
      return res.status(404).send({
        message: 'This record does not exists!'
      });
    }
    if (req.body.returned) {
      updateFields.returned = req.body.returned;
    }
    foundBook.update(updateFields).then(function (returnBook) {
      return res.send({
        message: 'Successfully Returned',
        returnedBook: returnBook
      });
    });
  });
};

module.exports = {
  check: check,
  createdd: createdd,
  borrowBook: borrowBook,
  returnBook: returnBook
};