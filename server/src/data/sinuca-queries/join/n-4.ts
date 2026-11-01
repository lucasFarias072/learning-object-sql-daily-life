

//*TESTADO-98

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN4(): QueryScenarioBackend {
    return {
        // join-4-!@#sinuca-bk 
        
        cenario: 'sinuca-join-4',
        consultaTipo: 'join',
        id: 4,
        // Liste o id da aposta, a descrição da sinuca e a duração da partida, apenas para apostas que acertaram no vitorioso, em partidas que duraram até 512 segundos.
        consulta: `
        select aposta_id, descricao_sinuca, duracao_seg
        from aposta_partida apart
        join partida_sinuca psin on psin.partida_sinuca_id = apart.partida_sinuca_fk
        join sinuca sinu on sinu.sinuca_id = psin.sinuca_fk
        where psin.vitorioso = apart.sinuquista_fk_apostado
        and duracao_seg <= 512;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
