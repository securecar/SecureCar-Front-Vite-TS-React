import sendBtnIcon from "@/assets/icons/send.svg"
import Historico from "./Historico/Historico"
import { useEffect, useRef, useState } from "react";
import Mensagens from "./componentes/Mensagens/Mensagens";
import AvaliacaoPopup from "./componentes/Avaliacao/avaliacaoPopup";


const PaginaChatBot = ()=>{
    const listaMensagens : string[]=[];

    const [mensagem,setMensagem] = useState("");
    const [mensagens,setMensagens] = useState<string[]>(listaMensagens);
    const mensagensEndRef = useRef<HTMLDivElement>(null);

    function enviarMsg(e :React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if (mensagem !== "") {
            setMensagens([...mensagens, mensagem]);
            setMensagem("");
        }
    }
    function enviarMsgClick(){

        if (mensagem !== "") {
            setMensagens([...mensagens, mensagem]);
            setMensagem("");
        }
    }

    const scrollToBottom = () => {
        if (mensagensEndRef.current) {
            mensagensEndRef.current.scrollTop = mensagensEndRef.current.scrollHeight;
        }
    };

    const [isOpen, setOpen] = useState(false);
    const fecharAvaliacao = () =>{
        setOpen(!isOpen)
    }
    const [count, setCount] = useState(0);

    useEffect(() => {
        const mostrarAvaliacao = () => {
            if (mensagens.length >= 5 && count == 0) {
                const texto = document.createElement('p')
                texto.textContent = "Obrigado por acessar nosso conteúdo!"
                texto.classList.add('text-gray-500')
                texto.classList.add('text-white')
                texto.classList.add('text-lg')
                const popup = document.querySelector('.popup-conteudo') 
                popup?.appendChild(texto)
                setOpen(!isOpen);
                popup?.removeChild(texto)
                texto.remove()
                setCount(count + 1)
            }
        };
        scrollToBottom();
        mostrarAvaliacao();
    }, [count, isOpen, mensagens]);
    
    


    return(
        <>
            <div className="min-h-full flex justify-between w-full  items-end">
                <Historico />
                <div className="flex h-full w-full flex-col items-end pb-2 bottom-0 relative px-5">
                    <div ref={mensagensEndRef} className="w-[50%] h-full  mb-5 overflow-x-hidden overflow-y-scroll">
                        <div className="flex justify-end min-h-full items-end flex-col gap-y-4">
                        {mensagens.length > 0? mensagens.map((mensagem,index) => <Mensagens key={index} mensagem={mensagem}/>) : ""} 
                        </div>            
                    </div>
                    
                    <div className="w-full flex py-2 px-4  justify-between justify-self-end self-end rounded-custom-xlg border-primary shadow-md border-4 h-max  bottom-0 ">
                        <form className="w-full" action="./chatbot" onSubmit={enviarMsg}>
                            <input className="w-11/12 p-3 outline-none placeholder:text-2xl placeholder:font-medium placeholder:text-black mr-2 just" value={mensagem} onChange={valor =>setMensagem(valor.target.value)} type="text" placeholder="Digite aqui" />
                        </form>
                        <div className=" flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300 w-1/12 p-1">
                            <img className="w-full h-10" onClick={enviarMsgClick} src={sendBtnIcon} alt="Imagem de enviar mensagem" />
                        </div>
                    </div>
                </div>
            </div>
            <AvaliacaoPopup isOpen={isOpen} onClose={fecharAvaliacao} />
        </>
    )
}

export default PaginaChatBot