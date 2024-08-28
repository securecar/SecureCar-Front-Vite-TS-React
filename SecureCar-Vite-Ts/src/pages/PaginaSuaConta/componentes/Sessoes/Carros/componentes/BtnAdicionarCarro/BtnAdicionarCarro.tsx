
import { Carro } from "@/assets/TiposPadroes/Carro"
import ModalAdicionarCarro from "../ModalAdicionarCarro/ModalAdicionarCarro"
import imgAdd from "@/assets/icons/add-circle-svgrepo-com.svg"
import { useState } from "react"
import Botao from "@/componentes/Botao/Botao"

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
            <Botao tipo="button" onClick={()=>setShow(true)}><img className="w-10" src={imgAdd} alt="Imagem de adicionar"/> Adicionar Carro</Botao>
            <ModalAdicionarCarro onAddCarro={handleAddCarro}  isOpen = {show}><button className="btnClose" onClick={()=>setShow(false)}>X</button></ModalAdicionarCarro>
        </div>
    )
}

export default BtnAdicionarCarro