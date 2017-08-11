'use strict';

var Book = require('../models').book;

/* Add new books */
var create = function create(req, res) {
  return Book.create({
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    units: req.body.units
  }).then(function (book) {
    return res.status(200).send(book);
  }).catch(function (err) {
    return res.status(400).send(err);
  });
};

/* Get all books in the library */
var retrieveAll = function retrieveAll(req, res) {
  return Book.all().then(function (book) {
    return res.status(200).send(book);
  }).catch(function (err) {
    return res.status(400).send(err);
  });
};

/* Get a Single Book */
var retrieve = function retrieve(req, res) {
  return Book.findById(req.params.bookId).then(function (book) {
    if (!book) {
      return res.status(404).send({
        message: 'Book Not Found!'
      });
    }
    return res.status(200).send(book);
  }).catch(function (err) {
    return res.status(400).send(err);
  });
};

/* Update Books */
var updateBook = function updateBook(req, res) {
  var updateFields = {};
  Book.findOne({
    where: {
      id: req.params.bookId
    }
  }).then(function (foundBook) {
    if (foundBook === null) {
      return res.status(404).send({
        message: 'This record does not exists!'
      });
    }

    if (req.body.title) {
      updateFields.title = req.body.title;
    }

    if (req.body.author) {
      updateFields.author = req.body.author;
    }

    if (req.body.category) {
      updateFields.category = req.body.category;
    }

    if (req.body.units) {
      updateFields.units = req.body.units;
    }

    foundBook.update(updateFields).then(function (updatedBook) {
      return res.send({
        message: 'Successfully Updated',
        updatedBook: updatedBook
      });
    });
  });
};

/* Delete a Book */
var deleteBook = function deleteBook(req, res) {
  return Book.findById(req.params.bookId).then(function (book) {
    if (!book) {
      return res.status(404).send({
        message: 'This record was not found!'
      });
    }
    return book.destroy().then(function (deletedBook) {
      return res.send({
        message: 'Record Successfully Deleted',
        deletedBook: deletedBook
      });
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  });
};

/* Export all methods */
module.exports = {
  create: create,
  retrieveAll: retrieveAll,
  retrieve: retrieve,
  updateBook: updateBook,
  deleteBook: deleteBook
};