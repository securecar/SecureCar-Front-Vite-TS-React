import NavBar from "./NavBar/NavBar"
import {Link} from "react-router-dom"
import portoSeguroLogo from "../../assets/imgs/porto-seguro.svg";
import imagemPerfilLogo from "../../assets/icons/profile-pic.svg";
import './header.css'

const Header = ()=>{

    return(
        <header className="header">
            <Link to={"../../pages/PaginaInicial/PaginaInicial"}><img className="logo" src={portoSeguroLogo}></img></Link>
            <NavBar/>
            <Link to="../../pages/PaginaSuaConta/PaginaSuaConta"><img className="" src={imagemPerfilLogo}></img></Link>
        </header>
    )
}

export default Header