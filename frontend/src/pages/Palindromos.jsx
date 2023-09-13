import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/Palindromos.css';
import requestApi from "../helpers/requestApi";

function Palindromos() {

  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState([]);

  const fetchPalindromos = async () => {
    const response = await requestApi('palindromos', { start: firstNumber, end: secondNumber });
    result.push(response);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    await fetchPalindromos();
    setFirstNumber('');
    setSecondNumber('');
  }

  const backButton = (e) => {
    e.preventDefault();
    setResult([]);
  }

  return (
    <div>
      <Header />
      <NavBar />
      <section className="container-palindromos">
        <h2>Palíndromos</h2>
        {result.length === 0 ? (
          <>
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
          </>) : (
            <>
              <p>Números Palíndromos encontrados:</p>
              <div className="container-numbers-result">
                {result.map((item) => (
                  <>
                    <h3>{`${item}`}</h3>
                  </>
                ))}
              </div>
              <button
                type="button"
                className="btn-enviar"
                onClick={ (e) => backButton(e) }
              >
                Voltar
              </button>
            </>
          )
        }
        
      </section>
    </div>
  );
}

export default Palindromos;
