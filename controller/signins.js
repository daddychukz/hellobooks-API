/*const Signup = require('../models').signup;
const Signin = require('../models').signin;

const login = (req, res) => {
    return Signup
    .findAll({
        where: {
          email: req.body.email,
          password: req.body.password
        },
      })
      .then((found) => {
        if (found === null) {
          return res.status(404).send({
            message: 'This record does not exists!',
          });
        }
        if (found) {
          return res.status(200).send({
            message: 'Welcome to Hello-Books Library Management System',
          });
        }
        return res.status(401).send({
          message: 'Invalid Password!',
        });
      });
  }

module.exports = {
    login
}*/