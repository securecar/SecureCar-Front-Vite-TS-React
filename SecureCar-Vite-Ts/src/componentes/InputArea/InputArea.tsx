type InputArea={
    label : string;
    required: boolean;
    placeHolder : string;
    disable ?: boolean;
    value ?: string;
    onChange ?: (valor : string) =>void;
}

const InputArea = ({onChange,value,label,required ,placeHolder, disable}:InputArea)=>{

    const aoDigitado = (e :string)=>{
        if(onChange != undefined){
            onChange(e)
        } 
    }

    return(
        <>
        <label className="mt-3 text-lg">{label}</label>
        <input
        className="rounded-xl p-3 border-2 border-primary shadow-xl"
        value={value}
        required={required}
        placeholder={placeHolder}
        disabled={disable}
        onChange={e => aoDigitado(e.target.value)}>
        </input>
        </>
    )
}

export default InputArea