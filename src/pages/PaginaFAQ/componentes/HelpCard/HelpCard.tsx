import seta from "@/assets/icons/down-arrow-5-svgrepo-com.svg"
import { useState } from "react";



export type HelpCardProps={
    header : string;
    conteudo : string;

}

const HelpCard = ({header,conteudo} : HelpCardProps)=>{

    const[mostrar,setMostrar] = useState<boolean>()

    function clica(){
        if(mostrar){
            setMostrar(false)
            return;
        }
        setMostrar(true);
    }


    return(
        <div onClick={() =>clica()} className={`select-none  flex flex-col tela:w-4/5 tablet:w-full celular:min-w-[25rem] tela-xl:w-full shadow-xl ${mostrar? "rounded-xl":""}`}>
            <div className={`cursor-pointer w-full h-16 flex flex-row justify-between items-center ${mostrar? "rounded-t-xl":"rounded-xl"} rounded-xl p-3 border-2 border-primary shadow-xl`}>
                <h1 className="font-bold tela:text-2xl tablet:text-xl text-black">{header}</h1>
                <img className="h-16  z-0" src={seta} alt="Imagem para clicar e abrir o card de Help"></img>
            </div>
            <div className={`w-full min-h-32 h-auto flex p-3 text-xl text-black ${mostrar?"block":"hidden"}`}>
                {conteudo}
            </div>
        </div>
    )
}

export default HelpCard