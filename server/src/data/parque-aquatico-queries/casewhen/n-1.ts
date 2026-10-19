

//*TESTADO-13

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN1(): QueryScenarioBackend {
    return {
        // case-when-1-!@#parque-aquatico-bk 
        
        cenario: 'parque-aquatico-case-when-1',
        consultaTipo: 'case-when',
        id: 1,
        // Selecione a coluna de identificadores das entradas no parque e junto a isso, customize entradas como 'sócio' ou 'convidado'.
        consulta: `
        select pa_entrada_id,
        case
        when esta_socio = 1 then 'sócio'
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
