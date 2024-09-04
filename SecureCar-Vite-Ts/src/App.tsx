import './App.css'
import Footer from './componentes/Folder/Footer';
import Header from './componentes/Header/Header'
import {Outlet} from "react-router-dom";


const App = ()=> {

  return (
    <div>
    <Header/>
    <div className='min-h-screen pb-16'>
      <Outlet/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
