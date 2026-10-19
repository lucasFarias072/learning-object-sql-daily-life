

//*TESTADO-34

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN2(): QueryScenarioBackend {
    return {
        // join-2-!@#turismo-bk 
        
        cenario: 'turismo-join-2',
        consultaTipo: 'join',
        id: 2,
        // Liste a descrição dos pontos turísticos que ainda não receberam passeio e que tenham a letra 'a' na sua descrição.
        consulta: `
        select descricao_ponto
        from ponto_turistico ptur
        left join passeio pas on pas.ponto_fk = ptur.ponto_id
        where passeio_id is null
        and descricao_ponto like '%a%';
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
