import * as React from "react";
import { useState, useEffect } from "react";

export default function Ufs({setOpcaoUf}) {
    
    const [options, setOptions] = useState([]); // Iniciando com uma array vazio

    useEffect(() => {
        const opt = [{id: "", nome: "Selecione um estado brasileiro"}];
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(results => results.json())
        .then(data => {
            data.forEach(uf => {
                opt.push({id: uf.id, nome: uf.nome})
            });
        setOptions(opt);
        })
    }, []); // array com o que queremos monitorar! vazio porque não quero monitorar nada
    
    function handleChange(event){
        setOpcaoUf({id: event.target.value, nome: event.target.options[event.target.selectedIndex].text});
    }

    return (
        <select name="uf" onChange={handleChange}>
            {options.map(estado => {
                return (
                    <option key={estado.id} value={estado.id}>
                        {estado.nome}
                    </option>
                )
            })}
        </select>
    )
}