

//*TESTADO-37

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#ponto-de-onibus-bk 
        
        cenario: 'ponto-de-onibus-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Liste somente a quantidade de locomoções em cada grupo formado por ônibus, considerando os registros a partir das 10h e os grupos com mais de 2 locomoções nesse período.
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
