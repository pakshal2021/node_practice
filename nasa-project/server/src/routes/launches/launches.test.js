const request = require('supertest');
const app = require('../../app');
describe('Test Get /launches', () => {
    test("It should respond with 200 success", async () => {
        const response = await request(app)
        .get('/launches')
        .expect(200);
    });
});


describe('Test Post /launches', () => {
    const launchesData = {
        mission : "Kepler Exploration X",
        rocket : "Explorer IS1",
        launchDate : "December 27, 2030",
        target : "Kepler-442 b",
    }
    const launchesDatawithoutDate = {
        mission : "Kepler Exploration X",
        rocket : "Explorer IS1",
        target : "Kepler-442 b",
    }
    test("It should respond with 200 success", async() => {
        const response = await request(app)
        .post("/launches")
        .send(launchesData)
        .expect(200);

        const requestDate = new Date(launchesData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();
        expect(requestDate).toBe(responseDate);
        expect(response.body).toMatchObject(launchesDatawithoutDate);
    });

    test("It should be catch missing required properties", async () => {
        const response = await request(app)
        .post("/launches")
        .send(launchesDatawithoutDate)
        .expect(400);

        expect(response.body).toStrictEqual({
            error: 'Missing required launch field'
        })
    })
    test("It should be catch invalid dates", () => {})
});