const Book = require('../models').Book;

module.exports = {
  create(req, res) {
    return Book
      .create({
        bookTitle: req.body.bookTitle,
        bookAuthor: req.body.bookAuthor,
        units: req.body.units
      })
      .then(book => res.status(201).send(book))
      .catch(error => res.status(400).send(error));
  },
};