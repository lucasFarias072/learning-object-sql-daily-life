

//*TESTADO-99

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN3(): QueryScenarioBackend {
    return {
        // subconsulta-3-!@#casa-bk 
        
        cenario: 'casa-subconsulta-3',
        consultaTipo: 'subconsulta',
        id: 3,
        // Liste o nome dos membros da família que têm alguma rotina na área ‘Corredor’ ou que aparecem como membro de origem (membro_fk_de) em algum parentesco com título de id de número 12.
        consulta: `
        select nome_membro
        from membro_familia
        where membro_id in (
            select membro_fk
            from membro_rotina
            where area_fk in (
                select area_id
                from area
                where descricao_area = 'Corredor'
            )
        ) or membro_id in (
            select membro_fk_de
            from parentesco
            where titulo_fk = 12
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
