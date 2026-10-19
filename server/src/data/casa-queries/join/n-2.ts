

//*TESTADO-78

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN2(): QueryScenarioBackend {
    return {
        // join-2-!@#casa-bk 
        
        cenario: 'casa-join-2',
        consultaTipo: 'join',
        id: 2,
        // Liste o nome do membro da família e a descrição da área, para as rotinas registradas pelo membro 'Elano' ou que aconteceram na área 'Banheiro'.
        consulta: `
        select nome_membro, descricao_area
        from membro_familia mfam
        join membro_rotina mrot on mrot.membro_fk = mfam.membro_id
        join area ar on ar.area_id = mrot.area_fk
        where nome_membro = 'Elano'
        or descricao_area = 'Banheiro';
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
