const assert = require('assert');
const axios = require('axios');

describe("Prime test", () => {

    it("Checks no param", async () => {
        try {
            let res = await axios.get('http://localhost:3000/');
        } catch (err) {
            assert.equal(err.response.status, 404);
        }
    });

    it("Checks 0", async () => {
        try {
            let res = await axios.get('http://localhost:3000/0');
            assert.equal(res.data.primes.length, 0);
        } catch (err) {
            throw(err);
        }
    });


    it("Checks 2", async () => {
        try {
            let res = await axios.get('http://localhost:3000/2');
            assert.equal(res.data.primes.length, 1);
        } catch (err) {
            throw(err);
        }
    });
    it("Checks 3", async () => {
        try {
            let res = await axios.get('http://localhost:3000/3');
            assert.equal(res.data.primes.length, 2);
        } catch (err) {
            throw(err);
        }
    });

    it("Bad Request", async () => {
        try {
            let res = await axios.get('http://localhost:3000/3qwe2');
            assert.equal(res.data.primes.length, 0);
        } catch (err) {
            throw(err);
        }
    });
});
