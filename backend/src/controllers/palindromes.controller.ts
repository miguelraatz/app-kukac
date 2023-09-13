import { Response, Request } from "express";
import PalindromeService from "../services/palindromes.service";

class PalindromeController {
  PalindromoService = new PalindromeService();

  public async getAllPalindromos(req: Request, res: Response) {
    try {
      const { start, end } = req.body;
      const palindromos = this.PalindromoService.getAllPalindromos(Number(start), Number(end));
      return res.status(200).json(palindromos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default PalindromeController;