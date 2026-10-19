

//*TESTADO-87

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN3(): QueryScenarioBackend {
    return {
        // agregacao-3-!@#casa-bk 
        
        cenario: 'casa-agregacao-3',
        consultaTipo: 'agregacao',
        id: 3,
        // 
        consulta: `
        select nome_membro, descricao_rotina, count(*) as qtd_execucoes
        from membro_rotina mrot
        join membro_familia mfam on mfam.membro_id = mrot.membro_fk
        join rotina rot on rot.rotina_id = mrot.rotina_fk
        group by nome_membro, descricao_rotina
        having count(*) = 1;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
