

//*TESTADO-66

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN2(): QueryScenarioBackend {
    return {
        // agregacao-2-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-agregacao-2',
        consultaTipo: 'agregacao',
        id: 2,
        // Liste a descrição do local e a quantidade de visitas realizadas nele. Considere apenas visitas de sócios e mostre ao final, somente os locais que receberam visita única.
        consulta: `
        SELECT 
            descricao_local,
            COUNT(*) AS total_visitas
        FROM parque_aquatico_visita pav
        JOIN parque_aquatico_entrada pae ON pae.pa_entrada_id = pav.pav_entrada_fk
        JOIN local lcl ON lcl.local_id = pav.local_pav_fk
        WHERE esta_socio = 1
        GROUP BY descricao_local
        HAVING total_visitas = 1;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
