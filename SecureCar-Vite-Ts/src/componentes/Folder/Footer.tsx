import logo from "@/assets/imgs/logo_porto.svg";
import { Link } from "react-router-dom";
import githubLogo from "@/assets/icons/github.svg"
import linkedinLogo from "@/assets/icons/github.svg"

const Footer = () => {
  return (
    <div className="w-full bg-primary bottom-0 p-20 flex flex-col">
      <p className="text-lg text-[#b7d3f3] tracking-widest text-center">UPGRADE PARA CONSERTOS VEICULARES</p>
      <p className="text-white font-semibold text-5xl text-center">Quer Saber Mais?</p>
      <p className="text-[#dbe9f9] text-center font-semibold text-lg">SecureCar promete lhe ajudar, para consertar seu carro, gerenciar suas tarefas e promover seus serviços.</p>
      <button className="bg-[#0081fe] py-5 px-11 rounded-xl text-white text-[16px]">Fale Conosco</button>
      <p className="text-white text-center text-sm font-bold">&copyright; 2024 SecureCar</p>
      <hr className="border-t-2 border-[#6ea6e8] py-4 w-full" />
      <div className="w-full flex gap-4 justify-between items-center">
      <img src={logo} className="h-[40px] hover:scale-110 transition brightness-0 saturate-100 invert" />
      <div className="flex gap-4 justify-between items-center">
        <Link className="text-white hover:scale-110 transition hover:text-black font-semibold text-sm" to="/blog">Novidades</Link>
        <Link className="text-white hover:scale-110 transition hover:text-black font-semibold text-sm" to="/help">Help</Link>
        <Link className="text-white hover:scale-110 transition hover:text-black font-semibold text-sm" to="/quem-somos">Quem Somos</Link>
      </div>
      <div className="flex items-center-justify-end w-32 gap-4">
        <img src={githubLogo} alt="Github da nossa equipe" />
        <img src={linkedinLogo} alt="Linkedin da nossa equipe" />
      </div>
      </div>
    </div>
  )
}

export default Footer