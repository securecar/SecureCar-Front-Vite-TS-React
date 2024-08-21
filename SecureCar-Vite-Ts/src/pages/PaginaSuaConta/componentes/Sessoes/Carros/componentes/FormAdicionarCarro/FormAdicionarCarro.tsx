import { useState } from "react"
import InputAreaFunc from "../../../../../../../componentes/InputAreaFunc/InputAreaFunc"
import Botao from "../../../../../../../componentes/Botao/Botao"
import { Carro } from "../../../../../../../componentes/TiposPadroes/Carro";

type FormAdicionarCarro ={
    onCarroCadastrado : (carro: Carro) => void;
}

const FormAdicionarCarro = ({onCarroCadastrado} : FormAdicionarCarro) =>{
    const [modelo,setModelo]  = useState("")
    const [marca,setMarca] = useState("")
    const [ano,setAno] = useState("")
    const [chassi,setChassi] = useState("")
    const [quilometragem,setQuilometragem] = useState("")
    const [placa,setPlaca] = useState("")
    const [seguro,setSeguro] = useState("")

    const onSave = (e :React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const novoCarro = {
            modelo,
            marca,
            ano,
            chassi,
            quilometragem,
            placa,
            seguro
        };
        
        onCarroCadastrado(novoCarro);
    };
    return(
        <form onSubmit={onSave}>
            <InputAreaFunc
            value = {modelo}
            required={true}
            aoAlterado = {valor => setModelo(valor)}
            label = "Modelo"
            placeHolder = "Digite o Modelo do seu carro aqui"/>
            <InputAreaFunc
            value = {marca}
            required={true}
            aoAlterado = {valor => setMarca(valor)}
            label = "Marca"
            placeHolder = "Digite a Marca do seu carro aqui"/>
            <InputAreaFunc
            value = {ano}
            required={true}
            aoAlterado = {valor => setAno(valor)}
            label = "Ano"
            placeHolder = "Digite o Ano do seu carro aqui"/>
            <InputAreaFunc
            value = {chassi}
            required={true}
            aoAlterado = {valor => setChassi(valor)}
            label = "Chassi"
            placeHolder = "Digite o Chassi do seu carro aqui"/>
            <InputAreaFunc
            value = {quilometragem}
            required={true}
            aoAlterado = {valor => setQuilometragem(valor)}
            label = "Quilômetragem"
            placeHolder = "Digite a Quilometragem do seu carro aqui"/>
            <InputAreaFunc
            value = {placa}
            required={true}
            aoAlterado = {valor => setPlaca(valor)}
            label = "Placa"
            placeHolder = "Digite a Placa do seu carro aqui"/>
             <InputAreaFunc
            value = {seguro}
            required={true}
            aoAlterado = {valor => setSeguro(valor)}
            label = "Seguro"
            placeHolder = "Digite a seguro do seu carro aqui"/>
            <div className="BtnSubmit-area">
            <Botao tipo="submit">Adicionar Veiculo</Botao>
            </div>
        </form>
    )
}

export default FormAdicionarCarro