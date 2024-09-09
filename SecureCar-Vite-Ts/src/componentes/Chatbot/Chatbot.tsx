import chatbotLogo from "@/assets/icons/chat.svg"
import { Link } from "react-router-dom"
const Chatbot = () => {
  return (
    <>
        <Link to={'/chatbot'}>
            <div className="rounded-full h-16 w-16 fixed bottom-5 right-5 p-2 bg-primary flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-500 outline-none shadow-md shadow-white">
                <img className="h-10 m-auto" src={chatbotLogo} alt="Imagem do chatbot" />
            </div>
        </Link>
    </>
  )
}

export default Chatbot