/**
 * API Endpoint Tests
 */

const request = require('supertest');
const chai = require('chai').expect;
// const rewire = require('rewire');
const app = require('../app');
const expect = chai.expect;

describe('OLMS', () => {
  it('loads the home page', (done) => {
    request(app).get('/').expect(200).end(done);
  });
  describe('OLMS', () => {
    it('gets the books-api route', (done) => {
      request(app).get('/api/books').expect(200).end(done);
    });
  });
});

describe('Borrow book', () => {
  it('should return the user if valid', (done) => {
    request(app)
      .post('/api/users/1/books')
      .end((err, res) => {
        chai(res.statusCode).to.be.equal(200);
        done();
      });
  });
});
