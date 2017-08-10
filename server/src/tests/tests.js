// /**
//  * API Endpoint Tests
//  */

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../app');
const models = require('../models/');

// const request = require('supertest');

const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should();

chai.use(chaiHttp);

describe('OLMS', () => {
  it('loads the home page', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res)
          .to
          .have
          .status(200);
        done();
      });
  });

  describe('POST /api/users/signup', () => {
    it('should should create a new user', (done) => {
      chai
        .request(app)
        .post('/api/users/signup')
        .type('form')
        .send({
          fullName: 'john doe',
          email: 'johndoe@test.com',
          sex: 'male',
          userName: 'johndoe',
          phoneNumber: '08162740850',
          password: 'jas123',
          memLevel: 'gold',
        })
        .end((err, res) => {
          assert.strictEqual(
            res.body.data.email,
            'johndoe@test.com',
            'email sent is correct'
          );
          assert.strictEqual(
            res.body.data.username,
            'johndoe',
            'username sent is correct'
          );
          res.should.have.status(201);
          done();
        });
    });
  });
});
