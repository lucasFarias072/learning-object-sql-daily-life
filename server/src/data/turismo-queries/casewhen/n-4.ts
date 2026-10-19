

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN4(): QueryScenarioBackend {
    return {
        // case-when-4-!@#turismo-bk 
        
        cenario: 'turismo-case-when-4',
        consultaTipo: 'case-when',
        id: 4,
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
