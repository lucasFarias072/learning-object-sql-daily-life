

//*TESTADO-23

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN2(): QueryScenarioBackend {
    return {
        // join-2-!@#onibus-bk 
        
        cenario: 'onibus-join-2',
        consultaTipo: 'join',
        id: 2,
        // Liste os identificadores dos passageiros que participaram de alguma conversa no ônibus, seja como pessoa_x ou pessoa_y.
        consulta: `
        select passageiro_id
        from passageiro psg
        join conversa_onibus coni on coni.pessoa_x = psg.passageiro_id or coni.pessoa_y = psg.passageiro_id;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
