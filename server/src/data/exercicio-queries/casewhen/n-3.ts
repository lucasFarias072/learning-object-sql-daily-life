

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN3(): QueryScenarioBackend {
    return {
        // case-when-3-!@#exercicio-bk 
        
        cenario: 'exercicio-case-when-3',
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
