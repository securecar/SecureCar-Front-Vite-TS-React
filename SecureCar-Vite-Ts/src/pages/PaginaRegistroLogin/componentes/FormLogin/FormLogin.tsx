import { useState } from "react";
import Botao from "../../../../componentes/Botao/Botao"
import InputArea from "../../../../componentes/InputArea/InputArea"
import { Usuario } from "../../PaginaRegistroLogin"


type FormLoginProps = {
    usuarios: Usuario[]; 
  };


const FormLogin = ({usuarios}: FormLoginProps)=>{
    const [inputCPF, setInputCPF] = useState("");
    const [inputSenha, setInputSenha] = useState("");



    const validar = (e: React.FormEvent<HTMLFormElement>) : void =>{
        e.preventDefault();
        console.log(inputCPF)
        console.log(inputSenha)
        let userFound = false;
        for(let x = 0; x < usuarios.length; x++){
            let user = usuarios[x];
            if(user.CPF === inputCPF && user.Senha === inputSenha){
                sessionStorage.setItem("Logado", JSON.stringify(user));
                setInputCPF("");
                setInputSenha("");
                console.log("Logado");
                userFound = true;
                break;
            }
        }
        if (!userFound) {
            console.log("Nenhum user encontrado");
        }
    }

    return(
        <fieldset>
            <form className="flex flex-col" onSubmit={validar}>
                <InputArea
                value={inputCPF}
                required={true}
                onChange={valor => setInputCPF(valor)}
                label="CPF"
                placeHolder="Digite seu CPF"
                />
                <InputArea
                value={inputSenha}
                required={true}
                onChange={valor => setInputSenha(valor)}
                label="Senha"
                placeHolder="Digite sua senha"
                />
                <div className="p-3 w-full flex items-center justify-center">
                <Botao tipo="submit">Acessar Conta</Botao>
                </div>
            </form>
        </fieldset>
    )
}

export default FormLogin