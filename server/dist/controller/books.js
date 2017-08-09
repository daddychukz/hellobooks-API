'use strict';

var Book = require('../models').book;

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

var retrieveAll = function retrieveAll(req, res) {
  return Book.all().then(function (book) {
    return res.status(200).send(book);
  }).catch(function (err) {
    return res.status(400).send(err);
  });
};

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
/*
const updateUser = (req, res) => {
    return Book
        .findById(req.params.bookId)
        .then(book => {
           if (!book) { 
            return res.status(404).send({
                message: 'Book Not Found!',
            });
           }
        return book
           .update({
               title: req.body.title || book.title,
               author: req.body.author || book.author
           })
            .then(() => res.status(200).send(book))  // Send back the updated todo.
            .catch((error) => res.status(400).send(errors));
            })
            .catch((error) => res.status(400).send(error));     
          };
*/
var updateBook = function updateBook(req, res) {
  var updateFields = {};

  Book.findOne({
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

    foundBook.update(updateFields).then(function (updateBook) {
      return res.send({
        message: 'Successfully Updated',
        updatedUser: updateBook
      });
    });
  });
};

var deleteBook = function deleteBook(req, res) {
  return Book.findById(req.params.bookId).then(function (book) {
    if (!book) {
      return res.status(400).send({
        message: 'This record was not found!'
      });
    }
    return book.destroy().then(function (deleteBook) {
      return res.send({
        message: 'Record Successfully Deleted'
      });
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  }).catch(function (error) {
    return res.status(400).send(error);
  });
};

module.exports = {
  create: create,
  retrieveAll: retrieveAll,
  retrieve: retrieve,
  updateBook: updateBook,
  deleteBook: deleteBook
};