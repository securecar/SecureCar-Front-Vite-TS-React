import { lista_de_conversas } from "./listaDeConversas"
import SingleConversa from "./SingleConversa/SingleConversa"
const SidebarHistorico = () => {
  return (
    <>
        <div className="w-max bg-primary p-0 flex flex-col">
            {lista_de_conversas.map((conversa, indice)=> <SingleConversa key={indice} {...conversa} />)}
        </div>
    </>
  )
}

export default SidebarHistorico