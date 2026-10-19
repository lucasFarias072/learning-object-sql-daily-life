

//*TESTADO-14

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN1(): QueryScenarioBackend {
    return {
        // subconsulta-1-!@#sinuca-bk 
        
        cenario: 'sinuca-subconsulta-1',
        consultaTipo: 'subconsulta',
        id: 1,
        // Liste o nome de cada sinuquista que já foi dono da ficha em alguma partida.
        consulta: `
        select nome_sinuquista from sinuquista
        where sinuquista_id in (
            select sinuquista_fk_dono_ficha from partida_sinuca
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
