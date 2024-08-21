import { useEffect, useRef} from "react";
import FormAdicionarCarro from "../FormAdicionarCarro/FormAdicionarCarro";

type ModalAdicionarCarro = {
    isOpen : boolean;
    children : React.ReactNode;
    onAddCarro: (carro : string) => void;
}

const ModalAdicionarCarro = ({isOpen, children, onAddCarro} : ModalAdicionarCarro)=>{

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


    const handleCarroCadastrado = (carro : any) => {
    onAddCarro(carro);
    console.log(carro);
    };

    return(
        <dialog ref = {ref} className={`CarroAddModal ${isOpen ? "open":""}`}>
            <div className="children">{children}</div>
            <FormAdicionarCarro onCarroCadastrado={handleCarroCadastrado}/>
        </dialog>
    )
}

export default ModalAdicionarCarro