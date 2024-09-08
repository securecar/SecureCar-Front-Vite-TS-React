import './App.css'
import Chatbot from './componentes/Chatbot/Chatbot';
import Footer from './componentes/Folder/Footer';
import Header from './componentes/Header/Header'
import {Outlet} from "react-router-dom";


const App = ()=> {

  return (
    <>
    <Header/>
    <Outlet/>
    <Chatbot />
    <Footer/>
    </>
  )
}

export default App
