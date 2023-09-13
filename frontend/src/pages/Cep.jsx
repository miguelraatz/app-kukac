import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/Cep.css';
import CardCep from "../components/CardCep";
import ToastComponent from "../components/ToastComponent";
import { toast } from "react-toastify";

function Cep() {

  const [ceps, setCeps] = useState([]);
  const [result] = useState([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    const list = [...ceps];
    list[index] = value;
    setCeps(list);
  }

  const fetchCep = async (cep) => {
    const URL_BASE = `https://viacep.com.br/ws/${cep}/json/`;
    try {
      const response = await fetch(URL_BASE);
      const data = await response.json();
      result.push(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = async () => {
    if (ceps.length !== 5) return toast.error(`Preencha todos os campos!`);
    toast.info(`Buscando CEP...`);
    for (const cep of ceps) {
      await fetchCep(cep);
    }
    toast.success(`CEPs encontrados!`);
  }


  return (
    <div>
      <Header />
      <NavBar />
      <form className="container-cep">
        {result.length === 0 ? (
        <>
          <div className="container-title-cep">
            <h2>Consulta CEP</h2>
            <p>Preencha os campos com os CEPs que deseja consultar.</p>
          </div>
          <div className="container-input-ceps">
            <input
              type="text"
              placeholder="CEP 1"
              onChange={ (e) => handleChange(e, 0) }
            />
            <input
              type="text"
              placeholder="CEP 2"
              onChange={ (e) => handleChange(e, 1) }
            />
            <input
              type="text"
              placeholder="CEP 3"
              onChange={ (e) => handleChange(e, 2) }
            />
            <input
              type="text"
              placeholder="CEP 4"
              onChange={ (e) => handleChange(e, 3) }
            />
            <input
              type="text"
              placeholder="CEP 5"
              onChange={ (e) => handleChange(e, 4) }
            />
            <button
              type="button"
              className="btn-enviar-cep"
              onClick={ handleClick }
            >
              Enviar
            </button>
          </div>
        </>
        ) : (
          <>
            {result.map((dataCep) => (
            <CardCep key={dataCep.cep} dataCep={dataCep} />
            ))}
          </>
        )}
      </form>
      <ToastComponent />
    </div>
  );
}

export default Cep;
