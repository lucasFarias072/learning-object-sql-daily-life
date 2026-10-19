

//*TESTADO-52

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN2(): QueryScenarioBackend {
    return {
        // join-2-!@#exercicio-bk 
        
        cenario: 'exercicio-join-2',
        consultaTipo: 'join',
        id: 2,
        // Liste o id do avistamento e o nome do membro da família que avistou, para os avistamentos onde o próprio membro não sabe o que avistou. 
        consulta: `
        select vista_id, nome_membro
        from avistamento avi
        join membro_familia mfam on mfam.membro_id = avi.membro_visto_fk
        left join algo al on al.algo_id = avi.algo_visto_fk
        where algo_id is null;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
