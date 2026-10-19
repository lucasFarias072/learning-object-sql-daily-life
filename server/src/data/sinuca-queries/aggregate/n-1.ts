

//*TESTADO-7

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#sinuca-bk 
        
        cenario: 'sinuca-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Qual é o valor médio das fichas de sinuca disponíveis?
        consulta: `
        select avg(valor) as valor_medio
        from ficha;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
