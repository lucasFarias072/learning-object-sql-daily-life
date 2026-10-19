

//*TESTADO-5

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN1(): QueryScenarioBackend {
    return {
        // join-1-!@#frutaria-bk 
        
        cenario: 'frutaria-join-1',
        consultaTipo: 'join',
        id: 1,
        // Liste o nome de cada fruta vendida, o tipo do local onde é vendida e o nome desse local.
        consulta: `
        select descricao_fruta, descricao_local_tipo, descricao_local
        from frutaria_produto fprod
        join local lcl on lcl.local_id = fprod.local_fprod_fk
        join local_tipo ltipo on ltipo.local_tipo_id = lcl.local_tipo_fk;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
