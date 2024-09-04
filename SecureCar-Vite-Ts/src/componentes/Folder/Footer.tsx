import logo from "@/assets/imgs/logo_porto.svg";
import { Link } from "react-router-dom";
import githubLogo from "@/assets/icons/github.svg"
import linkedinLogo from "@/assets/icons/linkedin.svg"

const Footer = () => {
  return (
    <div className="w-full bg-primary bottom-0 p-20 flex flex-col mt-5">
      <p className="text-lg text-[#b7d3f3] tracking-widest text-center">UPGRADE PARA CONSERTOS VEICULARES</p>
      <p className="text-white font-semibold text-5xl text-center my-4">Quer Saber Mais?</p>
      <p className="text-[#dbe9f9] text-center font-semibold text-lg my-5">SecureCar promete lhe ajudar, para consertar seu carro, gerenciar suas tarefas e promover seus serviços.</p>
      <button className="bg-[#0081fe] py-5 px-11 rounded-custom-xl text-white text-[16px] w-max self-center my-5 hover:scale-110 transition-all duration-500 shadow-sm hover:bg-white hover:text-[#0081fe] ">Fale Conosco</button>
      <p className="text-white text-center text-sm font-bold my-4">&copy; 2024 SecureCar</p>
      <hr className="border-t-2 border-[#6ea6e8] py-4 w-full" ></hr>
      <div className="w-full flex gap-4 justify-between items-center">
      <img src={logo} className="h-[40px] hover:scale-110 transition brightness-0 saturate-100 invert" />
      <div className="flex gap-4 justify-between items-center">
        <Link className="text-white hover:scale-110 transition hover:text-black font-semibold text-sm" to="/blog">Novidades</Link>
        <Link className="text-white hover:scale-110 transition hover:text-black font-semibold text-sm" to="/help">Help</Link>
        <Link className="text-white hover:scale-110 transition hover:text-black font-semibold text-sm" to="/quem-somos">Quem Somos</Link>
      </div>
      <div className="flex items-center justify-end w-[172px] gap-4">
        <a href="https://github.com/gustavodscruz"><img src={githubLogo} alt="Github da nossa equipe" /></a>
        <a href="https://linkedin.com/in/gustavodiasdsc"><img src={linkedinLogo} alt="Linkedin da nossa equipe" /></a>
      </div>
      </div>
    </div>
  )
}

export default Footer