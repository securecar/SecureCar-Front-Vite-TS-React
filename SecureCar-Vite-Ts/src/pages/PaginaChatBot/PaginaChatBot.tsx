import sendBtnIcon from "@/assets/icons/send.svg"
import Historico from "./Historico/Historico"
const PaginaChatBot = ()=>{

    return(
        <>
            <div className="min-h-screen flex flex-col p-0 items-center">
                <Historico />
                <div className="w-[90rem] flex py-2 px-4 justify-between rounded-custom-xlg border-primary shadow-md border-4 h-max absolute bottom-0 ">
                    <input className="w-[97.5%] p-3 outline-none placeholder:text-2xl placeholder:font-medium placeholder:text-black mr-2 just" type="text" placeholder="Digite aqui" />
                    <div className=" flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300 w-[2.5%] p-1">
                        <img className="w-full" src={sendBtnIcon} alt="Imagem de enviar mensagem" />
                    </div>
                </div>  
            </div>
        </>
    )
}

export default PaginaChatBot