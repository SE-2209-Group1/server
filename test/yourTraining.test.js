//Import necessary modules
import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import server from '../app.s';
chai.use(chaiHttp);

//Testing suite for the yourTraining page
describe('Testing suite for yourTraining.js', () => {

    it('The post request for the login page works', async () => {
        const result = await chai.request(server)
            .get(`/yourTraining`);
        expect(result).to.have.status(200);
    });

});