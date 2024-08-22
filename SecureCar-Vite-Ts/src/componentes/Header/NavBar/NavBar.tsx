import {Link} from "react-router-dom"
import "./NavBar.css"
const NavBar = ()=>{

    return (
        <div className="main-Links">
         <Link className="text-gray-500 hover:text-purple-600 mx-3" to="../../pages/PaginaFAQ/PaginaFAQ">Pagina FAQ</Link>
         <Link className="text-gray-500 hover:text-purple-600 mx-3" to="../../pages/PaginaChatBot/PaginaChatBot">Pagina ChatBot</Link>
         <Link className="text-gray-500 hover:text-purple-600 mx-3" to="../../pages/PaginaNovidades/PaginaNovidades">Pagina Novidades</Link>
         </div>
    )
}

export default NavBar