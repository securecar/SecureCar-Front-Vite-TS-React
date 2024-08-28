import { useState } from "react";
import BtnSessoesPerfil from "./componentes/BtnSessoesPerfil/BtnSessoesPerfil";
import Carros from "./componentes/Sessoes/Carros/Carros";
import Acessibilidade from "./componentes/Sessoes/Acessibilidade/Acessibilidade";
import SuasConfiguracoes from "./componentes/Sessoes/SuasConfiguracoes/SuasConfiguracoes";
import Endereco from "./componentes/Sessoes/Endereço/Endereco";

const PaginaSuaConta = ()=>{
    
    const [conteudo,setConteudo] = useState('Suas Configuracoes')
    const [fontSize, setFontSize] = useState("")
    const [modo , setModo] = useState(() :boolean =>{
        const saved = localStorage.getItem("check");
        return saved !== null ? JSON.parse(saved) : true;
    })

    let changeFonte = (fontSize : string) =>{
        if(fontSize === "16px"){
            setFontSize("")
        }else if(fontSize === "20px"){
            setFontSize("")
        }else if(fontSize === "24px"){
            setFontSize("")
        }
    }

    let changeModo = (modo :string)=>{
        if( modo === "Modo Escuro"){
            setModo(true)
            return;
        }
        setModo(false)
        return; 
    }


    let listaCarro : [] = []




    let conteudoChanger = () => {
        switch(conteudo){
            case('Suas Configuracoes'):
                return <SuasConfiguracoes nome="gerson bragantino" cpf="123.123.123-12" senha="********" email="gersonbragantino@email.com"/>
            case('Acessibilidade'):
                return  <Acessibilidade onChangeFonte={changeFonte} onChangeModo={changeModo}/>
            case('Endereço'):
                return <Endereco nome="gerson bragantino" cep="12312-123" numero="10" cidade="Sao pulo" estado="SP"/>
            case('Carros'):
                return <Carros listaCarro={listaCarro}/>
        }
            
    }

    return(
        <div className={`container ${modo ? "escuro":""}`}>
            <div className='left'>
                <nav>
                    <BtnSessoesPerfil onClick ={ () => setConteudo('Suas Configuracoes')} name ="Suas Configurações" />
                    <BtnSessoesPerfil name="Acessibilidade" onClick={() => setConteudo('Acessibilidade')} />
                    <BtnSessoesPerfil name="Endereço" onClick={() => setConteudo('Endereço')} />
                    <BtnSessoesPerfil name="Carros" onClick={() => setConteudo('Carros')} />
                </nav>
            </div>
            <div className='right'>
                {conteudoChanger()}
            </div>

        </div>
    )
}

export default PaginaSuaConta