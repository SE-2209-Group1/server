import Training from "../models/training.model.js";
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
import trainingTestData from "./testData/trainingTestData.js";

const testDataArray = trainingTestData.training;

chai.use(chaiHttp);
describe(`Testing Training requests on the database`, () => {
    const testServer = chai.request(server).keepOpen();
    beforeEach(async () => {
        try {
            await Training.deleteMany();
            console.log(`Database cleared`);
        } catch (error) {
            console.log(`Error clearing`);
            throw new Error();
        }
        try {
            await Training.insertMany(testDataArray);
            console.log(`Database populated with test Profiles`);
        } catch (error) {
            console.log(`Error inserting`);
            // Terminate the test
            throw new Error();
        }
    });
    describe(`/GET Training Request`, () => {
        it(`should return all of the trainingData as an array`, async () => {
            const profileid = 1;
            const res = await testServer.get(`/yourTraining/${profileid}`).send();

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.equal(testDataArray.length);
        });

        describe(`/POST create Training Data`, () => {
            it(`should create a SuccessFul Post request`, async () => {
                let training = {
                    profileid: "2",
                    cohort: "6",
                    learningPath: "Software Engineering",
                    trainer: "Ed Wright",
                    finishDate: "16/12/22"
                };
                const res = await testServer.post(`/yourTraining`).send(training);
                console.log(res.body);
                expect(res).to.have.status(201);
                expect(res.body).to.be.an(`object`);
            });
        });
    });
});