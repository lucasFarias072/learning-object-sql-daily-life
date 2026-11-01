

//*TESTADO-102

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN3(): QueryScenarioBackend {
    return {
        // agregacao-3-!@#onibus-bk 
        
        cenario: 'onibus-agregacao-3',
        consultaTipo: 'agregacao',
        id: 3,
        // Liste o identificar do item do passageiro e sua quantidade, para os passageiros que estiverem sentados e com peso acima dos 65kg e altura acima dos 165cm. Depois de formar as grupos pelo identificador do item do passageiro, mostra apenas o item cuja quantidade deu apenas 1. 
        consulta: `
        select item_fk, count(*)
        from passageiro_item psgi
        join passageiro pas on pas.passageiro_id = psgi.passageiro_fk
        where pas.assento_fk is not null and peso_kg > 65 and altura_cm > 165
        group by item_fk
        having count(*) = 1;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
