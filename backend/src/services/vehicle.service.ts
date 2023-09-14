import Model from "../models";

type Vehicle = "carro" | "moto";

class VehicleService {
  private model = new Model();
  public async saveVehicle(vehicle: Vehicle, dadosVeiculo) {
    const dataJson = await this.model.readJsonFile();
    dataJson[vehicle].push(dadosVeiculo);
    this.model.writeJsonFile(dataJson);
  }
}

export default VehicleService;
