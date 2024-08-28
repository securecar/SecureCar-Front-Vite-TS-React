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
        <div className="h-screen flex flex-col items-center mt-6 w-full">
        <div className="border-2 rounded-xl shadow-xl p-4 w-1/3">
            <div className="flex justify-around">
            <button className={`text-lg font-semibold w-2/5 rounded-xl p-3 border-2 border-primary shadow-xl hover:bg-primary hover:text-white ${conteudo == "Cadastro" ? "bg-primary text-white":""}`} onClick={()=>setConteudo('Cadastro')}>Cadastrar-se</button>
            <button className={`text-lg font-semibold w-2/5 rounded-xl p-3 border-2 border-primary shadow-xl hover:bg-primary hover:text-white ${conteudo == "Login" ? "bg-primary text-white":""}`} onClick={()=>setConteudo('Login')}>Acessar Conta</button>
            </div>
            {conteudoChanger()}
        </div>
        </div>
    )
}

export default PaginaRegistroLogin