

//*TESTADO-17

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#exercicio-bk 
        
        cenario: 'exercicio-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Para cada combinação de membro de uma família e tipo de local, quantos avistamentos foram registrados?
        consulta: `
        select nome_membro, descricao_local_tipo, count(*) as avistamentos
        from avistamento avi
        join membro_familia mfam on mfam.membro_id = avi.membro_visto_fk
        join local_tipo ltipo on ltipo.local_tipo_id = avi.local_tipo_visto_fk
        group by nome_membro, descricao_local_tipo;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
