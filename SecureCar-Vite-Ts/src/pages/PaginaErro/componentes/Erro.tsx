import Botao from "@/componentes/Botao/Botao";
import { Link } from "react-router-dom";

export default function Erro() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center h-5/6 w-3/4 border border-slate-200 shadow-2xl">
            <h1 className="text-5xl font-bold pb-20 ">OPS! Parece que algo deu errado!</h1>
            <p className="text-2xl font-bold">Você pode tentar resolver isso clicando</p> 
            <p className="text-2xl font-bold">em algum dos links acima ou no</p> 
            <p className="text-2xl font-bold">botão abaixo!</p>
            <div className="m-10">
                <Link to={"/"}>
                <Botao tipo="button">Inicio</Botao>
                </Link>
            </div>
            <p className="font-bold text-xl">Caso isso não funcione verifique a sua conexão com a iternet!</p>
        
        </div>
        </div>
    );
}