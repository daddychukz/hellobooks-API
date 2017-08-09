const User = require('../models').users;

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
const login = (req, res) => User
  .findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    },
  })
  .then((found) => {
    if (found === null) {
      return res.status(404).send({
        message: 'This record does not exists!'
      });
    }
    if (found) {
      return res.status(200).send({
        message: `Welcome to Hello-Books Library Management System @${req.body.email}`,
      });
    }
  });

module.exports = {
  register,
  login
};
