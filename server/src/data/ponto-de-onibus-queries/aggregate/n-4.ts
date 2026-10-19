

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN4(): QueryScenarioBackend {
    return {
        // agregacao-4-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-agregacao-4',
        consultaTipo: 'agregacao',
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
