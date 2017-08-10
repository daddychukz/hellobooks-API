'use strict';

/**
 * API Endpoint Tests
 */

var request = require('supertest');
var chai = require('chai').expect;
// const rewire = require('rewire');
var app = require('../app');
var expect = chai.expect;

describe('OLMS', function () {
  it('loads the home page', function (done) {
    request(app).get('/').expect(200).end(done);
  });
  describe('OLMS', function () {
    it('gets the books-api route', function (done) {
      request(app).get('/api/books').expect(200).end(done);
    });
  });
});

describe('Borrow book', function () {
  it('should return the user if valid', function (done) {
    request(app).post('/api/users/1/books').end(function (err, res) {
      chai(res.statusCode).to.be.equal(200);
      done();
    });
  });
});