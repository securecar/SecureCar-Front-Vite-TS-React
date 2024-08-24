
import Botao from '@/componentes/Botao/Botao';
import InputArea from '@/componentes/InputArea/InputArea';
import { useState } from 'react';
import AreaPerfil from "@/pages/PaginaSuaConta/componentes/AreaPerfil/AreaPerfil";

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
        e.preventDefault()
        const InfosAtt={
            nome: nomeUser,
            cpf : cpfUser,
            senha : senhaUser,
            email : emailUser
        };
    }

    function changeDisable(){
        if(disable == false){
            setDisable(true)
            return;
        }
        setDisable(false)
        return;
    }

    return(
        <div className="perfil">
            <section className="top">
                <AreaPerfil nome={nome}/>
            </section>
            <section className="bottom">
                <h2>Informações</h2>
                <fieldset>
                <button type='button' onClick={changeDisable}>coisa</button>
                    <form action="./" onSubmit={aoSalvar}>
                        <InputArea onChange={valor=>setNomeUser(valor)} label='Nome' required={true} placeHolder={nome} value={nomeUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setEmailUser(valor)} label='Email' required={true} placeHolder={email} value={emailUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setSenhaUser(valor)} label='Senha' required={true} placeHolder={senha} value={senhaUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setCpfUser(valor)} label='Cpf' required={true} placeHolder={cpf} value={cpfUser} disable={disable}></InputArea>
                        <Botao tipo='submit'>Salvar Informações</Botao>
                    </form>
                </fieldset>
            </section>
        </div>
    )
}

export default SuasConfiguracoes