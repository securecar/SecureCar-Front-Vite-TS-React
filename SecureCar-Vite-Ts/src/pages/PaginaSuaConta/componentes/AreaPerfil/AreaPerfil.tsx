import FotoPerfil from '@/assets/icons/profile-pic.svg';

type AreaPerfilProps={
    nome : string;
}

const AreaPerfil = ({nome} : AreaPerfilProps)=>{

    return(
        <div className='flex justify-between border-b-4 border-gray-500 p-4'>
            <img className='' src={FotoPerfil} alt="Imagem de perfil" />
            <h2 className='text-3xl font-bold'>{nome}</h2>
        </div>
    )
}

export default AreaPerfil