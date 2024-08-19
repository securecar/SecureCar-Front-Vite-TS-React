import NavBar from "./NavBar/NavBar"
import {Link} from "react-router-dom"
import portoSeguroLogo from "../../assets/imgs/porto-seguro.svg";
import './header.css'

const Header = ()=>{

    return(
        <header className="header">
            <Link to={"../../pages/PaginaInicial/PaginaInicial"}><img className="img" src={portoSeguroLogo}></img></Link>
            <NavBar/>
            <Link to="../../pages/PaginaSuaConta/PaginaSuaConta">Pagina Sua Conta</Link>
        </header>
    )
}

export default Header