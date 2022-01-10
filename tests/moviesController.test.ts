import request from 'supertest';
import { expect } from 'chai';
import { describe, it } from 'mocha';
import app from '../src/app';

let token: string;

const user = {
  "email": "ace@gmail.com",
  "password": "ventura",
}

const newPost = {
  "title": "Pealkiri",
  "description": "Sisu kirjeldus",
}

describe('Movies controller', () => {
  describe('POST /login', () => {
    it('responds with status 200 and token provided.', async () => {
      const response = await request(app).post('/login').send(user);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body.token).to.be.a('string');
      token = response.body.token;
    });
  });
  describe('GET /movies', () => {
    it('responds with status 200 and movies array.', async () => {
      const response = await request(app).get('/movies');
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(200);
      expect(response.body.movies).to.be.a('array');
      expect(response.body.movies.length).to.be.gt(0);
    });
  });
  describe('POST /movies', () => {
    it('responds with status 401 and error message because of missing token.', async () => {
      const response = await request(app).post('/movies').send(newPost);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(401);
      expect(response.body.error).to.equal('No token provided');
    });
  });
  describe('POST /movies', () => {
    it('responds with status 201 and id created post.', async () => {
      const response = await request(app)
      .post('/movies')
      .send(newPost)
      .set('Authorization', `Bearer${token}`);
      expect(response.body).to.be.a('object');
      expect(response.statusCode).to.equal(201);
      expect(response.body.id).to.be.a('number');
    });
  });
});