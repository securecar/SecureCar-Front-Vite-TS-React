import DropDown from "./componentes/DropDown/DropDown"

type AcessibilidadeProps ={
    onChangeModo : (valor : string)=>void;
    onChangeFonte : (valor : string)=>void
}

const Acessibilidade = ({onChangeModo, onChangeFonte} : AcessibilidadeProps)=>{



    return(
        <div className="acessibilidade">
            <h1>Acessibilidade</h1>
            <div className="configs">
                <DropDown label="Tema do Site" opcoes={["Modo Escuro","Modo Claro"]} onChange={onChangeModo}></DropDown>
                <DropDown label="Tamanho da fonte" opcoes={["16px" , "20px", "24px"]} onChange={onChangeFonte}></DropDown>
            </div>
        </div>
    )
}

export default Acessibilidade