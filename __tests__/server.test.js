
import "regenerator-runtime/runtime";
const request = require('supertest');
const app = require('../src/server/server');
const greetings = {message: "Welcome to the testing!"};

describe('Sample Test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true)
    })
})

describe('Get Endpoints', () => {
    it('should test the get end point', async () => {
        const res = await request(app).get("/test");
        expect(res.body).toEqual(greetings);
        expect(res.statusCode).toBe(200);
    })
})
