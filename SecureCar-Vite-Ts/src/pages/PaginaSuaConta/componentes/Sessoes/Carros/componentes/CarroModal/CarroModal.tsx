import { Carro } from "../../../../../../../assets/TiposPadroes/Carro";

import { useRef , useEffect } from "react"
import InfoCarro from "./InfoCarro/InfoCarro";


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
            return`Cuidado está próximo da revisão de 10000 Quilômetros. Faltam ${10000 - parseFloat(carro.quilometragem)} Quilômetros.`
        }else{
            return`Faltam ${10000 - (parseFloat(carro.quilometragem)/10000)} Quilômetros para a revisão`
        }
    }
    return(
        <dialog ref = {ref} className={`w-[26rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pr-2 p-5 ${isOpen ? "open":""}`}>
            <div className="flex items-center justify-center float-right w-7 h-7 rounded-2xl border-2 border-primary shadow-xl">{children}</div>

            <h1 className="text-3xl font-bold">{carro.modelo}</h1>
            <InfoCarro title="Marca" span={carro.marca}/>
            <InfoCarro title="Placa" span={carro.placa}/>
            <InfoCarro title="Ano" span={carro.ano} />
            <InfoCarro title="Quilometragem" span={carro.quilometragem} />
            <InfoCarro title="Chassi" span={carro.chassi} />
            <InfoCarro title="Revisão dos 10000 Quilômetros" span={revisao()} />
            <InfoCarro title="Seguro" span={carro.seguro} />
        </dialog>
    )
}

export default CarroModal