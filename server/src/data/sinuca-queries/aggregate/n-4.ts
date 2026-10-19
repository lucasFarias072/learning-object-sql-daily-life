

//*TESTADO-65

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN4(): QueryScenarioBackend {
    return {
        // agregacao-4-!@#sinuca-bk 
        
        cenario: 'sinuca-agregacao-4',
        consultaTipo: 'agregacao',
        id: 4,
        // Liste o nome do sinuquista e a descrição da sinuca, junto com a duração média das partidas em que ele foi o vitorioso. Considere apenas partidas em que a ficha de id 2 foram jogadas. Dos grupos formados, elimine os que conseguiram tempo médio abaixo de 6 minutos.
        consulta: `
        SELECT nome_sinuquista, descricao_sinuca, AVG(duracao_seg)
        FROM partida_sinuca psin
        JOIN sinuquista snq ON snq.sinuquista_id = psin.vitorioso
        JOIN sinuca sinu ON sinu.sinuca_id = psin.sinuca_fk
        WHERE ficha_fk = 2
        GROUP BY nome_sinuquista, descricao_sinuca
        HAVING AVG(duracao_seg) >= 360;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
