
import { useState } from "react";

import BtnAdicionarCarro from "./componentes/BtnAdicionarCarro/BtnAdicionarCarro";
import { Carro } from "../../../../../assets/TiposPadroes/Carro";
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
        <div className="rounded-xl w-full tablet:w-full p-3 border-2 border-gray-500 shadow-xl carros-container">
            <div className="flex justify-between border-b-4 mb-4 border-gray-500 p-4">
            <h1 className="text-3xl font-bold">Carros</h1>
            </div>
            <div className="h-80 w-full flex flex-col"> 
                <div className="w-full flex justify-end">
                <BtnAdicionarCarro onAddCarro={adicionarLista}/> 
                </div>
                <div className="flex flex-row gap-1	">
                    {listaCarros.map(carro =><CarroCard key={carro.modelo} carro = {carro} nome = {carro.modelo}/>)} 
                </div>
            </div>
        </div>:
        <div className="border-2 tablet:w-full rounded-xl shadow-xl p-4 w-full flex flex-col carros-container">
            <div className={`flex justify-between ${listaCarros.length >0?"border-b-4":""} border-gray-500 p-4`}>
                <h1 className="text-3xl font-bold">Carros</h1>
            </div>
                <div className="h-80 w-full flex justify-center items-center flex-col">
                    <h2 className="font-semibold text-2xl mb-10 text-gray-500">Você ainda não possui nenhum carro Cadastrado!</h2>
                    <BtnAdicionarCarro onAddCarro={adicionarLista}/>
                </div>
            </div>
    )

}

export default Carros