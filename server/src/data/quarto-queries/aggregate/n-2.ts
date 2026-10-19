

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN2(): QueryScenarioBackend {
    return {
        // agregacao-2-!@#quarto-bk 
        
        cenario: 'quarto-agregacao-2',
        consultaTipo: 'agregacao',
        id: 2,
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
