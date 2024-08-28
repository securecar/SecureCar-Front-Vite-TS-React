import Botao from "../../../../componentes/Botao/Botao"
import InputArea from "../../../../componentes/InputArea/InputArea"




const FormRegistro = ()=>{

    return(
        <>
        <fieldset>
            <form className="gap-0.5 flex flex-col">
                <InputArea placeHolder="Digite seu nome completo" label="Nome Completo" required={true}/>
                <InputArea placeHolder="Digite seu email" label="Email" required={true}/>
                <InputArea placeHolder="Digite sua senha" label="Senha" required={true}/>
                <InputArea placeHolder="Confirme sua senha" label="Confirmar Senha" required={true}/>
                <InputArea placeHolder="Digite seu CPF" label="Cpf" required={true}/>
                <InputArea placeHolder="Coloque sua data de Nascimento" label="Data de Nascimento" required={true}/>
                <InputArea placeHolder="Digite seu Cep" label="CEP" required={true}/>
                <InputArea placeHolder="Escolha seu Estado" label="Estado" required={true}/>
                <InputArea placeHolder="Escolha sua Cidade" label="Cidade" required={true}/>
                <div className="p-3 w-full flex items-center justify-center">
                    <Botao tipo="submit">Cadastre-se</Botao>
                </div>
            </form>
        </fieldset>
        </>
    )
}

export default FormRegistro