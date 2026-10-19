

//*TESTADO-76

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN2(): QueryScenarioBackend {
    return {
        // case-when-2-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-case-when-2',
        consultaTipo: 'case-when',
        id: 2,
        // Liste os ids de entrada e crie uma coluna customizada de nome exato 'status', com base no status da pessoa que entrou e no horário do dia. As categorias são (visitante matutino), (visitante vespertino), (sócio matutino), (sócio vespertino). Os números 0 e 1 definem quem é sócio ou visitante. Para os horários, considere antes do meio dia como matutino e o resto como vespertino. Ordene pelo rótulo da coluna customizada.
        consulta: `
        select pa_entrada_id, case
            when esta_socio = 0 and hora_entrada < 12 then 'visitante matutino'
            when esta_socio = 0 and hora_entrada >= 12 then 'visitante vespertino' 
            when esta_socio = 1 and hora_entrada < 12 then 'sócio matutino'
            else 'sócio vespertino' end as status
        from parque_aquatico_entrada
        order by status;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
