import Botao from "@/componentes/Botao/Botao";
import { Link } from "react-router-dom";

export default function Erro() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center w-96 border h-5/6 border-slate-200 shadow-2xl">
                <h1 className="text-4xl font-bold  ">OPS! Parece que algo</h1>
                <h1 className=" text-4xl font-bold pb-20">deu errado!</h1>
                <p className="text-xl font-bold">Você pode tentar resolver isso clicando</p> 
                <p className="text-xl font-bold">em algum dos links acima ou no</p> 
                <p className="text-xl font-bold">botão abaixo!</p>
                <div className="m-10">
                    <Link to={"/"}>
                    <Botao tipo="button">Inicio</Botao>
                    </Link>
                </div>
                <p className="font-bold text-lg">Caso isso não funcione</p>
                <p className="font-bold text-lg">verifique a sua conexão com a internet</p>
            </div>
        </div>
    );
}