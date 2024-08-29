import NavBar from "./NavBar/NavBar";
import { Link } from "react-router-dom";
import logo from "@/assets/imgs/logo_porto.svg";
import profile from "@/assets/icons/profile-pic.svg";

const Header = () => {
  return (
    <header className="sticky top-0 flex justify-between bg-primary items-center px-4 py-4 ">
      <Link to={"../../pages/PaginaInicial/PaginaInicial"}>
        <img src={logo} className="h-[40px] hover:scale-110 transition brightness-0 saturate-100 invert" />
      </Link>
      <NavBar />
      <Link className="static flex w-[129px] justify-end" to="../../pages/PaginaSuaConta/PaginaSuaConta">
        <img src={profile} className="h-[40px] hover:scale-110 transition"></img>
      </Link>
    </header>
  );
};

export default Header;
