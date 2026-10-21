

//*TESTADO-13

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Liste a coluna de identificadores das entradas no parque e também customize uma coluna para o tipo de pessoa que entrou. Os tipos podem ser (socio) ou (convidado), observe as variações de valores em um determinado campo.
        consulta: `
        select pa_entrada_id,
        case
        when esta_socio = 1 then 'socio'
        else 'convidado'
        end as tipo_visitante
        from parque_aquatico_entrada;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
