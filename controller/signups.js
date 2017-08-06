const Signup = require('../models').signup;

const register = (req, res) => {
    return Signup
        .create({
            fullName: req.body.fullName,
            email: req.body.email,
            sex:    req.body.sex,
            userName: req.body.username,
            phoneNumber:  req.body.phoneNumber,
            password: req.body.pass,
            memLevel: req.body.level
        })
        .then(deleteUser => res.send({
            message: 'User Successfully Registered',}))
        .catch(err => res.status(400).send(err));
};

module.exports = {
    register
}