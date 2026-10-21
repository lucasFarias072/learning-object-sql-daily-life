

//*TESTADO-27

import type { QueryScenarioBackend } from '../../scenarios/types.js';

export function caseWhenQueryN2(): QueryScenarioBackend {
    return {
        // case-when-2-!@#turismo-bk 
        
        cenario: 'turismo-case-when-2',
        consultaTipo: 'case-when',
        id: 2,
        // (1) Liste os ids dos guias e com uma coluna customizada, classifique pelos rótulos (manha) (tarde) (noite) (dois_turnos) as suas jornadas (2) Dê ao case o alias exato 'jornada' (3) Inicie a ordenação dando peso 0 para 'dois turnos' e incremente o valor dos outros pesos em +1, de acordo com a ordem normal de um dia.
        consulta: `
        select guia_id, case
            when expediente = 'm-' then 'manha'
            when expediente = 't-' then 'tarde'
            when expediente = 'n-' then 'noite'
            else 'dois_turnos'
            end as jornada
        from guia
        order by case jornada
            when 'dois_turnos' then 0
            when 'manha' then 1
            when 'tarde' then 2
            else 3
            end;
        `,
        tabelas: [],
        campos: [],
        nomes: [],
        condicoes: [],
        numbers: [],
    }
}
