

//*TESTADO-33

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN3(): QueryScenarioBackend {
    return {
        // agregacao-3-!@#exercicio-bk 
        
        cenario: 'exercicio-agregacao-3',
        consultaTipo: 'agregacao',
        id: 3,
        // Liste somente a quantidade de avistamentos em cada grupo formado por membro da família, considerando os grupos com mais de 3 avistamentos.
        consulta: `
        select count(*) as qtd_avistamentos
        from avistamento
        group by membro_visto_fk
        having count(*) > 3;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
