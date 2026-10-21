

import { useEffect, useState } from 'react'
import { apiUrl } from '../../config'

export function TableDropdown({ scenario, changeTrigger }: { scenario: string, changeTrigger: any }) {
    const [tabelas, setTabelas] = useState<any[]>([])
    const [currentValue, setCurrentValue] = useState('')

    function handleCurrentValueChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const alias = event.target.value
        const tableName = event.target.selectedOptions[0].text
        // const selectValue = `${event.target.value}.${event.target.selectedOptions[0].text}`
        setCurrentValue(alias)
        changeTrigger(`${tableName} ${alias}`);
    }

    // O useEffect dispara a requisição automaticamente quando o componente renderiza
    useEffect(() => {
        // Função assíncrona que busca os dados do servidor
        async function carregarColunas() {
            try {
                // ATENÇÃO: Troque a porta (ex: 3333) pela porta onde seu servidor Node está rodando
                // const response = await fetch(`/api/scenarios/table/${scenario}`)
                const response = await fetch(apiUrl(`/api/scenarios/table/${scenario}`))
                const dados = await response.json()
                
                // Guarda os dados vindos do banco no nosso estado
                setTabelas(dados) 
            } catch (error) {
                console.error("Erro ao buscar dados do servidor:", error)
            }
        }

        // Executa a função se o cenário existir
        if (scenario) {
            carregarColunas()
        }
    }, [scenario]) // Se o 'scenario' mudar, ele refaz a requisição

    return (
        <div className="flex column go-center gap">
            <select name="tabelas" id="tables-select" value={currentValue} onChange={handleCurrentValueChange}>
                <option value="">tabelas</option>
                {tabelas.map((tabela, index) => (
                    <option key={index} value={tabela.alias}>
                        {tabela.table_name}
                    </option>
                ))}
            </select>
        </div>
    )
}
