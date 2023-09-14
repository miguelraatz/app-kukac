import { expect } from 'chai';
import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import CashBoxService from '../../../src/services/cashbox.service';

chai.use(chaiHttp);
describe('CashBoxService', () => {
  let cashBoxService: CashBoxService;

  beforeEach(() => {
    cashBoxService = new CashBoxService();
  });

  describe('calculateChange', () => {
    it('should return the correct change for a purchase with sufficient money', () => {
      const purchase = 50;
      const money = 100;
      const expectedChange = { 10: 5 };
      const result = cashBoxService.calculateChange(purchase, money);
      expect(result).to.deep.equal(expectedChange);
    });

    it('should throw an error for insufficient money', () => {
      const purchase = 100;
      const money = 50;

      expect(() => cashBoxService.calculateChange(purchase, money)).to.throw('Insufficient money to pay for the purchase.');
    });

    it('should return an empty object for exact change', () => {
      const purchase = 50;
      const money = 50;

      const result = cashBoxService.calculateChange(purchase, money);

      expect(result).to.deep.equal({});
    });

    it('should return the correct change for larger notes available', () => {
      const purchase = 72;
      const money = 100;
      const expectedChange = { 1: 8, 10: 2 };

      const result = cashBoxService.calculateChange(purchase, money);

      expect(result).to.deep.equal(expectedChange);
    });
  });
});