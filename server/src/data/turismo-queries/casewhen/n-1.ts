

//*TESTADO-10

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#turismo-bk 
        
        cenario: 'turismo-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Liste o nome de cada pessoa e uma classificação customizada que indique se ela é 'estrangeira' ou 'nativa'.
        consulta: `
        select nome,
        case
        when eh_estrangeiro = 1 then 'estrangeiro'
        else 'nativo'
        end as origem
        from pessoa;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
