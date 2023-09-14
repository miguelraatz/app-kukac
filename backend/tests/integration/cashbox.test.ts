import * as sinon from 'sinon';
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import App from '../../src/app';
import CashBoxController from '../../src/controllers/cashbox.controller';

chai.use(chaiHttp);

const { app } = new App();


describe('CashBoxController', () => {
  let cashBoxController: CashBoxController;

  before(() => {
    cashBoxController = new CashBoxController();
  });

  describe('POST /caixa', () => {
    const BASE_URL = 'http://localhost:3001';
    const purchase = 100;
    it('should return the correct change for a valid purchase and money amount', async () => {
      const money = 261;
      const expectedChange = {
        "1": 1,
        "10": 6,
        "100": 1
      }
      const response = await chai.request(BASE_URL).post('/caixa').send({ purchase, money });
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(expectedChange);
    });

    it('should return an error for an invalid purchase or money amount', async () => {
      const money = 50;
      const error = {
        "error": "Insufficient money to pay for the purchase."
      }

      const response = await chai.request(BASE_URL).post('/caixa').send({ purchase, money });

      expect(response.status).to.equal(500);
      expect(response.body).to.have.property('error');
      expect(response.body).to.deep.equal(error);
    });
  });
});