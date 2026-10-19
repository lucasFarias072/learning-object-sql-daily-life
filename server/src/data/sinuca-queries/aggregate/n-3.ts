

//*TESTADO-62

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN3(): QueryScenarioBackend {
    return {
        // agregacao-3-!@#sinuca-bk 
        
        cenario: 'sinuca-agregacao-3',
        consultaTipo: 'agregacao',
        id: 3,
        // Liste a descrição da sinuca, a quantidade de partidas disputadas nela e a duração média dessas partidas. Dos grupos formados, considere apenas as sinucas cuja duração média das partidas resultou num valor ímpar (na parte inteira da duração).
        consulta: `
        select descricao_sinuca, count(*), avg(duracao_seg)
        from sinuca sinu
        join partida_sinuca psin on psin.sinuca_fk = sinu.sinuca_id
        group by descricao_sinuca
        having avg(duracao_seg) % 2 = 1;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
