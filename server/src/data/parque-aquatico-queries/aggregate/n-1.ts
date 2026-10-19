

//*TESTADO-59

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function aggregateQueryN1(): QueryScenarioBackend {
    return {
        // agregacao-1-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-agregacao-1',
        consultaTipo: 'agregacao',
        id: 1,
        // Liste a descrição do local visitado, se a pessoa é sócia (coluna: esta_socio) e a média da hora de visita. Considere inclusas apenas as visitas às 10h ou posteriormente. Agrupe pelos locais correspondentes à listagem e do resultado dos grupos, mostre somente os com 2 ou mais visitas.
        consulta: `
        select descricao_local, esta_socio, avg(hora_visita) as horario_visita_media
        from parque_aquatico_visita pav
        join local lcl on lcl.local_id = pav.local_pav_fk
        join parque_aquatico_entrada pae on pae.pa_entrada_id = pav.pav_entrada_fk
        where hora_visita >= 10
        group by descricao_local, esta_socio
        having count(*) >= 2;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
