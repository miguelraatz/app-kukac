import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/Cep.css';
import CardCep from "../components/CardCep";
import ToastComponent from "../components/ToastComponent";
import { toast } from "react-toastify";

function Cep() {

  const [ceps, setCeps] = useState([]);
  const [result, setResult] = useState([]);
  const [wasFound, setWasFound] = useState(false);

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

  const handleClick = async (e) => {
    e.preventDefault();
    if (ceps.length !== 5) return toast.error(`Preencha todos os campos!`);
    toast.info(`Buscando CEP...`);
    for (const cep of ceps) {
      await fetchCep(cep);
    }
    toast.success(`CEPs encontrados!`);
    setWasFound(true);
  }

  const backToForm = (e) => {
    e.preventDefault();
    setWasFound(false);
    setCeps([]);
    setResult([])
  }


  return (
    <>
      <Header />
      <NavBar />
      {!wasFound ? (
        <form className="section-cep">
          <h2>Consulta CEP</h2>
          <p>Preencha os campos com os CEPs que deseja consultar.</p>
          <div className="container-inputs">
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
              className="btn-cep"
              onClick={ (e) => handleClick(e) }
            >
              Enviar
            </button>
          </div>
        </form>
        ) : (
        <div className="container-ceps-founder">
          <div className="container-cards">
            {result?.map((cep, index) => <CardCep key={index} dataCep={cep} />)}
          </div>
          <button
            type="button"
            className="btn-cep"
            onClick={ (e) => backToForm(e) }
          >
            Voltar
          </button>
        </div>
      )}
      <ToastComponent />
    </>
  );
}

export default Cep;
