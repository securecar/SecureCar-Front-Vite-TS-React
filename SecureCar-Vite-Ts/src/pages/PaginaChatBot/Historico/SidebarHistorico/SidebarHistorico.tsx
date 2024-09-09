import { lista_de_conversas } from "./listaDeConversas"
import SingleConversa from "./SingleConversa/SingleConversa"

type SidebarHistoricoProps = {
  view : boolean
}

const SidebarHistorico = ({view} : SidebarHistoricoProps) => {
  return (
    <>
        <div className={`${view ? 'w-max bg-primary p-0 flex flex-col min-h-full' : 'hidden'}`}>
            {lista_de_conversas.map((conversa, indice)=> <SingleConversa key={indice} {...conversa} />)}
        </div>
    </>
  )
}

export default SidebarHistorico