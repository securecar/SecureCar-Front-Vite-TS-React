import { Outlet } from "react-router-dom";
import './App.css';
import Chatbot from './componentes/Chatbot/Chatbot';
import Footer from './componentes/Folder/Footer';
import Header from './componentes/Header/Header';


const App = () => {

  return (
    <div>
      <Header />
      <div className='tela:min-h-screen  pb-2'>
        <Outlet />
      </div>
      <Chatbot />
      <Footer />
    </div>
  )
}

export default App
