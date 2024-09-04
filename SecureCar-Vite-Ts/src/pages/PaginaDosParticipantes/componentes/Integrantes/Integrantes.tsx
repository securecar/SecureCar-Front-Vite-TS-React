type Integrantes = {
    nome:string;
    rm:number;
    turma:string;
    github:string;
    src:string;
}

export default function Integrantes({ integrante }: { integrante: Integrantes[] }) {
    return (
        <ul>
            {integrante.map((itg) => (
                <li key={itg.rm}>
                    <p>{itg.nome}</p>
                    <p>RM: {itg.rm}</p>
                    <p>Turma: {itg.turma}</p>
                    <a href={itg.github} target="_blank" rel="noopener noreferrer">{itg.github}</a>
                    <img src={itg.src} alt={itg.nome} style={{ width: '100px', height: '100px' }} />
                </li>
            ))}
        </ul>
    );
}
