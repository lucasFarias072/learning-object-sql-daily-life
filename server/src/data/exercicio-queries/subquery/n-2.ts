

//*TESTADO-88

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN2(): QueryScenarioBackend {
    return {
        // subconsulta-2-!@#exercicio-bk 
        
        cenario: 'exercicio-subconsulta-2',
        consultaTipo: 'subconsulta',
        id: 2,
        // Liste o nome dos membros da família que registraram algum avistamento, mas não se sabe o que foi visto ou em que não se lembra da hora.
        consulta: `
        select nome_membro
        from membro_familia
        where membro_id in (
            select membro_visto_fk
            from avistamento
            where algo_visto_fk is null or hora_visto is null
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
