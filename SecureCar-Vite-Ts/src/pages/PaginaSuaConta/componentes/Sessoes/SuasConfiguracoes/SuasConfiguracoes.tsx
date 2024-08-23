import FotoPerfil from '@/assets/icons/profile-pic.svg';
import Botao from '@/componentes/Botao/Botao';
import InputArea from '@/componentes/InputArea/InputArea';
import { useState } from 'react';

type SuasConfiguracoesProps ={
    nome:string;
    cpf:string;
    senha:string;
    email:string;
}

const SuasConfiguracoes = ({nome,cpf,senha,email} : SuasConfiguracoesProps)=>{

    const [nomeUser, setNomeUser] = useState(nome);
    const [cpfUser, setCpfUser] = useState(cpf);
    const [senhaUser, setSenhaUser] = useState(senha);
    const [emailUser, setEmailUser] = useState(email);
    const [disable,setDisable] = useState(true);

    function aoSalvar(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault
    }

    return(
        <div className="perfil">
            <section className="top">
                <img src={FotoPerfil} alt="Imagem de perfil" />
                <h2>{nome}</h2>
            </section>
            <section className="bottom">
                <h2>Informações</h2>
                <form action="./" onSubmit={aoSalvar}>
                    <InputArea label='Nome' required={true} placeHolder={nome} value={nome} disable={disable}></InputArea>
                    <InputArea label='Email' required={true} placeHolder={email} value={email} disable={disable}></InputArea>
                    <InputArea label='Senha' required={true} placeHolder={senha} value={senha} disable={disable}></InputArea>
                    <InputArea label='Cpf' required={true} placeHolder={cpf} value={cpf} disable={disable}></InputArea>
                    <Botao tipo='submit'>Salvar Informações</Botao>
                </form>
            </section>
        </div>
    )
}

export default SuasConfiguracoes