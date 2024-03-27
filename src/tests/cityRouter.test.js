// Import necessary modules and dependencies
const express = require('express');
const request = require('supertest');
const router = require('../routes/cities.js');
const cityServices = require('../services/city.services.js');

// Mock the cityServices module
jest.mock('../services/city.services.js');

// Mock the rendering logic
const mockRes = {
  status: jest.fn(() => mockRes),
  render: jest.fn(),
  send: jest.fn(),
};

// Mock the behavior of cityServices.getAllCities() to simulate a database error
cityServices.getAllCities.mockRejectedValue(new Error('Database error'));

describe('City Router', () => {
  it('Responds with all the cities', async () => {
    // Mock the behavior of cityServices.getAllCities() to return fake data
    cityServices.getAllCities.mockResolvedValue([{ name: 'City 1' }, { name: 'City 2' }]);
    
    // Make a request to the router and check the response
    const response = await request(express().use(router)).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([{ name: 'City 1' }, { name: 'City 2' }]);
  });
});
