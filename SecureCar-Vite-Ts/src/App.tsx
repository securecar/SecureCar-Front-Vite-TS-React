import './App.css'
import Footer from './componentes/Folder/Footer';
import Header from './componentes/Header/Header'
import {Outlet} from "react-router-dom";


const App = ()=> {

  return (
    <div>
    <Header/>
    <div className='tela:min-h-screen  pb-2'>
      <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
