import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/Garagem.css'
import requestApi from "../helpers/requestApi";

function Garagem() {

  const [vehicle, setVehicle] = useState('moto');
  const [year, setYear] = useState('');
  const [doors, setDoors] = useState('');
  const [brand, setBrand] = useState('');
  const [passengers, setPassengers] = useState('');
  const [model, setModel] = useState('');
  
  const fetchGaragem = async () => {
    const dataMoto = {
      vehicle,
      modelo: model,
      brand,
      year,
      passengers,
    }

    const dataCarro = {
      vehicle,
      modelo: model,
      brand,
      year,
      doors,
    }

    const result = await requestApi('garagem', vehicle === 'moto' ? dataMoto : dataCarro);
    return result;
  }

  const handleClick = async (e) => {
    e.preventDefault();
    await fetchGaragem();
  }

  return (
    <div>
      <Header />
      <NavBar />
      <form className="container-garagem">
        <div className="container-title-garagem">
          <h2>Garagem</h2>
          <p>Preencha as informações do seu veículo.</p>
        </div>
        <div className="container-input-data">
          <select onChange={ (e) => setVehicle(e.target.value) } name="select" id="select">
            <option value="carro">Carro</option>
            <option value="moto">Moto</option>
          </select>

          <input onChange={ (e) => setYear(e.target.value) } type="text" placeholder="Ano de fabricação" />
          { vehicle === 'carro' ?
          <input onChange={ (e) => setDoors(e.target.value) } type="text" placeholder="Quantidade de portas" /> :
          <input onChange={ (e) => setPassengers(e.target.value) } type="text" placeholder="Quantidade de passageiros" /> }
          <input onChange={ (e) => setModel(e.target.value) } type="text" placeholder="Modelo" />
          <input onChange={ (e) => setBrand(e.target.value) } type="text" placeholder="Marca" />
          <button
            type="button"
            className="btn-enviar-garagem"
            onClick={ (e) => handleClick(e) }
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Garagem;
