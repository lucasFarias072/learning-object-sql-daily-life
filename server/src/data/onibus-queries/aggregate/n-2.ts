

//*TESTADO-79

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN2(): QueryScenarioBackend {
    return {
        // agregacao-2-!@#onibus-bk 
        
        cenario: 'onibus-agregacao-2',
        consultaTipo: 'agregacao',
        id: 2,
        // Liste a descrição de cada item e a quantidade de registros em que ele aparece. Considere apenas passageiros que estão sentados (assento com valor numérico definido). Agrupe pelos campos pertinentes.
        consulta: `
        select descricao_item, count(*)
        from passageiro_item psgi
        join item it on it.item_id = psgi.item_fk
        join passageiro psg on psg.passageiro_id = psgi.passageiro_fk
        where assento_fk is not null
        group by descricao_item;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
