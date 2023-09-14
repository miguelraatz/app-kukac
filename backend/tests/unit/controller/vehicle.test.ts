import { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import VehicleController from '../../../src/controllers/vehicle.controller';
import VehicleService from '../../../src/services/vehicle.service';
import Moto from '../../../src/classes/Moto';
import Carro from '../../../src/classes/Carro';

chai.use(sinonChai);
describe('VehicleController', () => {
  let vehicleController: VehicleController;
  let vehicleService: VehicleService;

  beforeEach(() => {
    vehicleController = new VehicleController();
    vehicleService = new VehicleService();
  });

  afterEach(function () {
    sinon.restore();
  });

  it('must return the car added in json', () => {
    const newCar = {
      modelo: "Uno",
      year: 2020,
      doors: 4,
      brand: "Fiat"
    }
    const res: Response = {} as Response;
    const req: Request = {
      body: {
        "vehicle": "carro",
        ...newCar
      }
    } as Request;

    const carroInstance = new Carro(newCar.modelo, newCar.year, newCar.doors, newCar.brand);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    sinon.stub(vehicleService, 'saveVehicle').resolves(carroInstance);

    vehicleController.saveVehicle(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newCar);
  });
  it('should return error when trying to add invalid vehicle type',  () => {
    const newCar = {
      modelo: "Uno",
      year: 2020,
      doors: 4,
      brand: "Fiat"
    }
    const error = { error: 'Tipo de veículo inválido. Deve ser "carro" ou "moto".' }

    const res: Response = {} as Response;
    const req: Request = {
      body: {
        "vehicle": "caminhão",
        ...newCar
      }
    } as Request;


    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    sinon.stub(vehicleService, 'saveVehicle').throws(new Error(error.error));
    vehicleController.saveVehicle(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(error);
  });
  it('must return the moto added in json', () => {
    const newMoto = {
      modelo: "CG 150",
      year: 2020,
      passengers: 2,
      brand: "Honda"
    };
    const res: Response = {} as Response;
    const req: Request = {
      body: {
        "vehicle": "moto",
        ...newMoto
      }
    } as Request;

    const motoInstance = new Moto(newMoto.modelo, newMoto.year, newMoto.brand, newMoto.passengers);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    sinon.stub(vehicleService, 'saveVehicle').resolves(motoInstance);
    vehicleController.saveVehicle(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(motoInstance); 
  });
  it('should return error when trying to add invalid number of passengers', async () => {
    const newMoto = {
      modelo: "CG 150",
      year: 2020,
      passengers: 0,
      brand: "Honda"
    };
    const error = { error: 'A moto precisa ter no mínimo 1 passageiro e no máximo 2.' }

    const res: Response = {} as Response;
    const req: Request = {
      body: {
        "vehicle": "moto",
        ...newMoto
      }
    } as Request;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub();

    sinon.stub(vehicleService, 'saveVehicle').throws(new Error(error.error));
    vehicleController.saveVehicle(req, res);
    
    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(error);
  });
});