import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/Caixa.css'
import requestApi from "../helpers/requestApi";

function Caixa() {

  const [purchasePrice, setPurchasePrice] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [result, setResult] = useState({});

  const fetchCaixa = async () => {
    const response = await requestApi('caixa', { purchase: purchasePrice, money: amountPaid });
    setResult(response)
    console.log(result)
  }
  
  const handleClick = async (e) => {
    e.preventDefault();
    await fetchCaixa();
  }

  const backButton = (e) => {
    e.preventDefault();
    setPurchasePrice('');
    setAmountPaid('');
    setResult({});
  }

  return (
    <div>
      <Header />
      <NavBar />
      {Object.keys(result).length === 0 ? (
      <section className="container-caixa">
        <div className="container-caixa-title">
          <h2>Caixa</h2>
          <p>Digite o valor da compra e valor da venda.</p>
        </div>
        <div className="container-input-values">
          <input
            type="text"
            placeholder="Digite o valor da compra"
            onChange={ (e) => setPurchasePrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Digite o valor entregue"
            onChange={ (e) => setAmountPaid(e.target.value)}
          />
          <button
            type="button"
            className="btn-enviar-caixa"
            onClick={ (e) => handleClick(e) }
          >
            Enviar
          </button>
        </div>
      </section>
      ) : (
        <section className="container-caixa">
          <div className="container-caixa-title">
            <h2>Caixa</h2>
            <p>Troco</p>
          </div>
            <h3>Total de notas de 1 real: {result[1]}</h3>
            <h3>Total de notas de 10 reais: {result[10]}</h3>
            <h3>Total de notas de 100 reais: {result[100]}</h3>
          <button
            type="button"
            className="btn-enviar-caixa"
            onClick={ (e) => backButton(e) }
          >Voltar</button>
        </section>
      )}
    </div>
  )
}

export default Caixa;
