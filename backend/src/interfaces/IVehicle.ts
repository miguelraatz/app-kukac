export interface IVehicle {
  vehicle: string;
  modelo: string;
  year: number;
  brand: string;
}

export interface ICarro extends IVehicle {
  doors: number;
}

export interface IMoto extends IVehicle {
  passengers: number;
  wheels: number;
}
