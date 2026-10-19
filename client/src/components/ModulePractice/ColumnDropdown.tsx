

import { useEffect, useState } from 'react'

export function ColumnDropdown({ table_name, changeTrigger }: { table_name: string, changeTrigger: any }) {
    const [tabelas, setTabelas] = useState<any[]>([])
    const [currentValue, setCurrentValue] = useState('')

    function handleCurrentValueChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const columnName = event.target.selectedOptions[0].text
        // const selectValue = `${event.target.value}.${event.target.selectedOptions[0].text}`
        setCurrentValue(event.target.value)
        changeTrigger(columnName);
    }

    // O useEffect dispara a requisição automaticamente quando o componente renderiza
    useEffect(() => {
        // Função assíncrona que busca os dados do servidor
        async function carregarColunas() {
            try {
                // ATENÇÃO: Troque a porta (ex: 3333) pela porta onde seu servidor Node está rodando
                const response = await fetch(`/api/scenarios/column/${table_name}`)
                const dados = await response.json()
                
                // Guarda os dados vindos do banco no nosso estado
                setTabelas(dados) 
            } catch (error) {
                console.error("Erro ao buscar dados do servidor:", error)
            }
        }

        // Executa a função se o cenário existir
        if (table_name) {
            carregarColunas()
        }
    }, [table_name]) // Se o 'scenario' mudar, ele refaz a requisição

    return (
        <div className="flex column go-center gap">
            <select name="tabelas" id="columns-select" value={currentValue} onChange={handleCurrentValueChange}>
                <option value="">colunas</option>
                {tabelas.map((tabela, index) => (
                    <option key={index} value={index}>
                        {`${tabela.alias}.${tabela.table_field}`}
                    </option>
                ))}
            </select>
        </div>
    )
}
