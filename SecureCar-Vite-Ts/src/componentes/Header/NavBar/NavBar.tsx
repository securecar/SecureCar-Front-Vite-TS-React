import {Link} from "react-router-dom"
const NavBar = ()=>{

    return (
        <div className="main-Links">
         <Link className="text-xl text-white hover:text-black mx-3 font-medium " to="/faq">Perguntas Frequentes</Link>
         <Link className="text-xl text-white hover:text-black mx-3 font-medium" to="/chatbot">ChatBot</Link>
         <Link className="text-xl text-white hover:text-black mx-3 font-medium" to="/blog">Novidades</Link>
         <Link className="text-xl text-white hover:text-black mx-3 font-medium" to={"/participantes"}> EQUIPE </Link>
         </div>
    )
}

export default NavBar