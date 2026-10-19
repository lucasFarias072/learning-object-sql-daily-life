

//*TESTADO-8

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN2(): QueryScenarioBackend {
    return {
        // agregacao-2-!@#sinuca-bk 
        
        cenario: 'sinuca-agregacao-2',
        consultaTipo: 'agregacao',
        id: 2,
        // Para cada tipo de sinuca favoritada, traga a contagem da distribuição de cada tipo.
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
