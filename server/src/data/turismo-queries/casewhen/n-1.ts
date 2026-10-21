

//*TESTADO-10

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#turismo-bk 
        
        cenario: 'turismo-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Liste o nome de cada pessoa e também crie uma classificação customizada que indique se ela é 'estrangeira' ou 'nativa'. Para isso, observe as variações de valores numéricos relacionados.
        consulta: `
        select nome,
        case
        when eh_estrangeiro = 1 then 'estrangeiro'
        else 'nativo'
        end as origem_pessoa
        from pessoa;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
