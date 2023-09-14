import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import '../styles/Caixa.css'
import requestApi from "../helpers/requestApi";
import { toast } from "react-toastify";
import ToastComponent from "../components/ToastComponent";
import 'react-toastify/dist/ReactToastify.css';

function Caixa() {

  const [purchasePrice, setPurchasePrice] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [result, setResult] = useState({});

  const fetchCaixa = async () => {
    const response = await requestApi('caixa', { purchase: purchasePrice, money: amountPaid });
    setResult(response)
  }
  
  const handleClick = async (e) => {
    e.preventDefault();
    if (+amountPaid < +purchasePrice) {
      toast.error('Valor pago menor que o valor da compra');
      setAmountPaid('');
      setPurchasePrice('');
      return;
    }
    await fetchCaixa();
  }

  const backButton = (e) => {
    e.preventDefault();
    setPurchasePrice('');
    setAmountPaid('');
    setResult({});
  }

  return (
    <>
      <Header />
      <NavBar />
      <div className="container-caixa">
        {Object.keys(result).length === 0 ? (
        <section className="section-caixa">
          <h2>Caixa</h2>
          <p>Digite o valor da compra e valor da venda.</p>
          <div className="container-inputs">
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
              className="btn-caixa"
              onClick={ (e) => handleClick(e) }
            >
              Enviar
            </button>
          </div>
        </section>
        ) : (
          <section className="container-caixa">
            <section className="section-caixa">
              <h2>Caixa</h2>
              <p>Troco</p>
              <h3>Valor da compra: R${Number(purchasePrice).toFixed(2)}</h3>
              <h3>Valor pago: R${Number(amountPaid).toFixed(2)}</h3>
              <h3>Total de notas de 1 real: {result[1]}</h3>
              <h3>Total de notas de 10 reais: {result[10]}</h3>
              <h3>Total de notas de 100 reais: {result[100]}</h3>
            </section>
            <button
              type="button"
              className="btn-caixa"
              onClick={ (e) => backButton(e) }
            >Voltar</button>
          </section>
        )}
      </div>
      <ToastComponent />
    </>
  )
}

export default Caixa;
