import { Link } from "react-router-dom";

export default function Erro(){
    return(
        <div>
            <h1>OPS! Parece que algo deu errado!</h1>
            <h1>Você pode tentar resolver isso clicando <br/> em algum dos links acima ou no <br/> botão abaixo!</h1>
            <Link to="/pages/PaginaInicial/PaginaInicial" className="">Inicio</Link>
            <h1>Caso isso não funcione verifique a sua conexão com a iternet!</h1>
        </div>
    );
}