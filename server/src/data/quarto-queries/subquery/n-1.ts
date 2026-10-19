

//*TESTADO-11

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN1(): QueryScenarioBackend {
    return {
        // subconsulta-1-!@#quarto-bk 
        
        cenario: 'quarto-subconsulta-1',
        consultaTipo: 'subconsulta',
        id: 1,
        // Liste o codinome de cada dono que possui suíte em seu quarto.
        consulta: `
        select codinome from dono
        where dono_id in (
            select dono_fk from quarto_relatorio
            where suite = 1
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
