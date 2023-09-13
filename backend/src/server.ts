import App from "./app";
import PalindromeController from "./controllers/palindromes.controller";
import CashBoxController from "./controllers/cashbox.controller";
import VehicleController from "./controllers/vehicle.controller";
const app = new App().app;

app.listen(3001, () => {
  console.log('Server started on port 3001');
})

app.post('/palindromos', (req, res) => {
  const palindromoController = new PalindromeController();
  palindromoController.getAllPalindromos(req, res);
})

app.post('/caixa', (req, res) => {
  const cashBoxController = new CashBoxController();
  cashBoxController.calculateChange(req, res);
})

app.post('/garagem', (req, res) => {
  const vehicleController = new VehicleController();
  vehicleController.saveVehicle(req, res);
});
