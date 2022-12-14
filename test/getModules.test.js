import Module from "../models/modules.model.js";
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
import modulesTestData from "./modulesTestData.js";

const testDataArray = modulesTestData.modules;

chai.use(chaiHttp);
describe(`Testing Module requests on the database`, () => {
    const testServer = chai.request(server).keepOpen();
    beforeEach(async () => {
        try {
            await Module.deleteMany();
            console.log(`Database cleared`);
        } catch (error) {
            console.log(`Error clearing`);
            throw new Error();
        }
        try {
            await Module.insertMany(testDataArray);
            console.log(`Database populated with test Profiles`);
        } catch (error) {
            console.log(`Error inserting`);
            // Terminate the test
            throw new Error();
        }
    });
    describe(`/GET Module Request`, () => {
        it(`should return all of the moduleData as an array`, async () => {
            const profileid = 1;
            const res = await testServer.get(`/getModules/${profileid}`).send();

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.equal(testDataArray.length);
        });

        describe(`/POST create Module Data`, () => {
            it(`should create a SuccessFul Post request`, async () => {
                let module = {
                    profileid: "2",
                    modules: "Module 2",
                    challenge: "News Challenge",
                    grade: "Fail"
                };
                const res = await testServer.post(`/getModules`).send(training);
                console.log(res.body);
                expect(res).to.have.status(201);
                expect(res.body).to.be.an(`object`);
            });
        });
    });
});