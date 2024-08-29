import NavBar from "./NavBar/NavBar";
import { Link } from "react-router-dom";
import logo from "@/assets/imgs/porto-seguro.svg";
import profile from "@/assets/icons/profile-pic.svg";

const Header = () => {
  return (
    <header className="flex justify-between bg-primary items-center px-4 py-2 ">
      <Link to={"../../pages/PaginaInicial/PaginaInicial"}>
        <img src={logo} className="h-[80px]" />
      </Link>
      <NavBar />
      <Link to="../../pages/PaginaSuaConta/PaginaSuaConta">
        <img src={profile} className="h-[50px]"></img>
      </Link>
    </header>
  );
};

export default Header;
