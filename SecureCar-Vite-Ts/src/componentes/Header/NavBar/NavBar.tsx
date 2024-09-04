import {Link} from "react-router-dom"
const NavBar = ()=>{

    return (
        <div className="main-Links">
         <Link className="text-xl text-white hover:text-black mx-3 font-medium " to="../../pages/PaginaFAQ/PaginaFAQ">Perguntas Frequentes</Link>
         <Link className="text-xl text-white hover:text-black mx-3 font-medium" to="../../pages/PaginaChatBot/PaginaChatBot">ChatBot</Link>
         <Link className="text-xl text-white hover:text-black mx-3 font-medium" to="/blog">Novidades</Link>
         <Link className="text-xl text-white hover:text-black mx-3 font-medium" to={"../../pages/PaginaDosParticipantes/PaginaDosParticipantes"}> EQUIPE </Link>
         </div>
    )
}

export default NavBar