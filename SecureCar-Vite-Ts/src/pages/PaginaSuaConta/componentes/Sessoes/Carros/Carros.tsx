
import { useState } from "react";

import BtnAdicionarCarro from "./componentes/BtnAdicionarCarro/BtnAdicionarCarro";
import { Carro } from "../../../../../componentes/TiposPadroes/Carro";
import CarroCard from "./componentes/CarroCard/CarroCard";

let listaCarros : Carro[] = []


type CarroListProps = {
    listaCarro: Carro[];
};


const Carros = ({listaCarro} : CarroListProps)=>{
    //Preciso fazer o modal disso aqui nn esquecer <CarrosModal/>
    const [carros, setCarros] = useState<Carro[]>(listaCarro);

    const adicionarLista = (carro : Carro) => {
        setCarros([...carros, carro]);
        listaCarros.push(carro)
        console.log(listaCarros)
    };


    return(
        listaCarros.length > 0?
        <div className="carros-container">
            <div className="header">
            <h1 className="carros-h1">Carros</h1>
            <BtnAdicionarCarro onAddCarro={adicionarLista}/>
            </div>
            <div className="carros-area">  
                {listaCarros.map(carro =><CarroCard key={carro.modelo} carro = {carro} nome = {carro.modelo}/>)} 
            </div>
        </div>:
        <div className="carros-container">
            <h1 className="carros-h1">Carros</h1>
            <div className="carros-nocars">
                <h1>Você ainda não possui nenhum carro Cadastrado</h1>
                <BtnAdicionarCarro onAddCarro={adicionarLista}/>
            </div>
        </div>
    )

}

export default Carros