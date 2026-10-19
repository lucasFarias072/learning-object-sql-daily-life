

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN3(): QueryScenarioBackend {
    return {
        // agregacao-3-!@#onibus-bk 
        
        cenario: 'onibus-agregacao-3',
        consultaTipo: 'agregacao',
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
