import Botao from "../../../../componentes/Botao/Botao"
import InputArea from "../../../../componentes/InputArea/InputArea"


const FormLogin = ()=>{

    return(
        <>
        <fieldset>
            <form>
                <InputArea placeHolder="Digite seu Cpf" label="Cpf" required={true}/>
                <InputArea placeHolder="Digite sua senha" label="Senha" required={true}/>
                <Botao tipo="submit">Acessar Conta</Botao>
            </form>
        </fieldset>
        </>
    )
}

export default FormLogin