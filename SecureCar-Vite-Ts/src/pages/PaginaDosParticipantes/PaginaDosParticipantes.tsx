import Integrantes from "./componentes/Integrantes/Integrantes";
import Felipe from "../../assets/imgs/felipe.webp";
import gustavo from "../../assets/imgs/gustavo.webp";
import enrico from "../../assets/imgs/enrico.webp";



type Integrantes = {
    nome:string;
    rm:number;
    turma:string;
    github:string;
    src:string;
}

const PaginaDosParticipantes = ()=>{

const integrantes:Integrantes[] = [
    {
        nome: "Felipe Ribeiro Tardochi da Silva",
        rm: 555100,
        turma:"1TDSPH",
        github:"https://github.com/cotete",
        src: Felipe
    },
    {
        nome: "Gustavo Dias da Silva Cruz",
        rm: 556448,
        turma:"1TDSPH",
        github:"https://github.com/gustavodscruz",
        src:gustavo
    },
    {
        nome: "Enrico Figueiredo Del Guerra",
        rm: 558604,
        turma:"1TDSPH",
        github:"https://github.com/enricodelguerra",
        src:enrico
    }
]

    return(
        <>
        <h1>Pagina dos Participantes</h1>
        <Integrantes integrante={integrantes}/>
        </>
    )
}

export default PaginaDosParticipantes