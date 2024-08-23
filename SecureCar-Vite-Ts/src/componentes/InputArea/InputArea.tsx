type InputArea={
    label : string;
    required: boolean;
    placeHolder : string;
    disable ?: boolean;
    value ?: string;
    children ?: React.ReactNode;
}

const InputArea = ({children,value,label,required ,placeHolder, disable}:InputArea)=>{


    return(
        <div className="around">
            <label>{label}</label>
            <input
            value={value}
            required={required}
            placeholder={placeHolder}
            disabled={disable}>
            </input>
            {children}
        </div>
    )
}

export default InputArea