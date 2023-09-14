import * as sinon from 'sinon';
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import App from '../../src/app';
import CashBoxController from '../../src/controllers/cashbox.controller';
import PalindromeController from '../../src/controllers/palindromes.controller';

chai.use(chaiHttp);

const { app } = new App();


describe('PalindromeController', () => {
  let palindromeController: PalindromeController;

  before(() => {
    palindromeController = new PalindromeController();
  });

  describe('POST /palindromos', () => {
    const BASE_URL = 'http://localhost:3001';
    it('should return array of string with numbers palindromes', async () => {
      const start = 10;
      const end = 100;
      const expectedPalindromes = ["11", "22", "33", "44", "55", "66", "77", "88", "99"]
      const response = await chai.request(BASE_URL).post('/palindromos').send({ start, end });
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(expectedPalindromes);
    });

    it('should return an error for an invalid start or end amount', async () => {
      const start = 100;
      const end = 10;
      const error = {
        "error": "Invalid range. Make sure start and end are non-negative numbers and start is less than or equal to end."
      }

      const response = await chai.request(BASE_URL).post('/palindromos').send({ start, end });

      expect(response.status).to.equal(500);
      expect(response.body).to.have.property('error');
      expect(response.body).to.deep.equal(error);
    });
  });
});