import seta from "@/assets/icons/down-arrow-5-svgrepo-com.svg"



type HelpCardProps={
    header : string;
    conteudo : string;
    mostrar:boolean;
}

const HelpCard = ({header,conteudo,mostrar} : HelpCardProps)=>{

    return(
        <div className={`flex flex-col w-4/5 shadow-2xl ${mostrar? "rounded-xl":""}`}>
            <div className={`cursor-pointer w-full h-16 flex flex-row justify-between items-center ${mostrar? "rounded-t-xl":"rounded-xl"} bg-primary p-3`}>
                <h1 className="font-bold text-3xl text-white">{header}</h1>
                <img className="h-16 invert z-0" src={seta} alt="Imagem para clicar e abrir o card de Help"></img>
            </div>
            <div className="w-full min-h-32 h-auto flex p-3 text-xl text-black">
                {conteudo}
            </div>
        </div>
    )
}

export default HelpCard