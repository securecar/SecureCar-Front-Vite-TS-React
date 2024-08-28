import Botao from "../../../../componentes/Botao/Botao"
import InputArea from "../../../../componentes/InputArea/InputArea"


const FormLogin = ()=>{

    return(
        <>
        <fieldset>
            <form className="flex flex-col">
                <InputArea placeHolder="Digite seu Cpf" label="Cpf" required={true}/>
                <InputArea placeHolder="Digite sua senha" label="Senha" required={true}/>
                <div className="p-3 w-full flex items-center justify-center">
                <Botao tipo="submit">Acessar Conta</Botao>
                </div>
            </form>
        </fieldset>
        </>
    )
}

export default FormLogin