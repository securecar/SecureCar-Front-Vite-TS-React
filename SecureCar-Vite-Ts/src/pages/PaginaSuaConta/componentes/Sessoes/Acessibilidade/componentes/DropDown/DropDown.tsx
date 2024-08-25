

type DropDownProps ={
    opcoes : string[];
    label : string;
    onChange : (valor : string) => void;
}

const DropDown = ({opcoes, label, onChange} : DropDownProps)=>{
    return(
        <div className="areaDropDown">
            <label> {label}</label>
            <select onChange={valor => onChange(valor.target.value)} name={label}>
                {opcoes.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDown;