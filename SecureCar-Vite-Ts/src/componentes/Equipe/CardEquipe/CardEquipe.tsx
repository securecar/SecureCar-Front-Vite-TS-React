import linkedinLogo from "@/assets/icons/linkedin.svg"
import githubLogo from "@/assets/icons/github.svg"

export type CardEquipeProps = {
    foto : string,
    nome : string, 
    linkLinkedin : string,
    linkGitHub : string,
}
const CardEquipe = ({foto, nome, linkLinkedin, linkGitHub} : CardEquipeProps) => {
  return (
    <div className="px-10 py-5 flex flex-col gap-5">
        <img className="h-40 w-40 rounded-full object-cover my-4" src={foto} alt={"Foto do " + nome} />
        <p className="text-2xl font-medium text-center">{nome}</p>
        <div className="flex justify-evenly">
            <a href={linkLinkedin} target="_blank" rel="noreferrer">
                <img className="h-10" src={linkedinLogo} alt="Logo do LinkedIn" />
            </a>
            <a href={linkGitHub} target="_blank" rel="noreferrer">
                <img className="h-10" src={githubLogo} alt="Logo do GitHub" />
            </a>
        </div>


    </div>
  )
}

export default CardEquipe