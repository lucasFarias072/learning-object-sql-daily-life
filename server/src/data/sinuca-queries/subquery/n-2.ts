

//*TESTADO-21

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN2(): QueryScenarioBackend {
    return {
        // subconsulta-2-!@#sinuca-bk 
        
        cenario: 'sinuca-subconsulta-2',
        consultaTipo: 'subconsulta',
        id: 2,
        // Liste os apelidos dos sinuquistas que nunca venceram uma partida, mas que já participaram como desafiante pelo menos uma vez.
        consulta: `
        select apelido from sinuquista
        where sinuquista_id not in (
            select vitorioso from partida_sinuca
        )
        and sinuquista_id in (
            select sinuquista_fk_desafiante from partida_sinuca
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
