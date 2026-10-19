

//*TESTADO-80

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN3(): QueryScenarioBackend {
    return {
        // join-3-!@#casa-bk 
        
        cenario: 'casa-join-3',
        consultaTipo: 'join',
        id: 3,
        // Liste o nome dos membros da família que não têm rotina registrada.
        consulta: `
        select nome_membro
        from membro_familia mfam
        left join membro_rotina mrot on mrot.membro_fk = mfam.membro_id
        where membro_rotina_id is null;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
