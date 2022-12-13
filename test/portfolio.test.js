import Portfolio from "../models/portfolio.model.js";
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
import testData from "./testData/allTestData.js";
const testDataArray = testData.portfolio;

chai.use(chaiHttp);
describe(`Testing requests on the database`, () => {
  const testServer = chai.request(server).keepOpen();
  beforeEach(async () => {
    try {
      await Portfolio.deleteMany();
      console.log(`Database cleared`);
    } catch (error) {
      console.log(`Error clearing`);
      throw new Error();
    }
    try {
      await Portfolio.insertMany(testDataArray);
      console.log(`Database populated with test Profiles`);
    } catch (error) {
      console.log(`Error inserting`);
      // Terminate the test
      throw new Error();
    }
  });
  describe(`/GET Portfolio Request`, () => {
    it(`should return all of the portfolioData as an array`, async () => {
      const profileid = 1;
      const res = await testServer.get(`/getPortfolio/${profileid}`).send();

      expect(res).to.have.status(200);
      expect(res.body).to.be.an(`array`);
      expect(res.body.length).to.equal(testDataArray.length);
    });

    describe(`/POST create a Portfolio Data`, () => {
      it(`should not create a portfoilio without a profile id`, async () => {
        let portfoilio = {
          portfolioTitle: "Java",
          portfolioURL: "www.digitalfuture.com",
          portfolioYear: "2022",
          portfolioWeight: "10",
          portfolioPriority: "M",
          portfolioDesc: "A",
        };

        const res = await testServer.post(`/addPortfolio`).send(portfoilio);
        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.body.message).to.be.eql(
          `There is a Error in Portfolio Data`
        );
      });

      it(`should not create a portfoilio without a portfolioTitle`, async () => {
        let portfoilio = {
          profileid: 1,
          portfolioURL: "www.digitalfuture.com",
          portfolioYear: "2022",
          portfolioWeight: "10",
          portfolioPriority: "M",
          portfolioDesc: "A",
        };

        const res = await testServer.post(`/addPortfolio`).send(portfoilio);
        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.body.message).to.be.eql(
          `There is a Error in Portfolio Data`
        );
      });

      it(`should not create a portfoilio without a portfolioURL`, async () => {
        let portfoilio = {
          profileid: 1,
          portfolioTitle: "Java",
          portfolioYear: "2022",
          portfolioWeight: "10",
          portfolioPriority: "M",
          portfolioDesc: "A",
        };

        const res = await testServer.post(`/addPortfolio`).send(portfoilio);
        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.body.message).to.be.eql(
          `There is a Error in Portfolio Data`
        );
      });
      it(`should not create a portfoilio without a portfolioYear`, async () => {
        let portfoilio = {
          profileid: 1,
          portfolioTitle: "Java",
          portfolioURL: "www.digitalfuture.com",
          portfolioWeight: "10",
          portfolioPriority: "M",
          portfolioDesc: "A",
        };

        const res = await testServer.post(`/addPortfolio`).send(portfoilio);
        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.body.message).to.be.eql(
          `There is a Error in Portfolio Data`
        );
      });
      it(`should not create a portfoilio without a portfolioWeight`, async () => {
        let portfoilio = {
          profileid: 1,
          portfolioTitle: "Java",
          portfolioURL: "www.digitalfuture.com",
          portfolioYear: "2022",
          portfolioPriority: "M",
          portfolioDesc: "A",
        };

        const res = await testServer.post(`/addPortfolio`).send(portfoilio);
        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.body.message).to.be.eql(
          `There is a Error in Portfolio Data`
        );
      });
      it(`should not create a portfoilio without a portfolioPriority`, async () => {
        let portfoilio = {
          profileid: 1,
          portfolioTitle: "Java",
          portfolioURL: "www.digitalfuture.com",
          portfolioYear: "2022",
          portfolioWeight: "10",
          portfolioDesc: "A",
        };

        const res = await testServer.post(`/addPortfolio`).send(portfoilio);
        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.body.message).to.be.eql(
          `There is a Error in Portfolio Data`
        );
      });
      it(`should not create a portfoilio without a portfolioDesc`, async () => {
        let portfoilio = {
          profileid: 1,
          portfolioTitle: "Java",
          portfolioURL: "www.digitalfuture.com",
          portfolioYear: "2022",
          portfolioWeight: "10",
          portfolioPriority: "M",
        };

        const res = await testServer.post(`/addPortfolio`).send(portfoilio);
        expect(res).to.have.status(422);
        expect(res).to.have.property(`error`);
        expect(res.body.message).to.be.eql(
          `There is a Error in Portfolio Data`
        );
      });

      it(`should create a SuccessFul Post request`, async () => {
        let portfoilio = {
          profileid: 2,
          portfolioTitle: "Java",
          portfolioURL: "www.digitalfuture.com",
          portfolioYear: "2022",
          portfolioWeight: "10",
          portfolioPriority: "M",
          portfolioDesc: "A",
        };
        const res = await testServer.post(`/addPortfolio`).send(portfoilio);
        console.log(res.body);
        expect(res).to.have.status(201);
        expect(res.body).to.be.an(`object`);
      });
    });
  });
});
