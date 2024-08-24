import FotoPerfil from '@/assets/icons/profile-pic.svg';

type AreaPerfilProps={
    nome : string;
}

const AreaPerfil = ({nome} : AreaPerfilProps)=>{

    return(
        <div>
            <img src={FotoPerfil} alt="Imagem de perfil" />
            <h2>{nome}</h2>
        </div>
    )
}

export default AreaPerfil