

//*TESTADO-1 
import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN1(): QueryScenarioBackend {
    return {
        // join-1-!@#sinuca-bk 
        
        cenario: 'sinuca-join-1',
        consultaTipo: 'join',
        id: 1,
        // Liste (sem repetir) os apelidos de todos os sinuquistas que apareceram em alguma partida, seja ele como dono da ficha, desafiante ou vitorioso.
        consulta: `
        select distinct apelido from sinuquista snq
        join partida_sinuca psin on psin.sinuquista_fk_dono_ficha = snq.sinuquista_id
        or psin.sinuquista_fk_desafiante = snq.sinuquista_id
        or psin.vitorioso = snq.sinuquista_id;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
