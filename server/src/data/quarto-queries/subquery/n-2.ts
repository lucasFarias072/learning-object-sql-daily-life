

//*TESTADO-20

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN2(): QueryScenarioBackend {
    return {
        // subconsulta-2-!@#quarto-bk 
        
        cenario: 'quarto-subconsulta-2',
        consultaTipo: 'subconsulta',
        id: 2,
        // Liste o codinome de donos de quarto que obtiveram quartos no mesmo mês do dono de quarto com menor mês de adesão.
        consulta: `
        select codinome from dono
        where dono_id in (
            select dono_fk from quarto_relatorio
            where mes_adesao = (
                select min(mes_adesao) from quarto_relatorio where mes_adesao is not null
            )
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
