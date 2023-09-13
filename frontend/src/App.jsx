import { Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Palindromos from './pages/Palindromos'
import Caixa from './pages/Caixa'
import Garagem from './pages/Garagem'
import Cep from './pages/Cep'

function App() {

  return (
    <Switch>
      <Route path="/cep" component={ Cep } />
      <Route path="/garagem" component={ Garagem } />
      <Route path="/caixa" component={ Caixa } />
      <Route path="/palindromos" component={ Palindromos } />
      <Route exact path="/" component={ Home } />
    </Switch>
  )
}

export default App
