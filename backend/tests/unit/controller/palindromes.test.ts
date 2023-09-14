import { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import PalindromeController from '../../../src/controllers/palindromes.controller';
import PalindromeService from '../../../src/services/palindromes.service';

chai.use(sinonChai);
describe('CashBoxService', () => {
  let palindromesController: PalindromeController;
  let palindromesService: PalindromeService;

  beforeEach(() => {
    palindromesController = new PalindromeController();
    palindromesService = new PalindromeService();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('should return the palindromes', async () => {
    const res: Response = {} as Response;
    const req: Request = {
      body: {
        "start": 10,
        "end": 200
      }
    } as Request;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    sinon.stub(palindromesService, 'getAllPalindromos').returns([
      "11", "22", "33", "44", "55", "66", "77", "88", "99", "101", "111", "121", "131", "141", "151", "161", "171", "181", "191"
    ]);

    palindromesController.getAllPalindromos(req, res);

    expect(res.status).to.have.been.calledWith(200);
  });
  it('should return error with numbers negative', async () => {
    const res: Response = {} as Response;
    const req: Request = {
      body: {
        "start": -10,
        "end": -200
      }
    } as Request;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    sinon.stub(palindromesService, 'getAllPalindromos').throws(new Error('Invalid range. Make sure start and end are non-negative numbers and start is less than or equal to end.'));

    palindromesController.getAllPalindromos(req, res);

    expect(res.status).to.have.been.calledWith(400);
  });
});