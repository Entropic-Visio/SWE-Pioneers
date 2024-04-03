const request = require('supertest');
const express = require('express');
const app = require('../app'); // Assuming your Express app is defined in app.js


describe('Testing Router Endpoints', () => {
  it('should respond with status 200 for home route', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should respond with status 200 for about route', async () => {
    const response = await request(app).get('/about');
    expect(response.statusCode).toBe(200);
  });

  it('should respond with status 200 for contact route', async () => {
    const response = await request(app).get('/contact');
    expect(response.statusCode).toBe(200);
  });

  it('should respond with status 200 for ping route', async () => {
    const response = await request(app).get('/cities');
    expect(response.statusCode).toBe(200);
  });

  it('should respond with status 200 for ping route', async () => {
    const response = await request(app).get('/login');
    expect(response.statusCode).toBe(200);
  });

  it('should respond with status 200 for ping route', async () => {
    const response = await request(app).get('/register');
    expect(response.statusCode).toBe(200);
  });

  // Add more tests for other routes similarly
});