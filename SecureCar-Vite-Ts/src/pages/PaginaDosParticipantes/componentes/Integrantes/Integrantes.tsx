type Integrantes = {
    nome: string;
    rm: number;
    turma: string;
    github: string;
    src: string;
}

export default function Integrantes({ integrante }: { integrante: Integrantes[] }) {
    return (
        <div className="w-full celular:m-auto">
            <ul>
                {integrante.map((itg) => (
                    <li key={itg.rm} className="flex celular:flex-col flex-row items-center space-x-10 pb-4 celular:pl-0 celular:space-x-0 pl-3 pt-5 text-3xl">
                        <img src={itg.src} alt={itg.nome} className="w-1/3 lg:w-3/5  celular:rounded-full celular:h-40 celular:w-40 celular:mb-2 " />
                        <div className="w-full ">
                            <p className="text-center font-semibold text-wrap max-w-screen-sm text-lg" >{itg.nome}</p>
                            <p className="text-center text-wrap max-w-screen-sm text-lg" >RM: {itg.rm}</p>
                            <p className="text-center text-wrap max-w-screen-sm text-lg" >Turma: {itg.turma}</p>
                            <p className="text-center text-wrap max-w-screen-sm text-lg" ><a href={itg.github} target="_blank" rel="noopener noreferrer">{itg.github}</a></p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
