

//*TESTADO-19

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#frutaria-bk 
        
        cenario: 'frutaria-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Liste as frutas com uma faixa de pesos customizados (1 para peso abaixo de 100g, 2 para peso até 250g, 3 para aqueles acima disso) e ordene por essa faixa.
        consulta: `
        select descricao_fruta, preco_atual_kg,
        case
        when peso_medio_unid_grama < 100 then 1
        when peso_medio_unid_grama <= 250 then 2
        else 3
        end as faixa_de_pesos
        from frutaria_produto
        order by faixa_de_pesos;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
