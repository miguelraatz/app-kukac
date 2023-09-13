import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css'

function NavBar() {
  return (
    <section className="container-nav-bar">
      <ul>
        <li>
          <NavLink className="menu-item" to="palindromos" activeClassName="ativo">
            Palíndromos
          </NavLink>
        </li>
        <li>
          <NavLink className="menu-item" to="caixa" activeClassName="ativo">
            Caixa
          </NavLink>
        </li>
        <li>
          <NavLink className="menu-item" to="garagem" activeClassName="ativo">
            Garagem
          </NavLink>
        </li>
        <li>
          <NavLink className="menu-item" to="cep" activeClassName="ativo">
            CEP
          </NavLink>
        </li>
      </ul>
    </section>
  )
}

export default NavBar;
