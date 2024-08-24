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
        <label>{label}</label>
        <input
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