import {faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Historico = () => {
  return (
    <div className="bg-transparent fixed left-2 top-24 cursor-pointer hover:scale-105 transition-all duration-300">
        <FontAwesomeIcon color="#4a90e2" size="2xl" icon={faBars} />
    </div>
  )
}

export default Historico