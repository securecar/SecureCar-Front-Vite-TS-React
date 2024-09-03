import HelpCard from "./componentes/HelpCard/HelpCard"

const PaginaFAQ = ()=>{

    return(
        <div className="h-screen w-full flex justify-center mt-20 pl-20">
            <div className="w-2/3 flex flex-col ">
                <HelpCard header="algo" conteudo="Alguma coisa" mostrar={true}/>
            </div>
            <div className="w-1/3">

            </div>
        </div>
    )
}

export default PaginaFAQ