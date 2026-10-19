

//*TESTADO-57

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function joinQueryN1(): QueryScenarioBackend {
    return {
        // join-1-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-join-1',
        consultaTipo: 'join',
        id: 1,
        // Liste a descrição do local visitado e a hora de entrada. Considere apenas visitas de pessoas sócias (valor 1 numa certa tabela) cuja hora de entrada tenha sido antes das 9 ou a partir das 10.
        consulta: `
        select descricao_local, hora_entrada
        from parque_aquatico_entrada pae
        join parque_aquatico_visita pav on pav.pav_entrada_fk = pae.pa_entrada_id
        join local lcl on lcl.local_id = pav.local_pav_fk
        where esta_socio = 1
        and (hora_entrada < 9 or hora_entrada >= 10);
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
