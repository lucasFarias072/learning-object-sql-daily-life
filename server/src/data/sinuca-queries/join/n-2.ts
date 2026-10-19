

//*TESTADO-16

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN2(): QueryScenarioBackend {
    return {
        // join-2-!@#sinuca-bk 
        
        cenario: 'sinuca-join-2',
        consultaTipo: 'join',
        id: 2,
        // Liste, para cada partida, o apelido do dono da ficha, do desafiante e do vitorioso (use apelidos).
        consulta: `
        select s_dono.apelido as dono, s_desafiante.apelido as desafiante, s_vencedor.apelido as vitorioso
        from partida_sinuca psin
        join sinuquista s_dono on s_dono.sinuquista_id = psin.sinuquista_fk_dono_ficha
        join sinuquista s_desafiante on s_desafiante.sinuquista_id = psin.sinuquista_fk_desafiante
        join sinuquista s_vencedor on s_vencedor.sinuquista_id = psin.vitorioso;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
