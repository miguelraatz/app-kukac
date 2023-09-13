import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/Garagem.css'
import requestApi from "../helpers/requestApi";
import ToastComponent from "../components/ToastComponent";
import { toast } from "react-toastify";

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
    if (!year || !model || !brand) return toast.error(`Preencha todos os campos!`);
    await fetchGaragem();
    toast.success(`Veículo cadastrado com sucesso!`);
    setVehicle('moto');
    setYear('');
    setDoors('');
    setBrand('');
    setPassengers('');
    setModel('');
  }

  return (
    <>
      <Header />
      <NavBar />
      <form className="section-garagem">
        <h2>Garagem</h2>
        <p>Preencha as informações do seu veículo.</p>
        <div className="container-inputs">
          <select className="select-input" onChange={ (e) => setVehicle(e.target.value) } name="select" id="select">
            <option value="moto">Moto</option>
            <option value="carro">Carro</option>
          </select>

          <input
            value={year}
            onChange={ (e) => setYear(e.target.value) }
            type="text"
            placeholder="Ano de fabricação"
          />
          { vehicle === 'carro' ?
            <input 
              onChange={ (e) => setDoors(e.target.value) }
              type="text"
              placeholder="Quantidade de portas"
              value={doors}
            /> : <input
              onChange={ (e) => setPassengers(e.target.value) }
              type="text"
              placeholder="Quantidade de passageiros"
              value={passengers}
            /> }
          <input
            onChange={ (e) => setModel(e.target.value) }
            type="text"
            placeholder="Modelo"
            value={model}
          />
          <input
            onChange={ (e) => setBrand(e.target.value) }
            type="text" placeholder="Marca"
            value={brand}
          />
          <button
            type="button"
            className="btn-garagem"
            onClick={ (e) => handleClick(e) }
          >
            Enviar
          </button>
        </div>
      </form>
      <ToastComponent />
    </>
  )
}

export default Garagem;
