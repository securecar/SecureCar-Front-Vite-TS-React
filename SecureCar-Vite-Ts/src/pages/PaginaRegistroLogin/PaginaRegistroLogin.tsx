import { useState } from "react"
import FormLogin from "./componentes/FormLogin/FormLogin"
import FormRegistro from "./componentes/FormRegistro/FormRegisto"


const PaginaRegistroLogin = ()=>{

    const[conteudo,setConteudo] = useState('Cadastro')

    let conteudoChanger = ()=>{
        switch(conteudo){
            case 'Cadastro':
                return <FormRegistro/>
            case 'Login':
                return <FormLogin/>
        }
    }
    

    return(
        <>
        <h1>Pagina de Registro e Login</h1>
        <div>
            <div>
            <button onClick={()=>setConteudo('Cadastro')}>Cadastrar-se</button>
            <button onClick={()=>setConteudo('Login')}>Acessar Conta</button>
            </div>
            {conteudoChanger()}
        </div>
        </>
    )
}

export default PaginaRegistroLogin