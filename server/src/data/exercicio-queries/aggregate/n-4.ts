

//*TESTADO-45

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN4(): QueryScenarioBackend {
    return {
        // agregacao-4-!@#exercicio-bk 
        
        cenario: 'exercicio-agregacao-4',
        consultaTipo: 'agregacao',
        id: 4,
        // Liste a descrição de cada 'algo' e quantas vezes esse algo foi avistado. Considere apenas os avistamentos de algo cuja natureza seja 'animal'.
        consulta: `
        select descricao_algo, count(*) as total_avistamentos
        from avistamento avi
        join algo al on al.algo_id = avi.algo_visto_fk
        where natureza = 'animal'
        group by descricao_algo;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
