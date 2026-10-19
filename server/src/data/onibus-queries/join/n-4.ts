

//*TESTADO-92

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN4(): QueryScenarioBackend {
    return {
        // join-4-!@#onibus-bk 
        
        cenario: 'onibus-join-4',
        consultaTipo: 'join',
        id: 4,
        // Liste o id do passageiro e a descrição de cada item que ele carrega, apenas para passageiros que estão sentados e que pesam 68 kg ou mais.
        consulta: `
        select passageiro_id, descricao_item
        from passageiro psg
        join passageiro_item psgi on psgi.passageiro_fk = psg.passageiro_id
        join item it on it.item_id = psgi.item_fk
        where assento_fk is not null
        and peso_kg >= 68;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
