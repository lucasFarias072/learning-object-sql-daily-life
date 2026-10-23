

//*TESTADO-8

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN2(): QueryScenarioBackend {
    return {
        // agregacao-2-!@#sinuca-bk 
        
        cenario: 'sinuca-agregacao-2',
        consultaTipo: 'agregacao',
        id: 2,
        // Para cada identificador de sinuca favorita, liste a quantidade de sinuquistas que a favoritaram.
        consulta: `
        select sinuca_fk_favorita, count(*) as quantidade_sinuquistas
        from sinuquista
        group by sinuca_fk_favorita;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
