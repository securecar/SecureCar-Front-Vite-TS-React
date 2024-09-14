import { faFaceAngry, faFaceMeh, faFaceLaughWink, faClose } from "@fortawesome/free-solid-svg-icons";
// import { faFaceLaughWink } from "@fortawesome/free-solid-svg-icons/faFaceLaughWink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type PopupProps = {
    isOpen: boolean;
    onClose: () => void;
}
const AvaliacaoPopup = ({ isOpen, onClose } : PopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-md w-max h-max p-4 bg-primary shadow-xl shadow-gray-500 fixed justify-self-center place-self-center self-center m-auto flex flex-col" onClick={onClose}>
    <button className="flex self-end justify-self-end " onClick={onClose}><FontAwesomeIcon className="text-white" icon={faClose} /></button>
      <div className="popup-conteudo flex flex-col p-10 justify-center items-center" onClick={(e) => e.stopPropagation()}>
        <div className="flex w-full justify-between mb-4">
            <h2 className="text-white font-bold text-3xl tracking-wide">Estamos ajudando você?</h2>
        </div>
        <p className="text-gray-300 tracking-tight">Queremos sempre fazer o melhor para ajudar você! Esperamos não te atrapalhar!!</p>
        <div className="flex gap-4 w-max py-4">
            <button onClick={onClose}><FontAwesomeIcon className="h-16 text-white hover:text-red-500 hover:scale-105 transition-all duration-500" icon={faFaceAngry} /></button>
            <button onClick={onClose}><FontAwesomeIcon className="h-16 text-white hover:text-gray-500 hover:scale-105 transition-all duration-500" icon={faFaceMeh} /></button>
            <button onClick={onClose}><FontAwesomeIcon className="h-16 text-white hover:text-green-500 hover:scale-105 transition-all duration-500" icon={faFaceLaughWink} /></button>

        </div>
      </div>
    </div>
  );
};

export default AvaliacaoPopup;
