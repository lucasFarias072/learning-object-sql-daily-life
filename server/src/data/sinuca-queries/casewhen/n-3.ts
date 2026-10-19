

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN3(): QueryScenarioBackend {
    return {
        // case-when-3-!@#sinuca-bk 
        
        cenario: 'sinuca-case-when-3',
        consultaTipo: 'case-when',
        id: 3,
        // 
        consulta: `
        select * from relationship;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
