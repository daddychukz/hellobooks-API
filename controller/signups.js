const Signup = require('../models').signup;

const register = (req, res) => {
    return Signup
        .create({
            fullName: req.body.fullName,
            email: req.body.email,
            sex:    req.body.sex,
            userName: req.body.username,
            phoneNumber:  req.body.phoneNumber,
            password: req.body.password,
            memLevel: req.body.level
        })
        .then(deleteUser => res.send({
            message: 'User Successfully Registered',}))
        .catch(err => res.status(400).send(err));
};

const login = (req, res) => {
    return Signup
    .findOne({
        where: {
          email: req.body.email,
          password: req.body.password
        },
      })
      .then((found) => {

        console.log(found);
        if (found === null) {
          return res.status(404).send({
            message: 'This record does not exists!'
          });
        }
        if (found) {
          return res.status(200).send({
            message: 'Welcome to Hello-Books Library Management System',
          });
        }
      });
  }

module.exports = {
    register,
    login
}