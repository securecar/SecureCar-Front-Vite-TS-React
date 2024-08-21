import { Carro } from "../../../../../../../componentes/TiposPadroes/Carro";

import { useRef , useEffect } from "react"


type CarroModalProps = {
    isOpen : boolean;
    carro: Carro;
    children: React.ReactNode
}

const CarroModal = ({isOpen, carro,children} : CarroModalProps)=>{

    const ref = useRef<HTMLDialogElement>(null)

    useEffect(() =>{
        if(!isOpen){
            return;
        }
    const dialog = ref.current
    if (isOpen && dialog) {
        dialog.showModal();
    }

    return () => {
        if (dialog) {
            dialog.close();
        }
    };
}, [isOpen]);


    const revisao = ()=>{
        if(parseFloat(carro.quilometragem) > 8000){
            return<span>Cuidado está próximo da revisão de 10000 Quilômetros. Faltam {10000 - parseFloat(carro.quilometragem)} Quilômetros.</span>
        }else{
            return<span>Faltam {10000 - (parseFloat(carro.quilometragem)/10000)} Quilômetros para a revisão</span>
        }
    }
    return(
        <dialog ref = {ref} className={`CarroModal ${isOpen ? "open":""}`}>
            <div className="children">{children}</div>
            <h1 className="carroNome">{carro.modelo}</h1>
            <p className="carroInfo">Marca <span>{carro.marca}</span></p>
            <p className="carroInfo">Placa <span>{carro.placa}</span></p>
            <p className="carroInfo">Ano <span>{carro.ano}</span></p>
            <p className="carroInfo">Quilometragem <span>{carro.quilometragem}</span></p>
            <p className="carroInfo">Chassi <span>{carro.chassi}</span></p>
            <p className="carroInfo">Revisão dos 10000 Quilômetros {revisao()}</p>
            <p className="carroInfo">Seguro {carro.seguro}</p>
        </dialog>
    )
}

export default CarroModal