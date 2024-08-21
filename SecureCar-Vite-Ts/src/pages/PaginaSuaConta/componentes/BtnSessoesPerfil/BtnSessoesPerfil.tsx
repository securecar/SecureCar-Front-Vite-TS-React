
type SessoesPerfilProps = {
    onClick : ()=>void;
    name : string;
}

const BtnSessoesPerfil = ({onClick,name} : SessoesPerfilProps) =>{

    return(
        <div className="area">
            <button onClick={()=> onClick()} className="link">{name}</button>
        </div>
    )
}

export default BtnSessoesPerfil