import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import '../styles/Home.css'
import { useHistory } from 'react-router-dom';
import ToastComponent from '../components/ToastComponent';
import { toast } from 'react-toastify';

function Home() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleClick = (e) => {
    if (!user) return toast.error(`Preencha seu nome!`);
    e.preventDefault();
    history.push('/palindromos');
  }

  return (
    <section className="container-home">
      <h1 className="title-playground">Playground</h1>
      <div className="container-name">
        <h1 htmlFor="name">Qual seu nome?</h1>
        <input
        className="input-name"
        type="text"
        id="name"
        name="name"
        placeholder="Digite seu nome"
        onChange={ (e) => setUser(e.target.value) }
        />
        <button
        type="button"
        className="btn-enviar"
        onClick={ (e) => handleClick(e) }
        >
          Enviar
        </button>
      </div>
      <ToastComponent />
    </section>
  );
}

export default Home;