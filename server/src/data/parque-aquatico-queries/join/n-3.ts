

//*TESTADO-68

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN3(): QueryScenarioBackend {
    return {
        // join-3-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-join-3',
        consultaTipo: 'join',
        id: 3,
        // Liste a descrição do produto, a hora de entrada e a hora de visita, para os produtos que foram alugados cujo id seja de dois dígitos adiante e para visitas em locais do parque aquático que aconteceram de 2h depois da entrada adiante.
        consulta: `
        SELECT descricao_pap, hora_entrada, hora_visita
        FROM parque_aquatico_aluguel paa  
        JOIN parque_aquatico_entrada pae ON pae.pa_entrada_id = paa.paa_entrada_fk
        join parque_aquatico_visita pav on pav.pav_entrada_fk = pae.pa_entrada_id
        JOIN parque_aquatico_produto pap ON pap.pa_produto_id = paa.pa_produto_fk
        where pa_produto_id > 9
        and hora_visita - hora_entrada >= 2
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
