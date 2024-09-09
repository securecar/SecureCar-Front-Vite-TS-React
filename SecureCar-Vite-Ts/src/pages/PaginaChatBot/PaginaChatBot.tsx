import sendBtnIcon from "@/assets/icons/send.svg"
import Historico from "./Historico/Historico"
const PaginaChatBot = ()=>{

    return(
        <>
            <div className="min-h-auto flex justify-between w-full ">
                <Historico />
                <div className="flex h-[80vh] w-full items-end pb-2 justify-center bottom-0 relative px-5">
                    <div className="w-full flex py-2 px-4  justify-between rounded-custom-xlg border-primary shadow-md border-4 h-max  bottom-0 ">
                        <input className="w-11/12 p-3 outline-none placeholder:text-2xl placeholder:font-medium placeholder:text-black mr-2 just" type="text" placeholder="Digite aqui" />
                        <div className=" flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300 w-1/12 p-1">
                            <img className="w-full h-10" src={sendBtnIcon} alt="Imagem de enviar mensagem" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaginaChatBot