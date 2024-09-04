import {Link} from "react-router-dom"
const NavBar = ()=>{

    return (
        <div className="main-Links">
         <Link className="text-xl text-white hover:text-black mx-3 font-medium " to="../../pages/PaginaFAQ/PaginaFAQ">Pagina FAQ</Link>
         <Link className="text-xl text-white hover:text-black mx-3 font-medium" to="../../pages/PaginaChatBot/PaginaChatBot">Pagina ChatBot</Link>
         <Link className="text-xl text-white hover:text-black mx-3 font-medium" to="../../pages/PaginaNovidades/PaginaNovidades">Pagina Novidades</Link>
         <Link className="text-xl text-white hover:text-black mx-3 font-medium" to="/blog">Blog</Link>
         </div>
    )
}

export default NavBar