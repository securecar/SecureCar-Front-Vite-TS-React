import {Link} from "react-router-dom"
import "./NavBar.css"
const NavBar = ()=>{

    return (
        <div className="main-Links">
         {/* <Link className="text-[color: #000000]  bg-white p-2 rounded hover:text-purple-600 mx-3" to="../../pages/PaginaFAQ/PaginaFAQ">Pagina FAQ</Link>
         <Link className="text-primary-light bg-black p-2 rounded hover:text-purple-600 mx-3" to="../../pages/PaginaChatBot/PaginaChatBot">Pagina ChatBot</Link>
         <Link className="text-primary bg-white p-2 rounded hover:text-purple-600 mx-3" to="../../pages/PaginaNovidades/PaginaNovidades">Pagina Novidades</Link> */}
         <Link className="text-black hover:text-purple-600 mx-3 font-semibold " to="../../pages/PaginaFAQ/PaginaFAQ">Pagina FAQ</Link>
         <Link className="text-black hover:text-purple-600 mx-3 font-semibold" to="../../pages/PaginaChatBot/PaginaChatBot">Pagina ChatBot</Link>
         <Link className="text-black hover:text-purple-600 mx-3 font-semibold" to="../../pages/PaginaNovidades/PaginaNovidades">Pagina Novidades</Link>
         </div>
    )
}

export default NavBar