type BotaoProps = {
    children:React.ReactNode;
    tipo : "submit" | "reset" | "button" | undefined
}

const Botao = ({children, tipo} : BotaoProps )=>{

    return(
        <button type={tipo}>{children}</button>
    )
}

export default Botao