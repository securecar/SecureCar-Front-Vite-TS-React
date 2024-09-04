import './App.css'
import Footer from './componentes/Folder/Footer';
import Header from './componentes/Header/Header'
import {Outlet} from "react-router-dom";


const App = ()=> {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
