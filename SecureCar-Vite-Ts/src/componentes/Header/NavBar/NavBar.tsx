import {Link} from "react-router-dom"
import "./NavBar.css"
const NavBar = ()=>{

    return (
        <div className="main-Links">
         <Link to="../../pages/PaginaFAQ/PaginaFAQ">Pagina FAQ</Link>
         <Link to="../../pages/PaginaChatBot/PaginaChatBot">Pagina ChatBot</Link>
         <Link to="../../pages/PaginaNovidades/PaginaNovidades">Pagina Novidades</Link>
         </div>
    )
}

export default NavBar