

//*TESTADO-4

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN1(): QueryScenarioBackend {
    return {
        // subconsulta-1-!@#casa-bk 
        
        cenario: 'casa-subconsulta-1',
        consultaTipo: 'subconsulta',
        id: 1,
        // Liste os nomes dos membros que têm nenhuma rotina registrada na área 'Escadaria'.
        consulta: `
        select nome_membro from membro_familia
        where membro_id not in (
        select membro_fk from membro_rotina
        where area_fk = (
            select area_id from area where descricao_area = 'Escadaria')
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
