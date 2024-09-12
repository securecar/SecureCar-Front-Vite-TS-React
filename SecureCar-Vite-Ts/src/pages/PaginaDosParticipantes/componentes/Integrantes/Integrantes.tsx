type Integrantes = {
    nome: string;
    rm: number;
    turma: string;
    github: string;
    src: string;
}

export default function Integrantes({ integrante }: { integrante: Integrantes[] }) {
    return (
        <div className="w-4/6">
            <ul>
                {integrante.map((itg) => (
                    <li key={itg.rm} className="flex flex-row items-center space-x-10 pb-4 pl-3">
                        <img src={itg.src} alt={itg.nome} style={{ width: '200px', height: '200px' }}/>
                        <div>
                            <p>{itg.nome}</p>
                            <p >RM: {itg.rm}</p>
                            <p >Turma: {itg.turma}</p>
                            <p ><a href={itg.github} target="_blank" rel="noopener noreferrer">{itg.github}</a></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
