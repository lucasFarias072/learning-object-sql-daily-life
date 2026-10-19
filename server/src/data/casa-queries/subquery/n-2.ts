

//*TESTADO-83

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN2(): QueryScenarioBackend {
    return {
        // subconsulta-2-!@#casa-bk 
        
        cenario: 'casa-subconsulta-2',
        consultaTipo: 'subconsulta',
        id: 2,
        // Liste o nome dos membros da família, seus ids de membros, para os que têm alguma rotina na área 'Cozinha' ou 'Corredor' e que apareçam como membro de origem (membro_fk_de) em algum parentesco cujo (título_fk) seja de 1 dígito.
        consulta: `
        select nome_membro, membro_id
        from membro_familia
        where membro_id in (
            select membro_fk
            from membro_rotina
            where area_fk in (
                select area_id
                from area
                where descricao_area = 'Cozinha' or descricao_area = 'Corredor'
            )
        )
        and membro_id in (
            select membro_fk_de from parentesco
            where titulo_fk < 10
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
