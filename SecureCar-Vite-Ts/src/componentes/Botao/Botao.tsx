type BotaoProps = {
    children:React.ReactNode;
    tipo : "submit" | "reset" | "button" | undefined
    onClick ?: () => void
}

const Botao = ({onClick, children, tipo} : BotaoProps )=>{

    return(
        <button onClick={onClick} className="flex justify-center items-center min-w-52 hover:bg-primary hover:text-white font-semibold text-lg w-2/5 rounded-xl p-3 border-2 border-primary shadow-xl" type={tipo}>{children}</button>
    )
}

export default Botao