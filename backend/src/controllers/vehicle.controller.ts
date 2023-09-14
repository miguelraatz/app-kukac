import { Response, Request } from "express";
import { ICarro, IMoto, IVehicle, } from "../interfaces/IVehicle";
import VehicleService from "../services/vehicle.service";
import Carro from "../classes/Carro";
import Moto from "../classes/Moto";

class VehicleController {

  VehicleService = new VehicleService();

  public saveVehicle(req: Request, res: Response) {
    try {
      const { vehicle, ...dadosVeiculo } = req.body as unknown as any;

      if (vehicle === 'carro') {
        const carro = dadosVeiculo as ICarro;
        const newCarro = new Carro(dadosVeiculo.modelo, dadosVeiculo.year, dadosVeiculo.doors, dadosVeiculo.brand);
        this.VehicleService.saveVehicle('carro', newCarro);
        res.status(200).json(carro);

      } else if (vehicle === 'moto') {
        const newMoto = dadosVeiculo as IMoto;
        const moto = new Moto(dadosVeiculo.modelo, dadosVeiculo.year, dadosVeiculo.brand, dadosVeiculo.passengers);
        this.VehicleService.saveVehicle('moto', { ...newMoto, weels: moto.wheels });
        res.status(200).json(moto);

      } else {
        res.status(400).json({ error: 'Tipo de veículo inválido. Deve ser "carro" ou "moto".' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

export default VehicleController;