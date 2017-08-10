'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var db = require('../../models');

var SeedHelper = function () {
  function SeedHelper() {
    _classCallCheck(this, SeedHelper);
  }

  _createClass(SeedHelper, null, [{
    key: 'init',
    value: function init() {
      return db.sequelize.sync({ force: true }).then(function () {
        return Promise.all([SeedHelper.createAdminTable()]);
      }, function (err) {
        return console.log(err, 'Error!');
      });
    }
  }, {
    key: 'populateAdminTable',
    value: function populateAdminTable() {
      var admin = {
        fullName: 'John Doe',
        email: 'john@gmail.com',
        sex: 'male',
        userName: 'john',
        phoneNumber: 8080000000,
        pasword: 'pass',
        memLevel: 'Gold',
        isAdmin: true
      };
      return db.users.create(admin);
    }
  }]);

  return SeedHelper;
}();

module.exports = SeedHelper;