
import { Carro } from "@/componentes/TiposPadroes/Carro"
import ModalAdicionarCarro from "../ModalAdicionarCarro/ModalAdicionarCarro"

import { useState } from "react"

type btnAdicionarCarroProps ={
    onAddCarro : (carro : Carro) => void
}

const BtnAdicionarCarro = ({onAddCarro} : btnAdicionarCarroProps) =>{

    const[show,setShow] = useState(false)

    
    const handleAddCarro = (carro :Carro) => {
        onAddCarro(carro);
        setShow(false);
    

    };

    return(
        <div className="addCarro">
            <button className="btnAddCarro" onClick={()=>setShow(true)}>Adicionar Carro</button>
            <ModalAdicionarCarro onAddCarro={handleAddCarro}  isOpen = {show}><button className="btnClose" onClick={()=>setShow(false)}>X</button></ModalAdicionarCarro>
        </div>
    )
}

export default BtnAdicionarCarro