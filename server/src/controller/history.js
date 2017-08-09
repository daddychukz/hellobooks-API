const reqHistory = require('../models').reqhistory;
const Book = require('../models').book;

/* Check for users yet to return a book */
const check = (req, res) => {
  if (req.query.returned) {
    reqHistory.findAll({
      where: {
        userId: req.params.userId,
        returned: req.query.returned
      } })
      .then(books =>
        res.status(200).send(books)
      )
      .catch(err => res.status(400).send(err));
  }
};

/* Borrow a book */
const borrowBook = (req, res) => {
  Book.findOne({
    where: {
      id: req.params.bookId
    },
  })
    .then((foundBook) => {
      if (!foundBook) {
        return res.status(404).send({
          message: 'This book is not registered!',
        });
      }
      return reqHistory
        .create({
          userId: req.body.userId,
          bookId: req.params.bookId,
          userName: req.body.userName,
          bookTitle: req.body.bookTitle,
          author: req.body.author,
          requestDate: req.body.requestDate
        })
        .then(borrowed => res.send({
          message: `A book has been borrowed by ${req.body.userName}`,
          borrowed
        }))
        .catch(err => res.status(400).send(err));
    }
    );
};

/* Return a Book */
const returnBook = (req, res) => {
  reqHistory.findOne({
    where: {
      id: req.params.bookId,
    },
  })
    .then((foundBook) => {
      const updateFields = {};
      if (foundBook === null) {
        return res.status(404).send({
          message: 'This record does not exists!',
        });
      }
      if (req.body.returned) {
        updateFields.returned = req.body.returned;
      }
      foundBook.update(updateFields)
        .then(returnedBook => res.send({
          message: 'Successfully Returned',
          returnedBook
        }));
    });
};

/* Exports all methods */
module.exports = {
  check,
  borrowBook,
  returnBook
};
