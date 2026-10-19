

//*TESTADO-72

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function subqueryQueryN2(): QueryScenarioBackend {
    return {
        // subconsulta-2-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-subconsulta-2',
        consultaTipo: 'subconsulta',
        id: 2,
        // 
        consulta: `
        select descricao_local, hora_visita
        from parque_aquatico_visita pav
        join local lcl on lcl.local_id = pav.local_pav_fk
        where pav_entrada_fk in (
            select pa_entrada_id
            from parque_aquatico_entrada
            where esta_socio = 1
        );
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
