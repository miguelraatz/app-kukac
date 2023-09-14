import { useContext } from 'react';
import UserContext from '../context/UserContext';
import '../styles/Header.css';

function Header() {
  const { user } = useContext(UserContext);

  return (
    <section className="container-header">
      <h2>Playground</h2>
      <span className="square"></span>
      <h2>Bem-vindo {user}</h2>
    </section>
  )
}

export default Header;
