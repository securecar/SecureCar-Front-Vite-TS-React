type InputAreaFunc={
    label : string;
    required: boolean;
    placeHolder : string;
    value : string ;
    aoAlterado: (valor: string) => void ;
}

const InputAreaFunc = ({value,aoAlterado,label,required ,placeHolder}:InputAreaFunc)=>{

    const aoDigitado = (e :string)=>{
        aoAlterado(e)
    }

    return(
        <>
            <label>{label}</label>
            <input
            onChange={(e) => aoDigitado(e.target.value)}
            value={value}
            required={required}
            placeholder={placeHolder}/>
        </>
    )
}

export default InputAreaFunc