type Integrantes = {
    nome:string;
    rm:number;
    turma:string;
    github:string;
    src:string;
}

export default function Integrantes({ integrante }: { integrante: Integrantes[] }) {
    return (
        <div>
            <ul>
                {integrante.map((itg) => (
                    <li className="grid grid-cols-2" key={itg.rm}>
                        <img src={itg.src} alt={itg.nome} style={{ width: '200px', height: '200px' }} />
                        <p>{itg.nome}</p>
                        <p>RM: {itg.rm}</p>
                        <p>Turma: {itg.turma}</p>
                        <p><a href={itg.github} target="_blank" rel="noopener noreferrer">{itg.github}</a></p>
                    </li>   
                ))}
            </ul>
        </div>
    );
}
