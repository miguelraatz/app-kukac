import { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import chai from 'chai';
import CashBoxController from '../../../src/controllers/cashbox.controller';
import CashBoxService from '../../../src/services/cashbox.service';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
describe('CashBoxService', () => {
  let cashBoxController: CashBoxController;
  let cashBoxService: CashBoxService;

  beforeEach(() => {
    cashBoxController = new CashBoxController();
    cashBoxService = new CashBoxService();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('should return the cashbox', async () => {
    const res: Response = {} as Response;
    const req: Request = {
      body: {
        "purchase": 100,
        "money": 260
      }
    } as Request;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    sinon.stub(cashBoxService, 'calculateChange').returns({
      "10": 6,
      "100": 1
    });

    cashBoxController.calculateChange(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });
});