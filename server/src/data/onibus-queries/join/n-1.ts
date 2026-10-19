

//*TESTADO-6

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN1(): QueryScenarioBackend {
    return {
        // join-1-!@#onibus-bk 
        
        cenario: 'onibus-join-1',
        consultaTipo: 'join',
        id: 1,
        // Liste, identificadores dos passageiros sentados, a credencial do assento e cada item que ele carrega.
        consulta: `
        select passageiro_id, assento_credencial, descricao_item
        from passageiro psg
        join assento ast on ast.assento_id = psg.assento_fk
        join passageiro_item psgi on psgi.passageiro_fk = psg.passageiro_id
        join item it on it.item_id = psgi.item_fk;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
