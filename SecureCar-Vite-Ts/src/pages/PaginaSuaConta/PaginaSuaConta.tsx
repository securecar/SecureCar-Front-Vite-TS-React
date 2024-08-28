import { useState } from "react";
import BtnSessoesPerfil from "./componentes/BtnSessoesPerfil/BtnSessoesPerfil";
import Carros from "./componentes/Sessoes/Carros/Carros";
import Acessibilidade from "./componentes/Sessoes/Acessibilidade/Acessibilidade";
import SuasConfiguracoes from "./componentes/Sessoes/SuasConfiguracoes/SuasConfiguracoes";
import Endereco from "./componentes/Sessoes/Endereço/Endereco";

const PaginaSuaConta = ()=>{
    
    const [conteudo,setConteudo] = useState('Suas Configuracoes')
    const [fontSize, setFontSize] = useState("")
    const [suasConfiguracoes, setSuasConfiguracoes] = useState<boolean>()
    const [acessibilidade, setAcessibilidade] = useState<boolean>()
    const [carros, setCarros] = useState<boolean>()
    const [endereco, setEndereco] = useState<boolean>()
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

    function setBotoes(config : boolean, acessibilidade : boolean, endereco : boolean, carros : boolean){
        if(config != undefined){

            return;
        } 
        return;
    }


    let listaCarro : [] = []


    function mudaBotao(nome : string){
        setConteudo(nome)
        setSuasConfiguracoes(nome== "Suas Configuracoes")
        setCarros(nome== "Carros")
        setEndereco(nome== "Endereco")
        setAcessibilidade(nome== "Acessibilidade")
    }


    let conteudoChanger = () => {
        switch(conteudo){
            case('Suas Configuracoes'):
                return <SuasConfiguracoes nome="gerson bragantino" cpf="123.123.123-12" senha="********" email="gersonbragantino@email.com"/>
            case('Acessibilidade'):
                return  <Acessibilidade onChangeFonte={changeFonte} onChangeModo={changeModo}/>
            case('Endereco'):
                return <Endereco nome="gerson bragantino" cep="12312-123" numero="10" cidade="Sao pulo" estado="SP"/>
            case('Carros'):
                return <Carros listaCarro={listaCarro}/>
        }
            
    }

    return(
        <div className={`container flex w-full  ${modo ? "escuro":""}`}>
            <div className='w-1/3 left'>
                <nav>
                    <BtnSessoesPerfil clicado = {suasConfiguracoes} onClick ={ () => mudaBotao("Suas Configuracoes")} name ="Suas Configurações" />
                    <BtnSessoesPerfil clicado = {acessibilidade} name="Acessibilidade" onClick={() => mudaBotao("Acessibilidade")} />
                    <BtnSessoesPerfil clicado = {endereco} name="Endereço" onClick={() => mudaBotao("Endereco")} />
                    <BtnSessoesPerfil clicado = {carros} name="Carros" onClick={() => mudaBotao("Carros")} />
                </nav>
            </div>
            <div className='w-2/3 mt-20 right'>
                {conteudoChanger()}
            </div>

        </div>
    )
}

export default PaginaSuaConta