import {Link} from "react-router-dom"
type NavBarProps = {
    isMenuHamburguer? : boolean
}

const NavBar = ({isMenuHamburguer} : NavBarProps)=>{

    return (
        <div className={`${isMenuHamburguer ? ' flex flex-col gap-2 w-full gap-y-5' : 'tablet:hidden'}`}>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium" to="/chatbot">ChatBot</Link>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium " to="/faq">Perguntas Frequentes</Link>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium" to="/blog">Novidades</Link>
            <Link className="text-xl text-white hover:text-black mx-3 font-medium" to={"/participantes"}> Equipe </Link>
         </div>
    )
}

export default NavBar