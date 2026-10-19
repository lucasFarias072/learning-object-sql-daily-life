

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN4(): QueryScenarioBackend {
    return {
        // join-4-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-join-4',
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
