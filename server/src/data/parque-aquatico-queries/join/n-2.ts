

//*TESTADO-64

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN2(): QueryScenarioBackend {
    return {
        // join-2-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-join-2',
        consultaTipo: 'join',
        id: 2,
        // Liste a descrição do local visitado e a descrição do produto alugado (pode repetir) para casos de visitas de pessoas não sócias (zero em algum lugar) que entraram no parque aquático das 10 horas adiante.
        consulta: `
        select descricao_local, descricao_pap
        from parque_aquatico_entrada pae
        join parque_aquatico_visita pav on pav.pav_entrada_fk = pae.pa_entrada_id
        join local lcl on lcl.local_id = pav.local_pav_fk
        join parque_aquatico_aluguel paa on paa.paa_entrada_fk = pae.pa_entrada_id
        join parque_aquatico_produto pap on pap.pa_produto_id = paa.pa_produto_fk
        where esta_socio = 0
        and hora_entrada >= 10;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
