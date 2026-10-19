

//*TESTADO-24

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN2(): QueryScenarioBackend {
    return {
        // agregacao-2-!@#exercicio-bk 
        
        cenario: 'exercicio-agregacao-2',
        consultaTipo: 'agregacao',
        id: 2,
        // Quantos tipos diferentes de 'algo' já foram avistados pela família?
        consulta: `
        select count(distinct algo_visto_fk) as algos_diferentes_vistos
        from avistamento;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
