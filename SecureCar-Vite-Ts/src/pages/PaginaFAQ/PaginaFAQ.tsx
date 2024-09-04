
import HelpCard from "./componentes/HelpCard/HelpCard"
import lista_help from "./lista_help";
import AreaContato from "./componentes/AreaContato/AreaContato";

const PaginaFAQ = ()=>{


    return(
        <div className="flex  items-center justify-center">
            <div className="h-screen w-11/12 flex flex-row item border-2 border-gray-200 shadow-xl p-10 mt-20 pl-20 ">
                <div className="w-2/3 flex flex-col gap-y-8 ">
                    <h1 className="text-4xl font-bold">Perguntas frequentes</h1>
                    {lista_help.map((help,index) =><HelpCard key={index} header={help.header} conteudo={help.conteudo}/>)}
                </div>
                <div className="w-1/3 flex justify-center mt-20">
                    <AreaContato/>
                </div>
            </div>
        </div>
    )
}

export default PaginaFAQ