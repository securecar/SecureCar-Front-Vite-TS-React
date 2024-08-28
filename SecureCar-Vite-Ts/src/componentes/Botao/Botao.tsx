type BotaoProps = {
    children:React.ReactNode;
    tipo : "submit" | "reset" | "button" | undefined
}

const Botao = ({children, tipo} : BotaoProps )=>{

    return(
        <button className="font-semibold text-lg w-2/5 rounded-2xl p-3 border-2 border-primary shadow-xl" type={tipo}>{children}</button>
    )
}

export default Botao