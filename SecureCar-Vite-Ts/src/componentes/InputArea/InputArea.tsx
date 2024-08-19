type InputArea={
    label : string;
    required: boolean
    placeHolder : string
}

const InputArea = ({label,required ,placeHolder}:InputArea)=>{

    return(
        <>
            <label>{label}</label>
            <input
            required={required}
            placeholder={placeHolder}/>
        </>
    )
}

export default InputArea