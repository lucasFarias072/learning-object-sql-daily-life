

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN4(): QueryScenarioBackend {
    return {
        // subconsulta-4-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-subconsulta-4',
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
