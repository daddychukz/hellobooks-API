'use strict';

var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var User = require('../models').users;

require('dotenv').config();

var secret = process.env.SECRET;

/* Register a User */
var register = function register(req, res) {
  return User.create({
    fullName: req.body.fullName,
    email: req.body.email,
    sex: req.body.sex,
    userName: req.body.userName,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    memLevel: req.body.memLevel
  }).then(function (regUser) {
    return res.send({
      message: 'User Successfully Registered',
      regUser: regUser
    });
  }).catch(function (err) {
    return res.status(400).send(err);
  });
};

/* sign into the App */
var login = function login(req, res) {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(function (user) {
    if (user) {
      bcrypt.compare(req.body.password, user.password, function (err, response) {
        if (response) {
          var token = jwt.sign({
            username: user.userName,
            isAdmin: user.isAdmin
          }, secret, { expiresIn: '24h' });
          return res.status(200).send({ token: token });
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
  register: register,
  login: login
};