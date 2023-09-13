import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/Palindromos.css';

function Palindromos() {

  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    console.log(firstNumber);
    console.log(secondNumber);
    setFirstNumber('');
    setSecondNumber('');
  }

  return (
    <div>
      <Header />
      <NavBar />
      <section className="container-palindromos">
        <h2>Palíndromos</h2>
        <p>Digite dois números com intervalo de sua escolha para verificar todos os Palíndromos.</p>
        <div className="container-input-numeros">
          <input
            value={firstNumber}
            type="text"
            placeholder="Digite um número"
            onChange={ (e) => setFirstNumber(e.target.value)}
          />
          <input
            value={secondNumber}
            type="text"
            placeholder="Digite um número"
            onChange={ (e) => setSecondNumber(e.target.value)}
          />
          <button
            type="button"
            className="btn-enviar"
            onClick={ (e) => handleClick(e) }
          >
            Enviar
          </button>
        </div>
      </section>
    </div>
  );
}

export default Palindromos;
