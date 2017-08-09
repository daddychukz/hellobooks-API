'use strict';

var Signup = require('../models').users;

var register = function register(req, res) {
  return Signup.create({
    fullName: req.body.fullName,
    email: req.body.email,
    sex: req.body.sex,
    userName: req.body.userName,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    memLevel: req.body.memLevel
  }).then(function (regUser) {
    return res.send({
      message: 'User Successfully Registered' });
  }).catch(function (err) {
    return res.status(400).send(err);
  });
};

var login = function login(req, res) {
  return Signup.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  }).then(function (found) {
    if (found === null) {
      return res.status(404).send({
        message: 'This record does not exists!'
      });
    }
    if (found) {
      return res.status(200).send({
        message: 'Welcome to Hello-Books Library Management System @' + req.body.email
      });
    }
  });
};

module.exports = {
  register: register,
  login: login
};