'use strict';

var jwt = require('jsonwebtoken');
require('dotenv').config();

var secret = process.env.SECRET;

var Auth = {
  verify: function verify(req, res, next) {
    if (req.headers.authorization) {
      next();
    } else {
      res.status(401).send({ message: 'You are currently unauthorized' });
    }
  },
  isAdmin: function isAdmin(req, res, next) {
    var decoded = jwt.verify(req.headers.authorization, secret);
    if (decoded.isAdmin === true) {
      next();
    } else {
      res.status(401).send({ message: 'Access Denied! You are currently unauthorized' });
    }
  }
};

module.exports = {
  Auth: Auth
};