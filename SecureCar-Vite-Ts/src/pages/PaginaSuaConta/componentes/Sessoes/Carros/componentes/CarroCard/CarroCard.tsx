import { useState } from "react"

import CarroModal from "../CarroModal/CarroModal"
import { Carro } from "../../../../../../../componentes/TiposPadroes/Carro";

type CarroCardProps = {
    nome : string;
    carro : Carro;
}


const CarroCard = ({nome, carro} : CarroCardProps) =>{
    const[show,setShow] = useState(false)


    return(
        <div className="carroCard">
            <button className="carroCard-h1" onClick={()=>setShow(true)}>{nome}</button>
            <CarroModal carro ={carro} isOpen= {show}><button className="btnClose" onClick={()=>setShow(false)}>X</button></CarroModal>
        </div>
    )
}

export default CarroCard