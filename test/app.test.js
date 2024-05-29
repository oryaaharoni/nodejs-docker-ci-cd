const app = require('../app.js');
const supertest = require('supertest');
const request = supertest(app);


describe('GET /', () => {
    it('responds with AM ISRAEL HAI!', async () => {

        const res = await request.get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('AM ISRAEL HAI!');
    });
});
