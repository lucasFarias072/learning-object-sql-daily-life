

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN3(): QueryScenarioBackend {
    return {
        // subconsulta-3-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-subconsulta-3',
        consultaTipo: 'subconsulta',
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
