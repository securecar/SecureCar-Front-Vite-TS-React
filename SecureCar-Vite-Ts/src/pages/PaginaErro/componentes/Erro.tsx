import { Link } from "react-router-dom";

export default function Erro(){
    return(
        <div className="flex flex-col items-center border  ">
            <h1 className="text-3xl font-bold">OPS! Parece que algo deu errado!</h1>
            <h3 className="text-xl font-bold">Você pode tentar resolver isso clicando <br/> em algum dos links acima ou no <br/> botão abaixo!</h3>
            <Link to="/pages/PaginaInicial/PaginaInicial" className="border rounded-md border-blue-400">Inicio</Link>
            <h1>Caso isso não funcione verifique a sua conexão com a iternet!</h1>
        </div>
    );
}