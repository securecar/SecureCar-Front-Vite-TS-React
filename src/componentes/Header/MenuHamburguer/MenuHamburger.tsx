import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../NavBar/NavBar";
import { Link, useLocation } from "react-router-dom";
import profile from "@/assets/icons/profile-pic.svg";
import { useEffect } from "react";



type MenuProps = {
    onClick:()=>void;
    clicado : boolean;
    setClicado: (value:boolean)=>void
}


const MenuHamburguer = ({onClick,clicado,setClicado} : MenuProps) =>{
    const login = sessionStorage.getItem('Logado') 
    const location = useLocation(); 

    useEffect(() => {
        setClicado(false);
    }, [location.pathname, setClicado]);

    return(
        <div className={clicado?`flex w-screen h-screen flex-col items-end px-8`:""}>
            <FontAwesomeIcon onClick={onClick} className="cursor-pointer hover:scale-105 transition-all duration-300 mb-4 p-4" color="#fff" size="2xl" icon={faBars} />
            <div className="flex w-full flex-col justify-center items-end">
                <Link className={clicado?`static flex text-xl text-white hover:text-black mx-3 font-medium w-max gap-4 items-center py-4`:"hidden"} to={login ? "/conta" : '/login'}>Seu perfil<img src={profile} className="h-[30px] hover:scale-110 transition"></img></Link>
                <NavBar isMenuHamburguer={clicado}></NavBar>
            </div>
        </div>
    )
}

export default MenuHamburguer