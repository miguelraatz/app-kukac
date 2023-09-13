import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/Garagem.css'

function Garagem() {

  const [vehicle, setVehicle] = useState('carro');
  const [year, setYear] = useState('');
  const [doors, setDoors] = useState('');
  const [brand, setBrand] = useState('');
  const [passengers, setPassengers] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    console.log(vehicle);
    console.log(year);
    console.log(doors);
    console.log(brand);
    console.log(passengers);
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
