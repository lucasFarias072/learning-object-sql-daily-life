

//*TESTADO-82

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN3(): QueryScenarioBackend {
    return {
        // join-3-!@#onibus-bk 
        
        cenario: 'onibus-join-3',
        consultaTipo: 'join',
        id: 3,
        // Liste o id da conversa e o id do assento de cada um dos dois passageiros (apelidos diferentes para diferenciar), apenas para conversas em que os dois passageiros estavam sentados.
        consulta: `
        select interacao_id, pass1.assento_fk as pessoa_a, pass2.assento_fk as pessoa_b 
        from conversa_onibus coni
        join passageiro pass1 on pass1.passageiro_id = coni.pessoa_x
        join passageiro pass2 on pass2.passageiro_id = coni.pessoa_y
        where pass1.assento_fk is not null
        and pass2.assento_fk is not null;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
