import InputArea from "@/componentes/InputArea/InputArea"
import AreaPerfil from "../../AreaPerfil/AreaPerfil"
import { useState } from "react";
import Botao from "@/componentes/Botao/Botao";

type EnderecoProps = {
    nome : string;
    cep : string;
    numero : string;
    cidade : string;
    estado : string;
}

const Endereco = ({nome,cep,numero,cidade,estado} : EnderecoProps)=>{

    const [cepUser, setCepUser] = useState(cep);
    const [numeroUser, setNumeroUser] = useState(numero);
    const [cidadeUser, setCidadeUser] = useState(cidade);
    const [estadoUser, setEstadoUser] = useState(estado)


    const [disable,setDisable] = useState(true);

    function changeDisable(){
        if(disable == false){
            setDisable(true)
            return;
        }
        setDisable(false)
        return;
    }

    function aoSalvar(e : React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const InfosAtt={
            cep: cepUser,
            numero : numeroUser,
            cidade : cidadeUser,
            estado : estadoUser
        };
    }

    return(
        <div className="Endereco">
            <section className="top">
                <AreaPerfil nome={nome}/>
            </section>
            <section className="bottom">
                <h2>Informações</h2>
                <fieldset>
                <button type='button' onClick={changeDisable}>coisa</button>
                    <form action="./" onSubmit={aoSalvar}>
                        <InputArea onChange={valor=>setCepUser(valor)} label='Cep' required={true} placeHolder={cepUser} value={cepUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setEstadoUser(valor)} label='Estado' required={true} placeHolder={estadoUser} value={estadoUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setCidadeUser(valor)} label='Cidade' required={true} placeHolder={cidadeUser} value={cidadeUser} disable={disable}></InputArea>
                        <InputArea onChange={valor=>setNumeroUser(valor)} label='Número' required={true} placeHolder={numeroUser} value={numeroUser} disable={disable}></InputArea>
                        <Botao tipo='submit'>Salvar Informações</Botao>
                    </form>
                </fieldset>
            </section>
        </div>
    )

}
export default Endereco