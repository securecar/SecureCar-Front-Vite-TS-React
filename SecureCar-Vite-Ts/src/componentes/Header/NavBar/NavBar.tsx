import {Link} from "react-router-dom"

const NavBar = ()=>{

    return (
        <>
         <Link to="../../pages/PaginaInicial/PaginaInicial">Pagina Inicial</Link>
         <Link to="../../pages/PaginaFAQ/PaginaFAQ">Pagina FAQ</Link>
         <Link to="../../pages/PaginaSuaConta/PaginaSuaConta">Pagina Sua Conta</Link>
         <Link to="../../pages/PaginaNovidades/PaginaNovidades">Pagina Novidades</Link>
         <Link to="../../pages/PaginaChatBot/PaginaChatBot">Pagina Chat-Bot</Link>
        </>
    )
}

export default NavBar