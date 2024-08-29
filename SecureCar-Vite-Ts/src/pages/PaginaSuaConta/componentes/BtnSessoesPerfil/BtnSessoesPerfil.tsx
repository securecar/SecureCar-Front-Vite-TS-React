
type SessoesPerfilProps = {
    onClick : ()=>void;
    name : string;
    clicado : boolean | undefined
}

const BtnSessoesPerfil = ({clicado, onClick,name} : SessoesPerfilProps) =>{

    return(
        <div className="area">
            <button onClick={()=> onClick()} className={`${clicado == true ? "bg-primary-light" : "bg-primary"} w-2/3 h-40 border-b-4 border-primary-dark link`}>{name}</button>
        </div>
    )
}

export default BtnSessoesPerfil