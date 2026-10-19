

//*TESTADO-84

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN2(): QueryScenarioBackend {
    return {
        // agregacao-2-!@#casa-bk 
        
        cenario: 'casa-agregacao-2',
        consultaTipo: 'agregacao',
        id: 2,
        // Liste o nome do membro da família, a descrição da área e a quantidade de rotinas. Considere apenas rotinas feitas nas áreas 'Cozinha' ou 'Banheiro' (antes de agrupar). Então, agrupe pelos campos pertinentes.
        consulta: `
        select nome_membro, descricao_area, count(*) as total_rotinas
        from membro_rotina mrot
        join membro_familia mfam on mfam.membro_id = mrot.membro_fk
        join area ar on ar.area_id = mrot.area_fk
        where descricao_area = 'Cozinha' or descricao_area = 'Banheiro'
        group by nome_membro, descricao_area;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}