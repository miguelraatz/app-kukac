import { Response, Request } from 'express-serve-static-core';
import CashBoxService from '../services/cashbox.service';

class CashBoxController {

  CashBoxService = new CashBoxService();

  public calculateChange(req: Request, res: Response) {
    try {
      const { purchase, money } = req.body;
      const result = this.CashBoxService.calculateChange(Number(purchase), Number(money));
      res.status(200).send(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default CashBoxController;