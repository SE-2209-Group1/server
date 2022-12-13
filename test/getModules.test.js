//Import necessary modules
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import server from '../app.s';
chai.use(chaiHttp);

//Testing suite for the getModules page
describe('Testing suite for getModules.js', () => {

    it('The post request for the getModules route works', async () => {
        const result = await chai.request(server)
            .get(`/getModules`);
        expect(result).to.have.status(200);
    });

});