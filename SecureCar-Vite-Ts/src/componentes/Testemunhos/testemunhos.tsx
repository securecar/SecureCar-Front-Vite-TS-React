import CardTestemunho, { CardTestemunhoType } from "./CardTestemunho/card_testemunho"
export type ListaTestemunhosType = {
    lista_testemunhos: CardTestemunhoType[]
}


const Testemunhos = ({lista_testemunhos} : ListaTestemunhosType) =>{
    return(
        <>
        <section className="w-full bg-primary flex items-center min-h-[400px] flex-wrap justify-evenly gap-10 p-10">
            {lista_testemunhos.map((testemunho, indice) => <CardTestemunho key={indice} imgTestemunho={testemunho.imgTestemunho} txtTestemunho={testemunho.txtTestemunho}/>)}
        </section>
        </>
    )
}

export default Testemunhos