const reqHistory = require('../models').reqhistory;
const Book = require('../models').book;

const check = (req, res) => {
    if (req.query.returned) {
       reqHistory.findAll({ 
           where: { 
               userId: req.params.userId, 
               returned: req.query.returned 
            }})
            .then(books => {
                return res.status(200).send(books);
                if (books === []) {
                    return res.status(404).send({
                    message: 'User Not Found!'
                });
            }
            })
            .catch(err => res.status(400).send(err));
    }      
}

const createdd = (req, res) => {
    return reqHistory
        .create({
            userId: req.body.userId,
            userName: req.body.userName,
            bookTitle: req.body.bookTitle,
            author: req.body.author,
            requestDate: req.body.requestDate,
        })
        .then(request => res.status(200).send(request))
        .catch(err => res.status(400).send(err));
};

const borrowBook = (req, res) => {
    Book.findOne({
            where: {
                id: req.params.bookId
            },
        })
        .then((foundBook) => {
           
            if (!foundBook) {
                return res.status(404).send({
                    message: 'This record does not exists!',
                });
            }
            return reqHistory
                .create({
                    userName: req.body.userName,
                    bookTitle: req.body.bookTitle,
                    author: req.body.author,
                    requestDate: req.body.requestDate
                })
                .then(borrowed => res.send({
            message: 'A book has been borrowed by '+req.body.userName}))
                .catch(err => res.status(400).send(err));
        }
)};

const returnBook = (req, res) => {
        reqHistory.findOne({
            where: {
            id: req.params.bookId,
            },
        })
        .then((foundBook) => {
            let updateFields = {};   
            if (foundBook === null) {
            return res.status(404).send({
                message: 'This record does not exists!',
            });
            }    
            if (req.body.returned) {
            updateFields.returned = req.body.returned;
            }
            foundBook.update(updateFields)
            .then(returnBook => res.send({
                message: 'Successfully Returned',
                returnedBook: returnBook
            }));
        });
    }

  
module.exports = {
  check,
  createdd,
  borrowBook,
  returnBook
}
