import sendBtnIcon from "@/assets/icons/send.svg"
import Historico from "./Historico/Historico"
import { useEffect, useRef, useState } from "react";
import Mensagens from "./componentes/Mensagens/Mensagens";


const PaginaChatBot = ()=>{
    let listaMensagens : string[]=[];

    const [mensagem,setMensagem] = useState("");
    const [mensagens,setMensagens] = useState<string[]>(listaMensagens);
    const mensagensEndRef = useRef<HTMLDivElement>(null);

    function enviarMsg(e :React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        mensagem == "" ?"":(setMensagens([...mensagens, mensagem]), setMensagem(""))
    }
    function enviarMsgClick(){

        mensagem == "" ?"":(setMensagens([...mensagens, mensagem]), setMensagem(""))
    }

    const scrollToBottom = () => {
        if (mensagensEndRef.current) {
            mensagensEndRef.current.scrollIntoView();
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [mensagens]);
        

    return(
        <>
            <div className="min-h-auto flex justify-between w-full ">
                <Historico />
                <div className="flex h-[80vh] w-full flex-col items-end pb-2 justify-center bottom-0 relative px-5">
                    <div className="w-[50%] float-right h-full flex  flex-col gap-y-4 mb-5 overflow-x-hidden overflow-y-auto">

                        {mensagens.length > 0? mensagens.map(mensagem => <Mensagens mensagem={mensagem}/>) : ""}
                        <div className="h-auto" ref={mensagensEndRef}></div>
                    </div>
                    <div className="w-full flex py-2 px-4  justify-between rounded-custom-xlg border-primary shadow-md border-4 h-max  bottom-0 ">
                        <form className="w-full" action="./chatbot" onSubmit={enviarMsg}>
                            <input className="w-11/12 p-3 outline-none placeholder:text-2xl placeholder:font-medium placeholder:text-black mr-2 just" value={mensagem} onChange={valor =>setMensagem(valor.target.value)} type="text" placeholder="Digite aqui" />
                        </form>
                        <div className=" flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300 w-1/12 p-1">
                            <img className="w-full h-10" onClick={enviarMsgClick} src={sendBtnIcon} alt="Imagem de enviar mensagem" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaginaChatBot