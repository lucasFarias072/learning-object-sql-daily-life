

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN3(): QueryScenarioBackend {
    return {
        // join-3-!@#exercicio-bk 
        
        cenario: 'exercicio-join-3',
        consultaTipo: 'join',
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
