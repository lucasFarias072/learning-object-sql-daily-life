

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN4(): QueryScenarioBackend {
    return {
        // subconsulta-4-!@#casa-bk 
        
        cenario: 'casa-subconsulta-4',
        consultaTipo: 'subconsulta',
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
