import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/Palindromos.css';
import requestApi from "../helpers/requestApi";
import ToastComponent from "../components/ToastComponent";
import { toast } from "react-toastify";

function Palindromos() {

  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState([]);

  const fetchPalindromos = async () => {
    const response = await requestApi('palindromos', { start: firstNumber, end: secondNumber });
    result.push(response);
  }

  const handleClick = async (e) => {
    if (!firstNumber || !secondNumber) return toast.error(`Preencha todos os campos!`);
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
    <>
      <Header />
      <NavBar />
      <div className="container-palindromos">
        <section className="section-palindromos">
          <h2>Palíndromos</h2>
          {result.length === 0 ? (
            <>
              <p>Digite dois números com intervalo de sua escolha para verificar todos os Palíndromos.</p>
              <div className="container-inputs">
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
                  className="btn-palindromos"
                  onClick={ (e) => handleClick(e) }
                >
                  Enviar
                </button>
              </div>
            </>) : (
              <>
                <p>Números encontrados:</p>
                <div className="container-numbers-result">
                  {result.map((item) => (
                    <>
                      <h3>{`${item}`}</h3>
                    </>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn-palindromos"
                  onClick={ (e) => backButton(e) }
                >
                  Voltar
                </button>
              </>
            )
          }
          <ToastComponent />
        </section>
      </div>
    </>
  );
}

export default Palindromos;
