import {faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SidebarHistorico from "./SidebarHistorico/SidebarHistorico"
import { useState } from "react"
const Historico = () => {
  const [viewHistory, setViewHistory] = useState(true)
  const toggleViewHistory = () => {
    setViewHistory(!viewHistory)
  } 
  return (
    <div className="bg-primary static max-w-xs p-0 flex flex-col h-[80vh]" >
        <FontAwesomeIcon onClick={toggleViewHistory} className="cursor-pointer hover:scale-105 transition-all duration-300 mb-4 p-4 justify-self-start text-start" color="#fff" size="2xl" icon={faBars}  />
        <SidebarHistorico  view={viewHistory} />
    </div>
  )
}

export default Historico