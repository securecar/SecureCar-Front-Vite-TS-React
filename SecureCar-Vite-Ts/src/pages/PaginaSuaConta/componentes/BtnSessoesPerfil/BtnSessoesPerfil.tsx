import imgVolta from "@/assets/icons/navigation-back-arrow-svgrepo-com.svg"

type SessoesPerfilProps = {
    onClick : ()=>void;
    name : string;
    clicado : boolean | undefined
    clicaImagem: ()=>void;
}

const BtnSessoesPerfil = ({clicado, onClick, name,clicaImagem} : SessoesPerfilProps) =>{

    return(
        <div className={`area tablet:w-full border-b-4 items-center  border-primary-dark tablet:flex ${clicado ? '':'tablet:hidden'}`}>
            <img className={`h-16 tela:hidden `} onClick={()=>clicaImagem()} src={imgVolta} alt="Imagem de voltar" />
            <button onClick={()=> onClick()} className={`${clicado == true ? "tela:bg-primary-dark" : "bg-primary tablet:hidden"} text-2xl w-full h-40 link`}>{name}</button>
        </div>
    )
}

export default BtnSessoesPerfil