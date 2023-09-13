import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/Caixa.css'
import requestApi from "../helpers/requestApi";

function Caixa() {

  const [purchasePrice, setPurchasePrice] = useState(0);
  const [amountPaid, setAmountPaid] = useState(0);
  const [result, setResult] = useState([]);

  const fetchCaixa = async () => {
    const result = await requestApi('caixa', { purchase: purchasePrice, money: amountPaid });
    setResult(result);
  }
  
  const handleClick = async (e) => {
    e.preventDefault();
    await fetchCaixa();
  }

  return (
    <div>
      <Header />
      <NavBar />
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
    </div>
  )
}

export default Caixa;
