import {Link} from "react-router-dom"
import "./NavBar.css"
const NavBar = ()=>{

    return (
        <div className="main-Links">
         <Link className="text-white hover:text-black transition-all mx-3 font-semibold " to="../../pages/PaginaFAQ/PaginaFAQ">Pagina FAQ</Link>
         <Link className="text-white hover:text-black transition-all mx-3 font-semibold" to="../../pages/PaginaChatBot/PaginaChatBot">Pagina ChatBot</Link>
         <Link className="text-white hover:text-black transition-all mx-3 font-semibold" to="../../pages/PaginaNovidades/PaginaNovidades">Pagina Novidades</Link>
         </div>
    )
}

export default NavBar