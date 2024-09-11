import Botao from "@/componentes/Botao/Botao";
import { Link } from "react-router-dom";

export default function Erro() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center w-5/6 border h-5/6 border-slate-200 shadow-2xl">
                <h1 className="text-4xl font-bold ">OPS! Parece que algo</h1>
                <h1 className="text-4xl font-bold pb-20">deu errado!</h1>
                <p className="text-xl font-bold">Você pode tentar resolver isso</p> 
                <p className="text-xl font-bold">clicando em algum dos links acima </p> 
                <p className="text-xl font-bold">ou no botão abaixo!</p>
                <iframe className="m-3" src="https://lottie.host/embed/4b5ecd27-58e4-452e-957d-75e9dbf3fba7/nMlkBxD8SR.json"></iframe>
                <div className="pb-10">
                    <Link to={"/"}>
                    <Botao tipo="button">Inicio</Botao>
                    </Link>
                </div>
                <p className="font-bold text-lg">Caso isso não funcione verifique sua </p>
                <p className="font-bold text-lg">conexão com a internet</p>
            </div>
        </div> 
    );
}