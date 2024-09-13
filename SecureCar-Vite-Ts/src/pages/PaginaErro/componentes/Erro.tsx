import Botao from "@/componentes/Botao/Botao";
import { Link } from "react-router-dom";

export default function Erro() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center w-5/6 border h-5/6 border-slate-200 shadow-2xl">
                <h1 className="text-4xl font-bold text-center m-10 md:text-5xl">OPS! Parece que algo deu errado!</h1>
                <p className="text-xl font-bold text-center">Você pode tentar resolver isso clicando em algum dos links acima ou no botão abaixo!</p>
                <iframe className="m-3" src="https://lottie.host/embed/4b5ecd27-58e4-452e-957d-75e9dbf3fba7/nMlkBxD8SR.json"></iframe>
                <div className="pb-10">
                    <Link to={"/"}>
                    <Botao tipo="button">Inicio</Botao>
                    </Link>
                </div>
                <p className="font-bold text-lg text-center">Caso isso não funcione verifique sua conexão com a internet</p>
            </div>
        </div> 
    );
}