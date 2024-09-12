import Header from "@/componentes/Header/Header";
import { Outlet } from "react-router-dom";
import Erro from "./componentes/Erro";
import Footer from "@/componentes/Folder/Footer";

const App = ()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Erro/>
        <Footer/>
        </>
    );
}

export default App;