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
        src:"src"
    },
    {
        nome: "Gustavo Dias da Silva Cruz",
        rm: 556448,
        turma:"1TDSPH",
        github:"github.com/gustavodscruz",
        src:"src"
    },
    {
        nome: "Enrico Figueiredo Del Guerra",
        rm: 558604,
        turma:"1TDSPH",
        github:"https://github.com/enricodelguerra",
        src:"src"
    }
]

    return(
        <>
        <h1>Pagina dos Participantes</h1>
        </>
    )
}

export default PaginaDosParticipantes