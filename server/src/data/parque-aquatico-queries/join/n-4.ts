

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN4(): QueryScenarioBackend {
    return {
        // join-4-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-join-4',
        consultaTipo: 'join',
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
