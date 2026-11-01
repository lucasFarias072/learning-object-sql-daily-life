

//*TESTADO-97

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN3(): QueryScenarioBackend {
    return {
        // join-3-!@#sinuca-bk 
        
        cenario: 'sinuca-join-3',
        consultaTipo: 'join',
        id: 3,
        // Liste o apelido do sinuquista vitorioso e a duração da partida, apenas para partidas que duraram 300 segundos ou mais e em que o desafiante fez 2 bolas ou menos.
        consulta: `
        select apelido, duracao_seg
        from partida_sinuca psin
        join sinuquista sinu on sinu.sinuquista_id = psin.vitorioso
        where duracao_seg >= 300
        and desafiante_bolas <= 2;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
