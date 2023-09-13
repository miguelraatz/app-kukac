import { IMoto } from "../interfaces/IVehicle";

class Moto implements IMoto {
  vehicle: string;
  modelo: string;
  year: number;
  doors: number;
  brand: string;
  wheels: number;
  passengers: number;

  constructor(modelo: string, anoFabricacao: number, marca: string, passengers?: number) {

    this.modelo = modelo;
    this.year = anoFabricacao;
    if (passengers && passengers > 2 || passengers < 1) {
      throw new Error('A moto precisa ter no mínimo 1 passageiro e no máximo 2.');
    }
    this.passengers = passengers;
    if (anoFabricacao > new Date().getFullYear()) {
      throw new Error('O ano de fabricação deve ser válido.');
    }
    this.brand = marca;
    this.wheels = 2;
  }
}

export default Moto;