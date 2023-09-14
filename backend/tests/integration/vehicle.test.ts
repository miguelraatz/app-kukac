import * as sinon from 'sinon';
import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import App from '../../src/app';
import PalindromeController from '../../src/controllers/palindromes.controller';
import VehicleController from '../../src/controllers/vehicle.controller';

chai.use(chaiHttp);

const { app } = new App();


describe('VehicleController', () => {
  let vehicleController: VehicleController;

  before(() => {
    vehicleController = new VehicleController();
  });

  describe('POST /garagem', () => {
    const BASE_URL = 'http://localhost:3001';
    it('should return vehicle moto created', async () => {
      const moto = {
        "vehicle": "moto",
        "modelo": "fan 125",
        "year": 1990,
        "passengers": 2,
        "brand": "fiat"
      }
      const expectedResult = {
        "modelo": "fan 125",
        "year": 1990,
        "passengers": 2,
        "brand": "fiat",
        "wheels": 2
      }
      const response = await chai.request(BASE_URL).post('/garagem').send(moto);
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(expectedResult);
    });

    it('should return vehicle car created', async () => {
      const car = {
        "vehicle": "carro",
        "modelo": "Uno",
        "year": 1915,
        "doors": 4,
        "brand": "Fiat"
      };
      const expectedResult = {
        "modelo": "Uno",
        "year": 1915,
        "doors": 4,
        "brand": "Fiat"
      }

      const response = await chai.request(BASE_URL).post('/garagem').send(car);

      expect(response.status).to.equal(200);
      expect(response.body).to.deep.equal(expectedResult);
    });
    it('should return an error when the moto passengers are bigger than 2', async () => {
      const motoError = {
        "vehicle": "moto",
        "modelo": "fan 125",
        "year": 1990,
        "passengers": 4,
        "brand": "fiat"
      };
      const error = {
        "error": "A moto precisa ter no mínimo 1 passageiro e no máximo 2."
      }

      const response = await chai.request(BASE_URL).post('/garagem').send(motoError);

      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('error');
      expect(response.body).to.deep.equal(error);
    });
    it('should return an error when the car doors are bigger than 4', async () => {
      const carError = {
        "vehicle": "carro",
        "modelo": "uno",
        "year": 1990,
        "doors": 5,
        "brand": "fiat"
      }
      const error = {
        "error": "A quantidade de portas deve estar entre 2 e 4."
      }

      const response = await chai.request(BASE_URL).post('/garagem').send(carError);

      expect(response.status).to.equal(400);
      expect(response.body).to.have.property('error');
      expect(response.body).to.deep.equal(error);
    });
  });
});