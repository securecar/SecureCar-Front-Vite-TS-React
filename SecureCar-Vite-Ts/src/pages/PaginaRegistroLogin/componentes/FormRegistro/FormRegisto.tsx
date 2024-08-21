import Botao from "../../../../componentes/Botao/Botao"
import InputArea from "../../../../componentes/InputArea/InputArea"




const FormRegistro = ()=>{

    return(
        <>
        <fieldset>
            <form>
                <InputArea placeHolder="Digite seu nome completo" label="Nome Completo" required={true}/>
                <InputArea placeHolder="Digite seu email" label="Email" required={true}/>
                <InputArea placeHolder="Digite sua senha" label="Senha" required={true}/>
                <InputArea placeHolder="Confirme sua senha" label="Confirmar Senha" required={true}/>
                <InputArea placeHolder="Digite seu CPF" label="Cpf" required={true}/>
                <InputArea placeHolder="Coloque sua data de Nascimento" label="Data de Nascimento" required={true}/>
                <InputArea placeHolder="Escolha seu stado" label="Estado" required={true}/>
                <InputArea placeHolder="Escolha sua Cidade" label="Cidade" required={true}/>
                <Botao tipo="submit">Cadastre-se</Botao>
            </form>
        </fieldset>
        </>
    )
}

export default FormRegistro