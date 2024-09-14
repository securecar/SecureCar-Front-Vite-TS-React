import NavBar from "./NavBar/NavBar";
import { Link } from "react-router-dom";
import logo from "@/assets/imgs/logo_porto.svg";
import profile from "@/assets/icons/profile-pic.svg";
import MenuHamburguer from "./MenuHamburguer/MenuHamburger";
import { useState } from "react";

const Header = () => {
  const [clicado,setClicado] = useState(false)
  const login = sessionStorage.getItem('Logado') 


  function clicadoVerifica(){
    if(clicado){
      setClicado(false)
      console.log("Fechado")
      return
    }
    setClicado(true)
    console.log("Aberto")
    return
  }


  return (
    <header className="z-20 sticky mg-[71px] top-0 flex justify-between bg-primary items-center px-4 py-4 celular:py-0">
      <Link to={"/"}>
        <img src={logo} className="celular:h-7 celular:-mt-3 h-[40px] hover:scale-110 transition brightness-0 saturate-100 invert" />
      </Link>
      <NavBar />
      <Link className="tablet:hidden static flex w-[129px] justify-end" to={login ? "/conta" : '/login'}>
        <img src={profile} className="h-[40px] hover:scale-110 transition"></img>
      </Link>
      <div className="tela:hidden">
        <MenuHamburguer setClicado = {setClicado} clicado={clicado} onClick={()=>clicadoVerifica()}></MenuHamburguer>
      </div>
    </header>
    
  );
};

export default Header;
