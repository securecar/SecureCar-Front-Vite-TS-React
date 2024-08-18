import './App.css'
import Header from './componentes/Header/Header'
import {Routes, Route} from "react-router-dom";
import PaginaNovidades from './pages/PaginaNovidades/PaginaNovidades';
import PaginaChatBot from './pages/PaginaChatBot/PaginaChatBot';
import PaginaSuaConta from './pages/PaginaSuaConta/PaginaSuaConta';
import PaginaRegistroLogin from './pages/PaginaRegistroLogin/PaginaRegistroLogin';
import PaginaInicial from './pages/PaginaInicial/PaginaInicial';
import PaginaFAQ from './pages/PaginaFAQ/PaginaFAQ';

const App = ()=> {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" Component={PaginaRegistroLogin}></Route>
        <Route path="/pages/PaginaInicial/PaginaInicial" Component={PaginaInicial}></Route>
        <Route path="/pages/PaginaFAQ/PaginaFAQ" Component={PaginaFAQ}></Route>
        <Route path="/pages/PaginaNovidades/PaginaNovidades" Component={PaginaNovidades}></Route>
        <Route path="/pages/PaginaChatBot/PaginaChatBot" Component={PaginaChatBot}></Route>
        <Route path="/pages/PaginaSuaConta/PaginaSuaConta" Component={PaginaSuaConta}></Route>
      </Routes>
    </>
  )
}

export default App
