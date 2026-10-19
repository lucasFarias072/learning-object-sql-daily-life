

//*TESTADO-37

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Mostre quantos registros de locomoção (apenas a coluna do dado de quantidade) existem para os ônibus, durante os horários a partir das 10h. Mostre ao final, a contagem dos ônibus com mais de 2 registros de locomoção.
        consulta: `
        select count(*) as qtd_locomocoes
        from locomocao
        where horario_loc >= 10
        group by onibus_loc_fk
        having count(*) > 2;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
