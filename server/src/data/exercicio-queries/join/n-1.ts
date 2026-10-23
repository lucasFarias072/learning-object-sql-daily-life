

//*TESTADO-30

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN1(): QueryScenarioBackend {
    return {
        // join-1-!@#exercicio-bk 
        
        cenario: 'exercicio-join-1',
        consultaTipo: 'join',
        id: 1,
        // Para cada avistamento, liste o nome do membro da família que avistou, a descrição do tipo do local onde ocorreu, descrição do que foi visto (quando se soube o que era) e o horário.
        consulta: `
        select nome_membro, descricao_local_tipo, descricao_algo, hora_visto
        from avistamento avi
        join membro_familia mfam on mfam.membro_id = avi.membro_visto_fk
        join local_tipo ltipo on ltipo.local_tipo_id = avi.local_tipo_visto_fk
        left join algo al on al.algo_id = avi.algo_visto_fk;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
