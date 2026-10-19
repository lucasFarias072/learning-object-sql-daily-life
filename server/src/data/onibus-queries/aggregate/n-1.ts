

//*TESTADO-60

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#onibus-bk 
        
        cenario: 'onibus-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Liste a descrição do item e a quantidade de registros em que ele aparece dentre os passageiros. Agrupe pela listagem pertinente e depois mantenha a descrição dos itens com 3 registros encontrados ou adiante.
        consulta: `
        select descricao_item, count(*)
        from passageiro_item psgi
        join item it on it.item_id = psgi.item_fk
        group by descricao_item
        having count(*) >= 3;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
