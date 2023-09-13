import { IVehicle } from "../interfaces/IVehicle";

class Carro implements IVehicle {
  vehicle: string;
  modelo: string;
  year: number;
  doors: number;
  brand: string;

  constructor(modelo: string, anoFabricacao: number, quantidadePortas: number, marca: string) {
    this.modelo = modelo;
    this.year = anoFabricacao;
    if (quantidadePortas < 2 || quantidadePortas > 4) {
      throw new Error('A quantidade de portas deve estar entre 2 e 4.');
    }
    this.doors = quantidadePortas;
    this.brand = marca;
  }
}

export default Carro;

