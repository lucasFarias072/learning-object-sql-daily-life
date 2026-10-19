

//*TESTADO-22

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN1(): QueryScenarioBackend {
    return {
        // join-1-!@#casa-bk 
        
        cenario: 'casa-join-1',
        consultaTipo: 'join',
        id: 1,
        // Liste, para cada parentesco registrado, o nome do membro com parentesco de, o nome do membro com parentesco para e o título da relação entre eles (usar apelidos).
        consulta: `
        select mfam_de.nome_membro as membro_de, mfam_para.nome_membro as membro_para, descricao_titulo
        from parentesco par
        join membro_familia mfam_de on mfam_de.membro_id = par.membro_fk_de
        join membro_familia mfam_para on mfam_para.membro_id = par.membro_fk_para
        join titulo tit on tit.titulo_id = par.titulo_fk;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
