const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models').users;

require('dotenv').config();

const secret = process.env.SECRET;

/* Register a User */
const register = (req, res) => User
  .create({
    fullName: req.body.fullName,
    email: req.body.email,
    sex: req.body.sex,
    userName: req.body.userName,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    memLevel: req.body.memLevel
  })
  .then(regUser => res.send({
    message: 'User Successfully Registered',
    regUser
  }))
  .catch(err => res.status(400).send(err));

/* sign into the App */
const login = (req, res) => {
  User
    .findOne({
      where: {
        email: req.body.email
      }
    })
    .then((user) => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, response) => {
          if (response) {
            const token = jwt.sign({
              username: user.userName,
              isAdmin: user.isAdmin
            }, secret, { expiresIn: '24h' });
            return res.status(200).send({ token });
          }
          return res.status(400).send({ message: 'Username or password incorrect' });
        });
        // return res.status(200).send({
        //   message: `Welcome to Hello-Books Library Management System @${req.body.email}`,
        // });
      } else {
        res.status(404).send({
          message: 'This record does not exists!'
        });
      }
    });
};

module.exports = {
  register,
  login
};
