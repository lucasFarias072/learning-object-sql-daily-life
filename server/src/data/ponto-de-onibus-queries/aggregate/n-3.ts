

//*TESTADO-94

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN3(): QueryScenarioBackend {
    return {
        // agregacao-3-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-agregacao-3',
        consultaTipo: 'agregacao',
        id: 3,
        // Mostre a maior lotação registrada para cada ônibus, apenas a coluna da maior lotação. Após a formação de todos os grupos, considere apenas ônibus com 2 ou mais registros de locomoção.
        consulta: `
        select max(lotacao) as maior_lotacao
        from locomocao
        group by onibus_loc_fk
        having count(*) >= 2;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
